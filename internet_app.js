/* =========================================================
   internet_app.js
   Page 2 — Internet Search Strategy (Google)
   IMPORTANT UI RULES:
   - Do NOT render Accessed anywhere (no placeholder).
   - Do NOT render Where anywhere (no placeholder).
   - No "—" placeholders for accessed/where.
========================================================= */

(() => {
  "use strict";

  /* ---------- Utilities ---------- */
  const $ = (sel, root = document) => root.querySelector(sel);

  function escapeHtml(str) {
    return String(str ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function uniq(arr) { return Array.from(new Set(arr)); }
  function toLowerSafe(v) { return (v ?? "").toString().toLowerCase(); }

  function safeInt(v, fallback = 0) {
    const n = Number(v);
    return Number.isFinite(n) ? n : fallback;
  }

  function normalizePublisher(pub) {
    return (pub ?? "").toString().trim();
  }

  function stableSort(arr, cmp) {
    return arr
      .map((v, i) => ({ v, i }))
      .sort((a, b) => cmp(a.v, b.v) || (a.i - b.i))
      .map(x => x.v);
  }

  function formatKVList(obj, maxRows = 10) {
    const entries = Object.entries(obj || {});
    if (entries.length === 0) return `<span class="muted">—</span>`;

    const sorted = stableSort(entries, (a, b) => {
      const dc = (b[1] - a[1]); // desc by count
      if (dc !== 0) return dc;
      return String(a[0]).localeCompare(String(b[0]), undefined, { sensitivity: "base" });
    });

    const slice = sorted.slice(0, maxRows);
    const hidden = sorted.length - slice.length;

    return `
      <div class="kvList">
        ${slice.map(([k, v]) => `
          <div class="kvRow">
            <span>${escapeHtml(k)}</span>
            <span class="pillMini">${escapeHtml(String(v))}</span>
          </div>
        `).join("")}
        ${hidden > 0 ? `<div class="muted">+${hidden} more</div>` : ""}
      </div>
    `;
  }

  function groupDefinitionsByTopic(defs) {
    const out = {};
    (defs || []).forEach(d => {
      if (!d || !d.topicKey) return;
      if (!out[d.topicKey]) out[d.topicKey] = [];
      out[d.topicKey].push(d);
    });
    return out;
  }

  /* ---------- Data ---------- */
  const SOURCES = Array.isArray(window.INTERNET_SOURCES) ? window.INTERNET_SOURCES : [];
  const TOPIC_KEYS = Array.isArray(window.TOPIC_KEYS) ? window.TOPIC_KEYS : [];
  const TOPIC_FREQUENCY = window.TOPIC_FREQUENCY || {};
  const topicLabel = typeof window.topicLabel === "function" ? window.topicLabel : (k) => k;

  /* ---------- Custom Multi-Select ---------- */
  class MultiSelect {
    constructor({ mount, options, placeholder, onChange }) {
      this.mount = mount;
      this.options = options || [];
      this.placeholder = placeholder || "Select…";
      this.onChange = onChange || (() => {});
      this.selected = new Set();
      this.open = false;
      this.query = "";
      this._render();
      this._wire();
    }

    _render() {
      this.mount.innerHTML = `
        <div class="multi" data-open="false">
          <button type="button" class="multi__btn" aria-haspopup="listbox" aria-expanded="false">
            <div class="multi__chips" data-role="chips"></div>
            <div class="multi__placeholder" data-role="placeholder">${escapeHtml(this.placeholder)}</div>
            <div class="muted" aria-hidden="true">▾</div>
          </button>

          <div class="multi__menu" role="listbox">
            <div class="multi__search">
              <input type="text" data-role="search" placeholder="Filter options..." />
            </div>
            <div class="multi__list" data-role="list"></div>
            <div class="multi__footer">
              <button type="button" class="miniBtn" data-role="selectAll">Select all</button>
              <button type="button" class="miniBtn" data-role="clearAll">Clear</button>
            </div>
          </div>
        </div>
      `;

      this.root = $(".multi", this.mount);
      this.btn = $(".multi__btn", this.root);
      this.list = $('[data-role="list"]', this.root);
      this.chips = $('[data-role="chips"]', this.root);
      this.placeholderEl = $('[data-role="placeholder"]', this.root);
      this.searchEl = $('[data-role="search"]', this.root);
      this.selectAllBtn = $('[data-role="selectAll"]', this.root);
      this.clearAllBtn = $('[data-role="clearAll"]', this.root);

      this._renderOptions();
      this._renderChips();
    }

    _wire() {
      this.btn.addEventListener("click", (e) => {
        e.preventDefault();
        this.setOpen(!this.open);
      });

      this.searchEl.addEventListener("input", () => {
        this.query = this.searchEl.value || "";
        this._renderOptions();
      });

      this.selectAllBtn.addEventListener("click", () => {
        this.options.forEach(o => this.selected.add(o.value));
        this._commit();
      });

      this.clearAllBtn.addEventListener("click", () => {
        this.selected.clear();
        this._commit();
      });

      document.addEventListener("click", (e) => {
        if (!this.root.contains(e.target)) this.setOpen(false);
      });

      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") this.setOpen(false);
      });
    }

    setOpen(open) {
      this.open = !!open;
      this.root.dataset.open = this.open ? "true" : "false";
      this.btn.setAttribute("aria-expanded", this.open ? "true" : "false");
      if (this.open) setTimeout(() => this.searchEl.focus(), 0);
      else {
        this.searchEl.value = "";
        this.query = "";
        this._renderOptions();
      }
    }

    setSelected(values) {
      this.selected = new Set(values || []);
      this._commit(false);
    }

    getSelected() {
      return new Set(this.selected);
    }

    _renderOptions() {
      const q = toLowerSafe(this.query.trim());
      const filtered = this.options.filter(o => {
        if (!q) return true;
        return toLowerSafe(o.label).includes(q) || toLowerSafe(o.value).includes(q);
      });

      if (filtered.length === 0) {
        this.list.innerHTML = `<div class="muted" style="padding:10px;">No matches</div>`;
        return;
      }

      this.list.innerHTML = filtered.map(o => {
        const isSel = this.selected.has(o.value);
        const count = (typeof o.count === "number") ? o.count : null;
        return `
          <div class="opt" data-value="${escapeHtml(o.value)}" data-selected="${isSel ? "true" : "false"}">
            <div class="opt__left">
              <div class="opt__check" aria-hidden="true">${isSel ? "✓" : ""}</div>
              <div class="opt__label" title="${escapeHtml(o.label)}">${escapeHtml(o.label)}</div>
            </div>
            ${count !== null ? `<div class="opt__count">${count}</div>` : ``}
          </div>
        `;
      }).join("");

      this.list.querySelectorAll(".opt").forEach(el => {
        el.addEventListener("click", () => {
          const value = el.getAttribute("data-value");
          if (!value) return;
          if (this.selected.has(value)) this.selected.delete(value);
          else this.selected.add(value);
          this._commit();
        });
      });
    }

    _renderChips() {
      const values = Array.from(this.selected);
      if (values.length === 0) {
        this.chips.innerHTML = "";
        this.placeholderEl.style.display = "block";
        return;
      }
      this.placeholderEl.style.display = "none";

      const labelOf = (val) => {
        const o = this.options.find(x => x.value === val);
        return o ? o.label : val;
      };

      const chipsHtml = values.slice(0, 4).map(v => `
        <span class="chip" title="${escapeHtml(labelOf(v))}">
          ${escapeHtml(labelOf(v))}
          <button type="button" data-remove="${escapeHtml(v)}" aria-label="Remove ${escapeHtml(labelOf(v))}">✕</button>
        </span>
      `).join("");

      const extra = values.length - 4;

      this.chips.innerHTML = `
        ${chipsHtml}
        ${extra > 0 ? `<span class="chip" title="${values.length} selected">+${extra}</span>` : ""}
      `;

      this.chips.querySelectorAll("button[data-remove]").forEach(btn => {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          const val = btn.getAttribute("data-remove");
          this.selected.delete(val);
          this._commit();
        });
      });
    }

    _commit(triggerChange = true) {
      this._renderOptions();
      this._renderChips();
      if (triggerChange) this.onChange(new Set(this.selected));
    }
  }

  /* ---------- Options ---------- */
  function calcTypeCountsFromSources(sources) {
    const counts = {};
    for (const s of sources) {
      for (const d of (s.definitions || [])) {
        if (!d || !d.topicKey) continue;
        counts[d.topicKey] = (counts[d.topicKey] || 0) + 1; // definition entries
      }
    }
    return counts;
  }

  function buildTypeOptions(sources) {
    const counts = calcTypeCountsFromSources(sources);
    return TOPIC_KEYS.map(k => ({
      value: k,
      label: topicLabel(k),
      count: counts[k] || 0
    })).sort((a, b) => a.label.localeCompare(b.label, undefined, { sensitivity: "base" }));
  }

  function buildYearOptions(sources) {
    const years = uniq(sources.map(s => String(s.year)).filter(Boolean))
      .sort((a, b) => b.localeCompare(a));
    const counts = {};
    for (const s of sources) {
      const y = String(s.year);
      if (!y) continue;
      counts[y] = (counts[y] || 0) + 1;
    }
    return years.map(y => ({ value: y, label: y, count: counts[y] || 0 }));
  }

  function buildPublisherOptions(sources) {
    const pubs = uniq(sources.map(s => normalizePublisher(s.publisher)).filter(Boolean))
      .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));
    const counts = {};
    for (const s of sources) {
      const p = normalizePublisher(s.publisher);
      if (!p) continue;
      counts[p] = (counts[p] || 0) + 1;
    }
    return pubs.map(p => ({ value: p, label: p, count: counts[p] || 0 }));
  }

  /* ---------- State ---------- */
  const state = {
    search: "",
    types: new Set(),
    years: new Set(),
    publishers: new Set()
  };

  /* ---------- Mount DOM ---------- */
  const searchInput = $("#searchInput");
  const clearSearchBtn = $("#clearSearchBtn");
  const clearFiltersBtn = $("#clearFiltersBtn");
  const selectTop10Btn = $("#selectTop10Btn");
  const selectBottom10Btn = $("#selectBottom10Btn");

  const resultsList = $("#resultsList");
  const emptyState = $("#emptyState");
  const emptyClearBtn = $("#emptyClearBtn");

  const showingLine = $("#showingLine");
  const resultsMeta = $("#resultsMeta");
  const summaryByYear = $("#summaryByYear");
  const summaryByPublisher = $("#summaryByPublisher");
  const summaryByType = $("#summaryByType");

  // Guard: if page is missing expected nodes, don't explode
  if (!searchInput || !resultsList || !showingLine) {
    console.warn("[internet_app.js] Missing required DOM nodes. Check internet.html IDs.");
    return;
  }

  // Multi-select mounts
  const typeMulti = new MultiSelect({
    mount: $("#typeMulti"),
    options: buildTypeOptions(SOURCES),
    placeholder: "All types",
    onChange: (sel) => { state.types = sel; render(); }
  });

  const yearMulti = new MultiSelect({
    mount: $("#yearMulti"),
    options: buildYearOptions(SOURCES),
    placeholder: "All years",
    onChange: (sel) => { state.years = sel; render(); }
  });

  const publisherMulti = new MultiSelect({
    mount: $("#publisherMulti"),
    options: buildPublisherOptions(SOURCES),
    placeholder: "All publishers",
    onChange: (sel) => { state.publishers = sel; render(); }
  });

  /* ---------- Filters ---------- */
  function matchesSearch(source, q) {
    if (!q) return true;

    // NOTE: "where" and "accessed" are intentionally NOT used anywhere.
    const hay = [
      source.title,
      source.publisher,
      source.url,
      ...(source.definitions || []).map(d => d.quote)
    ].map(toLowerSafe).join(" \n ");

    return hay.includes(q);
  }

  function matchesTypes(source, selectedTypes) {
    if (!selectedTypes || selectedTypes.size === 0) return true;
    return (source.definitions || []).some(d => d && selectedTypes.has(d.topicKey));
  }

  function matchesYears(source, selectedYears) {
    if (!selectedYears || selectedYears.size === 0) return true;
    // If year missing and a year filter is applied, exclude it (strict)
    return selectedYears.has(String(source.year));
  }

  function matchesPublishers(source, selectedPublishers) {
    if (!selectedPublishers || selectedPublishers.size === 0) return true;
    return selectedPublishers.has(normalizePublisher(source.publisher));
  }

  function applyFilters(allSources) {
    const q = toLowerSafe(state.search.trim());
    return allSources.filter(s => {
      if (!s || s.kept === false) return false;
      return (
        matchesSearch(s, q) &&
        matchesTypes(s, state.types) &&
        matchesYears(s, state.years) &&
        matchesPublishers(s, state.publishers)
      );
    });
  }

  /* ---------- Summary ---------- */
  function buildBreakdowns(filteredSources) {
    const byYear = {};
    const byPublisher = {};
    const byType = {};

    for (const s of filteredSources) {
      // Year breakdown (skip missing year)
      if (s.year != null && s.year !== "") {
        const y = String(s.year);
        byYear[y] = (byYear[y] || 0) + 1;
      }

      const p = normalizePublisher(s.publisher) || "Unknown";
      byPublisher[p] = (byPublisher[p] || 0) + 1;

      for (const d of (s.definitions || [])) {
        if (!d || !d.topicKey) continue;
        const label = topicLabel(d.topicKey);
        byType[label] = (byType[label] || 0) + 1; // definition entries
      }
    }

    return { byYear, byPublisher, byType };
  }

  /* ---------- Cards ---------- */
  function buildSourceCard(source) {
    // Language badge (no placeholder in UI except for unknown language)
    const langBadge = (source.language || "EN").toUpperCase();
    const isEN = langBadge === "EN";
    const langClass = isEN ? "badge--ok" : "badge--warn";

    const defByTopic = groupDefinitionsByTopic(source.definitions || []);

    const defGroupsHtml = Object.keys(defByTopic)
      .sort((a, b) => topicLabel(a).localeCompare(topicLabel(b), undefined, { sensitivity: "base" }))
      .map(topicKey => {
        const defs = defByTopic[topicKey];
        const title = topicLabel(topicKey);

        // ✅ NO "Where" line anywhere. ✅ NO placeholder.
        const items = defs.map((d) => `
          <div class="quoteCard">
            <p class="quoteText">“${escapeHtml(d.quote ?? "")}”</p>
            <div class="quoteMeta">
              <span class="muted"><b>Topic key:</b> ${escapeHtml(d.topicKey || "")}</span>
            </div>
          </div>
        `).join("");

        return `
          <div class="defGroup">
            <div class="defGroup__head">
              <h4 class="defGroup__title">${escapeHtml(title)}</h4>
              <div class="defGroup__count">${defs.length} definition${defs.length === 1 ? "" : "s"}</div>
            </div>
            ${items}
          </div>
        `;
      }).join(`<div class="hr"></div>`);

    const title = escapeHtml(source.title ?? "Untitled source");
    const publisher = escapeHtml(source.publisher ?? "Unknown publisher");
    const url = escapeHtml(source.url ?? "#");
    const id = escapeHtml(source.id ?? "");

    // ✅ Year badge only if year exists (no placeholder)
    const yearBadge = (source.year != null && source.year !== "")
      ? `<span class="badge">Year: ${escapeHtml(String(source.year))}</span>`
      : "";

    // ✅ Accessed badge removed entirely (never render)
    // ✅ "—" placeholders removed for accessed/where

    const defCount = safeInt((source.definitions || []).length);

    return `
      <article class="sourceCard" data-id="${id}" data-open="false">
        <div class="sourceHead" role="button" tabindex="0" aria-expanded="false">
          <div class="headLeft">
            <h3 class="sourceTitle">${title}</h3>
            <div class="sourceMeta">
              <span class="badge">${publisher}</span>
              ${yearBadge}
              <span class="badge ${langClass}">Lang: ${escapeHtml(langBadge)}</span>
              <span class="badge">Defs: ${escapeHtml(String(defCount))}</span>
            </div>
          </div>
          <div class="headRight">
            <div class="chev" aria-hidden="true">⌄</div>
          </div>
        </div>

        <div class="sourceBody">
          <div class="sourceLinks">
            ${source.url ? `<a class="link" href="${url}" target="_blank" rel="noopener noreferrer">Open source ↗</a>` : ""}
          </div>

          ${Object.keys(defByTopic).length === 0
            ? `<div class="muted">No definitions stored for this source.</div>`
            : defGroupsHtml
          }
        </div>
      </article>
    `;
  }

  function wireCardInteractions() {
    resultsList.querySelectorAll(".sourceCard").forEach(card => {
      const head = $(".sourceHead", card);
      if (!head) return;

      head.addEventListener("click", () => toggleCard(card));
      head.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggleCard(card);
        }
      });
    });
  }

  function toggleCard(card) {
    const open = card.dataset.open === "true";
    card.dataset.open = open ? "false" : "true";
    const head = $(".sourceHead", card);
    if (head) head.setAttribute("aria-expanded", open ? "false" : "true");
  }

  /* ---------- Render ---------- */
  function render() {
    const filtered = applyFilters(SOURCES);
    const total = SOURCES.filter(s => s && s.kept !== false).length;

    showingLine.textContent = `Showing ${filtered.length} of ${total} sources`;
    if (resultsMeta) {
      resultsMeta.textContent = `${filtered.length} result${filtered.length === 1 ? "" : "s"} • collapsed by default`;
    }

    const { byYear, byPublisher, byType } = buildBreakdowns(filtered);
    if (summaryByYear) summaryByYear.innerHTML = formatKVList(byYear, 10);
    if (summaryByPublisher) summaryByPublisher.innerHTML = formatKVList(byPublisher, 10);
    if (summaryByType) summaryByType.innerHTML = formatKVList(byType, 10);

    if (filtered.length === 0) {
      resultsList.innerHTML = "";
      if (emptyState) emptyState.hidden = false;
      return;
    }

    if (emptyState) emptyState.hidden = true;

    const sorted = stableSort(filtered, (a, b) => {
      const dy = safeInt(b.year) - safeInt(a.year);
      if (dy !== 0) return dy;
      return String(a.title || "").localeCompare(String(b.title || ""), undefined, { sensitivity: "base" });
    });

    resultsList.innerHTML = sorted.map(buildSourceCard).join("");
    wireCardInteractions();
  }

  /* ---------- Actions ---------- */
  function clearAll() {
    state.search = "";
    searchInput.value = "";
    state.types = new Set();
    state.years = new Set();
    state.publishers = new Set();

    typeMulti.setSelected([]);
    yearMulti.setSelected([]);
    publisherMulti.setSelected([]);

    render();
  }

  function selectTopOrBottomTypes(mode /* "top"|"bottom" */) {
    const keys = [...TOPIC_KEYS];

    const sorted = stableSort(keys, (a, b) => {
      const fa = safeInt(TOPIC_FREQUENCY[a], 0);
      const fb = safeInt(TOPIC_FREQUENCY[b], 0);
      const diff = (mode === "top") ? (fb - fa) : (fa - fb);
      if (diff !== 0) return diff;
      return topicLabel(a).localeCompare(topicLabel(b), undefined, { sensitivity: "base" });
    });

    const picked = sorted.slice(0, 10);
    state.types = new Set(picked);
    typeMulti.setSelected(picked);
    render();
  }

  /* ---------- Events ---------- */
  searchInput.addEventListener("input", () => {
    state.search = searchInput.value || "";
    render();
  });

  clearSearchBtn?.addEventListener("click", () => {
    state.search = "";
    searchInput.value = "";
    render();
    searchInput.focus();
  });

  clearFiltersBtn?.addEventListener("click", clearAll);
  emptyClearBtn?.addEventListener("click", clearAll);

  selectTop10Btn?.addEventListener("click", () => selectTopOrBottomTypes("top"));
  selectBottom10Btn?.addEventListener("click", () => selectTopOrBottomTypes("bottom"));

  /* ---------- Init ---------- */
  render();
})();

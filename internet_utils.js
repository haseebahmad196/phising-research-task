/* =========================================================
   internet_utils.js
   Utilities + MultiSelect + option builders
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

  function buildTypeOptions({ sources, topicKeys, topicLabel }) {
    const counts = calcTypeCountsFromSources(sources);
    return (topicKeys || []).map(k => ({
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

  /* ---------- Export to window ---------- */
  window.InternetUtils = {
    $,
    escapeHtml,
    uniq,
    toLowerSafe,
    safeInt,
    normalizePublisher,
    stableSort,
    formatKVList,
    groupDefinitionsByTopic,
    MultiSelect,
    buildTypeOptions,
    buildYearOptions,
    buildPublisherOptions
  };
})();

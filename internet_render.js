/* =========================================================
   internet_render.js
   Filtering + cards + topic chart render (clean)
========================================================= */
(() => {
  "use strict";

  const U = window.InternetUtils;
  if (!U) {
    console.warn("[internet_render.js] Missing InternetUtils. Load internet_utils.js first.");
    return;
  }

  const {
    $, escapeHtml, toLowerSafe, safeInt, normalizePublisher, stableSort,
    groupDefinitionsByTopic
  } = U;

  /* ---------- Filters ---------- */
  function matchesSearch(source, q) {
    if (!q) return true;

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
    return selectedYears.has(String(source.year));
  }

  function matchesPublishers(source, selectedPublishers) {
    if (!selectedPublishers || selectedPublishers.size === 0) return true;
    return selectedPublishers.has(normalizePublisher(source.publisher));
  }

  function applyFilters(allSources, state) {
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

  /* ---------- Topic frequency from filtered sources ---------- */
  function buildTopicCounts(filteredSources) {
    const counts = {};
    for (const s of filteredSources) {
      for (const d of (s.definitions || [])) {
        if (!d || !d.topicKey) continue;
        counts[d.topicKey] = (counts[d.topicKey] || 0) + 1;
      }
    }
    return counts;
  }

  function renderTopicChart({ chartEl, counts, topicLabel, sortMode }) {
    if (!chartEl) return;

    const entries = Object.entries(counts || {})
      .filter(([, v]) => safeInt(v, 0) > 0)
      .map(([k, v]) => ({ key: k, label: topicLabel(k), value: safeInt(v, 0) }));

    if (entries.length === 0) {
      chartEl.innerHTML = `<div class="muted" style="padding:10px;">No topic frequency to display for current filters.</div>`;
      return;
    }

    const maxVal = entries.reduce((m, x) => Math.max(m, x.value), 0) || 1;

    const sorted = stableSort(entries, (a, b) => {
      const diff = (sortMode === "asc") ? (a.value - b.value) : (b.value - a.value);
      if (diff !== 0) return diff;
      return a.label.localeCompare(b.label, undefined, { sensitivity: "base" });
    });

    chartEl.innerHTML = sorted.map(row => {
      const pct = Math.round((row.value / maxVal) * 100);
      return `
        <div class="tRow" role="row">
          <div class="tLabel" title="${escapeHtml(row.label)}">${escapeHtml(row.label)}</div>
          <div class="tBarTrack" aria-hidden="true">
            <div class="tBarFill" style="width:${pct}%"></div>
          </div>
          <div class="tVal">
            <span>${row.value}</span>
            <span class="tPct">${pct}%</span>
          </div>
        </div>
      `;
    }).join("");
  }

  /* ---------- Cards ---------- */
  function buildSourceCard(source, topicLabel) {
    const langBadge = (source.language || "EN").toUpperCase();
    const isEN = langBadge === "EN";
    const langClass = isEN ? "badge--ok" : "badge--warn";

    const defByTopic = groupDefinitionsByTopic(source.definitions || []);

    const defGroupsHtml = Object.keys(defByTopic)
      .sort((a, b) => topicLabel(a).localeCompare(topicLabel(b), undefined, { sensitivity: "base" }))
      .map(topicKey => {
        const defs = defByTopic[topicKey];
        const title = topicLabel(topicKey);

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

    const yearBadge = (source.year != null && source.year !== "")
      ? `<span class="badge">Year: ${escapeHtml(String(source.year))}</span>`
      : "";

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

  function wireCardInteractions(resultsList) {
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

  /* ---------- Render + Actions ---------- */
  function render({ sources, state, dom, topicLabel }) {
    const filtered = applyFilters(sources, state);
    const total = sources.filter(s => s && s.kept !== false).length;

    dom.showingLine.textContent = `Showing ${filtered.length} of ${total} sources`;
    if (dom.resultsMeta) {
      dom.resultsMeta.textContent = `${filtered.length} result${filtered.length === 1 ? "" : "s"} • collapsed by default`;
    }

    // ✅ Topic chart (only summary now)
    const topicCounts = buildTopicCounts(filtered);
    renderTopicChart({
      chartEl: dom.topicChart,
      counts: topicCounts,
      topicLabel,
      sortMode: state.chartSort || "desc"
    });

    if (filtered.length === 0) {
      dom.resultsList.innerHTML = "";
      if (dom.emptyState) dom.emptyState.hidden = false;
      return;
    }

    if (dom.emptyState) dom.emptyState.hidden = true;

    const sorted = stableSort(filtered, (a, b) => {
      const dy = safeInt(b.year) - safeInt(a.year);
      if (dy !== 0) return dy;
      return String(a.title || "").localeCompare(String(b.title || ""), undefined, { sensitivity: "base" });
    });

    dom.resultsList.innerHTML = sorted.map(s => buildSourceCard(s, topicLabel)).join("");
    wireCardInteractions(dom.resultsList);
  }

  function clearAll({ state, dom, typeMulti, yearMulti, publisherMulti, renderFn }) {
    state.search = "";
    dom.searchInput.value = "";
    state.types = new Set();
    state.years = new Set();
    state.publishers = new Set();

    typeMulti.setSelected([]);
    yearMulti.setSelected([]);
    publisherMulti.setSelected([]);

    renderFn();
  }

  function selectTopOrBottomTypes({ mode, topicKeys, topicFrequency, topicLabel, state, typeMulti, renderFn }) {
    const keys = [...(topicKeys || [])];

    const sorted = stableSort(keys, (a, b) => {
      const fa = safeInt(topicFrequency[a], 0);
      const fb = safeInt(topicFrequency[b], 0);
      const diff = (mode === "top") ? (fb - fa) : (fa - fb);
      if (diff !== 0) return diff;
      return topicLabel(a).localeCompare(topicLabel(b), undefined, { sensitivity: "base" });
    });

    const picked = sorted.slice(0, 10);
    state.types = new Set(picked);
    typeMulti.setSelected(picked);
    renderFn();
  }

  /* ---------- Export ---------- */
  window.InternetRender = {
    applyFilters,
    render,
    clearAll,
    selectTopOrBottomTypes
  };
})();

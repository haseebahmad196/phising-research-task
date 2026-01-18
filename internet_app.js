/* =========================================================
   internet_app.js
   ✅ Topic Frequency uses same bar UI as research page
========================================================= */
(() => {
  "use strict";

  const U = window.InternetUtils;
  const R = window.InternetRender;

  if (!U || !R) {
    console.warn("[internet_app.js] Missing dependencies. Load internet_utils.js then internet_render.js first.");
    return;
  }

  const { $, MultiSelect, safeInt, escapeHtml, stableSort } = U;

  /* ---------- Helpers ---------- */
  function safeArray(x) { return Array.isArray(x) ? x : []; }

  function formatNum(v) {
    if (v == null || v === "") return "–";
    const n = Number(v);
    if (Number.isFinite(n)) return n.toLocaleString("en-US");
    return escapeHtml(String(v));
  }

  /* ---------- Data ---------- */
  const SOURCES = safeArray(window.INTERNET_SOURCES).filter(s => s && s.kept !== false);
  const TOPIC_KEYS = safeArray(window.TOPIC_KEYS);
  const topicLabel = typeof window.topicLabel === "function" ? window.topicLabel : (k) => k;

  /* ---------- DOM ---------- */
  const dom = {
    searchInput: $("#searchInput"),
    clearSearchBtn: $("#clearSearchBtn"),
    clearFiltersBtn: $("#clearFiltersBtn"),
    emptyClearBtn: $("#emptyClearBtn"),

    showingLine: $("#showingLine"),
    resultsMeta: $("#resultsMeta"),
    resultsList: $("#resultsList"),
    emptyState: $("#emptyState"),

    // ✅ new frequency UI
    frequency: $("#frequency"),
    freqTop10Btn: $("#freqTop10"),
    freqBottom10Btn: $("#freqBottom10"),
    freqAllBtn: $("#freqAll"),

    scrollUpBtn: $("#scrollUpBtn"),
    scrollDownBtn: $("#scrollDownBtn")
  };

  if (!dom.searchInput || !dom.resultsList || !dom.showingLine || !dom.frequency) {
    console.warn("[internet_app.js] Missing required DOM nodes. Check internet.html IDs.");
    return;
  }

  /* ---------- State ---------- */
  const state = {
    search: "",
    types: new Set(),
    years: new Set(),
    publishers: new Set()
  };

  /* ---------- Multi-select mounts ---------- */
  const typeMulti = new MultiSelect({
    mount: $("#typeMulti"),
    options: U.buildTypeOptions({ sources: SOURCES, topicKeys: TOPIC_KEYS, topicLabel }),
    placeholder: "All types",
    onChange: (sel) => { state.types = sel; render(); }
  });

  const yearMulti = new MultiSelect({
    mount: $("#yearMulti"),
    options: U.buildYearOptions(SOURCES),
    placeholder: "All years",
    onChange: (sel) => { state.years = sel; render(); }
  });

  const publisherMulti = new MultiSelect({
    mount: $("#publisherMulti"),
    options: U.buildPublisherOptions(SOURCES),
    placeholder: "All publishers",
    onChange: (sel) => { state.publishers = sel; render(); }
  });

  /* ---------- Frequency ---------- */
  let currentFiltered = [];
  let currentTopicCounts = {};

  function buildTopicCounts(filteredSources) {
    const counts = {};
    for (const s of filteredSources) {
      for (const d of safeArray(s.definitions)) {
        if (!d || !d.topicKey) continue;
        counts[d.topicKey] = (counts[d.topicKey] || 0) + 1;
      }
    }
    return counts;
  }

  function getTopicListSorted(counts) {
    const list = Object.entries(counts || {})
      .map(([key, count]) => ({ key, label: topicLabel(key), count: safeInt(count, 0) }))
      .filter(x => x.count > 0);

    // default: desc by count
    return stableSort(list, (a, b) => {
      const diff = b.count - a.count;
      if (diff !== 0) return diff;
      return a.label.localeCompare(b.label, undefined, { sensitivity: "base" });
    });
  }

  function setFreqActive(btn) {
    [dom.freqTop10Btn, dom.freqBottom10Btn, dom.freqAllBtn].forEach(b => b?.classList.remove("active"));
    btn?.classList.add("active");
  }

  function renderFrequency(mode = "top10") {
    const list = getTopicListSorted(currentTopicCounts);
    const max = Math.max(...list.map(x => x.count), 1);

    let view = list;
    if (mode === "top10") view = list.slice(0, 10);
    if (mode === "bottom10") view = list.slice(Math.max(list.length - 10, 0));

    dom.frequency.innerHTML = view.map(t => `
      <div class="bar-row">
        <div class="bar-label">
          <span><strong>${escapeHtml(t.label)}</strong></span>
          <span>${formatNum(t.count)} / ${formatNum(currentFiltered.length)}</span>
        </div>
        <div class="bar-track">
          <div class="bar-fill" style="width:${(t.count / max) * 100}%"></div>
        </div>
      </div>
    `).join("") || `<p class="muted">No topic frequency available for current filters.</p>`;
  }

  /* ---------- Render wrapper ---------- */
  let freqMode = "top10";

  function render() {
    state.search = dom.searchInput.value || "";

    // use your existing filter logic from internet_render.js
    currentFiltered = R.applyFilters(SOURCES, {
      search: state.search,
      types: state.types,
      years: state.years,
      publishers: state.publishers
    });

    const total = SOURCES.length;
    dom.showingLine.textContent = `Showing ${currentFiltered.length} of ${total} sources`;
    if (dom.resultsMeta) dom.resultsMeta.textContent = `${currentFiltered.length} result${currentFiltered.length === 1 ? "" : "s"}`;

    // frequency counts from filtered sources
    currentTopicCounts = buildTopicCounts(currentFiltered);
    renderFrequency(freqMode);

    // render cards using your existing renderer
    R.render({
      sources: SOURCES,
      state: {
        search: state.search,
        types: state.types,
        years: state.years,
        publishers: state.publishers,
        chartSort: "desc" // unused now, but harmless
      },
      dom,
      topicLabel
    });
  }

  /* ---------- Events ---------- */
  dom.searchInput.addEventListener("input", render);

  dom.clearSearchBtn?.addEventListener("click", () => {
    dom.searchInput.value = "";
    render();
    dom.searchInput.focus();
  });

  function clearAll() {
    dom.searchInput.value = "";
    state.search = "";
    state.types = new Set();
    state.years = new Set();
    state.publishers = new Set();

    typeMulti.setSelected([]);
    yearMulti.setSelected([]);
    publisherMulti.setSelected([]);

    freqMode = "top10";
    setFreqActive(dom.freqTop10Btn);

    render();
  }

  dom.clearFiltersBtn?.addEventListener("click", clearAll);
  dom.emptyClearBtn?.addEventListener("click", clearAll);

  dom.freqTop10Btn?.addEventListener("click", () => {
    freqMode = "top10";
    setFreqActive(dom.freqTop10Btn);
    renderFrequency(freqMode);
  });

  dom.freqBottom10Btn?.addEventListener("click", () => {
    freqMode = "bottom10";
    setFreqActive(dom.freqBottom10Btn);
    renderFrequency(freqMode);
  });

  dom.freqAllBtn?.addEventListener("click", () => {
    freqMode = "all";
    setFreqActive(dom.freqAllBtn);
    renderFrequency(freqMode);
  });

  // page nav
  if (dom.scrollUpBtn && dom.scrollDownBtn) {
    dom.scrollUpBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    dom.scrollDownBtn.addEventListener("click", () => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" }));
  }

  /* ---------- Init ---------- */
  setFreqActive(dom.freqTop10Btn);
  render();
})();

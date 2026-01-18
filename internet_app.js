/* =========================================================
   internet_app.js
   Bootstrap + DOM wiring + chart sort buttons
========================================================= */
(() => {
  "use strict";

  const U = window.InternetUtils;
  const R = window.InternetRender;

  if (!U || !R) {
    console.warn("[internet_app.js] Missing dependencies. Load internet_utils.js then internet_render.js first.");
    return;
  }

  const { $, MultiSelect, buildTypeOptions, buildYearOptions, buildPublisherOptions } = U;

  /* ---------- Data ---------- */
  const SOURCES = Array.isArray(window.INTERNET_SOURCES) ? window.INTERNET_SOURCES : [];
  const TOPIC_KEYS = Array.isArray(window.TOPIC_KEYS) ? window.TOPIC_KEYS : [];
  const TOPIC_FREQUENCY = window.TOPIC_FREQUENCY || {};
  const topicLabel = typeof window.topicLabel === "function" ? window.topicLabel : (k) => k;

  /* ---------- State ---------- */
  const state = {
    search: "",
    types: new Set(),
    years: new Set(),
    publishers: new Set(),
    chartSort: "desc" // used by topic chart
  };

  /* ---------- Mount DOM ---------- */
  const dom = {
    searchInput: $("#searchInput"),
    clearSearchBtn: $("#clearSearchBtn"),
    clearFiltersBtn: $("#clearFiltersBtn"),

    selectTop10Btn: $("#selectTop10Btn"),
    selectBottom10Btn: $("#selectBottom10Btn"),

    sortTypeDescBtn: $("#sortTypeDescBtn"),
    sortTypeAscBtn: $("#sortTypeAscBtn"),

    resultsList: $("#resultsList"),
    emptyState: $("#emptyState"),
    emptyClearBtn: $("#emptyClearBtn"),

    showingLine: $("#showingLine"),
    resultsMeta: $("#resultsMeta"),

    topicChart: $("#topicChart"),

    // page nav
    scrollUpBtn: $("#scrollUpBtn"),
    scrollDownBtn: $("#scrollDownBtn")
  };

  // Guard
  if (!dom.searchInput || !dom.resultsList || !dom.showingLine || !dom.topicChart) {
    console.warn("[internet_app.js] Missing required DOM nodes. Check internet.html IDs.");
    return;
  }

  /* ---------- Multi-select mounts ---------- */
  const typeMulti = new MultiSelect({
    mount: $("#typeMulti"),
    options: buildTypeOptions({ sources: SOURCES, topicKeys: TOPIC_KEYS, topicLabel }),
    placeholder: "All types",
    onChange: (sel) => {
      state.types = sel;
      setTopBottomActive(null); // manual type changes cancel quick-select highlight
      render();
    }
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

  /* ---------- Render wrapper ---------- */
  function render() {
    R.render({ sources: SOURCES, state, dom, topicLabel });
  }

  /* ---------- Actions wrappers ---------- */
  function clearAll() {
    setTopBottomActive(null);
    R.clearAll({ state, dom, typeMulti, yearMulti, publisherMulti, renderFn: render });
  }

  function selectTopOrBottomTypes(mode /* "top"|"bottom" */) {
    R.selectTopOrBottomTypes({
      mode,
      topicKeys: TOPIC_KEYS,
      topicFrequency: TOPIC_FREQUENCY,
      topicLabel,
      state,
      typeMulti,
      renderFn: render
    });
  }

  function setChartSort(mode /* "asc" | "desc" */) {
    state.chartSort = mode;
    if (dom.sortTypeDescBtn) dom.sortTypeDescBtn.setAttribute("aria-pressed", mode === "desc" ? "true" : "false");
    if (dom.sortTypeAscBtn) dom.sortTypeAscBtn.setAttribute("aria-pressed", mode === "asc" ? "true" : "false");
    render();
  }

  // ✅ segmented switch behavior for Top/Bottom (like Asc/Desc)
  function setTopBottomActive(active /* "top" | "bottom" | null */) {
    if (!dom.selectTop10Btn || !dom.selectBottom10Btn) return;

    if (active === "top") {
      dom.selectTop10Btn.setAttribute("aria-pressed", "true");
      dom.selectBottom10Btn.setAttribute("aria-pressed", "false");
      return;
    }

    if (active === "bottom") {
      dom.selectTop10Btn.setAttribute("aria-pressed", "false");
      dom.selectBottom10Btn.setAttribute("aria-pressed", "true");
      return;
    }

    dom.selectTop10Btn.setAttribute("aria-pressed", "false");
    dom.selectBottom10Btn.setAttribute("aria-pressed", "false");
  }

  /* ---------- Events ---------- */
  dom.searchInput.addEventListener("input", () => {
    state.search = dom.searchInput.value || "";
    render();
  });

  dom.clearSearchBtn?.addEventListener("click", () => {
    state.search = "";
    dom.searchInput.value = "";
    render();
    dom.searchInput.focus();
  });

  dom.clearFiltersBtn?.addEventListener("click", clearAll);
  dom.emptyClearBtn?.addEventListener("click", clearAll);

  // Top/Bottom segmented switch
  dom.selectTop10Btn?.addEventListener("click", () => {
    setTopBottomActive("top");
    selectTopOrBottomTypes("top");
  });

  dom.selectBottom10Btn?.addEventListener("click", () => {
    setTopBottomActive("bottom");
    selectTopOrBottomTypes("bottom");
  });

  // Sort segmented switch
  dom.sortTypeDescBtn?.addEventListener("click", () => setChartSort("desc"));
  dom.sortTypeAscBtn?.addEventListener("click", () => setChartSort("asc"));

  /* ---------- Page scroll navigation ---------- */
  if (dom.scrollUpBtn && dom.scrollDownBtn) {
    dom.scrollUpBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    dom.scrollDownBtn.addEventListener("click", () => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    });
  }

  /* ---------- Init ---------- */
  setTopBottomActive(null);
  setChartSort("desc");
})();

/* =========================================================
   internet_app.js
   Bootstrap + DOM wiring + chart sort buttons
   ✅ FIX: Top/Bottom controls chart view ONLY (not the filters)
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

  const SOURCES = Array.isArray(window.INTERNET_SOURCES) ? window.INTERNET_SOURCES : [];
  const TOPIC_KEYS = Array.isArray(window.TOPIC_KEYS) ? window.TOPIC_KEYS : [];
  const TOPIC_FREQUENCY = window.TOPIC_FREQUENCY || {};
  const topicLabel = typeof window.topicLabel === "function" ? window.topicLabel : (k) => k;

  const state = {
    search: "",
    types: new Set(),
    years: new Set(),
    publishers: new Set(),
    chartSort: "desc",
    chartView: "all" // ✅ all | top10 | bottom10
  };

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

    scrollUpBtn: $("#scrollUpBtn"),
    scrollDownBtn: $("#scrollDownBtn")
  };

  if (!dom.searchInput || !dom.resultsList || !dom.showingLine || !dom.topicChart) {
    console.warn("[internet_app.js] Missing required DOM nodes. Check internet.html IDs.");
    return;
  }

  const typeMulti = new MultiSelect({
    mount: $("#typeMulti"),
    options: buildTypeOptions({ sources: SOURCES, topicKeys: TOPIC_KEYS, topicLabel }),
    placeholder: "All types",
    onChange: (sel) => {
      state.types = sel;
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

  function render() {
    R.render({ sources: SOURCES, state, dom, topicLabel });
  }

  function clearAll() {
    state.chartView = "all";
    if (dom.selectTop10Btn) dom.selectTop10Btn.setAttribute("aria-pressed", "false");
    if (dom.selectBottom10Btn) dom.selectBottom10Btn.setAttribute("aria-pressed", "false");
    R.clearAll({ state, dom, typeMulti, yearMulti, publisherMulti, renderFn: render });
  }

  function setChartSort(mode) {
    state.chartSort = mode;
    if (dom.sortTypeDescBtn) dom.sortTypeDescBtn.setAttribute("aria-pressed", mode === "desc" ? "true" : "false");
    if (dom.sortTypeAscBtn) dom.sortTypeAscBtn.setAttribute("aria-pressed", mode === "asc" ? "true" : "false");
    render();
  }

  // ✅ segmented switch behavior for Top/Bottom chart view
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

  // ✅ Top/Bottom now ONLY changes chart view (not filters)
  dom.selectTop10Btn?.addEventListener("click", () => {
    state.chartView = "top10";
    setTopBottomActive("top");
    R.selectTopOrBottomTypes({ mode: "top", state, renderFn: render, dom });
  });

  dom.selectBottom10Btn?.addEventListener("click", () => {
    state.chartView = "bottom10";
    setTopBottomActive("bottom");
    R.selectTopOrBottomTypes({ mode: "bottom", state, renderFn: render, dom });
  });

  dom.sortTypeDescBtn?.addEventListener("click", () => setChartSort("desc"));
  dom.sortTypeAscBtn?.addEventListener("click", () => setChartSort("asc"));

  if (dom.scrollUpBtn && dom.scrollDownBtn) {
    dom.scrollUpBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    dom.scrollDownBtn.addEventListener("click", () => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    });
  }

  setTopBottomActive(null);
  setChartSort("desc");
})();

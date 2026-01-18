/* =========================
   SAFE HELPERS
========================= */
const $ = (id) => document.getElementById(id);

function safeArray(x) { return Array.isArray(x) ? x : []; }
function escapeHtml(str) {
  return String(str ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

/* =========================
   REQUIRED DOM
========================= */
const taskSummary = $("taskSummary");
const method = $("method");
const resultCounts = $("resultCounts");
const paperCount = $("paperCount");
const frequency = $("frequency");
const filters = $("filters");
const papers = $("papers");

const searchInput = $("searchInput");
const yearFilters = $("yearFilters");
const dbFilters = $("dbFilters");

const freqTop10Btn = $("freqTop10");
const freqBottom10Btn = $("freqBottom10");
const freqAllBtn = $("freqAll");

const shownCount = $("shownCount");

/* Filter meta */
const searchMeta = $("searchMeta");
const yearMeta = $("yearMeta");
const dbMeta = $("dbMeta");
const topicMeta = $("topicMeta");

/* Internet page DOM */
const internetMethod = $("internetMethod");
const internetResults = $("internetResults");

/* ✅ NEW: Internet filters DOM (optional; code guards if missing) */
const internetSearchInput = $("internetSearchInput");     // text search across title+quote+publisher
const internetTypeFilter = $("internetTypeFilter");       // <select multiple> or single select
const internetYearFilter = $("internetYearFilter");       // <select multiple>
const internetPublisherFilter = $("internetPublisherFilter"); // <select multiple>
const internetClearBtn = $("internetClearBtn");
const internetSelectTop10Btn = $("internetSelectTop10Btn");
const internetSelectBottom10Btn = $("internetSelectBottom10Btn");

/* ✅ NEW: Internet summary DOM (optional; code guards if missing) */
const internetShownLine = $("internetShownLine");         // "Showing X of Y sources"
const internetSummaryYear = $("internetSummaryYear");     // breakdown by year
const internetSummaryPublisher = $("internetSummaryPublisher"); // breakdown by publisher
const internetSummaryType = $("internetSummaryType");     // breakdown by type (definition entries)

/* Tabs */
const tabLiterature = $("tab-literature");
const tabInternet = $("tab-internet");
const pageLiterature = $("page-literature");
const pageInternet = $("page-internet");

/* Scroll FAB */
const scrollFab = $("scrollFab");
const scrollFabIcon = $("scrollFabIcon");

/* =========================
   DATA GUARDS
========================= */
const INCLUDED_PAPERS = safeArray(typeof PAPERS !== "undefined" ? PAPERS : [])
  .filter(p => p && p.definitions && p.kept !== false);

const TOPICS_SAFE = safeArray(typeof TOPICS !== "undefined" ? TOPICS : []);

/* =========================
   GLOBAL TOPIC FREQUENCY (STATIC)
========================= */
const GLOBAL_FREQ = {};
TOPICS_SAFE.forEach(t => GLOBAL_FREQ[t.key] = 0);

INCLUDED_PAPERS.forEach(p => {
  TOPICS_SAFE.forEach(t => {
    if (p.definitions?.[t.key]) GLOBAL_FREQ[t.key]++;
  });
});

/* =========================
   SUMMARY + METHOD
========================= */
const RESEARCH_SAFE = (typeof RESEARCH !== "undefined" && RESEARCH) ? RESEARCH : {
  goal: "—",
  questions: [],
  query: "—",
  databases: [],
  inclusion: [],
  exclusion: []
};

taskSummary.innerHTML = `
  <strong>Aim:</strong> ${escapeHtml(RESEARCH_SAFE.goal)}<br>
  <strong>Research Questions:</strong> ${safeArray(RESEARCH_SAFE.questions).map(escapeHtml).join(" • ") || "—"}
`;

method.innerHTML = `
  <p><strong>Query:</strong> ${escapeHtml(RESEARCH_SAFE.query)}</p>
  <p><strong>Databases:</strong> ${safeArray(RESEARCH_SAFE.databases).map(escapeHtml).join(", ") || "—"}</p>
  <p><strong>Inclusion:</strong> ${safeArray(RESEARCH_SAFE.inclusion).map(escapeHtml).join(" • ") || "—"}</p>
  <p><strong>Exclusion:</strong> ${safeArray(RESEARCH_SAFE.exclusion).map(escapeHtml).join(" • ") || "—"}</p>
`;

/* =========================
   RESULT COUNTS TABLE
========================= */
const RC = (typeof RESULT_COUNTS !== "undefined" && RESULT_COUNTS) ? RESULT_COUNTS : {};
const perDb = safeArray(RC.perDatabase);

// filter out junk rows like Unique after de-dup or Selected final, etc.
const cleanPerDb = perDb.filter(r => {
  if (!r || !r.db) return false;
  const name = String(r.db).toLowerCase();
  if (name.includes("unique") || name.includes("de-dup") || name.includes("selected")) return false;
  if (r.hits == null && r.screened == null && r.kept == null) return false;
  return true;
});

resultCounts.innerHTML = `
  <table class="table">
    <thead>
      <tr>
        <th>Database</th>
        <th>Hits</th>
        <th>Screened</th>
        <th>Kept</th>
      </tr>
    </thead>
    <tbody>
      ${cleanPerDb.map(r => `
        <tr>
          <td>${escapeHtml(r.db)}</td>
          <td>${escapeHtml(r.hits ?? "-")}</td>
          <td>${escapeHtml(r.screened ?? "-")}</td>
          <td>${escapeHtml(r.kept ?? "-")}</td>
        </tr>
      `).join("")}
    </tbody>
  </table>
`;

/* =========================
   TOPIC FREQUENCY
========================= */
paperCount.innerText = `Based on ${INCLUDED_PAPERS.length} paper(s).`;

function getTopicListSorted() {
  return TOPICS_SAFE
    .map(t => ({ ...t, count: GLOBAL_FREQ[t.key] || 0 }))
    .filter(x => x.count > 0)
    .sort((a,b) => b.count - a.count);
}

function renderFrequency(mode = "top10") {
  const list = getTopicListSorted();
  const max = Math.max(...list.map(x => x.count), 1);

  let view = list;
  if (mode === "top10") view = list.slice(0, 10);
  if (mode === "bottom10") view = list.slice(Math.max(list.length - 10, 0));

  frequency.innerHTML = view.map(t => `
    <div class="bar-row">
      <div class="bar-label">
        <span><strong>${escapeHtml(t.label)}</strong></span>
        <span>${t.count} / ${INCLUDED_PAPERS.length}</span>
      </div>
      <div class="bar-track">
        <div class="bar-fill" style="width:${(t.count / max) * 100}%"></div>
      </div>
    </div>
  `).join("") || `<p class="muted">No topic frequency available.</p>`;
}

function setFreqActive(btn) {
  [freqTop10Btn, freqBottom10Btn, freqAllBtn].forEach(b => b?.classList.remove("active"));
  btn?.classList.add("active");
}

freqTop10Btn?.addEventListener("click", () => { renderFrequency("top10"); setFreqActive(freqTop10Btn); });
freqBottom10Btn?.addEventListener("click", () => { renderFrequency("bottom10"); setFreqActive(freqBottom10Btn); });
freqAllBtn?.addEventListener("click", () => { renderFrequency("all"); setFreqActive(freqAllBtn); });

renderFrequency("top10");
setFreqActive(freqTop10Btn);

/* =========================
   BUILD FILTER CHIPS
========================= */
const YEARS = [...new Set(INCLUDED_PAPERS.map(p => p.year).filter(Boolean))].sort((a,b)=>b-a);
const DBS = [...new Set(INCLUDED_PAPERS.map(p => p.database).filter(Boolean))].sort((a,b)=>a.localeCompare(b));

// Year chips
yearFilters.innerHTML = YEARS.map(y => `
  <label class="chip">
    <input type="checkbox" value="${y}" checked>
    <span>${y}</span>
  </label>
`).join("") || `<p class="muted">No year data available.</p>`;

// DB chips
dbFilters.innerHTML = DBS.map(db => `
  <label class="chip">
    <input type="checkbox" value="${escapeHtml(db)}" checked>
    <span>${escapeHtml(db)}</span>
  </label>
`).join("") || `<p class="muted">No database source data available.</p>`;

// Topic chips
filters.innerHTML = TOPICS_SAFE.map(t => `
  <label class="chip">
    <input type="checkbox" value="${t.key}" checked>
    <span>${escapeHtml(t.label)}</span>
    <span class="count">(${GLOBAL_FREQ[t.key] || 0})</span>
  </label>
`).join("");

/* =========================
   TOPIC SELECT BUTTONS
========================= */
const selectTop10Btn = $("selectTop10");
const selectBottom10Btn = $("selectBottom10");
const selectAllTopicsBtn = $("selectAllTopics");
const clearTopicsBtn = $("clearTopics");

function setTopBottomTopics(which, n=10) {
  const sorted = [...TOPICS_SAFE]
    .map(t => ({...t, count: GLOBAL_FREQ[t.key] || 0}))
    .sort((a,b) => b.count - a.count);

  const chosen = which === "top"
    ? new Set(sorted.slice(0,n).map(x => x.key))
    : new Set(sorted.slice(-n).map(x => x.key));

  [...filters.querySelectorAll("input[type=checkbox]")].forEach(i => {
    i.checked = chosen.has(i.value);
  });
}

/* =========================
   FILTER META BADGES
========================= */
function updateMeta() {
  const q = (searchInput?.value || "").trim();
  searchMeta.textContent = q ? `“${q.slice(0, 18)}${q.length > 18 ? "…" : ""}”` : "No search";

  const yChecked = [...yearFilters.querySelectorAll("input:checked")].length;
  const yTotal = [...yearFilters.querySelectorAll("input")].length;
  yearMeta.textContent = yTotal ? `${yChecked}/${yTotal} selected` : "—";

  const dbChecked = [...dbFilters.querySelectorAll("input:checked")].length;
  const dbTotal = [...dbFilters.querySelectorAll("input")].length;
  dbMeta.textContent = dbTotal ? `${dbChecked}/${dbTotal} selected` : "—";

  const tChecked = [...filters.querySelectorAll("input:checked")].length;
  const tTotal = [...filters.querySelectorAll("input")].length;
  topicMeta.textContent = tTotal ? `${tChecked}/${tTotal} selected` : "—";
}

/* =========================
   RENDER PAPERS (collapsed by default)
========================= */
function renderPapers(activeTopics, activeYears, activeDBs, q) {
  papers.innerHTML = "";
  let shown = 0;

  INCLUDED_PAPERS.forEach(p => {
    const matchesTopics = activeTopics.some(k => p.definitions?.[k]);
    if (!matchesTopics) return;

    if (activeYears.length && p.year && !activeYears.includes(p.year)) return;
    if (activeDBs.length && p.database && !activeDBs.includes(p.database)) return;

    if (q) {
      const hay = `${p.title || ""} ${p.authors || ""} ${p.venue || ""}`.toLowerCase();
      if (!hay.includes(q)) return;
    }

    const hasDates = Boolean(p.dates?.received || p.dates?.revised || p.dates?.accepted);

    const article = document.createElement("article");
    article.className = "paper collapsed"; // ✅ collapsed by default

    article.innerHTML = `
      <div class="paper-head">
        <div>
          <div class="paper-title">${escapeHtml(p.title)}</div>
          <div class="paper-meta">
            ${escapeHtml(p.authors || "—")} • ${escapeHtml(p.year || "—")} • ${escapeHtml(p.venue || "—")}
            ${p.database ? ` • <span class="db-pill">${escapeHtml(p.database)}</span>` : ""}
          </div>

          ${hasDates ? `
            <div class="paper-meta">
              ${p.dates?.received ? `Received: ${escapeHtml(p.dates.received)}` : ""}
              ${p.dates?.revised ? ` • Revised: ${escapeHtml(p.dates.revised)}` : ""}
              ${p.dates?.accepted ? ` • Accepted: ${escapeHtml(p.dates.accepted)}` : ""}
            </div>
          ` : ""}
        </div>

        <div class="paper-actions">
          ${p.link ? `<a class="paper-link" href="${escapeHtml(p.link)}" target="_blank" rel="noopener">Open paper</a>` : ""}
          <button class="toggle" aria-label="Toggle details">▾</button>
        </div>
      </div>

      <div class="paper-body topics">
        ${TOPICS_SAFE.map(t => {
          const d = p.definitions?.[t.key];
          const m = p.mentionedButNotDefined?.[t.key];

          return `
            <div class="topic">
              <div class="topic-name">${escapeHtml(t.label)}</div>
              <div class="topic-count">Defined in ${GLOBAL_FREQ[t.key] || 0} paper(s)</div>
              ${
                d
                  ? `<div class="topic-quote">“${escapeHtml(d.quote)}”</div>
                     <div class="topic-src">${escapeHtml(d.where)}</div>`
                  : m
                    ? `<div class="topic-quote mentioned">Mentioned but not defined.</div>
                       <div class="topic-src">${escapeHtml(m.context)}</div>`
                    : `<div class="topic-quote missing">Not defined in this paper.</div>`
              }
            </div>
          `;
        }).join("")}
      </div>
    `;

    const toggleBtn = article.querySelector(".toggle");
    toggleBtn.addEventListener("click", () => {
      article.classList.toggle("collapsed");
      toggleBtn.textContent = article.classList.contains("collapsed") ? "▾" : "▴";
    });

    papers.appendChild(article);
    shown++;
  });

  shownCount.textContent = `${shown} shown`;

  if (shown === 0) {
    papers.innerHTML = `<p class="muted">No papers match the selected filters.</p>`;
  }
}

/* =========================
   UPDATE
========================= */
function update() {
  const activeTopics = [...filters.querySelectorAll("input:checked")].map(i => i.value);
  const activeYears  = [...yearFilters.querySelectorAll("input:checked")].map(i => Number(i.value));
  const activeDBs    = [...dbFilters.querySelectorAll("input:checked")].map(i => i.value);
  const q = (searchInput?.value || "").trim().toLowerCase();

  updateMeta();
  renderPapers(activeTopics, activeYears, activeDBs, q);
}

filters.addEventListener("change", update);
yearFilters.addEventListener("change", update);
dbFilters.addEventListener("change", update);
searchInput.addEventListener("input", update);

selectTop10Btn?.addEventListener("click", () => { setTopBottomTopics("top", 10); update(); });
selectBottom10Btn?.addEventListener("click", () => { setTopBottomTopics("bottom", 10); update(); });
selectAllTopicsBtn?.addEventListener("click", () => {
  [...filters.querySelectorAll("input[type=checkbox]")].forEach(i => i.checked = true);
  update();
});
clearTopicsBtn?.addEventListener("click", () => {
  [...filters.querySelectorAll("input[type=checkbox]")].forEach(i => i.checked = false);
  update();
});

update();

/* =========================
   TABS
========================= */
function setPage(page) {
  const isLit = page === "literature";
  pageLiterature?.classList.toggle("active", isLit);
  pageInternet?.classList.toggle("active", !isLit);
  tabLiterature?.classList.toggle("active", isLit);
  tabInternet?.classList.toggle("active", !isLit);
  tabLiterature?.setAttribute("aria-selected", String(isLit));
  tabInternet?.setAttribute("aria-selected", String(!isLit));
}
tabLiterature?.addEventListener("click", () => setPage("literature"));
tabInternet?.addEventListener("click", () => setPage("internet"));

/* =========================
   INTERNET PAGE (FULL)
   - Supports your REQUIRED structure:
     INTERNET_SOURCES = [{ id,title,publisher,year,url,accessed,language,kept,definitions:[{topicKey,quote,where}],notes }]
   - Collapsed cards by default
   - Filters (multi-select if you have <select multiple>)
   - Search across title+quote+publisher
   - Summary: showing X of Y + breakdowns by year/publisher/type(def entries)
   - Buttons: Clear / Select Top 10 types / Select Bottom 10 types
========================= */

/* --- Render strategy text --- */
if (internetMethod) {
  internetMethod.innerHTML = `
    <p><strong>Query:</strong> ("phishing" OR "spear-phishing") AND ("Definition")</p>
    <p><strong>Database:</strong> Google</p>
    <p><strong>Inclusion:</strong> Presents at least one definition of a type of phishing</p>
    <p><strong>Exclusion:</strong> Non-English publications (unless an English abstract fully describes the task)</p>
  `;
}

/* --- Data guard --- */
const INTERNET_SOURCES_SAFE = safeArray(typeof INTERNET_SOURCES !== "undefined" ? INTERNET_SOURCES : [])
  .filter(s => s && s.kept !== false);

/* --- Topic label helper (fallback uses TOPICS_SAFE labels if provided) --- */
function topicLabelByKey(key) {
  const hit = TOPICS_SAFE.find(t => t.key === key);
  return hit ? hit.label : key;
}

/* --- Derive option lists --- */
function uniqueSorted(arr, cmp) {
  return [...new Set(arr)].sort(cmp || ((a,b)=>String(a).localeCompare(String(b))));
}

const INTERNET_YEARS = uniqueSorted(
  INTERNET_SOURCES_SAFE.map(s => s.year).filter(Boolean),
  (a,b)=> Number(b)-Number(a)
);

const INTERNET_PUBLISHERS = uniqueSorted(
  INTERNET_SOURCES_SAFE.map(s => s.publisher).filter(Boolean),
  (a,b)=> String(a).localeCompare(String(b))
);

const INTERNET_TYPE_KEYS = uniqueSorted(
  INTERNET_SOURCES_SAFE.flatMap(s => safeArray(s.definitions).map(d => d?.topicKey).filter(Boolean)),
  (a,b)=> topicLabelByKey(a).localeCompare(topicLabelByKey(b))
);

/* --- Fill dropdowns if they exist --- */
function fillMultiSelect(selectEl, options, labelFn = (x)=>x) {
  if (!selectEl) return;
  // keep current selection if any
  const prevSelected = new Set([...selectEl.selectedOptions].map(o => o.value));
  selectEl.innerHTML = options.map(v => {
    const selected = prevSelected.size === 0 ? true : prevSelected.has(String(v));
    return `<option value="${escapeHtml(String(v))}" ${selected ? "selected" : ""}>${escapeHtml(labelFn(v))}</option>`;
  }).join("");
}

fillMultiSelect(internetYearFilter, INTERNET_YEARS, (y)=>y);
fillMultiSelect(internetPublisherFilter, INTERNET_PUBLISHERS, (p)=>p);
fillMultiSelect(internetTypeFilter, INTERNET_TYPE_KEYS, (k)=>topicLabelByKey(k));

/* --- Helpers to read multi-select values safely --- */
function getSelectedValues(selectEl) {
  if (!selectEl) return []; // if UI not present, treat as "no filter"
  return [...selectEl.selectedOptions].map(o => o.value);
}

/* --- Search matcher --- */
function internetMatchesSearch(src, q) {
  if (!q) return true;
  const defs = safeArray(src.definitions);
  const hay = [
    src.title,
    src.publisher,
    src.url,
    ...defs.map(d => d?.quote),
    ...defs.map(d => d?.where),
  ].join(" ").toLowerCase();
  return hay.includes(q);
}

/* --- Group definitions by topicKey --- */
function groupDefsByTopic(defs) {
  const out = {};
  safeArray(defs).forEach(d => {
    if (!d || !d.topicKey) return;
    if (!out[d.topicKey]) out[d.topicKey] = [];
    out[d.topicKey].push(d);
  });
  return out;
}

/* --- Build breakdowns (year/publisher/type) --- */
function buildInternetBreakdowns(filteredSources) {
  const byYear = {};
  const byPublisher = {};
  const byType = {}; // counts of definition entries

  filteredSources.forEach(s => {
    const y = String(s.year ?? "—");
    byYear[y] = (byYear[y] || 0) + 1;

    const p = String(s.publisher ?? "—");
    byPublisher[p] = (byPublisher[p] || 0) + 1;

    safeArray(s.definitions).forEach(d => {
      if (!d || !d.topicKey) return;
      const label = topicLabelByKey(d.topicKey);
      byType[label] = (byType[label] || 0) + 1;
    });
  });

  return { byYear, byPublisher, byType };
}

function renderKV(obj, limit = 10) {
  const entries = Object.entries(obj || {});
  if (entries.length === 0) return `<span class="muted">—</span>`;
  entries.sort((a,b) => (b[1]-a[1]) || String(a[0]).localeCompare(String(b[0])));

  const top = entries.slice(0, limit);
  const hidden = entries.length - top.length;

  return `
    <div class="kvList">
      ${top.map(([k,v]) => `
        <div class="kvRow">
          <span>${escapeHtml(k)}</span>
          <span class="pillMini">${escapeHtml(String(v))}</span>
        </div>
      `).join("")}
      ${hidden > 0 ? `<div class="muted">+${hidden} more</div>` : ""}
    </div>
  `;
}

/* --- Main internet render --- */
function renderInternet() {
  if (!internetResults) return;

  // if your new HTML doesn’t have these inputs yet, we still render something sane
  const q = (internetSearchInput?.value || "").trim().toLowerCase();
  const selectedYears = getSelectedValues(internetYearFilter);
  const selectedPubs = getSelectedValues(internetPublisherFilter);
  const selectedTypes = getSelectedValues(internetTypeFilter);

  const total = INTERNET_SOURCES_SAFE.length;

  const filtered = INTERNET_SOURCES_SAFE.filter(s => {
    // year filter
    if (selectedYears.length && s.year != null && !selectedYears.includes(String(s.year))) return false;

    // publisher filter
    if (selectedPubs.length && s.publisher && !selectedPubs.includes(String(s.publisher))) return false;

    // type filter: match if ANY definition topicKey in selectedTypes
    if (selectedTypes.length) {
      const has = safeArray(s.definitions).some(d => selectedTypes.includes(String(d?.topicKey)));
      if (!has) return false;
    }

    // search filter
    if (!internetMatchesSearch(s, q)) return false;

    return true;
  });

  // summary line
  if (internetShownLine) {
    internetShownLine.textContent = `Showing ${filtered.length} of ${total} sources`;
  }

  // breakdowns
  const { byYear, byPublisher, byType } = buildInternetBreakdowns(filtered);
  if (internetSummaryYear) internetSummaryYear.innerHTML = renderKV(byYear, 10);
  if (internetSummaryPublisher) internetSummaryPublisher.innerHTML = renderKV(byPublisher, 10);
  if (internetSummaryType) internetSummaryType.innerHTML = renderKV(byType, 10);

  if (filtered.length === 0) {
    internetResults.innerHTML = `<p class="muted">No internet sources match the selected filters.</p>`;
    return;
  }

  // cards collapsed by default
  internetResults.innerHTML = filtered.map(s => {
    const defs = safeArray(s.definitions);
    const grouped = groupDefsByTopic(defs);
    const topicKeys = Object.keys(grouped);

    return `
      <article class="paper collapsed">
        <div class="paper-head">
          <div>
            <div class="paper-title">${escapeHtml(s.title || "—")}</div>
            <div class="paper-meta">
              ${escapeHtml(s.publisher || "—")} • ${escapeHtml(s.year || "—")} • Accessed: ${escapeHtml(s.accessed || "—")}
              ${s.language ? ` • <span class="db-pill">${escapeHtml(s.language)}</span>` : ""}
              ${s.id ? ` • <span class="db-pill">${escapeHtml(s.id)}</span>` : ""}
            </div>
            ${s.notes ? `<div class="paper-meta">${escapeHtml(s.notes)}</div>` : ``}
          </div>

          <div class="paper-actions">
            ${s.url ? `<a class="paper-link" href="${escapeHtml(s.url)}" target="_blank" rel="noopener">Open source</a>` : ""}
            <button class="toggle" aria-label="Toggle details">▾</button>
          </div>
        </div>

        <div class="paper-body topics">
          ${topicKeys.length === 0 ? `<p class="muted">No definitions stored for this source.</p>` : `
            ${topicKeys
              .sort((a,b)=> topicLabelByKey(a).localeCompare(topicLabelByKey(b)))
              .map(k => `
                <div class="topic">
                  <div class="topic-name">${escapeHtml(topicLabelByKey(k))}</div>
                  <div class="topic-count">${grouped[k].length} definition(s)</div>

                  ${grouped[k].map(d => `
                    <div class="topic-quote">“${escapeHtml(d.quote || "—")}”</div>
                    <div class="topic-src">${escapeHtml(d.where || "—")}</div>
                    <div class="hr"></div>
                  `).join("")}
                </div>
              `).join("")}
          `}
        </div>
      </article>
    `;
  }).join("");

  // wire toggles
  [...internetResults.querySelectorAll(".paper")].forEach(article => {
    const btn = article.querySelector(".toggle");
    btn?.addEventListener("click", () => {
      article.classList.toggle("collapsed");
      btn.textContent = article.classList.contains("collapsed") ? "▾" : "▴";
    });
  });
}

/* --- Internet buttons --- */
function setInternetTypeSelection(keys) {
  if (!internetTypeFilter) return;
  const set = new Set(keys.map(String));
  [...internetTypeFilter.options].forEach(opt => {
    opt.selected = set.has(String(opt.value));
  });
}

function getInternetTypeCounts() {
  // Use DEFINITION ENTRY counts (like summary does)
  const counts = {};
  INTERNET_SOURCES_SAFE.forEach(s => {
    safeArray(s.definitions).forEach(d => {
      if (!d || !d.topicKey) return;
      counts[d.topicKey] = (counts[d.topicKey] || 0) + 1;
    });
  });
  return counts;
}

function selectInternetTopBottom(which, n=10) {
  const counts = getInternetTypeCounts();
  const keys = INTERNET_TYPE_KEYS.slice();

  keys.sort((a,b) => {
    const da = counts[a] || 0;
    const db = counts[b] || 0;
    return (db - da) || topicLabelByKey(a).localeCompare(topicLabelByKey(b));
  });

  const picked = which === "top"
    ? keys.slice(0, n)
    : keys.slice(Math.max(keys.length - n, 0));

  setInternetTypeSelection(picked);
  renderInternet();
}

internetClearBtn?.addEventListener("click", () => {
  if (internetSearchInput) internetSearchInput.value = "";

  // reset selects to "all selected"
  [internetTypeFilter, internetYearFilter, internetPublisherFilter].forEach(sel => {
    if (!sel) return;
    [...sel.options].forEach(opt => opt.selected = true);
  });

  renderInternet();
});

internetSelectTop10Btn?.addEventListener("click", () => selectInternetTopBottom("top", 10));
internetSelectBottom10Btn?.addEventListener("click", () => selectInternetTopBottom("bottom", 10));

internetSearchInput?.addEventListener("input", renderInternet);
internetTypeFilter?.addEventListener("change", renderInternet);
internetYearFilter?.addEventListener("change", renderInternet);
internetPublisherFilter?.addEventListener("change", renderInternet);

/* initial internet render */
renderInternet();

/* =========================
   SCROLL FAB
========================= */
function refreshFab() {
  const y = window.scrollY || document.documentElement.scrollTop;
  const show = y > 180;
  scrollFab?.classList.toggle("show", show);

  const docH = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = docH > 0 ? (y / docH) : 0;
  if (scrollFabIcon) scrollFabIcon.textContent = (ratio > 0.35) ? "↑" : "↓";
}
window.addEventListener("scroll", refreshFab);
refreshFab();

scrollFab?.addEventListener("click", () => {
  const y = window.scrollY || document.documentElement.scrollTop;
  const docH = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = docH > 0 ? (y / docH) : 0;

  if (ratio > 0.35) window.scrollTo({ top: 0, behavior: "smooth" });
  else window.scrollBy({ top: window.innerHeight * 0.9, behavior: "smooth" });
});

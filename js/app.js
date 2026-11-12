// ============================================================================
// BRASIL EM NÚMEROS | BRAZIL BY NUMBERS — MOTOR INTERATIVO PRINCIPAL (APP.JS)
// Suporte a Modo Escuro (Dark Mode), 16 Pilares, 80 Séries, Mapa Oficial IBGE
// das 27 UFs, Explorador de 60 Profissões & Salários, Atlas de 36 Cidades &
// Tamanho de Lotes (m²), Nomes & Sobrenomes (API IBGE ao Vivo), Lab OLS,
// Simulador Fiscal/Demográfico, Calculadora de Renda/Tributos e API BCB
// ============================================================================

(function () {
  const D = window.BR_DATA;
  let currentLang = 'pt';
  let isDark = false;
  let showUk = true;
  let selectedPillar = 'ALL';
  let searchTerm = '';
  let globalTransform = 'raw'; // 'raw' | 'index100' | 'pctChange'
  let globalLogScale = false;
  let perChartTypes = {}; // chartId -> 'line' | 'bar' | 'area' | 'table'

  // State Atlas & Map state
  let mapMode = 'geo'; // 'geo' (geographic polygons) | 'grid' (equal-area cartogram)
  let selectedMapMetric = 'gdpPerCapita';
  let inspectedUf = 'SP';
  let selectedRegionFilter = 'ALL';
  let stateSortKey = 'gdpPerCapita';
  let stateSortAsc = false;
  let radarUf1 = 'SP';
  let radarUf2 = 'BA';
  let radarUf3 = 'SC';

  // Professions Explorer state (Tab 4)
  let selectedProfSector = 'ALL';
  let profSearchTerm = '';
  let profSortKey = 'median';
  let profSortAsc = false;
  let compProf1 = 'Juiz / Magistrado / Promotor';
  let compProf2 = 'Professor da Educação Básica (Rede Pública)';

  // Cities & Lot Size Explorer state (Tab 5)
  let selectedCityMetric = 'lotSizeM2';
  let selectedCityRegion = 'ALL';
  let inspectedCityName = 'São Paulo';
  let cityScatterX = 'lotSizeM2';
  let cityScatterY = 'aptPct';
  let citySortKey = 'lotSizeM2';
  let citySortAsc = false;

  // Names & Surnames Explorer state (Tab 6)
  let selectedName1 = 'MARIA';
  let selectedName2 = 'ENZO';

  // Correlation Lab state (Tab 7)
  let corrX = 'informality';
  let corrY = 'gdpPerCapita';

  // Pyramid state (Tab 8)
  let currentPyramidYear = '2024';

  // Chart.js instances registry
  let chartInstances = {};
  let simChartInstance = null;
  let budgetChartInstance = null;
  let pyramidChartInstance = null;
  let mapBarChartInstance = null;
  let stateRadarInstance = null;
  let corrChartInstance = null;
  let incomeChartInstance = null;
  let liveApiChartInstance = null;
  let profChartInstance = null;
  let cityBarChartInstance = null;
  let cityScatterChartInstance = null;
  let namesDecadeChartInstance = null;
  let surnamesChartInstance = null;

  const REGION_COLORS = {
    'Norte': '#16a34a',
    'Nordeste': '#e11d48',
    'Sudeste': '#2563eb',
    'Sul': '#7c3aed',
    'Centro-Oeste': '#d97706'
  };

  function getThemeColors() {
    return isDark
      ? { text: '#f5f5f4', muted: '#a8a29e', grid: '#292524', border: '#44403c', bgCard: '#1c1917' }
      : { text: '#1c1917', muted: '#57534e', grid: '#e7e5e4', border: '#d6d3d1', bgCard: '#ffffff' };
  }

  function applyChartDefaults() {
    if (!window.Chart) return;
    const tc = getThemeColors();
    Chart.defaults.color = tc.muted;
    Chart.defaults.borderColor = tc.grid;
    Chart.defaults.font.family = "'Inter', -apple-system, BlinkMacSystemFont, sans-serif";
  }

  // Helper to build an inline SVG sparkline for KPI cards
  function buildSparklineSVG(arr, colorHex) {
    if (!arr || arr.length < 2) return '';
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const w = 96, h = 28;
    const pts = arr.map((v, i) => {
      const x = (i / (arr.length - 1)) * (w - 8) + 4;
      const y = h - 4 - ((v - min) / (max - min || 1)) * (h - 8);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    }).join(' ');
    const lastY = h - 4 - ((arr[arr.length - 1] - min) / (max - min || 1)) * (h - 8);
    return `
      <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" class="overflow-visible shrink-0">
        <polyline fill="none" stroke="${colorHex}" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" points="${pts}" />
        <circle cx="${w - 4}" cy="${lastY.toFixed(1)}" r="3" fill="${colorHex}" />
      </svg>
    `;
  }

  // ==========================================================================
  // 1. OVERVIEW: 20 KPIS WITH SPARKLINES, 16 PILLARS & 8 PARADOXES
  // ==========================================================================
  function renderOverview() {
    const kpiContainer = document.getElementById('kpis-grid');
    if (kpiContainer) {
      const badgeStyles = {
        emerald: { cls: 'bg-emerald-100 text-emerald-900 border-emerald-300 dark:bg-emerald-950/90 dark:text-emerald-300 dark:border-emerald-800', hex: '#10b981' },
        amber:   { cls: 'bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-950/90 dark:text-amber-300 dark:border-amber-800', hex: '#f59e0b' },
        sky:     { cls: 'bg-sky-100 text-sky-900 border-sky-300 dark:bg-sky-950/90 dark:text-sky-300 dark:border-sky-800', hex: '#0ea5e9' },
        rose:    { cls: 'bg-rose-100 text-rose-900 border-rose-300 dark:bg-rose-950/90 dark:text-rose-300 dark:border-rose-800', hex: '#f43f5e' },
        indigo:  { cls: 'bg-indigo-100 text-indigo-900 border-indigo-300 dark:bg-indigo-950/90 dark:text-indigo-300 dark:border-indigo-800', hex: '#6366f1' },
        teal:    { cls: 'bg-teal-100 text-teal-900 border-teal-300 dark:bg-teal-950/90 dark:text-teal-300 dark:border-teal-800', hex: '#14b8a6' }
      };
      kpiContainer.innerHTML = D.KPIS.map(k => {
        const st = badgeStyles[k.badgeColor] || badgeStyles.emerald;
        return `
          <div onclick="window.BR_APP.jumpToChart('${k.pillar}', '${k.chartId}')"
               class="relative overflow-hidden bg-[#FAF8F5] dark:bg-stone-950/90 hover:bg-white dark:hover:bg-stone-800/90 p-4 sm:p-5 rounded-2xl border border-stone-200/90 dark:border-stone-800 hover:border-emerald-500 dark:hover:border-emerald-500 shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between min-h-[142px]">
            <div class="absolute top-0 left-0 right-0 h-1" style="background:${st.hex}"></div>
            <div class="flex items-start justify-between gap-2 pt-0.5">
              <span class="text-xs font-extrabold uppercase tracking-wider text-stone-600 dark:text-stone-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 leading-snug">${k.label[currentLang]}</span>
              <span class="px-2 py-0.5 text-[11px] font-mono font-bold rounded-md border whitespace-nowrap shrink-0 ${st.cls}">${k.badge}</span>
            </div>
            <div class="flex items-center justify-between gap-3 my-3">
              <div class="text-2xl sm:text-[26px] font-black font-mono text-stone-900 dark:text-stone-50 tracking-tight whitespace-nowrap leading-none">${k.value}</div>
              ${buildSparklineSVG(k.spark, st.hex)}
            </div>
            <div class="text-xs text-stone-600 dark:text-stone-400 pt-2 border-t border-stone-200/70 dark:border-stone-800/80 flex items-center justify-between gap-2 leading-snug">
              <span class="font-medium">${k.sub[currentLang]}</span>
              <span class="text-emerald-600 dark:text-emerald-400 font-bold shrink-0 group-hover:translate-x-0.5 transition-transform">→</span>
            </div>
          </div>
        `;
      }).join('');
    }

    const pillarsContainer = document.getElementById('pillars-grid');
    if (pillarsContainer) {
      const t = D.UI_TEXT[currentLang];
      pillarsContainer.innerHTML = D.PILLARS.map(p => `
        <div onclick="window.BR_APP.openPillar('${p.id}')"
             class="relative overflow-hidden bg-white dark:bg-stone-900 rounded-2xl p-6 border border-stone-200 dark:border-stone-800 shadow-sm hover:shadow-md hover:border-emerald-500/60 transition-all cursor-pointer flex flex-col justify-between group">
          <div class="absolute top-0 left-0 right-0 h-1.5" style="background:${p.color}"></div>
          <div>
            <div class="flex items-center justify-between gap-2 pt-0.5">
              <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-extrabold uppercase" style="background:${p.color}20;color:${p.color}">
                <span>${p.icon}</span> Pilar ${p.num}
              </span>
              <span class="text-[11px] font-mono font-bold text-stone-600 dark:text-stone-300 bg-stone-100 dark:bg-stone-800 px-2.5 py-0.5 rounded-full border border-stone-200 dark:border-stone-700">${p.keyStat}</span>
            </div>
            <h3 class="text-lg sm:text-xl font-extrabold text-stone-900 dark:text-stone-100 mt-3 group-hover:text-emerald-600 transition-colors">${p.title[currentLang]}</h3>
            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-2 leading-relaxed">${p.desc[currentLang]}</p>
          </div>
          <div class="mt-4 pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-xs font-bold" style="color:${p.color}">
            <span>${t.openPillarCharts}</span>
            <span class="px-2 py-0.5 rounded bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 font-mono text-[10px]">${p.seriesCount} séries</span>
          </div>
        </div>
      `).join('');
    }

    const paradoxContainer = document.getElementById('paradoxes-grid');
    if (paradoxContainer) {
      paradoxContainer.innerHTML = D.PARADOXES.map(px => `
        <div class="bg-[#FAF8F5] dark:bg-stone-950/80 rounded-2xl p-5 border border-stone-200/90 dark:border-stone-800 flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-2">
              <span class="w-6 h-6 rounded-lg bg-emerald-700 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">${px.num}</span>
              <h4 class="font-extrabold text-stone-900 dark:text-stone-100 text-sm sm:text-base">${px.title[currentLang]}</h4>
            </div>
            <p class="text-xs text-stone-600 dark:text-stone-400 mt-2.5 leading-relaxed">${px.text[currentLang]}</p>
          </div>
        </div>
      `).join('');
    }
  }

  // ==========================================================================
  // 2. CHARTS EXPLORER (80 SERIES + TRANSFORMATIONS + EXPORT)
  // ==========================================================================
  function transformSeriesData(rawArr, mode) {
    if (!rawArr || !rawArr.length || mode === 'raw') return rawArr;
    const base = rawArr.find(v => v !== null && v !== undefined && v !== 0) || 1;
    if (mode === 'index100') {
      return rawArr.map(v => Number(((v / Math.abs(base)) * 100).toFixed(1)));
    }
    if (mode === 'pctChange') {
      return rawArr.map(v => Number((((v - base) / Math.abs(base)) * 100).toFixed(1)));
    }
    return rawArr;
  }

  function renderCharts() {
    applyChartDefaults();
    const filterBar = document.getElementById('pillar-filter-bar');
    const t = D.UI_TEXT[currentLang];
    if (filterBar) {
      filterBar.innerHTML = `
        <button onclick="window.BR_APP.setPillarFilter('ALL')"
                class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${selectedPillar === 'ALL' ? 'bg-emerald-700 text-white shadow-sm' : 'bg-[#FAF8F5] dark:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-700 hover:bg-stone-100'}">
          ${t.allPillars}
        </button>
        ${D.PILLARS.map(p => `
          <button onclick="window.BR_APP.setPillarFilter('${p.id}')"
                  class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${selectedPillar === p.id ? 'bg-emerald-700 text-white shadow-sm' : 'bg-[#FAF8F5] dark:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-700 hover:bg-stone-100'}">
            ${p.icon} ${p.num}. ${p.title[currentLang].split(',')[0]}
          </button>
        `).join('')}
      `;
    }

    Object.values(chartInstances).forEach(inst => {
      if (inst && typeof inst.destroy === 'function') inst.destroy();
    });
    chartInstances = {};

    const filtered = D.CHARTS.filter(c => {
      const matchP = selectedPillar === 'ALL' || c.pillar === selectedPillar;
      const q = searchTerm;
      const matchS = !q ||
        c.title[currentLang].toLowerCase().includes(q) ||
        c.takeaway[currentLang].toLowerCase().includes(q) ||
        c.source.toLowerCase().includes(q) ||
        c.code.toLowerCase().includes(q);
      return matchP && matchS;
    });

    const countEl = document.getElementById('charts-count-badge');
    if (countEl) countEl.textContent = `${filtered.length} / ${D.CHARTS.length} séries exibidas`;

    const grid = document.getElementById('charts-grid');
    if (!grid) return;

    grid.innerHTML = filtered.map(c => {
      const pObj = D.PILLARS.find(p => p.id === c.pillar) || D.PILLARS[0];
      const activeType = perChartTypes[c.id] || c.type;
      const isTable = activeType === 'table';

      let tableHtml = '';
      if (isTable) {
        const headers = ['Período / Categoria', ...c.datasets.map(ds => ds.label)];
        const rows = c.labels.map((lbl, idx) => {
          const cells = c.datasets.map(ds => {
            const tData = transformSeriesData(ds.data, globalTransform);
            return `<td class="py-1.5 px-2.5 font-mono text-xs border-b border-stone-100 dark:border-stone-800">${tData[idx] !== undefined ? tData[idx] : '-'}</td>`;
          }).join('');
          return `<tr class="hover:bg-stone-50 dark:hover:bg-stone-800/60"><td class="py-1.5 px-2.5 font-bold text-xs text-stone-800 dark:text-stone-200 border-b border-stone-100 dark:border-stone-800">${lbl}</td>${cells}</tr>`;
        }).join('');
        tableHtml = `
          <div class="h-64 overflow-y-auto border border-stone-200 dark:border-stone-800 rounded-xl mt-4 bg-[#FAF8F5] dark:bg-stone-950">
            <table class="w-full text-left border-collapse">
              <thead class="sticky top-0 bg-stone-200/90 dark:bg-stone-800 text-stone-800 dark:text-stone-200 text-[11px] font-bold">
                <tr>${headers.map(h => `<th class="py-2 px-2.5">${h}</th>`).join('')}</tr>
              </thead>
              <tbody>${rows}</tbody>
            </table>
          </div>
        `;
      }

      return `
        <article id="card-${c.id}" class="relative overflow-hidden bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-sm p-5 flex flex-col justify-between hover:border-stone-300 dark:hover:border-stone-700 transition-all">
          <div class="absolute top-0 left-0 right-0 h-1" style="background:${pObj.color}"></div>
          <div>
            <div class="flex flex-wrap items-center justify-between gap-2 pt-0.5">
              <div class="flex items-center gap-2">
                <span class="px-2 py-0.5 rounded-md text-[11px] font-extrabold uppercase" style="background:${pObj.color}22;color:${pObj.color}">
                  Série ${c.code}
                </span>
                <span class="text-[11px] font-mono text-stone-500 dark:text-stone-400">${c.unit || ''}</span>
              </div>
              <div class="flex items-center gap-1 bg-stone-100 dark:bg-stone-800 p-0.5 rounded-lg border border-stone-200 dark:border-stone-700">
                <button onclick="window.BR_APP.setChartType('${c.id}', 'line')" class="px-2 py-0.5 rounded text-[10px] font-bold ${activeType === 'line' ? 'bg-white dark:bg-stone-950 text-emerald-700 dark:text-emerald-400 shadow-sm' : 'text-stone-600 dark:text-stone-400'}">Linha</button>
                <button onclick="window.BR_APP.setChartType('${c.id}', 'bar')" class="px-2 py-0.5 rounded text-[10px] font-bold ${activeType === 'bar' ? 'bg-white dark:bg-stone-950 text-emerald-700 dark:text-emerald-400 shadow-sm' : 'text-stone-600 dark:text-stone-400'}">Barras</button>
                <button onclick="window.BR_APP.setChartType('${c.id}', 'area')" class="px-2 py-0.5 rounded text-[10px] font-bold ${activeType === 'area' ? 'bg-white dark:bg-stone-950 text-emerald-700 dark:text-emerald-400 shadow-sm' : 'text-stone-600 dark:text-stone-400'}">Área</button>
                <button onclick="window.BR_APP.setChartType('${c.id}', 'table')" class="px-2 py-0.5 rounded text-[10px] font-bold ${activeType === 'table' ? 'bg-white dark:bg-stone-950 text-emerald-700 dark:text-emerald-400 shadow-sm' : 'text-stone-600 dark:text-stone-400'}">Tabela</button>
              </div>
            </div>

            <h3 class="text-base sm:text-lg font-extrabold text-stone-900 dark:text-stone-100 mt-2 leading-snug">${c.title[currentLang]}</h3>

            ${isTable ? tableHtml : `
              <div class="h-64 w-full mt-4 relative">
                <canvas id="canvas-${c.id}"></canvas>
              </div>
            `}

            <div class="mt-4 p-3 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-900/60 text-xs text-stone-800 dark:text-stone-200 leading-relaxed">
              <strong>Síntese Analítica:</strong> ${c.takeaway[currentLang]}
            </div>
            ${showUk ? `
              <div class="mt-2 p-2.5 rounded-xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-900/60 text-xs text-blue-950 dark:text-blue-200 leading-relaxed">
                <strong>🌐 Benchmark UK / OCDE:</strong> ${c.uk[currentLang]}
              </div>
            ` : ''}
          </div>

          <div class="mt-4 pt-3 border-t border-stone-100 dark:border-stone-800 flex flex-wrap items-center justify-between gap-2 text-[11px] text-stone-500 dark:text-stone-400">
            <div><strong>Fonte:</strong> ${c.source}</div>
            <div class="flex items-center gap-2">
              <button onclick="window.BR_APP.downloadChartCSV('${c.id}')" class="px-2 py-1 rounded bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 text-stone-700 dark:text-stone-300 font-bold text-[10px]">⬇ CSV</button>
              ${!isTable ? `<button onclick="window.BR_APP.downloadChartPNG('${c.id}')" class="px-2 py-1 rounded bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 text-stone-700 dark:text-stone-300 font-bold text-[10px]">📷 PNG</button>` : ''}
            </div>
          </div>
        </article>
      `;
    }).join('');

    const tc = getThemeColors();
    filtered.forEach(c => {
      const activeType = perChartTypes[c.id] || c.type;
      if (activeType === 'table') return;
      const ctx = document.getElementById(`canvas-${c.id}`);
      if (!ctx) return;

      const chartJsType = activeType === 'area' ? 'line' : activeType;
      const datasets = c.datasets.map(ds => {
        const transformed = transformSeriesData(ds.data, globalTransform);
        const color = ds.borderColor || ds.backgroundColor || '#059669';
        const singleColor = Array.isArray(color) ? color[0] : color;
        return {
          ...ds,
          data: transformed,
          borderColor: chartJsType === 'line' ? singleColor : (ds.borderColor || 'transparent'),
          backgroundColor: activeType === 'area'
            ? singleColor + '28'
            : (chartJsType === 'bar' ? (ds.backgroundColor || singleColor) : (ds.backgroundColor || singleColor)),
          fill: activeType === 'area' ? true : Boolean(ds.fill),
          tension: 0.28,
          borderRadius: chartJsType === 'bar' ? 6 : 0,
          borderWidth: chartJsType === 'bar' ? 0 : (ds.borderWidth || 2.5)
        };
      });

      chartInstances[c.id] = new Chart(ctx, {
        type: chartJsType,
        data: { labels: c.labels, datasets },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: { mode: 'index', intersect: false },
          plugins: {
            legend: { position: 'bottom', labels: { color: tc.text, boxWidth: 12, font: { family: "'Inter', sans-serif", size: 11, weight: 'bold' } } }
          },
          scales: {
            y: {
              type: globalLogScale ? 'logarithmic' : 'linear',
              grid: { color: tc.grid },
              ticks: { color: tc.muted, font: { family: "'Inter', sans-serif", size: 11, weight: '600' } }
            },
            x: {
              grid: { display: false },
              ticks: { color: tc.muted, font: { family: "'Inter', sans-serif", size: 11, weight: '600' } }
            }
          }
        }
      });
    });
  }

  // ==========================================================================
  // 3. 27-STATE GEOGRAPHIC POLYGON MAP + CARTOGRAM + INSPECTOR + RADAR
  // ==========================================================================
  function getMetricColor(val, min, max, higherBetter) {
    let ratio = (val - min) / (max - min || 1);
    ratio = Math.max(0, Math.min(1, ratio));
    const score = higherBetter ? ratio : (1 - ratio);
    if (score < 0.5) {
      const t = score * 2;
      const r = Math.round(225 + (245 - 225) * t);
      const g = Math.round(29 + (158 - 29) * t);
      const b = Math.round(72 + (11 - 72) * t);
      return `rgb(${r},${g},${b})`;
    } else {
      const t = (score - 0.5) * 2;
      const r = Math.round(245 + (5 - 245) * t);
      const g = Math.round(158 + (150 - 158) * t);
      const b = Math.round(11 + (105 - 11) * t);
      return `rgb(${r},${g},${b})`;
    }
  }

  function formatMetricVal(val, mObj) {
    if (val === undefined || val === null) return '-';
    if (mObj.key === 'gdpPerCapita') return 'R$ ' + Math.round(val).toLocaleString('pt-BR');
    return val.toFixed(mObj.dec) + (mObj.unit ? ' ' + mObj.unit : '');
  }

  function renderStateInspector(ufCode) {
    inspectedUf = ufCode;
    const u = D.UF_LIST.find(x => x.uf === ufCode) || D.UF_LIST[2];
    const box = document.getElementById('uf-inspector-card');
    if (!box) return;

    const items = D.STATE_METRICS.slice(0, 12).map(m => {
      const sorted = [...D.UF_LIST].sort((a, b) => m.higherBetter ? b[m.key] - a[m.key] : a[m.key] - b[m.key]);
      const rank = sorted.findIndex(x => x.uf === u.uf) + 1;
      const pctWidth = Math.round(((28 - rank) / 27) * 100);
      return `
        <div class="p-2.5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 flex flex-col justify-between">
          <div class="flex items-start justify-between gap-1 text-[11px] text-stone-600 dark:text-stone-300 font-bold leading-snug">
            <span>${m.label[currentLang]}</span>
            <span class="font-mono text-emerald-700 dark:text-emerald-400 shrink-0">${rank}º/27</span>
          </div>
          <div class="text-sm font-black font-mono text-stone-900 dark:text-stone-100 mt-1">${formatMetricVal(u[m.key], m)}</div>
          <div class="w-full h-1.5 bg-stone-200 dark:bg-stone-800 rounded-full mt-1.5 overflow-hidden">
            <div class="h-full bg-emerald-600 rounded-full" style="width:${pctWidth}%"></div>
          </div>
        </div>
      `;
    }).join('');

    box.innerHTML = `
      <div class="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 dark:border-stone-800 pb-2.5 mb-3">
        <div>
          <span class="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-300">${u.region}</span>
          <h4 class="text-base sm:text-lg font-black text-stone-900 dark:text-stone-100 mt-1">${u.name} (${u.uf}) — Capital: ${u.capital}</h4>
        </div>
        <div class="text-right font-mono text-xs text-stone-500 dark:text-stone-400">População: <strong>${u.pop.toFixed(2)}M</strong></div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2.5">${items}</div>
    `;
  }

  function renderStates() {
    applyChartDefaults();
    const mObj = D.STATE_METRICS.find(m => m.key === selectedMapMetric) || D.STATE_METRICS[0];

    const metricSelector = document.getElementById('map-metric-selector');
    if (metricSelector) {
      metricSelector.innerHTML = D.STATE_METRICS.map(m => `
        <button onclick="window.BR_APP.setMapMetric('${m.key}')"
                class="px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all ${selectedMapMetric === m.key ? 'bg-emerald-700 text-white shadow-sm' : 'bg-[#FAF8F5] dark:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-700 hover:bg-stone-100'}">
          ${m.label[currentLang]}
        </button>
      `).join('');
    }

    const vals = D.UF_LIST.map(u => u[selectedMapMetric]);
    const minVal = Math.min(...vals);
    const maxVal = Math.max(...vals);

    const svgContainer = document.getElementById('brazil-svg-map');
    if (svgContainer) {
      const strokeCol = isDark ? '#1c1917' : '#ffffff';
      if (mapMode === 'geo') {
        const orderedUfs = [...D.UF_LIST].sort((a, b) => {
          const rank = u => (u.uf === inspectedUf ? 2 : (u.uf === 'DF' ? 1 : 0));
          return rank(a) - rank(b);
        });
        const paths = orderedUfs.map(u => {
          const val = u[selectedMapMetric];
          const fill = getMetricColor(val, minVal, maxVal, mObj.higherBetter);
          const formatted = formatMetricVal(val, mObj);
          const isSelected = u.uf === inspectedUf;
          return `
            <g class="cursor-pointer transition-opacity hover:opacity-85"
               onclick="window.BR_APP.selectStateForRadar('${u.uf}')">
              <path d="${u.geo}" fill="${fill}" stroke="${isSelected ? '#facc15' : strokeCol}" stroke-width="${isSelected ? '2.8' : '1.15'}" stroke-linejoin="round" stroke-linecap="round" />
              <title>${u.name} (${u.uf}) — ${mObj.label[currentLang]}: ${formatted}</title>
            </g>
          `;
        }).join('');
        const labels = D.UF_LIST.map(u => {
          const isSmall = ['DF', 'SE', 'AL', 'PB', 'RN', 'ES', 'RJ'].includes(u.uf);
          return `
            <text x="${u.lx}" y="${u.ly}" text-anchor="middle" dominant-baseline="central"
                  onclick="window.BR_APP.selectStateForRadar('${u.uf}')"
                  class="cursor-pointer"
                  fill="#ffffff" font-size="${isSmall ? '9.5' : '11'}" font-weight="900" font-family="Inter, sans-serif"
                  style="paint-order:stroke;stroke:rgba(0,0,0,0.75);stroke-width:2.8px;">${u.uf}</text>
          `;
        }).join('');
        svgContainer.innerHTML = `<svg viewBox="0 0 600 600" class="w-full max-w-[500px] mx-auto select-none">${paths}<g>${labels}</g></svg>`;
      } else {
        const cellSize = 56, gap = 6;
        const tiles = D.UF_LIST.map(u => {
          const x = u.col * (cellSize + gap) + 12;
          const y = u.row * (cellSize + gap) + 12;
          const val = u[selectedMapMetric];
          const fill = getMetricColor(val, minVal, maxVal, mObj.higherBetter);
          const formatted = formatMetricVal(val, mObj);
          const shortVal = selectedMapMetric === 'gdpPerCapita' ? (val / 1000).toFixed(0) + 'k' : val.toFixed(mObj.dec === 0 ? 0 : (mObj.dec === 3 ? 2 : 1));
          return `
            <g class="cursor-pointer transition-transform hover:opacity-90"
               onclick="window.BR_APP.selectStateForRadar('${u.uf}')">
              <rect x="${x}" y="${y}" width="${cellSize}" height="${cellSize}" rx="10"
                    fill="${fill}" stroke="${u.uf === inspectedUf ? '#facc15' : strokeCol}" stroke-width="${u.uf === inspectedUf ? '3.5' : '2'}" />
              <text x="${x + cellSize / 2}" y="${y + 23}" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="900">${u.uf}</text>
              <text x="${x + cellSize / 2}" y="${y + 42}" text-anchor="middle" fill="#ffffff" font-size="9.5" font-weight="700" font-family="Inter, sans-serif">${shortVal}</text>
              <title>${u.name} (${u.uf}) — ${mObj.label[currentLang]}: ${formatted}</title>
            </g>
          `;
        }).join('');
        svgContainer.innerHTML = `<svg viewBox="0 0 510 565" class="w-full max-w-[460px] mx-auto select-none">${tiles}</svg>`;
      }
    }

    renderStateInspector(inspectedUf);

    const barCanvas = document.getElementById('map-ranking-canvas');
    if (barCanvas) {
      if (mapBarChartInstance) mapBarChartInstance.destroy();
      const sortedForBar = [...D.UF_LIST].sort((a, b) => b[selectedMapMetric] - a[selectedMapMetric]);
      mapBarChartInstance = new Chart(barCanvas, {
        type: 'bar',
        data: {
          labels: sortedForBar.map(u => u.uf),
          datasets: [{
            label: mObj.label[currentLang],
            data: sortedForBar.map(u => u[selectedMapMetric]),
            backgroundColor: sortedForBar.map(u => getMetricColor(u[selectedMapMetric], minVal, maxVal, mObj.higherBetter)),
            borderRadius: 4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: { ticks: { font: { family: "'Inter', sans-serif", size: 10, weight: 'bold' } }, grid: { display: false } },
            y: { ticks: { font: { family: "'Inter', sans-serif", size: 11, weight: '600' } } }
          }
        }
      });
    }

    renderStateRadar();

    const filteredStates = D.UF_LIST.filter(u => selectedRegionFilter === 'ALL' || u.region === selectedRegionFilter);
    filteredStates.sort((a, b) => {
      if (stateSortKey === 'name' || stateSortKey === 'region') {
        return stateSortAsc ? a[stateSortKey].localeCompare(b[stateSortKey]) : b[stateSortKey].localeCompare(a[stateSortKey]);
      }
      return stateSortAsc ? a[stateSortKey] - b[stateSortKey] : b[stateSortKey] - a[stateSortKey];
    });

    const tbody = document.getElementById('states-table-body');
    if (tbody) {
      tbody.innerHTML = filteredStates.map((r, idx) => `
        <tr onclick="window.BR_APP.selectStateForRadar('${r.uf}')" class="hover:bg-emerald-50/40 dark:hover:bg-stone-800/60 transition-colors cursor-pointer">
          <td class="py-2.5 px-3 font-bold text-stone-900 dark:text-stone-100 whitespace-nowrap">${idx + 1}. ${r.name} <span class="text-xs font-mono text-stone-500">(${r.uf})</span></td>
          <td class="py-2.5 px-3 text-stone-600 dark:text-stone-400 whitespace-nowrap"><span class="inline-block w-2 h-2 rounded-full mr-1.5" style="background:${REGION_COLORS[r.region]}"></span>${r.region}</td>
          <td class="py-2.5 px-3 font-mono">${r.pop.toFixed(2)}M</td>
          <td class="py-2.5 px-3 font-mono font-semibold text-stone-900 dark:text-stone-100">R$ ${r.gdpPerCapita.toLocaleString('pt-BR')}</td>
          <td class="py-2.5 px-3 font-mono text-emerald-700 dark:text-emerald-400 font-bold">${r.idhm.toFixed(3)}</td>
          <td class="py-2.5 px-3 font-mono">${r.lifeExp.toFixed(1)}</td>
          <td class="py-2.5 px-3 font-mono">${r.sewage.toFixed(1)}%</td>
          <td class="py-2.5 px-3 font-mono">${r.informality.toFixed(1)}%</td>
          <td class="py-2.5 px-3 font-mono">${r.poverty.toFixed(1)}%</td>
          <td class="py-2.5 px-3 font-mono">${r.gini.toFixed(3)}</td>
          <td class="py-2.5 px-3 font-mono font-bold text-sky-700 dark:text-sky-400">${r.idebHs.toFixed(1)}</td>
          <td class="py-2.5 px-3 font-mono font-bold text-rose-600 dark:text-rose-400">${r.homicide.toFixed(1)}</td>
        </tr>
      `).join('');
    }
  }

  function renderStateRadar() {
    const sel1 = document.getElementById('radar-uf-1');
    const sel2 = document.getElementById('radar-uf-2');
    const sel3 = document.getElementById('radar-uf-3');
    if (sel1 && !sel1.options.length) {
      const opts = D.UF_LIST.map(u => `<option value="${u.uf}">${u.name} (${u.uf})</option>`).join('');
      sel1.innerHTML = opts;
      sel2.innerHTML = opts;
      sel3.innerHTML = opts;
      sel1.value = radarUf1;
      sel2.value = radarUf2;
      sel3.value = radarUf3;
    }

    const u1 = D.UF_LIST.find(u => u.uf === radarUf1) || D.UF_LIST[2];
    const u2 = D.UF_LIST.find(u => u.uf === radarUf2) || D.UF_LIST[19];
    const u3 = D.UF_LIST.find(u => u.uf === radarUf3) || D.UF_LIST[4];

    const axes = [
      { key: 'gdpPerCapita', label: 'Renda (PIB/cap)', higher: true },
      { key: 'idhm', label: 'IDH Estadual', higher: true },
      { key: 'lifeExp', label: 'Longevidade', higher: true },
      { key: 'sewage', label: 'Rede de Esgoto', higher: true },
      { key: 'informality', label: 'Formalização Trab.', higher: false },
      { key: 'idebHs', label: 'Educação (IDEB EM)', higher: true },
      { key: 'homicide', label: 'Segurança Pública', higher: false }
    ];

    function normState(u) {
      return axes.map(ax => {
        const all = D.UF_LIST.map(x => x[ax.key]);
        const mn = Math.min(...all);
        const mx = Math.max(...all);
        const r = (u[ax.key] - mn) / (mx - mn || 1);
        return Math.round((ax.higher ? r : 1 - r) * 100);
      });
    }

    const ctx = document.getElementById('state-radar-canvas');
    if (!ctx) return;
    if (stateRadarInstance) stateRadarInstance.destroy();
    const tc = getThemeColors();
    stateRadarInstance = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: axes.map(a => a.label),
        datasets: [
          { label: `${u1.name} (${u1.uf})`, data: normState(u1), borderColor: '#10b981', backgroundColor: 'rgba(16,185,129,0.2)', borderWidth: 2.5 },
          { label: `${u2.name} (${u2.uf})`, data: normState(u2), borderColor: '#f43f5e', backgroundColor: 'rgba(244,63,94,0.16)', borderWidth: 2.5 },
          { label: `${u3.name} (${u3.uf})`, data: normState(u3), borderColor: '#3b82f6', backgroundColor: 'rgba(59,130,246,0.16)', borderWidth: 2.5 }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            min: 0, max: 100,
            grid: { color: tc.grid },
            angleLines: { color: tc.grid },
            pointLabels: { color: tc.text, font: { family: "'Inter', sans-serif", size: 11, weight: 'bold' } },
            ticks: { stepSize: 25, display: false }
          }
        },
        plugins: { legend: { position: 'bottom', labels: { color: tc.text } } }
      }
    });
  }

  // ==========================================================================
  // 4. PROFESSIONS & SALARIES EXPLORER (60 CAREERS IN BRAZIL — RAIS/CAGED/PNAD)
  // ==========================================================================
  function renderProfessions() {
    applyChartDefaults();
    if (!D.PROFESSIONS || !D.PROFESSION_SECTORS) return;

    const sectorBar = document.getElementById('prof-sector-bar');
    if (sectorBar) {
      sectorBar.innerHTML = D.PROFESSION_SECTORS.map(s => `
        <button onclick="window.BR_APP.setProfSector('${s.id}')"
                class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${selectedProfSector === s.id ? 'bg-emerald-700 text-white shadow-sm' : 'bg-[#FAF8F5] dark:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-700 hover:bg-stone-100'}">
          ${s.label[currentLang]}
        </button>
      `).join('');
    }

    // Populate 2-Career Comparator dropdowns
    const sel1 = document.getElementById('prof-comp-1');
    const sel2 = document.getElementById('prof-comp-2');
    if (sel1 && !sel1.options.length) {
      const opts = D.PROFESSIONS.map(p => `<option value="${p.name}">${p.name} (Mediana: R$ ${p.median.toLocaleString('pt-BR')})</option>`).join('');
      sel1.innerHTML = opts;
      sel2.innerHTML = opts;
      sel1.value = compProf1;
      sel2.value = compProf2;
    }

    renderProfessionComparator();

    let list = D.PROFESSIONS.filter(p => {
      const matchS = selectedProfSector === 'ALL' || p.sector === selectedProfSector;
      const q = profSearchTerm;
      const matchQ = !q || p.name.toLowerCase().includes(q) || p.note.toLowerCase().includes(q) || p.edu.toLowerCase().includes(q);
      return matchS && matchQ;
    });

    list.sort((a, b) => {
      if (profSortKey === 'name') {
        return profSortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
      }
      return profSortAsc ? a[profSortKey] - b[profSortKey] : b[profSortKey] - a[profSortKey];
    });

    const countEl = document.getElementById('prof-count-badge');
    if (countEl) countEl.textContent = `${list.length} / ${D.PROFESSIONS.length} profissões`;

    // Render Top 20 Chart from filtered list
    const chartSlice = list.slice(0, 18);
    const ctx = document.getElementById('prof-chart-canvas');
    if (ctx) {
      if (profChartInstance) profChartInstance.destroy();
      const tc = getThemeColors();
      profChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: chartSlice.map(p => p.name.length > 32 ? p.name.slice(0, 30) + '…' : p.name),
          datasets: [
            {
              label: 'P25 (Entrada / Júnior R$)',
              data: chartSlice.map(p => p.p25),
              backgroundColor: '#94a3b8',
              borderRadius: 4
            },
            {
              label: 'Salário Mediano (R$/mês)',
              data: chartSlice.map(p => p.median),
              backgroundColor: '#10b981',
              borderRadius: 4
            },
            {
              label: 'P90 (Topo Sênior / Especialista R$)',
              data: chartSlice.map(p => p.p90),
              backgroundColor: '#6366f1',
              borderRadius: 4
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: { mode: 'index', intersect: false },
          plugins: {
            legend: { position: 'bottom', labels: { color: tc.text, font: { family: "'Inter', sans-serif", size: 11, weight: 'bold' } } },
            tooltip: {
              callbacks: {
                label: c => `${c.dataset.label}: R$ ${Number(c.raw).toLocaleString('pt-BR')}`
              }
            }
          },
          scales: {
            x: { ticks: { color: tc.muted, font: { family: "'Inter', sans-serif", size: 10, weight: 'bold' } }, grid: { display: false } },
            y: {
              ticks: {
                color: tc.muted,
                font: { family: "'Inter', sans-serif", size: 11, weight: '600' },
                callback: v => 'R$ ' + Number(v).toLocaleString('pt-BR')
              },
              grid: { color: tc.grid }
            }
          }
        }
      });
    }

    // Render Full Table of Professions
    const maxP90 = Math.max(...D.PROFESSIONS.map(p => p.p90));
    const tbody = document.getElementById('prof-table-body');
    if (tbody) {
      tbody.innerHTML = list.map((p, idx) => {
        const sObj = D.PROFESSION_SECTORS.find(s => s.id === p.sector) || D.PROFESSION_SECTORS[0];
        const barLeft = Math.round((p.p25 / maxP90) * 100);
        const barWidth = Math.max(4, Math.round(((p.p90 - p.p25) / maxP90) * 100));
        const medPos = Math.round((p.median / maxP90) * 100);
        return `
          <tr class="hover:bg-emerald-50/40 dark:hover:bg-stone-800/60 transition-colors">
            <td class="py-3 px-3">
              <div class="font-extrabold text-stone-900 dark:text-stone-100 text-xs sm:text-sm">${idx + 1}. ${p.name}</div>
              <div class="text-[11px] text-stone-500 dark:text-stone-400 mt-0.5">${p.note}</div>
            </td>
            <td class="py-3 px-3 whitespace-nowrap">
              <span class="px-2 py-0.5 rounded-md text-[10px] font-bold bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-700">${sObj.label[currentLang]}</span>
              <div class="text-[10px] text-stone-400 mt-1">Escolaridade: ${p.edu}</div>
            </td>
            <td class="py-3 px-3 font-mono text-xs text-stone-600 dark:text-stone-400 whitespace-nowrap">R$ ${p.p25.toLocaleString('pt-BR')}</td>
            <td class="py-3 px-3 font-mono text-sm font-black text-emerald-700 dark:text-emerald-400 whitespace-nowrap">R$ ${p.median.toLocaleString('pt-BR')}</td>
            <td class="py-3 px-3 font-mono text-xs font-bold text-indigo-700 dark:text-indigo-400 whitespace-nowrap">R$ ${p.p90.toLocaleString('pt-BR')}</td>
            <td class="py-3 px-3 min-w-[140px]">
              <div class="relative w-full h-2.5 bg-stone-200 dark:bg-stone-800 rounded-full overflow-hidden">
                <div class="absolute top-0 bottom-0 bg-emerald-500/50 rounded-full" style="left:${barLeft}%;width:${barWidth}%"></div>
                <div class="absolute top-0 bottom-0 w-1.5 bg-emerald-700 dark:bg-emerald-300 rounded-full" style="left:${medPos}%"></div>
              </div>
              <div class="text-[10px] font-mono text-stone-500 mt-1">Média: R$ ${p.mean.toLocaleString('pt-BR')}</div>
            </td>
            <td class="py-3 px-3 font-mono text-xs whitespace-nowrap">${p.workersK >= 1000 ? (p.workersK / 1000).toFixed(2) + 'M' : p.workersK + ' mil'}</td>
            <td class="py-3 px-3 font-mono text-xs whitespace-nowrap">${p.formalPct}%</td>
            <td class="py-3 px-3 font-mono text-xs whitespace-nowrap">${p.femalePct}% ♀</td>
          </tr>
        `;
      }).join('');
    }
  }

  function renderProfessionComparator() {
    const p1 = D.PROFESSIONS.find(p => p.name === compProf1) || D.PROFESSIONS[0];
    const p2 = D.PROFESSIONS.find(p => p.name === compProf2) || D.PROFESSIONS[24];
    const box = document.getElementById('prof-comp-result');
    if (!box || !p1 || !p2) return;

    const ratio = (p1.median / Math.max(1, p2.median)).toFixed(1);
    const monthsForOne = (p1.median / Math.max(1, p2.median)).toFixed(1);
    box.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        <div class="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
          <div class="text-[10px] font-extrabold uppercase text-emerald-700 dark:text-emerald-400">Profissão A</div>
          <div class="text-sm font-black text-stone-900 dark:text-stone-100 mt-0.5">${p1.name}</div>
          <div class="text-2xl font-black font-mono text-emerald-700 dark:text-emerald-400 mt-2">R$ ${p1.median.toLocaleString('pt-BR')}<span class="text-xs font-normal">/mês</span></div>
          <div class="text-[11px] font-mono text-stone-600 dark:text-stone-400 mt-1">Faixa P25–P90: R$ ${p1.p25.toLocaleString('pt-BR')} a R$ ${p1.p90.toLocaleString('pt-BR')}</div>
          <div class="text-[11px] text-stone-500 mt-1">Força de trabalho: ${p1.workersK} mil • Formal: ${p1.formalPct}%</div>
        </div>

        <div class="p-4 rounded-2xl bg-[#FAF8F5] dark:bg-stone-950 border border-stone-200 dark:border-stone-800 text-center">
          <div class="text-[11px] font-bold uppercase text-stone-500">Razão Salarial Mediana</div>
          <div class="text-3xl font-black font-mono text-indigo-700 dark:text-indigo-400 my-1">${ratio}×</div>
          <p class="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
            1 mês na <strong>Profissão A</strong> equivale a <strong>${monthsForOne} meses</strong> de salário mediano na <strong>Profissão B</strong>.
          </p>
        </div>

        <div class="p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800">
          <div class="text-[10px] font-extrabold uppercase text-indigo-700 dark:text-indigo-400">Profissão B</div>
          <div class="text-sm font-black text-stone-900 dark:text-stone-100 mt-0.5">${p2.name}</div>
          <div class="text-2xl font-black font-mono text-indigo-700 dark:text-indigo-400 mt-2">R$ ${p2.median.toLocaleString('pt-BR')}<span class="text-xs font-normal">/mês</span></div>
          <div class="text-[11px] font-mono text-stone-600 dark:text-stone-400 mt-1">Faixa P25–P90: R$ ${p2.p25.toLocaleString('pt-BR')} a R$ ${p2.p90.toLocaleString('pt-BR')}</div>
          <div class="text-[11px] text-stone-500 mt-1">Força de trabalho: ${p2.workersK} mil • Formal: ${p2.formalPct}%</div>
        </div>
      </div>
    `;
  }

  // ==========================================================================
  // 5. CITIES, LOT SIZE (m²) & URBAN FORM EXPLORER (36 BRAZILIAN CITIES)
  // ==========================================================================
  function formatCityMetric(val, mDef) {
    if (val === undefined || val === null) return '-';
    if (mDef.key === 'priceM2') return 'R$ ' + Math.round(val).toLocaleString('pt-BR');
    return val.toFixed(mDef.dec) + (mDef.unit ? ' ' + mDef.unit : '');
  }

  function renderCities() {
    applyChartDefaults();
    if (!D.CITIES_URBAN || !D.CITY_METRICS_DEF) return;

    const mDef = D.CITY_METRICS_DEF.find(m => m.key === selectedCityMetric) || D.CITY_METRICS_DEF[0];

    // Metric selector pills
    const metricBar = document.getElementById('city-metric-bar');
    if (metricBar) {
      metricBar.innerHTML = D.CITY_METRICS_DEF.map(m => `
        <button onclick="window.BR_APP.setCityMetric('${m.key}')"
                class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${selectedCityMetric === m.key ? 'bg-emerald-700 text-white shadow-sm' : 'bg-[#FAF8F5] dark:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-700 hover:bg-stone-100'}">
          ${m.label[currentLang]}
        </button>
      `).join('');
    }

    // Populate XY scatter selects for cities
    const sx = document.getElementById('city-scatter-x');
    const sy = document.getElementById('city-scatter-y');
    if (sx && !sx.options.length) {
      const opts = D.CITY_METRICS_DEF.map(m => `<option value="${m.key}">${m.label[currentLang]}</option>`).join('');
      sx.innerHTML = opts;
      sy.innerHTML = opts;
      sx.value = cityScatterX;
      sy.value = cityScatterY;
    }

    // Inspector card for selected city
    renderCityInspector(inspectedCityName);

    // Filter cities by region
    const filteredCities = D.CITIES_URBAN.filter(c => selectedCityRegion === 'ALL' || c.region === selectedCityRegion);

    // 1. Bar Chart of Cities sorted descending on selectedCityMetric
    const sortedForBar = [...filteredCities].sort((a, b) => b[selectedCityMetric] - a[selectedCityMetric]);
    const barCtx = document.getElementById('city-ranking-canvas');
    if (barCtx) {
      if (cityBarChartInstance) cityBarChartInstance.destroy();
      const tc = getThemeColors();
      cityBarChartInstance = new Chart(barCtx, {
        type: 'bar',
        data: {
          labels: sortedForBar.map(c => `${c.city} (${c.uf})`),
          datasets: [{
            label: mDef.label[currentLang],
            data: sortedForBar.map(c => c[selectedCityMetric]),
            backgroundColor: sortedForBar.map(c => REGION_COLORS[c.region] || '#10b981'),
            borderRadius: 4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: ctx => `${ctx.label}: ${formatCityMetric(ctx.raw, mDef)}`
              }
            }
          },
          scales: {
            x: { ticks: { color: tc.muted, font: { family: "'Inter', sans-serif", size: 10, weight: 'bold' } }, grid: { display: false } },
            y: { ticks: { color: tc.muted, font: { family: "'Inter', sans-serif", size: 11, weight: '600' } }, grid: { color: tc.grid } }
          }
        }
      });
    }

    // 2. XY Bubble Chart of Cities (e.g. Lot Size m² vs Verticalization %)
    renderCityScatter();

    // 3. Sortable Table of 36 Cities
    const sortedForTable = [...filteredCities].sort((a, b) => {
      if (citySortKey === 'city' || citySortKey === 'region') {
        return citySortAsc ? a[citySortKey].localeCompare(b[citySortKey]) : b[citySortKey].localeCompare(a[citySortKey]);
      }
      return citySortAsc ? a[citySortKey] - b[citySortKey] : b[citySortKey] - a[citySortKey];
    });

    const tbody = document.getElementById('cities-table-body');
    if (tbody) {
      tbody.innerHTML = sortedForTable.map((c, idx) => `
        <tr onclick="window.BR_APP.selectCity('${c.city}')" class="hover:bg-emerald-50/40 dark:hover:bg-stone-800/60 transition-colors cursor-pointer">
          <td class="py-2.5 px-3 font-bold text-stone-900 dark:text-stone-100 whitespace-nowrap">${idx + 1}. ${c.city} <span class="text-xs font-mono text-stone-500">(${c.uf})</span></td>
          <td class="py-2.5 px-3 text-stone-600 dark:text-stone-400 whitespace-nowrap"><span class="inline-block w-2 h-2 rounded-full mr-1.5" style="background:${REGION_COLORS[c.region]}"></span>${c.region}</td>
          <td class="py-2.5 px-3 font-mono">${c.popM.toFixed(2)}M</td>
          <td class="py-2.5 px-3 font-mono font-black text-emerald-700 dark:text-emerald-400">${c.lotSizeM2} m²</td>
          <td class="py-2.5 px-3 font-mono text-stone-500">${c.minLotM2} m²</td>
          <td class="py-2.5 px-3 font-mono font-bold text-indigo-700 dark:text-indigo-400">${c.aptSizeM2} m²</td>
          <td class="py-2.5 px-3 font-mono font-semibold">R$ ${c.priceM2.toLocaleString('pt-BR')}</td>
          <td class="py-2.5 px-3 font-mono">${c.aptPct.toFixed(1)}%</td>
          <td class="py-2.5 px-3 font-mono text-rose-600 dark:text-rose-400 font-bold">${c.favelaPct.toFixed(1)}%</td>
          <td class="py-2.5 px-3 font-mono">${c.treesPct.toFixed(1)}%</td>
          <td class="py-2.5 px-3 font-mono">${c.rampsPct.toFixed(1)}%</td>
          <td class="py-2.5 px-3 font-mono">${c.commuteMin} min</td>
        </tr>
      `).join('');
    }
  }

  function renderCityInspector(cityName) {
    inspectedCityName = cityName;
    const c = D.CITIES_URBAN.find(x => x.city === cityName) || D.CITIES_URBAN[0];
    const box = document.getElementById('city-inspector-card');
    if (!box || !c) return;

    box.innerHTML = `
      <div class="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 dark:border-stone-800 pb-3 mb-3">
        <div>
          <span class="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-300">${c.region} • ${c.uf}</span>
          <h4 class="text-lg font-black text-stone-900 dark:text-stone-100 mt-1">${c.city} (${c.uf}) — População: ${c.popM.toFixed(2)}M</h4>
          <p class="text-xs text-stone-600 dark:text-stone-400 mt-0.5">${c.note}</p>
        </div>
        <div class="text-right font-mono text-xs text-stone-500">Densidade: <strong>${c.density.toLocaleString('pt-BR')} hab/km²</strong></div>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
        <div class="p-3 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
          <div class="text-[10px] font-bold uppercase text-stone-500">Lote Urbano Médio</div>
          <div class="text-lg font-black font-mono text-emerald-700 dark:text-emerald-400 mt-0.5">${c.lotSizeM2} m²</div>
          <div class="text-[10px] text-stone-400">Mín. Lei: ${c.minLotM2} m²</div>
        </div>
        <div class="p-3 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
          <div class="text-[10px] font-bold uppercase text-stone-500">Área Média Apto</div>
          <div class="text-lg font-black font-mono text-indigo-700 dark:text-indigo-400 mt-0.5">${c.aptSizeM2} m²</div>
          <div class="text-[10px] text-stone-400">Verticalização: ${c.aptPct}%</div>
        </div>
        <div class="p-3 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
          <div class="text-[10px] font-bold uppercase text-stone-500">Preço FipeZap m²</div>
          <div class="text-lg font-black font-mono text-stone-900 dark:text-stone-100 mt-0.5">R$ ${c.priceM2.toLocaleString('pt-BR')}</div>
          <div class="text-[10px] text-stone-400">Aluguel: ${c.rentPct}% dom.</div>
        </div>
        <div class="p-3 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
          <div class="text-[10px] font-bold uppercase text-stone-500">Favelas (Censo 22)</div>
          <div class="text-lg font-black font-mono text-rose-600 dark:text-rose-400 mt-0.5">${c.favelaPct}%</div>
          <div class="text-[10px] text-stone-400">Vagos: ${c.vacantPct}%</div>
        </div>
        <div class="p-3 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
          <div class="text-[10px] font-bold uppercase text-stone-500">Urbanismo Censo</div>
          <div class="text-lg font-black font-mono text-teal-700 dark:text-teal-400 mt-0.5">${c.treesPct}% 🌳</div>
          <div class="text-[10px] text-stone-400">Rampas: ${c.rampsPct}% | ${c.commuteMin}m</div>
        </div>
      </div>
    `;
  }

  function renderCityScatter() {
    const ctx = document.getElementById('city-scatter-canvas');
    if (!ctx) return;
    if (cityScatterChartInstance) cityScatterChartInstance.destroy();

    const mX = D.CITY_METRICS_DEF.find(m => m.key === cityScatterX) || D.CITY_METRICS_DEF[0];
    const mY = D.CITY_METRICS_DEF.find(m => m.key === cityScatterY) || D.CITY_METRICS_DEF[4];
    const tc = getThemeColors();

    const regions = ['Sudeste', 'Sul', 'Centro-Oeste', 'Nordeste', 'Norte'];
    const datasets = regions.map(reg => ({
      type: 'bubble',
      label: reg,
      data: D.CITIES_URBAN.filter(c => c.region === reg).map(c => ({
        x: c[cityScatterX],
        y: c[cityScatterY],
        r: Math.max(5, Math.min(20, Math.sqrt(c.popM) * 5.2)),
        city: c.city,
        uf: c.uf
      })),
      backgroundColor: REGION_COLORS[reg] + 'BF',
      borderColor: REGION_COLORS[reg],
      borderWidth: 1.5
    }));

    cityScatterChartInstance = new Chart(ctx, {
      data: { datasets },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom', labels: { color: tc.text, font: { family: "'Inter', sans-serif", size: 11, weight: 'bold' } } },
          tooltip: {
            callbacks: {
              label: c => {
                const raw = c.raw;
                return `${raw.city} (${raw.uf}): ${mX.label[currentLang]}=${raw.x}, ${mY.label[currentLang]}=${raw.y}`;
              }
            }
          }
        },
        scales: {
          x: {
            title: { display: true, text: mX.label[currentLang], color: tc.text, font: { family: "'Inter', sans-serif", weight: 'bold' } },
            ticks: { color: tc.muted, font: { family: "'Inter', sans-serif", size: 11 } },
            grid: { color: tc.grid }
          },
          y: {
            title: { display: true, text: mY.label[currentLang], color: tc.text, font: { family: "'Inter', sans-serif", weight: 'bold' } },
            ticks: { color: tc.muted, font: { family: "'Inter', sans-serif", size: 11 } },
            grid: { color: tc.grid }
          }
        }
      }
    });
  }

  // ==========================================================================
  // 6. NAMES & SURNAMES EXPLORER + LIVE IBGE NOMES API (CENSO + ARPEN)
  // ==========================================================================
  function normalizeIbgePeriodLabel(p) {
    if (!p) return '';
    if (p === '1930[' || p === 'Até 1930') return 'Até 1930';
    const m = p.match(/\[(\d{4}),(\d{4})\[/);
    if (m) return `${m[1]}–${m[2].slice(2)}`;
    return p;
  }

  async function fetchSingleIbgeName(rawName) {
    const clean = (rawName || '').trim().toUpperCase();
    if (!clean) return null;

    // Try live IBGE API v2 first
    try {
      const res = await fetch(`https://servicodados.ibge.gov.br/api/v2/censos/nomes/${encodeURIComponent(clean.toLowerCase())}`);
      if (res.ok) {
        const arr = await res.json();
        if (Array.isArray(arr) && arr.length > 0 && Array.isArray(arr[0].res)) {
          const rows = arr[0].res;
          const labels = rows.map(r => normalizeIbgePeriodLabel(r.periodo));
          const values = rows.map(r => Number((r.frequencia / 1000).toFixed(2)));
          const totalK = Number(values.reduce((a, b) => a + b, 0).toFixed(1));
          let maxIdx = 0;
          values.forEach((v, i) => { if (v > values[maxIdx]) maxIdx = i; });
          return {
            name: arr[0].nome || clean,
            labels,
            valuesK: values,
            totalK,
            peakDecade: labels[maxIdx] || '-',
            source: 'API IBGE ao Vivo'
          };
        }
      }
    } catch (e) {
      // Fallback to local preloaded TOP_FIRST_NAMES if offline
    }

    const local = (D.TOP_FIRST_NAMES || []).find(n => n.name.toUpperCase() === clean);
    if (local) {
      return {
        name: local.name.toUpperCase(),
        labels: D.NAME_DECADES,
        valuesK: local.byDecadeK,
        totalK: local.totalK,
        peakDecade: local.peakDecade,
        source: 'Base Local Censo IBGE'
      };
    }
    return null;
  }

  async function fetchAndRenderIbgeNames(nameA, nameB) {
    applyChartDefaults();
    selectedName1 = (nameA || selectedName1 || 'MARIA').trim().toUpperCase();
    selectedName2 = (nameB !== undefined ? nameB : selectedName2 || '').trim().toUpperCase();

    const in1 = document.getElementById('ibge-name-input-1');
    const in2 = document.getElementById('ibge-name-input-2');
    if (in1 && in1.value.toUpperCase() !== selectedName1) in1.value = selectedName1;
    if (in2 && in2.value.toUpperCase() !== selectedName2) in2.value = selectedName2;

    const statusEl = document.getElementById('ibge-name-status');
    if (statusEl) statusEl.textContent = `Consultando API Censo Nomes IBGE para "${selectedName1}"${selectedName2 ? ` vs "${selectedName2}"` : ''}...`;

    const [res1, res2] = await Promise.all([
      fetchSingleIbgeName(selectedName1),
      selectedName2 ? fetchSingleIbgeName(selectedName2) : Promise.resolve(null)
    ]);

    if (!res1) {
      if (statusEl) statusEl.textContent = `⚠️ Nome "${selectedName1}" não encontrado ou com frequência abaixo do limiar de privacidade do Censo IBGE.`;
      return;
    }

    if (statusEl) {
      statusEl.textContent = `✅ ${res1.source}: ${res1.name} (${res1.totalK.toLocaleString('pt-BR')} mil brasileiros, pico em ${res1.peakDecade})${res2 ? ` × ${res2.name} (${res2.totalK.toLocaleString('pt-BR')} mil, pico em ${res2.peakDecade})` : ''}`;
    }

    // Update Summary KPI Cards for the 2 compared names
    const summaryEl = document.getElementById('ibge-names-summary-cards');
    if (summaryEl) {
      summaryEl.innerHTML = `
        <div class="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
          <div class="text-[10px] font-extrabold uppercase text-emerald-700 dark:text-emerald-400">Nome 1 (${res1.source})</div>
          <div class="text-xl font-black text-stone-900 dark:text-stone-100 mt-0.5">${res1.name}</div>
          <div class="text-2xl font-black font-mono text-emerald-700 dark:text-emerald-400 mt-1">${res1.totalK >= 1000 ? (res1.totalK / 1000).toFixed(2) + ' Milhões' : res1.totalK.toLocaleString('pt-BR') + ' mil'}</div>
          <div class="text-xs text-stone-600 dark:text-stone-400 mt-1">Década de pico: <strong>${res1.peakDecade}</strong></div>
        </div>
        ${res2 ? `
          <div class="p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800">
            <div class="text-[10px] font-extrabold uppercase text-indigo-700 dark:text-indigo-400">Nome 2 (${res2.source})</div>
            <div class="text-xl font-black text-stone-900 dark:text-stone-100 mt-0.5">${res2.name}</div>
            <div class="text-2xl font-black font-mono text-indigo-700 dark:text-indigo-400 mt-1">${res2.totalK >= 1000 ? (res2.totalK / 1000).toFixed(2) + ' Milhões' : res2.totalK.toLocaleString('pt-BR') + ' mil'}</div>
            <div class="text-xs text-stone-600 dark:text-stone-400 mt-1">Década de pico: <strong>${res2.peakDecade}</strong></div>
          </div>
        ` : ''}
      `;
    }

    const ctx = document.getElementById('names-decade-canvas');
    if (ctx) {
      if (namesDecadeChartInstance) namesDecadeChartInstance.destroy();
      const tc = getThemeColors();
      const labels = D.NAME_DECADES || res1.labels;
      const mapToLabels = (r) => labels.map(lbl => {
        const idx = r.labels.indexOf(lbl);
        return idx >= 0 ? r.valuesK[idx] : 0;
      });

      const datasets = [
        {
          label: `${res1.name} (Milhares de Nascimentos por Década)`,
          data: mapToLabels(res1),
          borderColor: '#10b981',
          backgroundColor: 'rgba(16,185,129,0.18)',
          fill: true,
          borderWidth: 3,
          tension: 0.28
        }
      ];
      if (res2) {
        datasets.push({
          label: `${res2.name} (Milhares de Nascimentos por Década)`,
          data: mapToLabels(res2),
          borderColor: '#6366f1',
          backgroundColor: 'rgba(99,102,241,0.18)',
          fill: true,
          borderWidth: 3,
          tension: 0.28
        });
      }

      namesDecadeChartInstance = new Chart(ctx, {
        type: 'line',
        data: { labels, datasets },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: { mode: 'index', intersect: false },
          plugins: {
            legend: { position: 'bottom', labels: { color: tc.text, font: { family: "'Inter', sans-serif", size: 11, weight: 'bold' } } },
            tooltip: {
              callbacks: {
                label: c => `${c.dataset.label.split(' (')[0]}: ${Number(c.raw).toLocaleString('pt-BR')} mil registros na década`
              }
            }
          },
          scales: {
            x: { ticks: { color: tc.muted, font: { family: "'Inter', sans-serif", size: 11, weight: 'bold' } }, grid: { display: false } },
            y: {
              ticks: {
                color: tc.muted,
                font: { family: "'Inter', sans-serif", size: 11, weight: '600' },
                callback: v => v.toLocaleString('pt-BR') + 'k'
              },
              grid: { color: tc.grid }
            }
          }
        }
      });
    }
  }

  function renderNames() {
    applyChartDefaults();
    if (!D.TOP_FIRST_NAMES) return;

    // 1. Render Top 20 Preloaded First Names clickable chips & table
    const chipsEl = document.getElementById('top-names-chips');
    if (chipsEl) {
      chipsEl.innerHTML = D.TOP_FIRST_NAMES.map(n => `
        <button onclick="window.BR_APP.selectFirstName('${n.name}', '')"
                class="px-3 py-1.5 rounded-xl text-xs font-bold bg-[#FAF8F5] dark:bg-stone-800 hover:bg-emerald-50 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-700 transition-all">
          #${n.rank} <strong>${n.name}</strong> <span class="font-mono text-[10px] text-emerald-700 dark:text-emerald-400">(${n.totalK >= 1000 ? (n.totalK / 1000).toFixed(1) + 'M' : n.totalK + 'k'})</span>
        </button>
      `).join('');
    }

    // 2. Render Surnames Chart & Cards
    const surCtx = document.getElementById('surnames-chart-canvas');
    if (surCtx && D.TOP_SURNAMES) {
      if (surnamesChartInstance) surnamesChartInstance.destroy();
      const tc = getThemeColors();
      surnamesChartInstance = new Chart(surCtx, {
        type: 'bar',
        data: {
          labels: D.TOP_SURNAMES.map(s => `${s.rank}. ${s.surname}`),
          datasets: [{
            label: 'População com o Sobrenome (Milhões)',
            data: D.TOP_SURNAMES.map(s => s.popM),
            backgroundColor: '#10b981',
            borderRadius: 5
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: c => {
                  const s = D.TOP_SURNAMES[c.dataIndex];
                  return `${s.surname}: ${s.popM}M brasileiros (${s.pctPop}% da pop.) — ${s.origin}`;
                }
              }
            }
          },
          scales: {
            x: { ticks: { color: tc.muted, font: { family: "'Inter', sans-serif", size: 11, weight: 'bold' } }, grid: { display: false } },
            y: {
              ticks: { color: tc.muted, font: { family: "'Inter', sans-serif", size: 11, weight: '600' }, callback: v => v + 'M' },
              grid: { color: tc.grid }
            }
          }
        }
      });
    }

    const surListEl = document.getElementById('surnames-cards-grid');
    if (surListEl && D.TOP_SURNAMES) {
      surListEl.innerHTML = D.TOP_SURNAMES.slice(0, 8).map(s => `
        <div class="p-3.5 rounded-2xl bg-[#FAF8F5] dark:bg-stone-950 border border-stone-200 dark:border-stone-800">
          <div class="flex items-center justify-between">
            <span class="text-sm font-black text-stone-900 dark:text-stone-100">#${s.rank} ${s.surname}</span>
            <span class="font-mono text-xs font-extrabold text-emerald-700 dark:text-emerald-400">${s.popM}M (${s.pctPop}%)</span>
          </div>
          <p class="text-[11px] text-stone-500 dark:text-stone-400 mt-1 leading-snug">${s.origin}</p>
        </div>
      `).join('');
    }

    // 3. Render Baby Names 2024 Grid (Cartórios ARPEN)
    const babyEl = document.getElementById('baby-names-2024-grid');
    if (babyEl && D.BABY_NAMES_2024) {
      babyEl.innerHTML = D.BABY_NAMES_2024.map(b => `
        <div onclick="window.BR_APP.selectFirstName('${b.name}', '')"
             class="p-3 rounded-2xl bg-[#FAF8F5] dark:bg-stone-950 border border-stone-200 dark:border-stone-800 hover:border-emerald-500 cursor-pointer transition-all flex items-center justify-between">
          <div>
            <span class="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${b.gender === 'F' ? 'bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300' : 'bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300'}">#${b.rank} • ${b.gender === 'F' ? '♀' : '♂'}</span>
            <div class="text-sm font-black text-stone-900 dark:text-stone-100 mt-1">${b.name}</div>
          </div>
          <div class="text-right">
            <div class="text-xs font-mono font-extrabold text-emerald-700 dark:text-emerald-400">${b.births2024.toLocaleString('pt-BR')}</div>
            <div class="text-[10px] text-stone-400">nasc. 2024</div>
          </div>
        </div>
      `).join('');
    }

    fetchAndRenderIbgeNames(selectedName1, selectedName2);
  }

  // ==========================================================================
  // 7. CORRELATION & OLS REGRESSION LAB (27 UFs)
  // ==========================================================================
  function renderCorrelations() {
    applyChartDefaults();
    const selX = document.getElementById('corr-select-x');
    const selY = document.getElementById('corr-select-y');
    if (selX && !selX.options.length) {
      const opts = D.STATE_METRICS.map(m => `<option value="${m.key}">${m.label[currentLang]}</option>`).join('');
      selX.innerHTML = opts;
      selY.innerHTML = opts;
      selX.value = corrX;
      selY.value = corrY;
    }

    const mX = D.STATE_METRICS.find(m => m.key === corrX) || D.STATE_METRICS[5];
    const mY = D.STATE_METRICS.find(m => m.key === corrY) || D.STATE_METRICS[0];

    const pts = D.UF_LIST.map(u => ({
      x: u[corrX],
      y: u[corrY],
      r: Math.max(5, Math.min(20, Math.sqrt(u.pop) * 3.2)),
      uf: u.uf,
      name: u.name,
      region: u.region
    }));

    const n = pts.length;
    const sumX = pts.reduce((a, p) => a + p.x, 0);
    const sumY = pts.reduce((a, p) => a + p.y, 0);
    const meanX = sumX / n;
    const meanY = sumY / n;

    let num = 0, denX = 0, denY = 0;
    pts.forEach(p => {
      const dx = p.x - meanX;
      const dy = p.y - meanY;
      num += dx * dy;
      denX += dx * dx;
      denY += dy * dy;
    });

    const rVal = num / Math.sqrt((denX * denY) || 1);
    const r2Val = rVal * rVal;
    const slope = num / (denX || 1);
    const intercept = meanY - slope * meanX;

    const minX = Math.min(...pts.map(p => p.x));
    const maxX = Math.max(...pts.map(p => p.x));

    document.getElementById('corr-stat-r').textContent = (rVal >= 0 ? '+' : '') + rVal.toFixed(3);
    document.getElementById('corr-stat-r2').textContent = (r2Val * 100).toFixed(1) + '%';
    document.getElementById('corr-stat-eq').textContent = `y = ${intercept.toFixed(2)} ${slope >= 0 ? '+' : '-'} ${Math.abs(slope).toFixed(3)}·x`;

    const strength = Math.abs(rVal) > 0.7 ? 'Forte' : (Math.abs(rVal) > 0.4 ? 'Moderada' : 'Fraca');
    const dir = rVal >= 0 ? 'Positiva (Direta)' : 'Negativa (Inversa)';
    document.getElementById('corr-stat-interp').textContent = `${strength} e ${dir} entre ${mX.label[currentLang]} e ${mY.label[currentLang]} nas 27 UFs.`;

    const ctx = document.getElementById('corr-chart-canvas');
    if (!ctx) return;
    if (corrChartInstance) corrChartInstance.destroy();

    const tc = getThemeColors();
    const regions = ['Sudeste', 'Sul', 'Centro-Oeste', 'Nordeste', 'Norte'];
    const regionDatasets = regions.map(reg => ({
      type: 'bubble',
      label: reg,
      data: pts.filter(p => p.region === reg),
      backgroundColor: REGION_COLORS[reg] + 'BF',
      borderColor: REGION_COLORS[reg],
      borderWidth: 1.5
    }));

    regionDatasets.push({
      type: 'line',
      label: 'Regressão Linear OLS (Tendência)',
      data: [
        { x: minX, y: intercept + slope * minX },
        { x: maxX, y: intercept + slope * maxX }
      ],
      borderColor: isDark ? '#f5f5f4' : '#1c1917',
      borderDash: [6, 4],
      borderWidth: 2,
      pointRadius: 0,
      fill: false
    });

    corrChartInstance = new Chart(ctx, {
      data: { datasets: regionDatasets },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom', labels: { color: tc.text } },
          tooltip: {
            callbacks: {
              label: function (context) {
                const raw = context.raw;
                if (!raw || !raw.uf) return context.dataset.label;
                return `${raw.name} (${raw.uf}): X=${raw.x}, Y=${raw.y}`;
              }
            }
          }
        },
        scales: {
          x: { title: { display: true, text: mX.label[currentLang], color: tc.text, font: { weight: 'bold' } } },
          y: { title: { display: true, text: mY.label[currentLang], color: tc.text, font: { weight: 'bold' } } }
        }
      }
    });
  }

  // ==========================================================================
  // 8. FISCAL DEBT SIMULATOR (DBGG), BUDGET BREAKDOWN & DEMOGRAPHIC PYRAMID
  // ==========================================================================
  function updateSimulator() {
    applyChartDefaults();
    const gEl = document.getElementById('sim-gdp');
    if (!gEl) return;
    const g = parseFloat(gEl.value);
    const r = parseFloat(document.getElementById('sim-rate').value);
    const sp = parseFloat(document.getElementById('sim-prim').value);
    const shock = parseFloat(document.getElementById('sim-shock').value || '0');

    document.getElementById('val-gdp').textContent = (g >= 0 ? '+' : '') + g.toFixed(1) + '%';
    document.getElementById('val-rate').textContent = r.toFixed(1) + '%';
    document.getElementById('val-prim').textContent = (sp >= 0 ? '+' : '') + sp.toFixed(1) + '%';
    document.getElementById('val-shock').textContent = (shock >= 0 ? '+' : '') + shock.toFixed(1) + '% PIB';

    const d0 = 78.6;
    const stabilizingPrimary = d0 * (((r - g) / 100) / (1 + g / 100));
    const stabEl = document.getElementById('kpi-sim-stabilizing');
    if (stabEl) {
      stabEl.textContent = (stabilizingPrimary >= 0 ? '+' : '') + stabilizingPrimary.toFixed(2) + '% PIB';
    }

    const years = [];
    const simVals = [];
    const baseVals = [];
    const stabVals = [];
    let curSim = d0;
    let curBase = d0;

    for (let y = 2025; y <= 2035; y++) {
      if (y > 2025) {
        curSim = curSim * ((1 + r / 100) / (1 + g / 100)) - sp + (y === 2026 ? shock : 0);
        curBase = curBase * ((1 + 0.062) / (1 + 0.022)) - (-0.4);
      }
      years.push(String(y));
      simVals.push(Number(curSim.toFixed(1)));
      baseVals.push(Number(curBase.toFixed(1)));
      stabVals.push(d0);
    }

    document.getElementById('kpi-sim-2030').textContent = simVals[5].toFixed(1) + '%';
    document.getElementById('kpi-sim-2035').textContent = simVals[10].toFixed(1) + '%';

    const ctx = document.getElementById('sim-chart-canvas');
    if (ctx) {
      if (simChartInstance) simChartInstance.destroy();
      simChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
          labels: years,
          datasets: [
            { label: 'DBGG Simulada (% PIB)', data: simVals, borderColor: '#6366f1', backgroundColor: 'rgba(99,102,241,0.12)', fill: true, borderWidth: 3 },
            { label: 'Cenário Base Focus (% PIB)', data: baseVals, borderColor: '#94a3b8', borderDash: [5, 5], borderWidth: 2 },
            { label: 'Nível Inicial 2025 (78,6% PIB)', data: stabVals, borderColor: '#10b981', borderDash: [3, 3], borderWidth: 1.5, pointRadius: 0 }
          ]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } } }
      });
    }

    renderBudgetBreakdown();
    renderPyramid(currentPyramidYear);
  }

  function renderBudgetBreakdown() {
    const ctx = document.getElementById('budget-chart-canvas');
    const listEl = document.getElementById('budget-breakdown-list');
    if (!ctx || !D.BUDGET_BREAKDOWN) return;

    if (listEl) {
      listEl.innerHTML = D.BUDGET_BREAKDOWN.map(b => `
        <div class="flex items-center justify-between p-2.5 rounded-xl bg-[#FAF8F5] dark:bg-stone-950 border border-stone-200/80 dark:border-stone-800 text-xs">
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full shrink-0" style="background:${b.color}"></span>
            <span class="font-bold text-stone-800 dark:text-stone-200">${b.label}</span>
          </div>
          <span class="font-mono font-extrabold text-stone-900 dark:text-stone-100">R$ ${b.share.toFixed(1)}</span>
        </div>
      `).join('');
    }

    if (budgetChartInstance) budgetChartInstance.destroy();
    budgetChartInstance = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: D.BUDGET_BREAKDOWN.map(b => b.label),
        datasets: [{
          data: D.BUDGET_BREAKDOWN.map(b => b.share),
          backgroundColor: D.BUDGET_BREAKDOWN.map(b => b.color),
          borderWidth: 2,
          borderColor: isDark ? '#1c1917' : '#ffffff'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { callbacks: { label: c => `${c.label}: R$ ${c.raw} de cada R$ 100` } }
        }
      }
    });
  }

  function renderPyramid(yearKey) {
    currentPyramidYear = yearKey;
    const pData = D.PYRAMID_YEARS[yearKey] || D.PYRAMID_YEARS['2024'];
    ['1980', '2000', '2024', '2040', '2060'].forEach(y => {
      const btn = document.getElementById(`pyr-btn-${y}`);
      if (btn) {
        btn.className = y === yearKey
          ? 'px-3 py-1.5 rounded-xl text-xs font-extrabold bg-emerald-700 text-white shadow-sm'
          : 'px-3 py-1.5 rounded-xl text-xs font-bold bg-[#FAF8F5] dark:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-700';
      }
    });

    document.getElementById('pyr-kpi-pop').textContent = pData.pop;
    document.getElementById('pyr-kpi-age').textContent = pData.medianAge.toFixed(1) + ' anos';
    document.getElementById('pyr-kpi-ratio').textContent = pData.supportRatio.toFixed(1) + ' ativos / idoso';

    const ctx = document.getElementById('pyramid-chart-canvas');
    if (!ctx) return;
    if (pyramidChartInstance) pyramidChartInstance.destroy();

    pyramidChartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [...pData.brackets].reverse(),
        datasets: [
          { label: 'Homens (% da pop.)', data: [...pData.male].reverse(), backgroundColor: '#0284c7' },
          { label: 'Mulheres (% da pop.)', data: [...pData.female].reverse(), backgroundColor: '#e11d48' }
        ]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            stacked: true,
            min: -15,
            max: 15,
            ticks: { callback: v => Math.abs(v) + '%' }
          },
          y: { stacked: true }
        },
        plugins: {
          legend: { position: 'bottom' },
          tooltip: { callbacks: { label: c => `${c.dataset.label}: ${Math.abs(c.raw).toFixed(1)}%` } }
        }
      }
    });
  }

  // ==========================================================================
  // 9. INCOME DISTRIBUTION & EFFECTIVE TAX BURDEN CALCULATOR
  // ==========================================================================
  function updateIncomeCalculator() {
    applyChartDefaults();
    const inputEl = document.getElementById('inc-input-val');
    const ufEl = document.getElementById('inc-select-uf');
    if (!inputEl) return;

    if (ufEl && !ufEl.options.length) {
      ufEl.innerHTML = D.UF_LIST.map(u => `<option value="${u.uf}">${u.name} (${u.uf})</option>`).join('');
      ufEl.value = 'SP';
    }

    const income = Math.max(0, parseFloat(inputEl.value) || 0);
    const ufCode = ufEl ? ufEl.value : 'SP';
    const ufObj = D.UF_LIST.find(u => u.uf === ufCode) || D.UF_LIST[2];

    const dist = D.INCOME_DISTRIBUTION;
    let pct = 1;
    let matchedBracket = dist[0];
    if (income <= dist[0].income) {
      pct = Math.max(1, Math.round((income / dist[0].income) * dist[0].pct));
      matchedBracket = dist[0];
    } else if (income >= dist[dist.length - 1].income) {
      pct = 99;
      matchedBracket = dist[dist.length - 1];
    } else {
      for (let i = 0; i < dist.length - 1; i++) {
        if (income >= dist[i].income && income <= dist[i + 1].income) {
          const t = (income - dist[i].income) / (dist[i + 1].income - dist[i].income);
          pct = Math.round(dist[i].pct + t * (dist[i + 1].pct - dist[i].pct));
          matchedBracket = dist[i + 1];
          break;
        }
      }
    }

    const topShare = Math.max(1, 100 - pct);
    const ratioMedian = (income / 1290).toFixed(1);
    const pppUsdMonthly = Math.round(income / 2.65);
    const stateAvgHouseholdPerCapita = Math.round((ufObj.gdpPerCapita / 12) * 0.44);
    const ratioState = (income / stateAvgHouseholdPerCapita).toFixed(1);

    const indPct = matchedBracket.indirectTaxPct || 20.0;
    const dirPct = matchedBracket.directTaxPct || 10.0;
    const totTaxPct = indPct + dirPct;
    const monthlyTaxBrl = Math.round(income * (totTaxPct / 100));

    document.getElementById('inc-res-pct').textContent = `Percentil ${pct}% (Top ${topShare}%)`;
    document.getElementById('inc-res-desc').textContent =
      `Uma renda domiciliar per capita de R$ ${income.toLocaleString('pt-BR')}/mês supera ${pct}% da população brasileira.`;
    document.getElementById('inc-res-median').textContent = `${ratioMedian}x a mediana (R$ 1.290)`;
    document.getElementById('inc-res-state').textContent = `${ratioState}x a média de ${ufObj.uf} (~R$ ${stateAvgHouseholdPerCapita.toLocaleString('pt-BR')})`;
    document.getElementById('inc-res-ppp').textContent = `US$ ${pppUsdMonthly.toLocaleString('pt-BR')} / mês em PPC`;

    const taxEl = document.getElementById('inc-res-tax');
    if (taxEl) {
      taxEl.textContent = `~R$ ${monthlyTaxBrl.toLocaleString('pt-BR')}/mês (${totTaxPct.toFixed(1)}%: ${indPct.toFixed(1)}% Consumo + ${dirPct.toFixed(1)}% Renda)`;
    }

    const ctx = document.getElementById('inc-chart-canvas');
    if (!ctx) return;
    if (incomeChartInstance) incomeChartInstance.destroy();

    incomeChartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: dist.map(d => `P${d.pct}`),
        datasets: [
          {
            label: 'Renda Domiciliar per Capita Mensal (R$)',
            data: dist.map(d => d.income),
            backgroundColor: dist.map(d => Math.abs(d.pct - pct) <= 5 ? '#10b981' : (isDark ? '#334155' : '#cbd5e1')),
            borderRadius: 6
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: { ticks: { callback: v => 'R$ ' + v.toLocaleString('pt-BR') } }
        }
      }
    });
  }

  // ==========================================================================
  // 10. INTERNATIONAL BENCHMARK TABLE & LIVE BCB API CONNECTOR
  // ==========================================================================
  function renderBenchmark() {
    const tbody = document.getElementById('benchmark-table-body');
    if (!tbody || !D.GLOBAL_BENCHMARKS) return;
    tbody.innerHTML = D.GLOBAL_BENCHMARKS.map(row => `
      <tr class="hover:bg-stone-50 dark:hover:bg-stone-800/60 transition-colors">
        <td class="py-3 px-4 font-bold text-stone-900 dark:text-stone-100">${row.metric[currentLang]}</td>
        <td class="py-3 px-4 font-mono font-extrabold text-emerald-900 dark:text-emerald-300 bg-emerald-50/70 dark:bg-emerald-950/50">${row.br}</td>
        <td class="py-3 px-4 font-mono text-stone-800 dark:text-stone-200">${row.uk}</td>
        <td class="py-3 px-4 font-mono text-stone-800 dark:text-stone-200">${row.oecd}</td>
        <td class="py-3 px-4 font-mono text-stone-600 dark:text-stone-400">${row.us}</td>
        <td class="py-3 px-4 font-mono text-stone-600 dark:text-stone-400">${row.cn}</td>
        <td class="py-3 px-4 font-mono text-stone-600 dark:text-stone-400">${row.cl}</td>
        <td class="py-3 px-4 text-xs text-stone-500 dark:text-stone-400">${row.source}</td>
      </tr>
    `).join('');
  }

  async function fetchLiveBcbSeries(sgsCode) {
    const statusEl = document.getElementById('live-api-status');
    const sObj = (D.LIVE_API_SERIES || []).find(s => s.code === Number(sgsCode)) || D.LIVE_API_SERIES[0];
    if (statusEl) statusEl.textContent = `Conectando a api.bcb.gov.br (SGS #${sObj.code})...`;

    try {
      const url = `https://api.bcb.gov.br/dados/serie/bcdata.sgs.${sObj.code}/dados/ultimos/48?formato=json`;
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      const labels = data.map(d => d.data);
      const values = data.map(d => parseFloat(d.valor));
      const latest = data[data.length - 1];

      if (statusEl) {
        statusEl.textContent = `✅ Recebido ao vivo de api.bcb.gov.br • Último ponto (${latest.data}): ${latest.valor} ${sObj.unit}`;
      }

      const ctx = document.getElementById('live-api-canvas');
      if (ctx) {
        if (liveApiChartInstance) liveApiChartInstance.destroy();
        liveApiChartInstance = new Chart(ctx, {
          type: 'line',
          data: {
            labels,
            datasets: [{
              label: `${sObj.name} [SGS #${sObj.code}]`,
              data: values,
              borderColor: sObj.color,
              backgroundColor: sObj.color + '20',
              fill: true,
              borderWidth: 2.5,
              tension: 0.25
            }]
          },
          options: { responsive: true, maintainAspectRatio: false }
        });
      }
    } catch (err) {
      if (statusEl) {
        statusEl.textContent = `⚠️ Modo Offline / Cache Local Ativo (api.bcb.gov.br indisponível: ${err.message}).`;
      }
    }
  }

  // ==========================================================================
  // 11. EXPORT UTILITIES (CSV, JSON, PNG)
  // ==========================================================================
  function downloadBlob(content, filename, mime) {
    const blob = new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function downloadChartCSV(chartId) {
    const c = D.CHARTS.find(x => x.id === chartId);
    if (!c) return;
    const header = ['Periodo', ...c.datasets.map(d => `"${d.label}"`)].join(',');
    const rows = c.labels.map((lbl, i) => [
      `"${lbl}"`,
      ...c.datasets.map(d => d.data[i] !== undefined ? d.data[i] : '')
    ].join(','));
    downloadBlob('\uFEFF' + [header, ...rows].join('\n'), `brasil-em-numeros-${c.code}-${c.id}.csv`, 'text/csv;charset=utf-8;');
  }

  function downloadChartPNG(chartId) {
    const inst = chartInstances[chartId];
    if (!inst) return;
    const a = document.createElement('a');
    a.href = inst.toBase64Image('image/png', 1.0);
    a.download = `brasil-em-numeros-${chartId}.png`;
    a.click();
  }

  function downloadAllStatesCSV() {
    const cols = ['uf', 'name', 'capital', 'region', 'pop', 'gdpPerCapita', 'idhm', 'lifeExp', 'water', 'sewage', 'informality', 'poverty', 'gini', 'idebEarly', 'idebHs', 'homicide', 'internetPct', 'favelaPct'];
    const rows = D.UF_LIST.map(u => cols.map(k => `"${u[k]}"`).join(','));
    downloadBlob('\uFEFF' + [cols.join(','), ...rows].join('\n'), 'brasil-em-numeros-atlas-27-ufs.csv', 'text/csv;charset=utf-8;');
  }

  function downloadProfessionsCSV() {
    const cols = ['name', 'sector', 'median', 'mean', 'p25', 'p90', 'workersK', 'formalPct', 'femalePct', 'edu', 'note'];
    const rows = (D.PROFESSIONS || []).map(p => cols.map(k => `"${p[k]}"`).join(','));
    downloadBlob('\uFEFF' + [cols.join(','), ...rows].join('\n'), 'brasil-em-numeros-60-profissoes-salarios.csv', 'text/csv;charset=utf-8;');
  }

  function downloadCitiesCSV() {
    const cols = ['city', 'uf', 'region', 'popM', 'lotSizeM2', 'minLotM2', 'aptSizeM2', 'priceM2', 'aptPct', 'housePct', 'favelaPct', 'rentPct', 'vacantPct', 'treesPct', 'rampsPct', 'commuteMin', 'density', 'incomeAvg'];
    const rows = (D.CITIES_URBAN || []).map(c => cols.map(k => `"${c[k]}"`).join(','));
    downloadBlob('\uFEFF' + [cols.join(','), ...rows].join('\n'), 'brasil-em-numeros-36-cidades-lotes-imoveis.csv', 'text/csv;charset=utf-8;');
  }

  function downloadAllJSON() {
    const payload = {
      portal: 'Brasil em Números | Brazil by Numbers',
      license: 'CC BY 4.0',
      updated: '2025',
      pillarsCount: D.PILLARS.length,
      seriesCount: D.CHARTS.length,
      professionsCount: (D.PROFESSIONS || []).length,
      citiesCount: (D.CITIES_URBAN || []).length,
      pillars: D.PILLARS,
      kpis: D.KPIS,
      series: D.CHARTS,
      states: D.UF_LIST,
      professions: D.PROFESSIONS,
      citiesUrban: D.CITIES_URBAN,
      topFirstNames: D.TOP_FIRST_NAMES,
      topSurnames: D.TOP_SURNAMES,
      babyNames2024: D.BABY_NAMES_2024,
      budgetBreakdown: D.BUDGET_BREAKDOWN,
      globalBenchmarks: D.GLOBAL_BENCHMARKS
    };
    downloadBlob(JSON.stringify(payload, null, 2), 'brasil-em-numeros-dataset-completo-v6.json', 'application/json;charset=utf-8;');
  }

  // ==========================================================================
  // NAVIGATION, DARK MODE, SEARCH & LANGUAGE CONTROLLER
  // ==========================================================================
  function applyUITranslations() {
    const t = D.UI_TEXT[currentLang];
    const setTxt = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    setTxt('ui-brand-title', t.brandTitle);
    setTxt('ui-edition-tag', t.editionTag);
    setTxt('ui-brand-sub', t.brandSub);
    setTxt('ui-uk-btn', showUk ? t.ukBtnOn : t.ukBtnOff);
    setTxt('ui-dark-btn', isDark ? t.darkBtnOn : t.darkBtnOff);
    setTxt('ui-hero-badge', t.heroBadge);
    setTxt('ui-hero-title', t.heroTitle);
    setTxt('ui-hero-desc', t.heroDesc);

    const sInput = document.getElementById('search-input');
    if (sInput) sInput.placeholder = t.searchPlaceholder;

    Object.keys(t.tabs).forEach(tabKey => {
      setTxt(`tab-${tabKey}`, t.tabs[tabKey]);
    });
  }

  function toggleDarkMode() {
    isDark = !isDark;
    document.documentElement.classList.toggle('dark', isDark);
    try { localStorage.setItem('br_numeros_dark', isDark ? '1' : '0'); } catch (e) {}
    applyUITranslations();
    applyChartDefaults();
    renderOverview();
    if (!document.getElementById('view-charts').classList.contains('hidden')) renderCharts();
    if (!document.getElementById('view-states').classList.contains('hidden')) renderStates();
    if (!document.getElementById('view-professions').classList.contains('hidden')) renderProfessions();
    if (!document.getElementById('view-cities').classList.contains('hidden')) renderCities();
    if (!document.getElementById('view-names').classList.contains('hidden')) renderNames();
    if (!document.getElementById('view-correlations').classList.contains('hidden')) renderCorrelations();
    if (!document.getElementById('view-simulator').classList.contains('hidden')) updateSimulator();
    if (!document.getElementById('view-income').classList.contains('hidden')) updateIncomeCalculator();
  }

  function switchTab(tabId) {
    const tabs = ['overview', 'charts', 'states', 'professions', 'cities', 'names', 'correlations', 'simulator', 'income', 'datahub'];
    tabs.forEach(id => {
      const sec = document.getElementById(`view-${id}`);
      if (sec) sec.classList.toggle('hidden', id !== tabId);
      const btn = document.getElementById(`tab-${id}`);
      if (btn) {
        btn.className = id === tabId
          ? 'min-w-0 overflow-hidden w-full text-center px-2 py-2 rounded-xl text-xs font-extrabold bg-emerald-700 text-white shadow-sm transition-all leading-tight flex items-center justify-center'
          : 'min-w-0 overflow-hidden w-full text-center px-2 py-2 rounded-xl text-xs font-bold bg-[#FAF8F5] dark:bg-stone-900/90 text-stone-700 dark:text-stone-300 border border-stone-200/80 dark:border-stone-800 hover:bg-stone-200/70 dark:hover:bg-stone-800 transition-all leading-tight flex items-center justify-center';
      }
    });

    if (tabId === 'overview') renderOverview();
    if (tabId === 'charts') renderCharts();
    if (tabId === 'states') renderStates();
    if (tabId === 'professions') renderProfessions();
    if (tabId === 'cities') renderCities();
    if (tabId === 'names') renderNames();
    if (tabId === 'correlations') renderCorrelations();
    if (tabId === 'simulator') updateSimulator();
    if (tabId === 'income') updateIncomeCalculator();
    if (tabId === 'datahub') {
      renderBenchmark();
      fetchLiveBcbSeries(432);
    }
  }

  window.BR_APP = {
    switchTab,
    toggleDarkMode,
    openPillar(pid) {
      selectedPillar = pid;
      switchTab('charts');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    jumpToChart(pid, chartId) {
      selectedPillar = pid;
      switchTab('charts');
      setTimeout(() => {
        const el = document.getElementById(`card-${chartId}`);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 80);
    },
    setPillarFilter(pid) {
      selectedPillar = pid;
      renderCharts();
    },
    setChartType(chartId, type) {
      perChartTypes[chartId] = type;
      renderCharts();
    },
    setGlobalTransform(mode) {
      globalTransform = mode;
      ['raw', 'index100', 'pctChange'].forEach(m => {
        const b = document.getElementById(`btn-transform-${m}`);
        if (b) {
          b.className = m === mode
            ? 'px-2.5 py-1 rounded-lg text-xs font-extrabold bg-emerald-700 text-white'
            : 'px-2.5 py-1 rounded-lg text-xs font-bold text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700';
        }
      });
      renderCharts();
    },
    toggleLogScale() {
      globalLogScale = !globalLogScale;
      const b = document.getElementById('btn-log-scale');
      if (b) {
        b.className = globalLogScale
          ? 'px-3 py-1 rounded-xl text-xs font-extrabold bg-indigo-700 text-white'
          : 'px-3 py-1 rounded-xl text-xs font-bold bg-[#FAF8F5] dark:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-300 dark:border-stone-700';
      }
      renderCharts();
    },
    toggleUkBenchmark() {
      showUk = !showUk;
      applyUITranslations();
      if (!document.getElementById('view-charts').classList.contains('hidden')) renderCharts();
    },
    handleSearch(val) {
      searchTerm = (val || '').toLowerCase().trim();
      switchTab('charts');
    },
    setLanguage(lang) {
      currentLang = lang;
      ['pt', 'es', 'en'].forEach(l => {
        const b = document.getElementById(`lang-${l}`);
        if (b) {
          b.className = l === lang
            ? 'px-2.5 py-1 rounded-lg text-xs font-extrabold bg-white dark:bg-stone-900 text-emerald-900 dark:text-emerald-400 shadow-sm'
            : 'px-2.5 py-1 rounded-lg text-xs font-extrabold text-stone-600 dark:text-stone-400';
        }
      });
      applyUITranslations();
      renderOverview();
      if (!document.getElementById('view-charts').classList.contains('hidden')) renderCharts();
      if (!document.getElementById('view-states').classList.contains('hidden')) renderStates();
      if (!document.getElementById('view-professions').classList.contains('hidden')) renderProfessions();
      if (!document.getElementById('view-cities').classList.contains('hidden')) renderCities();
      if (!document.getElementById('view-names').classList.contains('hidden')) renderNames();
      if (!document.getElementById('view-correlations').classList.contains('hidden')) renderCorrelations();
      if (!document.getElementById('view-datahub').classList.contains('hidden')) renderBenchmark();
    },
    // Map & 27 UFs controllers
    setMapMode(mode) {
      mapMode = mode;
      ['geo', 'grid'].forEach(m => {
        const b = document.getElementById(`map-mode-${m}`);
        if (b) {
          b.className = m === mode
            ? 'px-2.5 py-1 rounded-lg text-xs font-extrabold bg-emerald-700 text-white'
            : 'px-2.5 py-1 rounded-lg text-xs font-bold text-stone-600 dark:text-stone-300';
        }
      });
      renderStates();
    },
    setMapMetric(key) {
      selectedMapMetric = key;
      renderStates();
    },
    setRegionFilter(reg) {
      selectedRegionFilter = reg;
      ['ALL', 'Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul'].forEach(r => {
        const b = document.getElementById(`reg-btn-${r}`);
        if (b) {
          b.className = r === reg
            ? 'px-3 py-1 rounded-lg text-xs font-bold bg-emerald-700 text-white'
            : 'px-3 py-1 rounded-lg text-xs font-bold bg-[#FAF8F5] dark:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-700';
        }
      });
      renderStates();
    },
    sortStates(key) {
      if (stateSortKey === key) stateSortAsc = !stateSortAsc;
      else { stateSortKey = key; stateSortAsc = false; }
      renderStates();
    },
    updateRadarSelection() {
      radarUf1 = document.getElementById('radar-uf-1').value;
      radarUf2 = document.getElementById('radar-uf-2').value;
      radarUf3 = document.getElementById('radar-uf-3').value;
      renderStateRadar();
    },
    selectStateForRadar(uf) {
      inspectedUf = uf;
      radarUf1 = uf;
      const sel1 = document.getElementById('radar-uf-1');
      if (sel1) sel1.value = uf;
      renderStates();
    },
    // Professions controllers (Tab 4)
    setProfSector(sec) {
      selectedProfSector = sec;
      renderProfessions();
    },
    handleProfSearch(val) {
      profSearchTerm = (val || '').toLowerCase().trim();
      renderProfessions();
    },
    sortProfessions(key) {
      if (profSortKey === key) profSortAsc = !profSortAsc;
      else { profSortKey = key; profSortAsc = false; }
      renderProfessions();
    },
    updateProfComparison() {
      const s1 = document.getElementById('prof-comp-1');
      const s2 = document.getElementById('prof-comp-2');
      if (s1) compProf1 = s1.value;
      if (s2) compProf2 = s2.value;
      renderProfessionComparator();
    },
    // Cities & Lot Size controllers (Tab 5)
    setCityMetric(key) {
      selectedCityMetric = key;
      renderCities();
    },
    setCityRegionFilter(reg) {
      selectedCityRegion = reg;
      ['ALL', 'Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul'].forEach(r => {
        const b = document.getElementById(`city-reg-btn-${r}`);
        if (b) {
          b.className = r === reg
            ? 'px-3 py-1 rounded-lg text-xs font-bold bg-emerald-700 text-white'
            : 'px-3 py-1 rounded-lg text-xs font-bold bg-[#FAF8F5] dark:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-700';
        }
      });
      renderCities();
    },
    selectCity(name) {
      inspectedCityName = name;
      renderCityInspector(name);
    },
    updateCityScatterFromUI() {
      const sx = document.getElementById('city-scatter-x');
      const sy = document.getElementById('city-scatter-y');
      if (sx) cityScatterX = sx.value;
      if (sy) cityScatterY = sy.value;
      renderCityScatter();
    },
    setCityScatterPreset(xKey, yKey) {
      cityScatterX = xKey;
      cityScatterY = yKey;
      const sx = document.getElementById('city-scatter-x');
      const sy = document.getElementById('city-scatter-y');
      if (sx) sx.value = xKey;
      if (sy) sy.value = yKey;
      renderCityScatter();
    },
    sortCities(key) {
      if (citySortKey === key) citySortAsc = !citySortAsc;
      else { citySortKey = key; citySortAsc = false; }
      renderCities();
    },
    // Names & Surnames controllers (Tab 6)
    searchLiveIbgeNamesFromUI() {
      const in1 = document.getElementById('ibge-name-input-1');
      const in2 = document.getElementById('ibge-name-input-2');
      fetchAndRenderIbgeNames(in1 ? in1.value : 'MARIA', in2 ? in2.value : '');
    },
    selectFirstName(n1, n2) {
      fetchAndRenderIbgeNames(n1, n2 !== undefined ? n2 : selectedName2);
    },
    // Correlation Lab controllers (Tab 7)
    updateCorrelationsFromUI() {
      corrX = document.getElementById('corr-select-x').value;
      corrY = document.getElementById('corr-select-y').value;
      renderCorrelations();
    },
    setCorrPreset(xKey, yKey) {
      corrX = xKey;
      corrY = yKey;
      const selX = document.getElementById('corr-select-x');
      const selY = document.getElementById('corr-select-y');
      if (selX) selX.value = xKey;
      if (selY) selY.value = yKey;
      renderCorrelations();
    },
    updateSimulator,
    setSimPreset(g, r, sp, shock) {
      document.getElementById('sim-gdp').value = g;
      document.getElementById('sim-rate').value = r;
      document.getElementById('sim-prim').value = sp;
      document.getElementById('sim-shock').value = shock || 0;
      updateSimulator();
    },
    renderPyramid,
    updateIncomeCalculator,
    setIncomePreset(val) {
      const el = document.getElementById('inc-input-val');
      if (el) el.value = val;
      updateIncomeCalculator();
    },
    fetchLiveBcbSeries,
    downloadChartCSV,
    downloadChartPNG,
    downloadAllStatesCSV,
    downloadProfessionsCSV,
    downloadCitiesCSV,
    downloadAllJSON
  };

  window.addEventListener('DOMContentLoaded', () => {
    try {
      if (localStorage.getItem('br_numeros_dark') === '1') {
        isDark = true;
        document.documentElement.classList.add('dark');
      }
    } catch (e) {}
    applyChartDefaults();
    applyUITranslations();
    renderOverview();
    renderBenchmark();
  });
})();

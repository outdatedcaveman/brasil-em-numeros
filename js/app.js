// ============================================================================
// BRASIL EM NÚMEROS | BRAZIL BY NUMBERS — MOTOR INTERATIVO PRINCIPAL (APP.JS)
// ============================================================================

(function () {
  const D = window.BR_DATA;
  let currentLang = 'pt';
  let showUk = true;
  let selectedPillar = 'ALL';
  let searchTerm = '';
  let globalTransform = 'raw'; // 'raw' | 'index100' | 'pctChange'
  let globalLogScale = false;
  let perChartTypes = {}; // chartId -> 'line' | 'bar' | 'area' | 'table'

  // State Atlas & Map state
  let selectedMapMetric = 'gdpPerCapita';
  let selectedRegionFilter = 'ALL';
  let stateSortKey = 'gdpPerCapita';
  let stateSortAsc = false;
  let radarUf1 = 'SP';
  let radarUf2 = 'BA';
  let radarUf3 = 'SC';

  // Correlation Lab state
  let corrX = 'informality';
  let corrY = 'gdpPerCapita';

  // Pyramid state
  let currentPyramidYear = '2024';

  // Chart.js instances registry
  let chartInstances = {};
  let simChartInstance = null;
  let pyramidChartInstance = null;
  let mapBarChartInstance = null;
  let stateRadarInstance = null;
  let corrChartInstance = null;
  let incomeChartInstance = null;

  const REGION_COLORS = {
    'Norte': '#16a34a',
    'Nordeste': '#e11d48',
    'Sudeste': '#2563eb',
    'Sul': '#7c3aed',
    'Centro-Oeste': '#d97706'
  };

  // ==========================================================================
  // 1. OVERVIEW: KPIS, 10 PILLARS & 6 PARADOXES
  // ==========================================================================
  function renderOverview() {
    const kpiContainer = document.getElementById('kpis-grid');
    if (kpiContainer) {
      const badgeStyles = {
        emerald: 'bg-emerald-100 text-emerald-900 border-emerald-200',
        amber: 'bg-amber-100 text-amber-900 border-amber-200',
        sky: 'bg-sky-100 text-sky-900 border-sky-200',
        rose: 'bg-rose-100 text-rose-900 border-rose-200',
        indigo: 'bg-indigo-100 text-indigo-900 border-indigo-200',
        teal: 'bg-teal-100 text-teal-900 border-teal-200'
      };
      kpiContainer.innerHTML = D.KPIS.map(k => `
        <div onclick="window.BR_APP.jumpToChart('${k.pillar}', '${k.chartId}')"
             class="bg-[#FAF8F5] hover:bg-white p-3.5 rounded-2xl border border-stone-200/90 hover:border-emerald-500 shadow-sm hover:shadow transition-all cursor-pointer group flex flex-col justify-between">
          <div class="flex items-start justify-between gap-1">
            <span class="text-[10px] font-extrabold uppercase tracking-wider text-stone-500 group-hover:text-emerald-800">${k.label[currentLang]}</span>
            <span class="px-1.5 py-0.5 text-[9px] font-bold rounded border ${badgeStyles[k.badgeColor] || badgeStyles.emerald}">${k.badge}</span>
          </div>
          <div class="text-xl font-black font-mono text-stone-900 mt-1.5 tracking-tight">${k.value}</div>
          <div class="text-[10px] text-stone-500 mt-1 flex items-center justify-between">
            <span>${k.sub[currentLang]}</span>
            <span class="opacity-0 group-hover:opacity-100 text-emerald-700 font-bold">→</span>
          </div>
        </div>
      `).join('');
    }

    const pillarsContainer = document.getElementById('pillars-grid');
    if (pillarsContainer) {
      const t = D.UI_TEXT[currentLang];
      pillarsContainer.innerHTML = D.PILLARS.map(p => `
        <div onclick="window.BR_APP.openPillar('${p.id}')"
             class="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:shadow-md hover:border-stone-300 transition-all cursor-pointer flex flex-col justify-between group">
          <div>
            <div class="flex items-center justify-between gap-2">
              <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-extrabold uppercase" style="background:${p.color}15;color:${p.color}">
                <span>${p.icon}</span> Pilar ${p.num}
              </span>
              <span class="text-[11px] font-mono font-bold text-stone-500 bg-stone-100 px-2.5 py-0.5 rounded-full border border-stone-200">${p.keyStat}</span>
            </div>
            <h3 class="text-lg sm:text-xl font-extrabold text-stone-900 mt-3 group-hover:text-emerald-800 transition-colors">${p.title[currentLang]}</h3>
            <p class="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">${p.desc[currentLang]}</p>
          </div>
          <div class="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-bold" style="color:${p.color}">
            <span>${t.openPillarCharts}</span>
            <span class="px-2 py-0.5 rounded bg-stone-100 text-stone-700 font-mono text-[10px]">${p.seriesCount} séries</span>
          </div>
        </div>
      `).join('');
    }

    const paradoxContainer = document.getElementById('paradoxes-grid');
    if (paradoxContainer) {
      paradoxContainer.innerHTML = D.PARADOXES.map(px => `
        <div class="bg-[#FAF8F5] rounded-2xl p-5 border border-stone-200/90 flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-2">
              <span class="w-6 h-6 rounded-lg bg-stone-900 text-white font-mono text-xs font-bold flex items-center justify-center">${px.num}</span>
              <h4 class="font-extrabold text-stone-900 text-sm sm:text-base">${px.title[currentLang]}</h4>
            </div>
            <p class="text-xs text-stone-600 mt-2.5 leading-relaxed">${px.text[currentLang]}</p>
          </div>
        </div>
      `).join('');
    }
  }

  // ==========================================================================
  // 2. CHARTS EXPLORER (40 SERIES + TRANSFORMATIONS + EXPORT)
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
    const filterBar = document.getElementById('pillar-filter-bar');
    const t = D.UI_TEXT[currentLang];
    if (filterBar) {
      filterBar.innerHTML = `
        <button onclick="window.BR_APP.setPillarFilter('ALL')"
                class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${selectedPillar === 'ALL' ? 'bg-emerald-700 text-white shadow-sm' : 'bg-[#FAF8F5] text-stone-700 border border-stone-200 hover:bg-stone-100'}">
          ${t.allPillars}
        </button>
        ${D.PILLARS.map(p => `
          <button onclick="window.BR_APP.setPillarFilter('${p.id}')"
                  class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${selectedPillar === p.id ? 'bg-emerald-700 text-white shadow-sm' : 'bg-[#FAF8F5] text-stone-700 border border-stone-200 hover:bg-stone-100'}">
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
            return `<td class="py-1.5 px-2.5 font-mono text-xs border-b border-stone-100">${tData[idx] !== undefined ? tData[idx] : '-'}</td>`;
          }).join('');
          return `<tr class="hover:bg-stone-50"><td class="py-1.5 px-2.5 font-bold text-xs text-stone-800 border-b border-stone-100">${lbl}</td>${cells}</tr>`;
        }).join('');
        tableHtml = `
          <div class="h-64 overflow-y-auto border border-stone-200 rounded-xl mt-4 bg-[#FAF8F5]">
            <table class="w-full text-left border-collapse">
              <thead class="sticky top-0 bg-stone-200/90 text-stone-800 text-[11px] font-bold">
                <tr>${headers.map(h => `<th class="py-2 px-2.5">${h}</th>`).join('')}</tr>
              </thead>
              <tbody>${rows}</tbody>
            </table>
          </div>
        `;
      }

      return `
        <article id="card-${c.id}" class="bg-white rounded-2xl border border-stone-200 shadow-sm p-5 flex flex-col justify-between hover:border-stone-300 transition-all">
          <div>
            <div class="flex flex-wrap items-center justify-between gap-2">
              <div class="flex items-center gap-2">
                <span class="px-2 py-0.5 rounded-md text-[11px] font-extrabold uppercase" style="background:${pObj.color}18;color:${pObj.color}">
                  Série ${c.code}
                </span>
                <span class="text-[11px] font-mono text-stone-500">${c.unit || ''}</span>
              </div>
              <!-- Per-chart mini toolbar -->
              <div class="flex items-center gap-1 bg-stone-100 p-0.5 rounded-lg border border-stone-200">
                <button onclick="window.BR_APP.setChartType('${c.id}', 'line')" title="Gráfico de Linha" class="px-2 py-0.5 rounded text-[10px] font-bold ${activeType === 'line' ? 'bg-white text-emerald-900 shadow-sm' : 'text-stone-600'}">Linha</button>
                <button onclick="window.BR_APP.setChartType('${c.id}', 'bar')" title="Gráfico de Barras" class="px-2 py-0.5 rounded text-[10px] font-bold ${activeType === 'bar' ? 'bg-white text-emerald-900 shadow-sm' : 'text-stone-600'}">Barras</button>
                <button onclick="window.BR_APP.setChartType('${c.id}', 'area')" title="Gráfico de Área" class="px-2 py-0.5 rounded text-[10px] font-bold ${activeType === 'area' ? 'bg-white text-emerald-900 shadow-sm' : 'text-stone-600'}">Área</button>
                <button onclick="window.BR_APP.setChartType('${c.id}', 'table')" title="Ver Tabela de Dados" class="px-2 py-0.5 rounded text-[10px] font-bold ${activeType === 'table' ? 'bg-white text-emerald-900 shadow-sm' : 'text-stone-600'}">Tabela</button>
              </div>
            </div>

            <h3 class="text-base sm:text-lg font-extrabold text-stone-900 mt-2 leading-snug">${c.title[currentLang]}</h3>

            ${isTable ? tableHtml : `
              <div class="h-64 w-full mt-4 relative">
                <canvas id="canvas-${c.id}"></canvas>
              </div>
            `}

            <div class="mt-4 p-3 rounded-xl bg-emerald-50/80 border border-emerald-200/80 text-xs text-stone-800 leading-relaxed">
              <strong>Síntese Analítica:</strong> ${c.takeaway[currentLang]}
            </div>
            ${showUk ? `
              <div class="mt-2 p-2.5 rounded-xl bg-blue-50/80 border border-blue-200/80 text-xs text-blue-950 leading-relaxed">
                <strong>🌐 Benchmark UK / OCDE:</strong> ${c.uk[currentLang]}
              </div>
            ` : ''}
          </div>

          <div class="mt-4 pt-3 border-t border-stone-100 flex flex-wrap items-center justify-between gap-2 text-[11px] text-stone-500">
            <div><strong>Fonte:</strong> ${c.source}</div>
            <div class="flex items-center gap-2">
              <button onclick="window.BR_APP.downloadChartCSV('${c.id}')" class="px-2 py-1 rounded bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-[10px]">⬇ CSV</button>
              ${!isTable ? `<button onclick="window.BR_APP.downloadChartPNG('${c.id}')" class="px-2 py-1 rounded bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-[10px]">📷 PNG</button>` : ''}
            </div>
          </div>
        </article>
      `;
    }).join('');

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
          borderColor: chartJsType === 'line' ? singleColor : ds.borderColor,
          backgroundColor: activeType === 'area'
            ? singleColor + '28'
            : (chartJsType === 'bar' ? (ds.backgroundColor || singleColor) : (ds.backgroundColor || singleColor)),
          fill: activeType === 'area' ? true : Boolean(ds.fill),
          tension: 0.28,
          borderWidth: ds.borderWidth || 2.5
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
            legend: { position: 'bottom', labels: { boxWidth: 12, font: { size: 11, weight: 'bold' } } }
          },
          scales: {
            y: {
              type: globalLogScale ? 'logarithmic' : 'linear',
              grid: { color: '#f5f5f4' },
              ticks: { font: { family: 'JetBrains Mono', size: 10 } }
            },
            x: {
              grid: { display: false },
              ticks: { font: { size: 10, weight: '600' } }
            }
          }
        }
      });
    });
  }

  // ==========================================================================
  // 3. 27-STATE CHOROPLETH MAP, RADAR COMPARATOR & SORTABLE ATLAS
  // ==========================================================================
  function getMetricColor(val, min, max, higherBetter) {
    let ratio = (val - min) / (max - min || 1);
    ratio = Math.max(0, Math.min(1, ratio));
    const score = higherBetter ? ratio : (1 - ratio);
    // Interpolate from rose (#e11d48) -> amber (#f59e0b) -> emerald (#059669)
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

  function renderStates() {
    const mObj = D.STATE_METRICS.find(m => m.key === selectedMapMetric) || D.STATE_METRICS[0];

    // Metric selector buttons
    const metricSelector = document.getElementById('map-metric-selector');
    if (metricSelector) {
      metricSelector.innerHTML = D.STATE_METRICS.map(m => `
        <button onclick="window.BR_APP.setMapMetric('${m.key}')"
                class="px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all ${selectedMapMetric === m.key ? 'bg-emerald-700 text-white shadow-sm' : 'bg-[#FAF8F5] text-stone-700 border border-stone-200 hover:bg-stone-100'}">
          ${m.label[currentLang]}
        </button>
      `).join('');
    }

    // Compute min/max for choropleth
    const vals = D.UF_LIST.map(u => u[selectedMapMetric]);
    const minVal = Math.min(...vals);
    const maxVal = Math.max(...vals);

    // Render SVG Tile-Grid Choropleth Map of Brazil (8 cols x 9 rows)
    const svgContainer = document.getElementById('brazil-svg-map');
    if (svgContainer) {
      const cellSize = 56;
      const gap = 6;
      const tiles = D.UF_LIST.map(u => {
        const x = u.col * (cellSize + gap) + 12;
        const y = u.row * (cellSize + gap) + 12;
        const val = u[selectedMapMetric];
        const fill = getMetricColor(val, minVal, maxVal, mObj.higherBetter);
        const formatted = formatMetricVal(val, mObj);
        return `
          <g class="cursor-pointer transition-transform hover:opacity-90"
             onclick="window.BR_APP.selectStateForRadar('${u.uf}')">
            <rect x="${x}" y="${y}" width="${cellSize}" height="${cellSize}" rx="10"
                  fill="${fill}" stroke="#ffffff" stroke-width="2" />
            <text x="${x + cellSize / 2}" y="${y + 23}" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="900" font-family="Inter, sans-serif">${u.uf}</text>
            <text x="${x + cellSize / 2}" y="${y + 42}" text-anchor="middle" fill="#ffffff" font-size="9.5" font-weight="700" font-family="JetBrains Mono, monospace">${u.Key === 'gdpPerCapita' ? (val / 1000).toFixed(0) + 'k' : val.toFixed(mObj.dec === 0 ? 0 : (mObj.dec === 3 ? 2 : 1))}</text>
            <title>${u.name} (${u.uf}) — ${mObj.label[currentLang]}: ${formatted} | Clique para comparar no Radar</title>
          </g>
        `;
      }).join('');

      svgContainer.innerHTML = `
        <svg viewBox="0 0 510 565" class="w-full max-w-[460px] mx-auto select-none">
          ${tiles}
        </svg>
      `;
    }

    // Render Top/Bottom Bar Ranking for selected metric
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
            x: { ticks: { font: { size: 9, weight: 'bold' } }, grid: { display: false } },
            y: { ticks: { font: { family: 'JetBrains Mono', size: 10 } } }
          }
        }
      });
    }

    // Render State Radar Comparator
    renderStateRadar();

    // Render full 27-UF table
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
        <tr class="hover:bg-emerald-50/40 transition-colors">
          <td class="py-2.5 px-3 font-bold text-stone-900 whitespace-nowrap">${idx + 1}. ${r.name} <span class="text-xs font-mono text-stone-500">(${r.uf})</span></td>
          <td class="py-2.5 px-3 text-stone-600 whitespace-nowrap"><span class="inline-block w-2 h-2 rounded-full mr-1.5" style="background:${REGION_COLORS[r.region]}"></span>${r.region}</td>
          <td class="py-2.5 px-3 font-mono">${r.pop.toFixed(2)}M</td>
          <td class="py-2.5 px-3 font-mono font-semibold text-stone-900">R$ ${r.gdpPerCapita.toLocaleString('pt-BR')}</td>
          <td class="py-2.5 px-3 font-mono text-emerald-800 font-bold">${r.idhm.toFixed(3)}</td>
          <td class="py-2.5 px-3 font-mono">${r.lifeExp.toFixed(1)}</td>
          <td class="py-2.5 px-3 font-mono">${r.sewage.toFixed(1)}%</td>
          <td class="py-2.5 px-3 font-mono">${r.informality.toFixed(1)}%</td>
          <td class="py-2.5 px-3 font-mono">${r.poverty.toFixed(1)}%</td>
          <td class="py-2.5 px-3 font-mono">${r.gini.toFixed(3)}</td>
          <td class="py-2.5 px-3 font-mono font-bold text-sky-800">${r.idebHs.toFixed(1)}</td>
          <td class="py-2.5 px-3 font-mono font-bold text-rose-700">${r.homicide.toFixed(1)}</td>
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

    // Normalize 6 key dimensions to 0..100 where 100 = best in Brazil
    const axes = [
      { key: 'gdpPerCapita', label: 'Renda (PIB/cap)', higher: true },
      { key: 'idhm', label: 'IDH Estadual', higher: true },
      { key: 'lifeExp', label: 'Longevidade', higher: true },
      { key: 'sewage', label: 'Rede de Esgoto', higher: true },
      { key: 'informality', label: 'Formalização Trab.', higher: false },
      { key: 'idebHs', label: 'Educação (IDEB EM)', higher: true },
      { key: 'homicide', label: 'Segurança (Baixo Homic.)', higher: false }
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
    stateRadarInstance = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: axes.map(a => a.label),
        datasets: [
          { label: `${u1.name} (${u1.uf})`, data: normState(u1), borderColor: '#059669', backgroundColor: 'rgba(5,150,105,0.18)', borderWidth: 2.5 },
          { label: `${u2.name} (${u2.uf})`, data: normState(u2), borderColor: '#e11d48', backgroundColor: 'rgba(225,29,72,0.15)', borderWidth: 2.5 },
          { label: `${u3.name} (${u3.uf})`, data: normState(u3), borderColor: '#2563eb', backgroundColor: 'rgba(37,99,235,0.15)', borderWidth: 2.5 }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: { min: 0, max: 100, ticks: { stepSize: 25, display: false } }
        },
        plugins: { legend: { position: 'bottom' } }
      }
    });
  }

  // ==========================================================================
  // 4. CORRELATION & OLS REGRESSION LAB (27 UFs)
  // ==========================================================================
  function renderCorrelations() {
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

    // Compute Pearson r, R², and OLS slope/intercept
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
      borderColor: '#1c1917',
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
          legend: { position: 'bottom' },
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
          x: { title: { display: true, text: mX.label[currentLang], font: { weight: 'bold' } } },
          y: { title: { display: true, text: mY.label[currentLang], font: { weight: 'bold' } } }
        }
      }
    });
  }

  // ==========================================================================
  // 5. FISCAL DEBT SIMULATOR (DBGG) & DEMOGRAPHIC PYRAMID SIMULATOR
  // ==========================================================================
  function updateSimulator() {
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
            { label: 'DBGG Simulada (% PIB)', data: simVals, borderColor: '#4f46e5', backgroundColor: 'rgba(79,70,229,0.1)', fill: true, borderWidth: 3 },
            { label: 'Cenário Base Focus (% PIB)', data: baseVals, borderColor: '#94a3b8', borderDash: [5, 5], borderWidth: 2 },
            { label: 'Nível Inicial 2025 (78,6% PIB)', data: stabVals, borderColor: '#059669', borderDash: [3, 3], borderWidth: 1.5, pointRadius: 0 }
          ]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } } }
      });
    }

    renderPyramid(currentPyramidYear);
  }

  function renderPyramid(yearKey) {
    currentPyramidYear = yearKey;
    const pData = D.PYRAMID_YEARS[yearKey] || D.PYRAMID_YEARS['2024'];
    ['1980', '2000', '2024', '2040', '2060'].forEach(y => {
      const btn = document.getElementById(`pyr-btn-${y}`);
      if (btn) {
        btn.className = y === yearKey
          ? 'px-3 py-1.5 rounded-xl text-xs font-extrabold bg-emerald-700 text-white shadow-sm'
          : 'px-3 py-1.5 rounded-xl text-xs font-bold bg-[#FAF8F5] text-stone-700 border border-stone-200';
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
          tooltip: {
            callbacks: {
              label: c => `${c.dataset.label}: ${Math.abs(c.raw).toFixed(1)}%`
            }
          }
        }
      }
    });
  }

  // ==========================================================================
  // 6. INCOME DISTRIBUTION PERCENTILE CALCULATOR
  // ==========================================================================
  function updateIncomeCalculator() {
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

    // Interpolate national percentile from D.INCOME_DISTRIBUTION
    const dist = D.INCOME_DISTRIBUTION;
    let pct = 1;
    if (income <= dist[0].income) {
      pct = Math.max(1, Math.round((income / dist[0].income) * dist[0].pct));
    } else if (income >= dist[dist.length - 1].income) {
      pct = 99;
    } else {
      for (let i = 0; i < dist.length - 1; i++) {
        if (income >= dist[i].income && income <= dist[i + 1].income) {
          const t = (income - dist[i].income) / (dist[i + 1].income - dist[i].income);
          pct = Math.round(dist[i].pct + t * (dist[i + 1].pct - dist[i].pct));
          break;
        }
      }
    }

    const topShare = Math.max(1, 100 - pct);
    const ratioMedian = (income / 1290).toFixed(1);
    const pppUsdMonthly = Math.round(income / 2.65); // PPP conversion factor ~2.65 R$/US$ PPP
    const stateAvgHouseholdPerCapita = Math.round((ufObj.gdpPerCapita / 12) * 0.44);
    const ratioState = (income / stateAvgHouseholdPerCapita).toFixed(1);

    document.getElementById('inc-res-pct').textContent = `Percentil ${pct}% (Top ${topShare}%)`;
    document.getElementById('inc-res-desc').textContent =
      `Uma renda domiciliar per capita de R$ ${income.toLocaleString('pt-BR')}/mês é maior do que a de ${pct}% da população brasileira.`;
    document.getElementById('inc-res-median').textContent = `${ratioMedian}x a mediana (R$ 1.290)`;
    document.getElementById('inc-res-state').textContent = `${ratioState}x a média de ${ufObj.uf} (~R$ ${stateAvgHouseholdPerCapita.toLocaleString('pt-BR')})`;
    document.getElementById('inc-res-ppp').textContent = `US$ ${pppUsdMonthly.toLocaleString('pt-BR')} / mês em PPC`;

    const ctx = document.getElementById('inc-chart-canvas');
    if (!ctx) return;
    if (incomeChartInstance) incomeChartInstance.destroy();

    incomeChartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: dist.map(d => `P${d.pct}`),
        datasets: [{
          label: 'Renda Domiciliar per Capita Mensal (R$)',
          data: dist.map(d => d.income),
          backgroundColor: dist.map(d => Math.abs(d.pct - pct) <= 5 ? '#059669' : '#cbd5e1'),
          borderRadius: 6
        }]
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
  // 7. INTERNATIONAL BENCHMARK TABLE
  // ==========================================================================
  function renderBenchmark() {
    const tbody = document.getElementById('benchmark-table-body');
    if (!tbody) return;
    tbody.innerHTML = D.GLOBAL_BENCHMARKS.map(row => `
      <tr class="hover:bg-stone-50 transition-colors">
        <td class="py-3 px-4 font-bold text-stone-900">${row.metric[currentLang]}</td>
        <td class="py-3 px-4 font-mono font-extrabold text-emerald-900 bg-emerald-50/70">${row.br}</td>
        <td class="py-3 px-4 font-mono text-stone-800">${row.uk}</td>
        <td class="py-3 px-4 font-mono text-stone-800">${row.oecd}</td>
        <td class="py-3 px-4 font-mono text-stone-600">${row.us}</td>
        <td class="py-3 px-4 font-mono text-stone-600">${row.cn}</td>
        <td class="py-3 px-4 font-mono text-stone-600">${row.cl}</td>
        <td class="py-3 px-4 text-xs text-stone-500">${row.source}</td>
      </tr>
    `).join('');
  }

  // ==========================================================================
  // 8. EXPORT UTILITIES (CSV, JSON, PNG)
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
    const cols = ['uf', 'name', 'capital', 'region', 'pop', 'gdpPerCapita', 'idhm', 'lifeExp', 'water', 'sewage', 'informality', 'poverty', 'gini', 'idebEarly', 'idebHs', 'homicide'];
    const rows = D.UF_LIST.map(u => cols.map(k => `"${u[k]}"`).join(','));
    downloadBlob('\uFEFF' + [cols.join(','), ...rows].join('\n'), 'brasil-em-numeros-atlas-27-ufs.csv', 'text/csv;charset=utf-8;');
  }

  function downloadAllJSON() {
    const payload = {
      portal: 'Brasil em Números | Brazil by Numbers',
      license: 'CC BY 4.0',
      updated: '2025',
      pillars: D.PILLARS,
      kpis: D.KPIS,
      series: D.CHARTS,
      states: D.UF_LIST,
      globalBenchmarks: D.GLOBAL_BENCHMARKS
    };
    downloadBlob(JSON.stringify(payload, null, 2), 'brasil-em-numeros-dataset-completo.json', 'application/json;charset=utf-8;');
  }

  // ==========================================================================
  // NAVIGATION, SEARCH & LANGUAGE CONTROLLER
  // ==========================================================================
  function applyUITranslations() {
    const t = D.UI_TEXT[currentLang];
    const setTxt = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    setTxt('ui-brand-title', t.brandTitle);
    setTxt('ui-edition-tag', t.editionTag);
    setTxt('ui-brand-sub', t.brandSub);
    setTxt('ui-uk-btn', showUk ? t.ukBtnOn : t.ukBtnOff);
    setTxt('ui-hero-badge', t.heroBadge);
    setTxt('ui-hero-title', t.heroTitle);
    setTxt('ui-hero-desc', t.heroDesc);

    const sInput = document.getElementById('search-input');
    if (sInput) sInput.placeholder = t.searchPlaceholder;

    Object.keys(t.tabs).forEach(tabKey => {
      setTxt(`tab-${tabKey}`, t.tabs[tabKey]);
    });
  }

  function switchTab(tabId) {
    const tabs = ['overview', 'charts', 'states', 'correlations', 'simulator', 'income', 'benchmark', 'datahub'];
    tabs.forEach(id => {
      const sec = document.getElementById(`view-${id}`);
      if (sec) sec.classList.toggle('hidden', id !== tabId);
      const btn = document.getElementById(`tab-${id}`);
      if (btn) {
        btn.className = id === tabId
          ? 'px-3.5 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap bg-emerald-700 text-white shadow-sm transition-all'
          : 'px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap text-stone-600 hover:bg-stone-200/70 transition-all';
      }
    });

    if (tabId === 'overview') renderOverview();
    if (tabId === 'charts') renderCharts();
    if (tabId === 'states') renderStates();
    if (tabId === 'correlations') renderCorrelations();
    if (tabId === 'simulator') updateSimulator();
    if (tabId === 'income') updateIncomeCalculator();
    if (tabId === 'benchmark') renderBenchmark();
  }

  // Expose public API for inline handlers
  window.BR_APP = {
    switchTab,
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
            : 'px-2.5 py-1 rounded-lg text-xs font-bold text-stone-600 hover:bg-stone-200';
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
          : 'px-3 py-1 rounded-xl text-xs font-bold bg-[#FAF8F5] text-stone-700 border border-stone-300';
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
            ? 'px-2.5 py-1 rounded-lg text-xs font-extrabold bg-white text-emerald-900 shadow-sm'
            : 'px-2.5 py-1 rounded-lg text-xs font-extrabold text-stone-600';
        }
      });
      applyUITranslations();
      renderOverview();
      if (!document.getElementById('view-charts').classList.contains('hidden')) renderCharts();
      if (!document.getElementById('view-states').classList.contains('hidden')) renderStates();
      if (!document.getElementById('view-correlations').classList.contains('hidden')) renderCorrelations();
      if (!document.getElementById('view-benchmark').classList.contains('hidden')) renderBenchmark();
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
            : 'px-3 py-1 rounded-lg text-xs font-bold bg-[#FAF8F5] text-stone-700 border border-stone-200';
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
      radarUf1 = uf;
      const sel1 = document.getElementById('radar-uf-1');
      if (sel1) sel1.value = uf;
      renderStateRadar();
    },
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
    downloadChartCSV,
    downloadChartPNG,
    downloadAllStatesCSV,
    downloadAllJSON
  };

  window.addEventListener('DOMContentLoaded', () => {
    applyUITranslations();
    renderOverview();
    renderBenchmark();
  });
})();

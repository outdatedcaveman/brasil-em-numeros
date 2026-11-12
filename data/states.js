// ============================================================================
// BRASIL EM NÚMEROS | BRAZIL BY NUMBERS — ATLAS DAS 27 UFs, PIRÂMIDE ETÁRIA,
// DISTRIBUIÇÃO DE RENDA (PNAD/WID) E COMPARATIVO INTERNACIONAL (OCDE/BRICS)
// ============================================================================

window.BR_DATA = window.BR_DATA || {};

window.BR_DATA.STATE_METRICS = [
  { key: 'gdpPerCapita', label: { pt: 'PIB per Capita (R$)', es: 'PIB per Cápita (R$)', en: 'GDP per Capita (R$)' }, unit: 'R$', higherBetter: true, brAvg: 55240, dec: 0 },
  { key: 'idhm', label: { pt: 'IDH Estadual (PNUD)', es: 'IDH Estatal (PNUD)', en: 'State HDI (UNDP)' }, unit: '', higherBetter: true, brAvg: 0.766, dec: 3 },
  { key: 'lifeExp', label: { pt: 'Esperança de Vida (Anos)', es: 'Esperanza de Vida (Años)', en: 'Life Expectancy (Yrs)' }, unit: 'anos', higherBetter: true, brAvg: 76.4, dec: 1 },
  { key: 'sewage', label: { pt: 'Coleta de Esgoto (%)', es: 'Red Alcantarillado (%)', en: 'Sewage Network (%)' }, unit: '%', higherBetter: true, brAvg: 56.0, dec: 1 },
  { key: 'water', label: { pt: 'Água Tratada (%)', es: 'Agua Potable (%)', en: 'Treated Water (%)' }, unit: '%', higherBetter: true, brAvg: 84.9, dec: 1 },
  { key: 'informality', label: { pt: 'Informalidade PNAD (%)', es: 'Informalidad (%)', en: 'Informality Rate (%)' }, unit: '%', higherBetter: false, brAvg: 38.7, dec: 1 },
  { key: 'poverty', label: { pt: 'Taxa de Pobreza (%)', es: 'Tasa de Pobreza (%)', en: 'Poverty Rate (%)' }, unit: '%', higherBetter: false, brAvg: 27.4, dec: 1 },
  { key: 'gini', label: { pt: 'Índice de Gini', es: 'Índice de Gini', en: 'Gini Coefficient' }, unit: '', higherBetter: false, brAvg: 0.518, dec: 3 },
  { key: 'idebEarly', label: { pt: 'IDEB Anos Iniciais', es: 'IDEB Primaria', en: 'IDEB Early Primary' }, unit: 'pts', higherBetter: true, brAvg: 6.0, dec: 1 },
  { key: 'idebHs', label: { pt: 'IDEB Ensino Médio', es: 'IDEB Secundaria', en: 'IDEB High School' }, unit: 'pts', higherBetter: true, brAvg: 4.3, dec: 1 },
  { key: 'homicide', label: { pt: 'Homicídios (/100 mil)', es: 'Homicidios (/100 mil)', en: 'Homicides (/100k)' }, unit: '/100k', higherBetter: false, brAvg: 22.8, dec: 1 },
  { key: 'pop', label: { pt: 'População (Milhões)', es: 'Población (Millones)', en: 'Population (Millions)' }, unit: 'M', higherBetter: true, brAvg: 212.6, dec: 2 }
];

// Coordenadas (col, row) para o Mapa Cartograma Hexagonal/Grid Geográfico do Brasil + Dados Oficiais das 27 UFs
window.BR_DATA.UF_LIST = [
  { uf: 'DF', name: 'Distrito Federal', capital: 'Brasília', region: 'Centro-Oeste', col: 4, row: 4, pop: 2.98, gdpPerCapita: 98420, idhm: 0.829, lifeExp: 79.2, water: 99.0, sewage: 90.4, informality: 29.8, poverty: 14.8, gini: 0.548, idebEarly: 6.3, idebHs: 4.4, homicide: 11.2 },
  { uf: 'MT', name: 'Mato Grosso', capital: 'Cuiabá', region: 'Centro-Oeste', col: 2, row: 3, pop: 3.83, gdpPerCapita: 68450, idhm: 0.774, lifeExp: 75.8, water: 89.2, sewage: 41.2, informality: 34.5, poverty: 16.9, gini: 0.461, idebEarly: 6.0, idebHs: 4.2, homicide: 24.5 },
  { uf: 'SP', name: 'São Paulo', capital: 'São Paulo', region: 'Sudeste', col: 3, row: 5, pop: 45.97, gdpPerCapita: 67240, idhm: 0.826, lifeExp: 78.6, water: 96.4, sewage: 91.5, informality: 29.4, poverty: 16.4, gini: 0.504, idebEarly: 6.5, idebHs: 4.5, homicide: 6.4 },
  { uf: 'RJ', name: 'Rio de Janeiro', capital: 'Rio de Janeiro', region: 'Sudeste', col: 5, row: 5, pop: 17.21, gdpPerCapita: 62180, idhm: 0.796, lifeExp: 77.1, water: 91.2, sewage: 71.4, informality: 36.8, poverty: 22.8, gini: 0.538, idebEarly: 5.9, idebHs: 4.1, homicide: 26.2 },
  { uf: 'SC', name: 'Santa Catarina', capital: 'Florianópolis', region: 'Sul', col: 3, row: 7, pop: 8.05, gdpPerCapita: 61450, idhm: 0.808, lifeExp: 79.9, water: 91.8, sewage: 39.8, informality: 26.4, poverty: 10.2, gini: 0.418, idebEarly: 6.4, idebHs: 4.3, homicide: 8.8 },
  { uf: 'MS', name: 'Mato Grosso do Sul', capital: 'Campo Grande', region: 'Centro-Oeste', col: 2, row: 5, pop: 2.90, gdpPerCapita: 56890, idhm: 0.766, lifeExp: 76.9, water: 89.4, sewage: 61.5, informality: 33.1, poverty: 18.2, gini: 0.477, idebEarly: 5.9, idebHs: 4.3, homicide: 18.4 },
  { uf: 'RS', name: 'Rio Grande do Sul', capital: 'Porto Alegre', region: 'Sul', col: 2, row: 8, pop: 11.23, gdpPerCapita: 56120, idhm: 0.787, lifeExp: 78.5, water: 88.9, sewage: 46.2, informality: 30.8, poverty: 14.5, gini: 0.466, idebEarly: 6.2, idebHs: 4.2, homicide: 16.4 },
  { uf: 'PR', name: 'Paraná', capital: 'Curitiba', region: 'Sul', col: 3, row: 6, pop: 11.82, gdpPerCapita: 55480, idhm: 0.792, lifeExp: 77.9, water: 95.2, sewage: 76.4, informality: 31.2, poverty: 15.8, gini: 0.463, idebEarly: 6.7, idebHs: 4.9, homicide: 19.2 },
  { uf: 'ES', name: 'Espírito Santo', capital: 'Vitória', region: 'Sudeste', col: 6, row: 4, pop: 4.10, gdpPerCapita: 51340, idhm: 0.772, lifeExp: 78.9, water: 86.4, sewage: 64.2, informality: 35.1, poverty: 21.4, gini: 0.486, idebEarly: 6.3, idebHs: 4.8, homicide: 25.1 },
  { uf: 'MG', name: 'Minas Gerais', capital: 'Belo Horizonte', region: 'Sudeste', col: 4, row: 5, pop: 21.32, gdpPerCapita: 45890, idhm: 0.774, lifeExp: 78.2, water: 84.8, sewage: 76.8, informality: 36.4, poverty: 21.9, gini: 0.476, idebEarly: 6.3, idebHs: 4.3, homicide: 13.8 },
  { uf: 'GO', name: 'Goiás', capital: 'Goiânia', region: 'Centro-Oeste', col: 3, row: 4, pop: 7.35, gdpPerCapita: 45120, idhm: 0.769, lifeExp: 76.1, water: 91.0, sewage: 62.8, informality: 36.2, poverty: 18.6, gini: 0.473, idebEarly: 6.3, idebHs: 4.8, homicide: 21.8 },
  { uf: 'RO', name: 'Rondônia', capital: 'Porto Velho', region: 'Norte', col: 1, row: 3, pop: 1.74, gdpPerCapita: 40120, idhm: 0.725, lifeExp: 73.4, water: 56.4, sewage: 18.2, informality: 44.5, poverty: 25.4, gini: 0.465, idebEarly: 5.8, idebHs: 4.1, homicide: 28.4 },
  { uf: 'TO', name: 'Tocantins', capital: 'Palmas', region: 'Norte', col: 3, row: 3, pop: 1.57, gdpPerCapita: 38950, idhm: 0.743, lifeExp: 75.2, water: 82.1, sewage: 34.8, informality: 45.2, poverty: 29.8, gini: 0.491, idebEarly: 5.7, idebHs: 4.1, homicide: 24.1 },
  { uf: 'AM', name: 'Amazonas', capital: 'Manaus', region: 'Norte', col: 1, row: 1, pop: 4.28, gdpPerCapita: 36840, idhm: 0.733, lifeExp: 74.1, water: 69.8, sewage: 24.5, informality: 54.8, poverty: 43.2, gini: 0.512, idebEarly: 5.6, idebHs: 3.9, homicide: 33.8 },
  { uf: 'RR', name: 'Roraima', capital: 'Boa Vista', region: 'Norte', col: 2, row: 0, pop: 0.71, gdpPerCapita: 35420, idhm: 0.752, lifeExp: 73.8, water: 81.4, sewage: 42.1, informality: 47.6, poverty: 34.8, gini: 0.520, idebEarly: 5.6, idebHs: 3.8, homicide: 31.2 },
  { uf: 'PA', name: 'Pará', capital: 'Belém', region: 'Norte', col: 3, row: 1, pop: 8.66, gdpPerCapita: 31450, idhm: 0.698, lifeExp: 73.9, water: 53.2, sewage: 19.2, informality: 58.6, poverty: 41.8, gini: 0.501, idebEarly: 5.1, idebHs: 3.8, homicide: 32.4 },
  { uf: 'AP', name: 'Amapá', capital: 'Macapá', region: 'Norte', col: 3, row: 0, pop: 0.80, gdpPerCapita: 30850, idhm: 0.740, lifeExp: 75.1, water: 44.8, sewage: 16.4, informality: 49.8, poverty: 38.4, gini: 0.498, idebEarly: 5.1, idebHs: 3.7, homicide: 57.4 },
  { uf: 'RN', name: 'Rio Grande do Norte', capital: 'Natal', region: 'Nordeste', col: 6, row: 1, pop: 3.44, gdpPerCapita: 28450, idhm: 0.731, lifeExp: 76.4, water: 81.2, sewage: 33.8, informality: 46.2, poverty: 38.9, gini: 0.525, idebEarly: 5.3, idebHs: 3.7, homicide: 29.4 },
  { uf: 'PE', name: 'Pernambuco', capital: 'Recife', region: 'Nordeste', col: 6, row: 2, pop: 9.53, gdpPerCapita: 27980, idhm: 0.727, lifeExp: 75.8, water: 79.4, sewage: 36.4, informality: 48.9, poverty: 43.8, gini: 0.536, idebEarly: 5.8, idebHs: 4.5, homicide: 36.2 },
  { uf: 'BA', name: 'Bahia', capital: 'Salvador', region: 'Nordeste', col: 5, row: 3, pop: 14.85, gdpPerCapita: 27650, idhm: 0.714, lifeExp: 75.1, water: 80.6, sewage: 45.2, informality: 52.1, poverty: 44.2, gini: 0.519, idebEarly: 5.4, idebHs: 3.8, homicide: 43.9 },
  { uf: 'SE', name: 'Sergipe', capital: 'Aracaju', region: 'Nordeste', col: 6, row: 3, pop: 2.29, gdpPerCapita: 26940, idhm: 0.702, lifeExp: 74.9, water: 84.2, sewage: 34.1, informality: 49.4, poverty: 42.1, gini: 0.528, idebEarly: 5.3, idebHs: 3.9, homicide: 31.5 },
  { uf: 'AC', name: 'Acre', capital: 'Rio Branco', region: 'Norte', col: 0, row: 2, pop: 0.88, gdpPerCapita: 26890, idhm: 0.719, lifeExp: 74.8, water: 51.8, sewage: 25.4, informality: 51.2, poverty: 44.9, gini: 0.516, idebEarly: 5.9, idebHs: 4.0, homicide: 26.8 },
  { uf: 'CE', name: 'Ceará', capital: 'Fortaleza', region: 'Nordeste', col: 5, row: 1, pop: 9.23, gdpPerCapita: 25420, idhm: 0.735, lifeExp: 75.9, water: 68.4, sewage: 35.8, informality: 52.8, poverty: 42.6, gini: 0.513, idebEarly: 6.6, idebHs: 4.6, homicide: 32.8 },
  { uf: 'AL', name: 'Alagoas', capital: 'Maceió', region: 'Nordeste', col: 7, row: 3, pop: 3.22, gdpPerCapita: 24890, idhm: 0.683, lifeExp: 73.7, water: 75.8, sewage: 27.9, informality: 50.4, poverty: 45.8, gini: 0.514, idebEarly: 5.8, idebHs: 4.1, homicide: 35.1 },
  { uf: 'PB', name: 'Paraíba', capital: 'João Pessoa', region: 'Nordeste', col: 7, row: 2, pop: 4.14, gdpPerCapita: 23450, idhm: 0.722, lifeExp: 75.4, water: 76.2, sewage: 41.2, informality: 51.6, poverty: 43.4, gini: 0.542, idebEarly: 5.6, idebHs: 4.0, homicide: 26.4 },
  { uf: 'PI', name: 'Piauí', capital: 'Teresina', region: 'Nordeste', col: 4, row: 2, pop: 3.37, gdpPerCapita: 22980, idhm: 0.710, lifeExp: 72.9, water: 78.4, sewage: 22.4, informality: 56.4, poverty: 44.6, gini: 0.522, idebEarly: 6.1, idebHs: 4.5, homicide: 22.1 },
  { uf: 'MA', name: 'Maranhão', capital: 'São Luís', region: 'Nordeste', col: 4, row: 1, pop: 7.01, gdpPerCapita: 20450, idhm: 0.687, lifeExp: 72.5, water: 61.2, sewage: 19.8, informality: 57.9, poverty: 51.2, gini: 0.508, idebEarly: 5.4, idebHs: 3.9, homicide: 28.2 }
];

// Pirâmide Demográfica por Faixas Etárias (% da população total em cada ano — IBGE Projeções 2024)
window.BR_DATA.PYRAMID_YEARS = {
  '1980': {
    pop: '119,0M', medianAge: 20.2, supportRatio: 9.8,
    brackets: ['0–9', '10–19', '20–29', '30–39', '40–49', '50–59', '60–69', '70–79', '80+'],
    male:   [-13.4, -11.8, -8.9, -6.1, -4.4, -2.9, -1.7, -0.8, -0.2],
    female: [ 13.1,  11.7,  9.1,  6.2,  4.5,  3.0,  1.9,  1.0,  0.3]
  },
  '2000': {
    pop: '173,8M', medianAge: 25.4, supportRatio: 7.9,
    brackets: ['0–9', '10–19', '20–29', '30–39', '40–49', '50–59', '60–69', '70–79', '80+'],
    male:   [-9.8, -10.4, -8.9, -7.4, -5.5, -3.5, -2.2, -1.1, -0.4],
    female: [ 9.5,  10.2,  9.0,  7.7,  5.8,  3.8,  2.6,  1.4,  0.6]
  },
  '2024': {
    pop: '212,6M', medianAge: 35.5, supportRatio: 4.5,
    brackets: ['0–9', '10–19', '20–29', '30–39', '40–49', '50–59', '60–69', '70–79', '80+'],
    male:   [-6.4, -7.0, -7.8, -7.9, -7.2, -5.8, -4.2, -2.2, -0.9],
    female: [ 6.1,  6.7,  7.7,  8.1,  7.6,  6.3,  4.8,  2.8,  1.5]
  },
  '2040': {
    pop: '220,3M', medianAge: 41.8, supportRatio: 2.8,
    brackets: ['0–9', '10–19', '20–29', '30–39', '40–49', '50–59', '60–69', '70–79', '80+'],
    male:   [-5.1, -5.6, -6.2, -6.8, -7.4, -7.2, -5.9, -3.9, -1.9],
    female: [ 4.9,  5.4,  6.0,  6.8,  7.5,  7.6,  6.6,  4.8,  2.9]
  },
  '2060': {
    pop: '206,8M', medianAge: 47.6, supportRatio: 1.8,
    brackets: ['0–9', '10–19', '20–29', '30–39', '40–49', '50–59', '60–69', '70–79', '80+'],
    male:   [-4.3, -4.6, -5.1, -5.6, -6.2, -6.7, -6.9, -5.8, -3.8],
    female: [ 4.1,  4.4,  4.9,  5.5,  6.2,  6.9,  7.4,  6.8,  5.6]
  }
};

// Curva de Distribuição de Renda Domiciliar per Capita Mensal (R$ de 2024 — PNAD Contínua + Topo WID/IRPF)
window.BR_DATA.INCOME_DISTRIBUTION = [
  { pct: 5,  income: 245,   label: '5% mais pobres (Extrema vulnerabilidade)' },
  { pct: 10, income: 392,   label: '10% mais pobres (Base do Bolsa Família)' },
  { pct: 20, income: 615,   label: '20% (1º Quintil)' },
  { pct: 30, income: 820,   label: '30% da população' },
  { pct: 40, income: 1045,  label: '40% (2º Quintil)' },
  { pct: 50, income: 1290,  label: 'Mediana Nacional (50% ganham até R$ 1.290 per capita)' },
  { pct: 60, income: 1580,  label: '60% (3º Quintil)' },
  { pct: 70, income: 1980,  label: '70% (Média Nacional per capita ~R$ 2.020)' },
  { pct: 80, income: 2690,  label: '80% (4º Quintil — Classe Média Urbana)' },
  { pct: 90, income: 4250,  label: 'Top 10% mais ricos do Brasil (a partir de R$ 4.250 per capita)' },
  { pct: 95, income: 6890,  label: 'Top 5% mais ricos do Brasil' },
  { pct: 98, income: 12400, label: 'Top 2% mais ricos do Brasil' },
  { pct: 99, income: 21800, label: 'Top 1% mais rico do Brasil (a partir de R$ 21.800 per capita)' }
];

// Comparativo Internacional Multi-País (Brasil vs. UK, OCDE, EUA, China, Chile, México, Índia)
window.BR_DATA.GLOBAL_BENCHMARKS = [
  { metric: { pt: 'População Residente (Milhões)', es: 'Población Residente (Millones)', en: 'Resident Population (Millions)' }, br: '212,6M', uk: '68,3M', oecd: '1.390M', us: '336,5M', cn: '1.409M', cl: '19,7M', source: 'IBGE / ONU / ONS' },
  { metric: { pt: 'Taxa de Fecundidade Total (filhos/mulher)', es: 'Tasa Global de Fecundidad', en: 'Total Fertility Rate (births/woman)' }, br: '1,57', uk: '1,44', oecd: '1,58', us: '1,62', cn: '1,02', cl: '1,31', source: 'IBGE / ONS / Banco Mundial' },
  { metric: { pt: 'Esperança de Vida ao Nascer (Anos)', es: 'Esperanza de Vida al Nacer (Años)', en: 'Life Expectancy at Birth (Years)' }, br: '76,4', uk: '81,0', oecd: '80,3', us: '77,5', cn: '78,6', cl: '81,2', source: 'IBGE / OMS / ONS' },
  { metric: { pt: 'PIB per Capita em PPC (US$ Constantes)', es: 'PIB per Cápita PPA (US$)', en: 'GDP per Capita PPP (US$)' }, br: 'US$ 20.800', uk: 'US$ 58.900', oecd: 'US$ 57.400', us: 'US$ 85.370', cn: 'US$ 25.015', cl: 'US$ 31.010', source: 'FMI WEO 2024' },
  { metric: { pt: 'Taxa de Investimento / FBCF (% PIB)', es: 'Tasa de Inversión / FBCF (% PIB)', en: 'Investment Rate / GFCF (% GDP)' }, br: '16,5%', uk: '18,1%', oecd: '22,4%', us: '21,6%', cn: '41,2%', cl: '23,8%', source: 'IBGE / Banco Mundial' },
  { metric: { pt: 'Taxa de Informalidade no Trabalho (%)', es: 'Informalidad Laboral (%)', en: 'Informal Employment Share (%)' }, br: '38,7%', uk: '9,2%', oecd: '13,5%', us: '10,8%', cn: '46,0%', cl: '27,4%', source: 'IBGE PNAD / OIT' },
  { metric: { pt: 'Carga Tributária Bruta (% do PIB)', es: 'Carga Tributaria Bruta (% PIB)', en: 'Total Tax Revenue (% of GDP)' }, br: '32,4%', uk: '35,3%', oecd: '34,0%', us: '27,7%', cn: '20,8%', cl: '23,9%', source: 'Tesouro Nacional / OCDE' },
  { metric: { pt: 'Impostos sobre Consumo (% da Arrecadação)', es: 'Impuestos al Consumo (% Recaudación)', en: 'Consumption Taxes (% of Tax Revenue)' }, br: '44,2%', uk: '27,8%', oecd: '31,6%', us: '16,2%', cn: '41,5%', cl: '48,1%', source: 'STN / OCDE Revenue Stats' },
  { metric: { pt: 'Gasto com Previdência Pública (% do PIB)', es: 'Gasto Público en Pensiones (% PIB)', en: 'Public Pension Spending (% of GDP)' }, br: '12,4%', uk: '7,6%', oecd: '8,9%', us: '7,1%', cn: '5,4%', cl: '4,8%', source: 'STN / OCDE Pensions' },
  { metric: { pt: 'Dívida Bruta do Governo Geral (% do PIB)', es: 'Deuda Pública Bruta (% PIB)', en: 'Gross Government Debt (% of GDP)' }, br: '78,6%', uk: '98,2%', oecd: '83,5%', us: '122,3%', cn: '83,6%', cl: '39,8%', source: 'BCB / FMI Fiscal Monitor' },
  { metric: { pt: 'Coeficiente de Gini (Renda Domiciliar)', es: 'Coeficiente de Gini', en: 'Gini Coefficient (Household Income)' }, br: '0,518', uk: '0,357', oecd: '0,315', us: '0,398', cn: '0,382', cl: '0,430', source: 'IBGE / WID / OCDE' },
  { metric: { pt: 'Renda Apropriada pelo 1% do Topo (%)', es: 'Participación del 1% Más Rico (%)', en: 'Top 1% National Income Share (%)' }, br: '26,5%', uk: '12,7%', oecd: '13,4%', us: '19,1%', cn: '14,0%', cl: '23,8%', source: 'World Inequality Database' },
  { metric: { pt: 'População Conectada à Rede de Esgoto (%)', es: 'Conexión a Red de Alcantarillado (%)', en: 'Population with Sewage Network (%)' }, br: '56,0%', uk: '99,2%', oecd: '94,5%', us: '86,5%', cn: '78,4%', cl: '97,2%', source: 'SNIS / JMP OMS-UNICEF' },
  { metric: { pt: 'Pontuação no PISA Matemática (2022)', es: 'Puntaje PISA Matemáticas (2022)', en: 'PISA 2022 Mathematics Score' }, br: '379 pts', uk: '489 pts', oecd: '472 pts', us: '465 pts', cn: '552* pts', cl: '412 pts', source: 'OCDE PISA 2022 / INEP' },
  { metric: { pt: 'Participação Renovável na Eletricidade (%)', es: 'Electricidad Renovable (%)', en: 'Renewable Share of Electricity (%)' }, br: '89,2%', uk: '46,5%', oecd: '33,4%', us: '22,7%', cn: '31,8%', cl: '63,2%', source: 'EPE BEN / Ember / IEA' },
  { metric: { pt: 'Taxa de Homicídios Intencionais (/100 mil)', es: 'Tasa de Homicidios (/100 mil)', en: 'Intentional Homicide Rate (/100k)' }, br: '22,8', uk: '1,0', oecd: '2,8', us: '5,7', cn: '0,5', cl: '6,3', source: 'FBSP / UNODC / ONS' }
];

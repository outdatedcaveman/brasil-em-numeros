// ============================================================================
// BRASIL EM NÚMEROS | BRAZIL BY NUMBERS — 40 SÉRIES HISTÓRICAS EM 10 PILARES
// Dados auditáveis de fontes oficiais brasileiras e internacionais (CC BY 4.0)
// ============================================================================

window.BR_DATA = window.BR_DATA || {};

window.BR_DATA.CHARTS = [
  // ==========================================================================
  // PILAR 01: POPULAÇÃO, DEMOGRAFIA E TRANSIÇÃO ETÁRIA (4 SÉRIES)
  // ==========================================================================
  {
    id: 'c-tfr',
    pillar: 'demographics',
    code: '1.1',
    type: 'line',
    unit: 'filhos/mulher',
    title: {
      pt: 'Queda Histórica da Taxa de Fecundidade Total (1960–2024)',
      es: 'Caída Histórica de la Tasa Global de Fecundidad (1960–2024)',
      en: 'Historical Collapse of Total Fertility Rate (1960–2024)'
    },
    takeaway: {
      pt: 'A fecundidade despencou de 6,28 filhos por mulher em 1960 para 1,57 em 2024 — 25% abaixo do nível de reposição populacional (2,10), mesmo sem políticas estatais compulsórias.',
      es: 'La fecundidad cayó de 6,28 hijos por mujer en 1960 a 1,57 en 2024 — un 25% por debajo del nivel de reemplazo (2,10).',
      en: 'Fertility dropped from 6.28 births per woman in 1960 to 1.57 in 2024 — 25% below replacement level (2.10).'
    },
    uk: {
      pt: 'Reino Unido: 1,44 filhos por mulher (ONS); Média OCDE: 1,58.',
      es: 'Reino Unido: 1,44 hijos por mujer (ONS); Media OCDE: 1,58.',
      en: 'UK Benchmark: 1.44 births per woman (ONS); OECD average: 1.58.'
    },
    source: 'IBGE (Censo Demográfico 2022 & Projeções da População Revisão 2024)',
    labels: ['1960', '1970', '1980', '1991', '2000', '2010', '2015', '2020', '2024'],
    datasets: [
      { label: 'Fecundidade Brasil', data: [6.28, 5.76, 4.35, 2.89, 2.38, 1.90, 1.77, 1.65, 1.57], borderColor: '#059669', backgroundColor: 'rgba(5,150,105,0.12)', fill: true },
      { label: 'Nível de Reposição (2,1)', data: [2.10, 2.10, 2.10, 2.10, 2.10, 2.10, 2.10, 2.10, 2.10], borderColor: '#94a3b8', borderDash: [6, 4], pointRadius: 0 }
    ]
  },
  {
    id: 'c-aging',
    pillar: 'demographics',
    code: '1.2',
    type: 'line',
    unit: '% da pop.',
    title: {
      pt: 'Transição Etária: Jovens (0–14) vs. Idosos (65+ Anos) % (1980–2060)',
      es: 'Transición de Edad: Jóvenes (0–14) vs. Mayores (65+) % (1980–2060)',
      en: 'Age Crossover: Youth (0–14) vs. Seniors (65+) % (1980–2060)'
    },
    takeaway: {
      pt: 'Em 2036, o Brasil terá mais idosos (65+) do que crianças (0–14). Até 2060, mais de 1 em cada 4 brasileiros (27,8%) terá 65 anos ou mais.',
      es: 'En 2036, Brasil tendrá más adultos mayores (65+) que niños (0–14). En 2060, el 27,8% tendrá 65+ años.',
      en: 'By 2036, Brazil will have more seniors aged 65+ than youth under 15; by 2060, 27.8% of Brazilians will be 65 or older.'
    },
    uk: {
      pt: 'Reino Unido: 19,1% têm 65+ anos hoje (idade mediana 40,7 anos vs. 35,5 no Brasil).',
      es: 'Reino Unido: 19,1% tiene 65+ años hoy (edad mediana 40,7 años).',
      en: 'UK Benchmark: 19.1% aged 65+ today (median age 40.7 vs. 35.5 in Brazil).'
    },
    source: 'IBGE (Projeções da População Revisão 2024)',
    labels: ['1980', '1991', '2000', '2010', '2022', '2030', '2040', '2050', '2060'],
    datasets: [
      { label: 'Jovens 0–14 anos (%)', data: [38.2, 34.7, 29.6, 24.1, 19.8, 17.1, 14.8, 13.1, 12.0], borderColor: '#0284c7', backgroundColor: 'rgba(2,132,199,0.08)' },
      { label: 'Idosos 65+ anos (%)', data: [4.0, 4.8, 5.9, 7.4, 10.9, 14.2, 18.9, 23.8, 27.8], borderColor: '#e11d48', backgroundColor: 'rgba(225,29,72,0.08)' }
    ]
  },
  {
    id: 'c-pop-peak',
    pillar: 'demographics',
    code: '1.3',
    type: 'line',
    unit: 'Milhões hab.',
    title: {
      pt: 'Curva Populacional e Pico Demográfico em 2041 (1950–2070, Milhões)',
      es: 'Curva Poblacional y Pico Demográfico en 2041 (1950–2070, Millones)',
      en: 'Population Trajectory & 2041 Demographic Peak (1950–2070, Millions)'
    },
    takeaway: {
      pt: 'Após quadruplicar entre 1950 (51,9M) e 2024 (212,6M), a população brasileira atingirá seu máximo histórico em 2041 (220,4M) e passará a encolher, recuando para 199,2M em 2070.',
      es: 'Tras cuadruplicarse desde 1950, la población alcanzará su máximo en 2041 (220,4M) y caerá a 199,2M en 2070.',
      en: 'After quadrupling since 1950, Brazil’s population will peak in 2041 at 220.4M and then contract to 199.2M by 2070.'
    },
    uk: {
      pt: 'A população do Reino Unido (68,3M) segue crescendo exclusivamente via saldo migratório líquido.',
      es: 'La población del Reino Unido (68,3M) sigue creciendo solo por migración neta.',
      en: 'The UK population (68.3M) continues to grow solely via net international migration.'
    },
    source: 'IBGE (Projeções da População do Brasil e Unidades da Federação 2024)',
    labels: ['1950', '1970', '1991', '2010', '2024', '2035', '2041 (Pico)', '2055', '2070'],
    datasets: [
      { label: 'População Total (Milhões)', data: [51.9, 93.1, 146.8, 190.7, 212.6, 219.3, 220.4, 213.5, 199.2], borderColor: '#059669', backgroundColor: 'rgba(5,150,105,0.15)', fill: true }
    ]
  },
  {
    id: 'c-dependency',
    pillar: 'demographics',
    code: '1.4',
    type: 'bar',
    unit: 'por 100 PIA',
    title: {
      pt: 'Fim do Bônus Demográfico: Razão de Dependência Juvenil e de Idosos (1980–2060)',
      es: 'Fin del Bono Demográfico: Razón de Dependencia Juvenil y de Mayores (1980–2060)',
      en: 'End of Demographic Dividend: Youth & Old-Age Dependency Ratios (1980–2060)'
    },
    takeaway: {
      pt: 'A janela de menor razão de dependência total (44,3 dependentes por 100 pessoas em idade ativa) fechou-se entre 2018 e 2023. Até 2060, a dependência de idosos triplicará para 46,2 por 100 ativos.',
      es: 'El bono demográfico se cerró en 2022; hacia 2060 habrá 46,2 ancianos por cada 100 personas en edad laboral.',
      en: 'Brazil’s demographic dividend peaked around 2020; by 2060 old-age dependency will triple to 46.2 seniors per 100 working-age adults.'
    },
    uk: {
      pt: 'OCDE hoje: 31,4 idosos por 100 adultos em idade ativa (15–64 anos).',
      es: 'OCDE hoy: 31,4 mayores por cada 100 adultos en edad activa.',
      en: 'OECD today: 31.4 seniors per 100 working-age adults (15–64).'
    },
    source: 'IBGE & ONU (World Population Prospects 2024)',
    labels: ['1980', '2000', '2010', '2022', '2030', '2040', '2050', '2060'],
    datasets: [
      { label: 'Dependência Juvenil (0–14 / PIA)', data: [66.1, 45.9, 35.2, 28.6, 24.9, 22.3, 20.8, 19.9], backgroundColor: '#38bdf8' },
      { label: 'Dependência de Idosos (65+ / PIA)', data: [6.9, 9.1, 10.8, 15.7, 20.7, 28.5, 37.7, 46.2], backgroundColor: '#f43f5e' }
    ]
  },

  // ==========================================================================
  // PILAR 02: ECONOMIA, TRABALHO, RENDA E PRODUTIVIDADE (4 SÉRIES)
  // ==========================================================================
  {
    id: 'c-prod',
    pillar: 'economy',
    code: '2.1',
    type: 'line',
    unit: 'Índice (1995=100)',
    title: {
      pt: 'Produtividade por Setor (Base 1995 = 100): Agropecuária vs. Serviços e Indústria',
      es: 'Productividad por Sector (Base 1995 = 100): Agro vs. Servicios e Industria',
      en: 'Labor Productivity Index by Sector (Base 1995 = 100): Agri vs. Services & Industry'
    },
    takeaway: {
      pt: 'A produtividade por trabalhador na agropecuária saltou +255% desde 1995, enquanto Serviços (+4,2%) e Indústria (-3,2%), que concentram 86% do emprego, estagnaram por três décadas.',
      es: 'La productividad agropecuaria creció +255% desde 1995, mientras servicios (+4,2%) e industria (-3,2%) se estancaron.',
      en: 'Agribusiness output per worker surged +255% since 1995, while Services (+4.2%) and Industry (-3.2%) stagnated over three decades.'
    },
    uk: {
      pt: 'O trabalhador médio britânico produz 2,8x mais valor adicionado por hora trabalhada que o brasileiro (OCDE/FGV).',
      es: 'El trabajador británico produce 2,8x más valor por hora que el brasileño.',
      en: 'The average UK worker produces 2.8x more value added per hour worked than the Brazilian average.'
    },
    source: 'FGV IBRE (Observatório da Produtividade Regis Bonelli) & IBGE Contas Nacionais',
    labels: ['1995', '2000', '2005', '2010', '2015', '2020', '2024'],
    datasets: [
      { label: 'Agropecuária (1995=100)', data: [100, 128.4, 162.1, 218.5, 269.0, 318.2, 355.0], borderColor: '#059669' },
      { label: 'Serviços (1995=100)', data: [100, 98.5, 101.2, 108.4, 103.1, 101.8, 104.2], borderColor: '#0284c7' },
      { label: 'Indústria (1995=100)', data: [100, 103.2, 101.8, 104.5, 96.2, 95.4, 96.8], borderColor: '#dc2626' }
    ]
  },
  {
    id: 'c-labor',
    pillar: 'economy',
    code: '2.2',
    type: 'line',
    unit: '% da força',
    title: {
      pt: 'Desemprego nas Mínimas (6,2%) vs. Informalidade Estrutural Persistente (38,7%)',
      es: 'Desempleo en Mínimos (6,2%) vs. Informalidad Estructural Persistente (38,7%)',
      en: 'Record Low Unemployment (6.2%) vs. Structural Informality (38.7%)'
    },
    takeaway: {
      pt: 'Mesmo com a taxa de desocupação na mínima histórica da série (6,2% em 2024), 38,7% dos ocupados (~39,8 milhões de pessoas) trabalham sem carteira assinada ou CNPJ contribuinte.',
      es: 'Incluso con desempleo mínimo (6,2%), el 38,7% de los ocupados (~39,8M) permanece en la informalidad.',
      en: 'Despite unemployment hitting a record low (6.2%), 38.7% of employed Brazilians (~39.8M people) remain in informal work.'
    },
    uk: {
      pt: 'No Reino Unido, a economia informal representa ~9,2% da força ocupada; na OCDE, ~13,5%.',
      es: 'En el Reino Unido, el empleo informal es ~9,2%; en la OCDE, ~13,5%.',
      en: 'In the UK, informal employment is ~9.2% of the workforce; OECD average is ~13.5%.'
    },
    source: 'IBGE (Pesquisa Nacional por Amostra de Domicílios Contínua - PNAD Contínua)',
    labels: ['2012', '2014', '2016', '2018', '2020', '2022', '2024'],
    datasets: [
      { label: 'Taxa de Informalidade (%)', data: [39.1, 37.8, 39.5, 41.1, 38.7, 39.4, 38.7], borderColor: '#d97706' },
      { label: 'Taxa de Desocupação / Desemprego (%)', data: [7.4, 6.9, 11.6, 12.4, 13.8, 9.3, 6.2], borderColor: '#0284c7' }
    ]
  },
  {
    id: 'c-gdp-ppp',
    pillar: 'economy',
    code: '2.3',
    type: 'line',
    unit: 'US$ Mil PPC',
    title: {
      pt: 'Armadilha da Renda Média: PIB per Capita PPC (US$ Mil Constantes, 1980–2024)',
      es: 'Trampa del Ingreso Medio: PIB per Cápita PPA (US$ Mil Constantes, 1980–2024)',
      en: 'Middle-Income Trap: GDP per Capita PPP (Constant US$ Thousands, 1980–2024)'
    },
    takeaway: {
      pt: 'Em 1980, o Brasil tinha o dobro da renda per capita da Coreia do Sul (US$ 10,8k vs. US$ 5,5k). Em 2024, a Coreia do Sul (US$ 56,7k) e o Chile (US$ 31,0k) superam amplamente o Brasil (US$ 20,8k).',
      es: 'En 1980, Brasil duplicaba el ingreso de Corea del Sur; hoy Corea (US$ 56,7k) y Chile (US$ 31,0k) superan a Brasil (US$ 20,8k).',
      en: 'In 1980, Brazil’s per-capita income was double South Korea’s; today South Korea ($56.7k) and Chile ($31.0k) far outpace Brazil ($20.8k).'
    },
    uk: {
      pt: 'Reino Unido: US$ 58,9 mil em PPC; Média OCDE: US$ 57,4 mil.',
      es: 'Reino Unido: US$ 58,9 mil PPA; Media OCDE: US$ 57,4 mil.',
      en: 'UK Benchmark: $58.9k PPP; OECD average: $57.4k PPP.'
    },
    source: 'FMI (World Economic Outlook) & Banco Mundial (International Comparison Program)',
    labels: ['1980', '1990', '2000', '2010', '2014', '2020', '2024'],
    datasets: [
      { label: 'Coreia do Sul (US$ Mil PPC)', data: [5.5, 12.1, 22.8, 34.9, 39.5, 47.8, 56.7], borderColor: '#6366f1' },
      { label: 'Chile (US$ Mil PPC)', data: [7.2, 9.4, 15.6, 22.1, 25.4, 26.8, 31.0], borderColor: '#0284c7' },
      { label: 'Brasil (US$ Mil PPC)', data: [10.8, 11.2, 13.1, 17.8, 19.6, 18.2, 20.8], borderColor: '#059669', borderWidth: 3 }
    ]
  },
  {
    id: 'c-selic-ipca',
    pillar: 'economy',
    code: '2.4',
    type: 'line',
    unit: '% a.a.',
    title: {
      pt: 'Juro Básico (Meta Selic), Inflação (IPCA) e Taxa de Investimento (% PIB, 2003–2024)',
      es: 'Tasa Selic, Inflación (IPCA) y Tasa de Inversión (% PIB, 2003–2024)',
      en: 'Policy Rate (Selic), Inflation (IPCA) & Investment Rate (% GDP, 2003–2024)'
    },
    takeaway: {
      pt: 'O juro real ex-post brasileiro (~6% a 7% a.a.) permanece entre os mais altos do mundo, comprimindo a Formação Bruta de Capital Fixo (FBCF) em 16,5% do PIB (vs. 22,5% na OCDE).',
      es: 'La tasa real brasileña (~6–7% anual) comprime la inversión (FBCF) en 16,5% del PIB (vs. 22,5% en la OCDE).',
      en: 'Structural real interest rates of 6–7% p.a. keep Brazil’s Gross Fixed Capital Formation depressed at 16.5% of GDP (vs. 22.5% in the OECD).'
    },
    uk: {
      pt: 'No Reino Unido, a taxa básica do Bank of England é de 4,75% com inflação de 2,3% e FBCF de 18,1% do PIB.',
      es: 'En el Reino Unido, la tasa base es del 4,75% con inflación del 2,3%.',
      en: 'In the UK, the Bank of England base rate is 4.75% with 2.3% CPI and 18.1% GDP investment.'
    },
    source: 'Banco Central do Brasil (SGS / Copom) & IBGE (IPCA / Contas Nacionais)',
    labels: ['2003', '2006', '2010', '2013', '2016', '2019', '2020', '2022', '2024'],
    datasets: [
      { label: 'Taxa Selic Meta Fim de Período (% a.a.)', data: [16.5, 13.25, 10.75, 10.0, 13.75, 4.5, 2.0, 13.75, 11.75], borderColor: '#dc2626' },
      { label: 'Inflação IPCA (% a.a.)', data: [9.3, 3.1, 5.9, 5.9, 6.3, 4.3, 4.5, 5.8, 4.8], borderColor: '#d97706' },
      { label: 'Investimento FBCF (% do PIB)', data: [16.6, 17.8, 20.5, 20.9, 15.5, 15.5, 16.6, 17.8, 16.5], borderColor: '#0284c7', borderDash: [4, 3] }
    ]
  },

  // ==========================================================================
  // PILAR 03: ESTADO FISCAL, TRIBUTOS, PREVIDÊNCIA E DÍVIDA (4 SÉRIES)
  // ==========================================================================
  {
    id: 'c-tax',
    pillar: 'fiscal',
    code: '3.1',
    type: 'bar',
    unit: '% da arrecadação',
    title: {
      pt: 'Composição da Carga Tributária (32,4% PIB): Brasil vs. Média OCDE (%)',
      es: 'Composición de la Carga Tributaria (32,4% PIB): Brasil vs. OCDE (%)',
      en: 'Tax Revenue Structure (32.4% GDP): Brazil vs. OECD Average (%)'
    },
    takeaway: {
      pt: '44,2% da arrecadação brasileira vem de tributos indiretos sobre bens e serviços (ICMS, PIS/Cofins, IPI, ISS), onerando o consumo das famílias de baixa renda (Reforma do IVA/IBS transita até 2033).',
      es: 'El 44,2% de la recaudación proviene de impuestos al consumo, penalizando a los hogares de menores ingresos.',
      en: '44.2% of Brazilian tax revenue comes from indirect consumption taxes vs. 31.6% in the OECD, heavily burdening lower-income households.'
    },
    uk: {
      pt: 'No Reino Unido (carga de 35,3% PIB), mais de 52% da arrecadação vem de renda, lucro e patrimônio.',
      es: 'En el Reino Unido (35,3% PIB), más del 52% proviene de renta y patrimonio.',
      en: 'In the UK (35.3% GDP tax burden), over 52% of revenue comes from income, profits, and property.'
    },
    source: 'Secretaria do Tesouro Nacional (Boletim CTB 2024) & OCDE Revenue Statistics',
    labels: ['Bens e Serviços (Consumo)', 'Folha e Previdência', 'Renda, Lucro e Ganho Cap.', 'Propriedade e Patrimônio'],
    datasets: [
      { label: 'Brasil (%)', data: [44.2, 26.1, 24.8, 4.9], backgroundColor: '#4f46e5' },
      { label: 'Média OCDE (%)', data: [31.6, 25.8, 34.2, 5.6], backgroundColor: '#94a3b8' }
    ]
  },
  {
    id: 'c-debt',
    pillar: 'fiscal',
    code: '3.2',
    type: 'bar',
    unit: '% do PIB',
    title: {
      pt: 'Evolução da Dívida Bruta do Governo Geral — DBGG (% do PIB, 2006–2024)',
      es: 'Evolución de la Deuda Bruta del Gobierno General — DBGG (% del PIB, 2006–2024)',
      en: 'Gross General Government Debt — DBGG (% of GDP, 2006–2024)'
    },
    takeaway: {
      pt: 'A DBGG subiu de 51,5% do PIB em 2013 para 78,6% em 2024 (~20 pontos acima da média dos emergentes), consumindo ~7,8% do PIB ao ano em juros nominais.',
      es: 'La DBGG subió del 51,5% del PIB en 2013 al 78,6% en 2024 (~20 puntos sobre la media emergente).',
      en: 'Gross debt jumped from 51.5% of GDP in 2013 to 78.6% in 2024 (~20 pp above emerging-market peers), costing ~7.8% of GDP in annual interest.'
    },
    uk: {
      pt: 'O Reino Unido tem dívida mais alta (~98% PIB), mas paga custo médio real da dívida ~3x menor e com prazo médio de 14 anos (vs. 4,1 anos no Brasil).',
      es: 'El Reino Unido tiene mayor deuda (~98% PIB), pero con plazo medio de 14 años (vs. 4,1 años en Brasil).',
      en: 'The UK has higher debt (~98% GDP) but a 14-year average maturity (vs. 4.1 years in Brazil) and much lower real debt-servicing costs.'
    },
    source: 'Banco Central do Brasil (Estatísticas Fiscais) & Tesouro Nacional (PAF)',
    labels: ['2006', '2010', '2013', '2015', '2018', '2020', '2022', '2024'],
    datasets: [
      { label: 'DBGG Brasil (% do PIB)', data: [55.5, 51.8, 51.5, 65.5, 75.3, 86.9, 71.7, 78.6], backgroundColor: '#4f46e5' }
    ]
  },
  {
    id: 'c-rigidity',
    pillar: 'fiscal',
    code: '3.3',
    type: 'line',
    unit: '% Despesa Primária',
    title: {
      pt: 'Rigidez Orçamentária: Despesas Obrigatórias vs. Discricionárias (% Primário Federal)',
      es: 'Rigidez Presupuestaria: Gasto Obligatorio vs. Discrecional (% Primario Federal)',
      en: 'Federal Budget Rigidity: Mandatory vs. Discretionary Spending (% of Primary)'
    },
    takeaway: {
      pt: 'O Brasil tem o orçamento mais indexado do mundo: 91,8% da despesa primária federal é obrigatória (Previdência, BPC, pessoal, pisos indexados), comprimindo o investimento público.',
      es: 'El 91,8% del gasto primario federal es obligatorio por constitución o ley, dejando solo el 8,2% discrecional.',
      en: '91.8% of Brazil’s federal primary spending is constitutionally or legally mandated, leaving just 8.2% for discretionary investment and operations.'
    },
    uk: {
      pt: 'Na média da OCDE, cerca de 35% a 45% do orçamento central possui margem discricionária de alocação plurianual.',
      es: 'En la OCDE, entre el 35% y 45% del presupuesto tiene margen discrecional.',
      en: 'Across the OECD, 35–45% of central government budgets remain discretionary across spending reviews.'
    },
    source: 'Instituição Fiscal Independente (IFI / Senado Federal) & SOF/MPO',
    labels: ['2008', '2010', '2012', '2014', '2016', '2018', '2020', '2022', '2024'],
    datasets: [
      { label: 'Despesas Obrigatórias (%)', data: [81.2, 79.8, 81.5, 83.4, 88.9, 90.4, 92.5, 91.1, 91.8], borderColor: '#e11d48' },
      { label: 'Despesas Discricionárias / Invest. (%)', data: [18.8, 20.2, 18.5, 16.6, 11.1, 9.6, 7.5, 8.9, 8.2], borderColor: '#0284c7' }
    ]
  },
  {
    id: 'c-pensions',
    pillar: 'fiscal',
    code: '3.4',
    type: 'bar',
    unit: '% do PIB',
    title: {
      pt: 'Gasto Público com Previdência (RGPS + RPPS + Militares) vs. Proporção de Idosos (% PIB)',
      es: 'Gasto Público en Pensiones (% PIB) comparado con la Población Mayor (65+)',
      en: 'Public Pension Spending (% GDP) vs. Senior Population Share (International Benchmark)'
    },
    takeaway: {
      pt: 'Mesmo após a Reforma de 2019 (EC 103), o Brasil gasta ~12,4% do PIB com previdência pública (RGPS 8,7% + RPPS/Militares 3,7%) tendo apenas 10,9% de idosos — patamar superior ao do Reino Unido (7,6% PIB com 19,1% de idosos).',
      es: 'Brasil gasta el 12,4% del PIB en pensiones públicas con solo 10,9% de ancianos (vs. 7,6% del PIB en el Reino Unido).',
      en: 'Brazil spends 12.4% of GDP on public pensions with just 10.9% seniors — far above the UK (7.6% GDP with 19.1% seniors).'
    },
    uk: {
      pt: 'Reino Unido: 7,6% do PIB; Média OCDE: 8,9% do PIB; Chile: 4,8% do PIB.',
      es: 'Reino Unido: 7,6% del PIB; Media OCDE: 8,9% del PIB.',
      en: 'UK Benchmark: 7.6% of GDP; OECD average: 8.9% of GDP.'
    },
    source: 'Tesouro Nacional (RREO), IPEA & OCDE Pensions at a Glance',
    labels: ['Brasil (10,9% 65+)', 'Média OCDE (18,5% 65+)', 'Reino Unido (19,1% 65+)', 'EUA (17,6% 65+)', 'Chile (13,8% 65+)'],
    datasets: [
      { label: 'Gasto Público com Previdência (% do PIB)', data: [12.4, 8.9, 7.6, 7.1, 4.8], backgroundColor: ['#4f46e5', '#64748b', '#0284c7', '#94a3b8', '#0d9488'] }
    ]
  },

  // ==========================================================================
  // PILAR 04: POBREZA, DESIGUALDADE, TRANSFERÊNCIAS E HABITAÇÃO (4 SÉRIES)
  // ==========================================================================
  {
    id: 'c-ineq',
    pillar: 'inequality',
    code: '4.1',
    type: 'bar',
    unit: '% da Renda Nacional',
    title: {
      pt: 'Concentração da Renda Nacional por Faixa: Brasil vs. Reino Unido (% da Renda)',
      es: 'Concentración del Ingreso Nacional por Tramo: Brasil vs. Reino Unido (%)',
      en: 'National Income Share by Group: Brazil vs. United Kingdom (%)'
    },
    takeaway: {
      pt: 'O 1% mais rico do Brasil apropria-se de 26,5% da renda nacional antes de impostos (e os 10% do topo detêm 58,0%), enquanto a metade mais pobre (50% da base) fica com apenas 14,2%.',
      es: 'El 1% más rico de Brasil concentra el 26,5% del ingreso nacional, mientras el 50% más pobre recibe solo el 14,2%.',
      en: 'Brazil’s Top 1% captures 26.5% of national income (and the Top 10% takes 58.0%), while the Bottom 50% receives just 14.2%.'
    },
    uk: {
      pt: 'No Reino Unido (Gini 0,357 vs. 0,518 no Brasil), o 1% do topo detém 12,7% e os 50% da base detêm 20,8%.',
      es: 'En el Reino Unido, el 1% superior detenta el 12,7% del ingreso.',
      en: 'In the UK (Gini 0.357 vs. 0.518 in Brazil), the Top 1% holds 12.7% and the Bottom 50% receives 20.8%.'
    },
    source: 'World Inequality Database (WID.world) & IBGE Síntese de Indicadores Sociais',
    labels: ['50% Mais Pobres (Base)', '40% Intermediários (Meio)', '10% Mais Ricos (Topo)', '1% Mais Rico (Elite)'],
    datasets: [
      { label: 'Brasil (% da Renda)', data: [14.2, 27.8, 58.0, 26.5], backgroundColor: '#e11d48' },
      { label: 'Reino Unido (% da Renda)', data: [20.8, 43.6, 35.6, 12.7], backgroundColor: '#64748b' }
    ]
  },
  {
    id: 'c-sanit',
    pillar: 'inequality',
    code: '4.2',
    type: 'bar',
    unit: '% da População',
    title: {
      pt: 'Gargalo do Saneamento por Macrorregião: Água Tratada vs. Coleta de Esgoto (%)',
      es: 'Brecha de Saneamiento por Región: Agua Potable vs. Red de Alcantarillado (%)',
      en: 'Sanitation Gap by Region: Treated Water vs. Sewage Collection Network (%)'
    },
    takeaway: {
      pt: 'Apenas 56,0% da população brasileira possui coleta de esgoto (~90 milhões sem rede); no Norte (24,1%) e Nordeste (34,2%), a maioria dos domicílios ainda depende de fossas rudimentares.',
      es: 'Solo el 56,0% de los brasileños tiene alcantarillado; en el Norte cae al 24,1% y en el Nordeste al 34,2%.',
      en: 'Only 56.0% of Brazilians have sewage network collection; in the North (24.1%) and Northeast (34.2%), most households lack sewerage.'
    },
    uk: {
      pt: 'No Reino Unido e na Europa Ocidental, a conexão à rede coletora e tratamento de esgoto supera 99%.',
      es: 'En el Reino Unido, la conexión a la red de alcantarillado supera el 99%.',
      en: 'In the UK and Western Europe, mains sewerage and wastewater treatment exceed 99%.'
    },
    source: 'SNIS / SINISA (Ministério das Cidades) & Instituto Trata Brasil (2024)',
    labels: ['Sudeste', 'Centro-Oeste', 'Sul', 'Nordeste', 'Norte', 'Média Brasil'],
    datasets: [
      { label: 'Água Tratada (%)', data: [91.5, 89.8, 90.4, 74.9, 64.2, 84.9], backgroundColor: '#0284c7' },
      { label: 'Coleta de Esgoto (%)', data: [81.2, 59.4, 51.8, 34.2, 24.1, 56.0], backgroundColor: '#0d9488' }
    ]
  },
  {
    id: 'c-poverty',
    pillar: 'inequality',
    code: '4.3',
    type: 'line',
    unit: '% da População',
    title: {
      pt: 'Evolução da Pobreza (US$ 6,85/dia PPC) e Extrema Pobreza (US$ 2,15/dia PPC) (2012–2024)',
      es: 'Evolución de la Pobreza (US$ 6,85 PPA) y Pobreza Extrema (US$ 2,15 PPA) (2012–2024)',
      en: 'Poverty ($6.85/day PPP) & Extreme Poverty ($2.15/day PPP) Trajectory (2012–2024)'
    },
    takeaway: {
      pt: 'Combinando a recuperação do mercado de trabalho e o Bolsa Família (~20,8 milhões de famílias), a extrema pobreza atingiu a mínima histórica de 4,4% e a pobreza recuou para 27,4% em 2023/2024.',
      es: 'Con la recuperación laboral y Bolsa Família, la pobreza extrema cayó al mínimo histórico del 4,4% y la pobreza al 27,4%.',
      en: 'Driven by labor market gains and Bolsa Família (~20.8M families), extreme poverty fell to a record low 4.4% and overall poverty to 27.4%.'
    },
    uk: {
      pt: 'Na linha internacional de US$ 2,15/dia PPC do Banco Mundial, a extrema pobreza no Reino Unido é < 0,3%.',
      es: 'En la línea de US$ 2,15/día PPA, la pobreza extrema en el Reino Unido es < 0,3%.',
      en: 'At the World Bank $2.15/day PPP threshold, extreme poverty in the UK is below 0.3%.'
    },
    source: 'IBGE (Síntese de Indicadores Sociais 2024) & Banco Mundial',
    labels: ['2012', '2014', '2016', '2018', '2020', '2021', '2022', '2023', '2024'],
    datasets: [
      { label: 'Pobreza (< US$ 6,85/dia PPC, %)', data: [34.7, 31.8, 34.9, 34.4, 31.0, 36.7, 31.6, 27.4, 25.8], borderColor: '#e11d48' },
      { label: 'Extrema Pobreza (< US$ 2,15/dia PPC, %)', data: [6.6, 5.4, 6.8, 7.0, 5.7, 9.0, 5.9, 4.4, 4.1], borderColor: '#881337' }
    ]
  },
  {
    id: 'c-gini-series',
    pillar: 'inequality',
    code: '4.4',
    type: 'line',
    unit: 'Índice (0 a 1)',
    title: {
      pt: 'Série Histórica do Coeficiente de Gini da Renda Domiciliar per Capita (1995–2024)',
      es: 'Serie Histórica del Coeficiente de Gini del Ingreso Familiar per Cápita (1995–2024)',
      en: 'Historical Household Income Gini Coefficient Trajectory (1995–2024)'
    },
    takeaway: {
      pt: 'O Gini domiciliar recuou de 0,601 em 1995 para 0,518 em 2023/2024 com a valorização do salário mínimo e transferências sociais, mas o Brasil ainda figura entre os 12 países mais desiguais do mundo.',
      es: 'El Gini cayó de 0,601 en 1995 a 0,518 en 2024, aunque Brasil sigue entre los 12 países más desiguales del mundo.',
      en: 'Brazil’s household Gini fell from 0.601 in 1995 to 0.518 in 2024, yet the country remains among the 12 most unequal globally.'
    },
    uk: {
      pt: 'Gini da Renda Disponível: Reino Unido = 0,357; Média OCDE = 0,315; União Europeia = 0,296.',
      es: 'Gini del Ingreso Disponible: Reino Unido = 0,357; Media OCDE = 0,315.',
      en: 'Disposable Income Gini: UK = 0.357; OECD Average = 0.315; EU = 0.296.'
    },
    source: 'IBGE (PNAD & PNAD Contínua) e IPEA (Ipeadata)',
    labels: ['1995', '2001', '2005', '2011', '2015', '2018', '2021', '2023', '2024'],
    datasets: [
      { label: 'Índice de Gini Brasil (PNAD)', data: [0.601, 0.594, 0.569, 0.531, 0.524, 0.545, 0.544, 0.518, 0.515], borderColor: '#e11d48', backgroundColor: 'rgba(225,29,72,0.1)', fill: true },
      { label: 'Referência Reino Unido (ONS)', data: [0.355, 0.360, 0.352, 0.348, 0.354, 0.358, 0.355, 0.357, 0.357], borderColor: '#64748b', borderDash: [5, 5], pointRadius: 0 }
    ]
  },

  // ==========================================================================
  // PILAR 05: SAÚDE PÚBLICA (SUS), NUTRIÇÃO E EPIDEMIOLOGIA (4 SÉRIES)
  // ==========================================================================
  {
    id: 'c-health',
    pillar: 'health',
    code: '5.1',
    type: 'line',
    unit: '% de Adultos',
    title: {
      pt: 'Transição Epidemiológica: Escalada da Obesidade Adulta vs. Queda do Tabagismo (%)',
      es: 'Transición Epidemiológica: Escalada de Obesidad Adulta vs. Caída del Tabaquismo (%)',
      en: 'Epidemiological Shift: Adult Obesity Surge vs. Smoking Decline (%)'
    },
    takeaway: {
      pt: 'Entre 2006 e 2023, a obesidade adulta nas capitais mais que dobrou (de 11,8% para 24,3%, com 61,4% apresentando excesso de peso), enquanto a política antitabaco reduziu os fumantes para 9,3%.',
      es: 'La obesidad adulta se duplicó (del 11,8% al 24,3%), mientras el tabaquismo cayó al 9,3%.',
      en: 'Adult obesity more than doubled from 11.8% to 24.3% (with 61.4% overweight), while anti-tobacco policies cut smoking to 9.3%.'
    },
    uk: {
      pt: 'O Brasil tem menos fumantes que o Reino Unido (9,3% vs. 11,9%) e obesidade adulta ligeiramente menor (24,3% vs. 26,2%).',
      es: 'Brasil tiene menos fumadores que el Reino Unido (9,3% vs. 11,9%).',
      en: 'Brazil has a lower adult smoking rate than the UK (9.3% vs. 11.9%) and slightly lower obesity (24.3% vs. 26.2%).'
    },
    source: 'Ministério da Saúde (Sistema Vigitel 2006–2023) & DataSUS',
    labels: ['2006', '2009', '2012', '2015', '2018', '2021', '2023'],
    datasets: [
      { label: 'Obesidade Adulta IMC ≥ 30 (%)', data: [11.8, 13.9, 17.4, 18.9, 19.8, 22.4, 24.3], borderColor: '#e11d48' },
      { label: 'Fumantes Adultos (%)', data: [15.7, 14.8, 12.1, 10.4, 9.3, 9.1, 9.3], borderColor: '#059669' }
    ]
  },
  {
    id: 'c-mort-life',
    pillar: 'health',
    code: '5.2',
    type: 'line',
    unit: 'por 1.000 NV / Anos',
    title: {
      pt: 'Queda Histórica da Mortalidade Infantil (/1.000 NV) e Avanço da Esperança de Vida (1980–2024)',
      es: 'Caída de la Mortalidad Infantil (/1.000 NV) y Esperanza de Vida al Nacer (1980–2024)',
      en: 'Infant Mortality Collapse (/1,000 Live Births) & Life Expectancy Gains (1980–2024)'
    },
    takeaway: {
      pt: 'Graças à expansão da Atenção Primária (Estratégia Saúde da Família do SUS) e vacinação, a mortalidade infantil caiu 82% desde 1980 (de 69,1 para 12,3 por mil) e a esperança de vida subiu 13,9 anos (para 76,4 anos).',
      es: 'La mortalidad infantil cayó un 82% desde 1980 (de 69,1 a 12,3 por mil) y la esperanza de vida subió a 76,4 años.',
      en: 'Expanded primary care (SUS Family Health) cut infant mortality by 82% since 1980 (from 69.1 to 12.3 per 1,000) and raised life expectancy to 76.4 years.'
    },
    uk: {
      pt: 'Reino Unido: Mortalidade infantil de 3,9 por mil nascidos vivos e esperança de vida de 81,0 anos.',
      es: 'Reino Unido: Mortalidad infantil de 3,9 por mil y esperanza de vida de 81,0 años.',
      en: 'UK Benchmark: Infant mortality of 3.9 per 1,000 live births and life expectancy of 81.0 years.'
    },
    source: 'IBGE (Tábuas Completas de Mortalidade 2024) & Ministério da Saúde (SIM/SINASC)',
    labels: ['1980', '1991', '2000', '2010', '2015', '2019', '2024'],
    datasets: [
      { label: 'Esperança de Vida ao Nascer (Anos)', data: [62.5, 66.9, 71.1, 73.9, 75.2, 76.2, 76.4], borderColor: '#059669' },
      { label: 'Mortalidade Infantil (por 1.000 nascidos vivos)', data: [69.1, 45.1, 29.0, 17.2, 13.8, 12.8, 12.3], borderColor: '#db2777' }
    ]
  },
  {
    id: 'c-health-spend',
    pillar: 'health',
    code: '5.3',
    type: 'bar',
    unit: '% do PIB',
    title: {
      pt: 'Paradoxo do Financiamento da Saúde (% PIB): Gasto Público (SUS) vs. Privado',
      es: 'Financiamiento de la Salud (% PIB): Gasto Público (SUS) vs. Gasto Privado',
      en: 'Health Financing Paradox (% GDP): Public (SUS) vs. Private Out-of-Pocket & Plans'
    },
    takeaway: {
      pt: 'Embora o Brasil tenha um sistema público universal (SUS, usado exclusivamente por 75% da população), o gasto público em saúde é de apenas 4,0% do PIB, enquanto o gasto privado (planos e desembolso direto) consome 5,6% do PIB.',
      es: 'Aunque el SUS atiende a toda la población, el gasto público en salud es del 4,0% del PIB frente al 5,6% privado.',
      en: 'Despite having a universal public system (SUS), Brazil’s public health spend is just 4.0% of GDP while private spending reaches 5.6% of GDP.'
    },
    uk: {
      pt: 'No Reino Unido (NHS), o gasto público é de 9,1% do PIB (83% do gasto total em saúde).',
      es: 'En el Reino Unido (NHS), el gasto público en salud es del 9,1% del PIB.',
      en: 'In the UK (NHS), public health spending is 9.1% of GDP (83% of total health expenditure).'
    },
    source: 'IBGE (Conta-Satélite de Saúde), ANS & OMS/OCDE Health Statistics',
    labels: ['Brasil', 'Reino Unido (NHS)', 'Média OCDE', 'França', 'Chile'],
    datasets: [
      { label: 'Gasto Público em Saúde (% PIB)', data: [4.0, 9.1, 7.1, 10.1, 5.4], backgroundColor: '#db2777' },
      { label: 'Gasto Privado / Planos / Bolso (% PIB)', data: [5.6, 1.8, 2.4, 1.8, 3.6], backgroundColor: '#fbcfe8' }
    ]
  },
  {
    id: 'c-vaccines',
    pillar: 'health',
    code: '5.4',
    type: 'line',
    unit: '% Cobertura PNI',
    title: {
      pt: 'Cobertura Vacinal Infantil no PNI (%): Queda (2015–2021) e Recuperação (2023–2024)',
      es: 'Cobertura de Vacunación Infantil PNI (%): Caída (2015–2021) y Recuperación (2024)',
      en: 'Childhood Immunization Coverage (PNI %): 2015–2021 Slump & 2023–2024 Recovery'
    },
    takeaway: {
      pt: 'Referência mundial até 2015 (>95% de cobertura), o Programa Nacional de Imunizações sofreu forte queda até 2021 (~71%), mas voltou a subir em 2023/2024 (~86% a 91%) com microplanejamento e vacinação escolar.',
      es: 'Tras caer del 95% en 2015 al 71% en 2021, la cobertura vacunal infantil se recuperó al 88–91% en 2024.',
      en: 'After falling from >95% in 2015 to ~71% in 2021, Brazil’s childhood immunization rates rebounded to 87–91% in 2023–2024.'
    },
    uk: {
      pt: 'Reino Unido (UKHSA): ~91,8% de cobertura para Tríplice Viral (MMR1) e ~92,6% para Poliomielite aos 24 meses.',
      es: 'Reino Unido: ~91,8% de cobertura para Triple Viral (MMR1).',
      en: 'UK Benchmark (UKHSA): ~91.8% MMR1 coverage and ~92.6% Polio (6-in-1) coverage at 24 months.'
    },
    source: 'Ministério da Saúde (Programa Nacional de Imunizações - PNI / DataSUS)',
    labels: ['2013', '2015', '2017', '2019', '2021', '2022', '2023', '2024'],
    datasets: [
      { label: 'Tríplice Viral D1 (Sarampo/Caxumba/Rubéola %)', data: [99.5, 96.1, 86.2, 93.1, 74.9, 80.7, 87.4, 91.2], borderColor: '#db2777' },
      { label: 'Poliomielite (VIP %)', data: [98.6, 98.3, 84.7, 84.2, 71.0, 77.2, 84.6, 88.5], borderColor: '#0284c7' },
      { label: 'Meta OMS / PNI (95%)', data: [95, 95, 95, 95, 95, 95, 95, 95], borderColor: '#94a3b8', borderDash: [5, 5], pointRadius: 0 }
    ]
  },

  // ==========================================================================
  // PILAR 06: EDUCAÇÃO, CAPITAL HUMANO E CIÊNCIA & TECNOLOGIA (4 SÉRIES)
  // ==========================================================================
  {
    id: 'c-edu',
    pillar: 'education',
    code: '6.1',
    type: 'line',
    unit: 'Nota IDEB (0–10)',
    title: {
      pt: 'Evolução do IDEB Nacional: Avanço nos Anos Iniciais vs. Estagnação do Ensino Médio (2005–2023)',
      es: 'Evolución del IDEB Nacional: Avance en Primaria vs. Estancamiento en Secundaria (2005–2023)',
      en: 'National IDEB Trajectory: Early Primary Gains vs. High School Stagnation (2005–2023)'
    },
    takeaway: {
      pt: 'Os anos iniciais do Ensino Fundamental saltaram de 3,8 para 6,0 (atingindo a meta nacional), mas o Ensino Médio permanece travado em 4,3 há uma década, com alta evasão e defasagem em Matemática.',
      es: 'La primaria subió de 3,8 a 6,0, pero la secundaria sigue estancada en 4,3 desde hace una década.',
      en: 'Early primary IDEB climbed from 3.8 to 6.0 (hitting the national target), whereas High School IDEB remains stuck at 4.3.'
    },
    uk: {
      pt: 'Apenas 7% dos concluintes do Ensino Médio público no Brasil atingem aprendizado adequado em Matemática (Saeb/Todos Pela Educação).',
      es: 'Solo el 7% de los graduados de secundaria pública alcanza nivel adecuado en Matemáticas.',
      en: 'Only 7% of Brazilian public high school seniors achieve grade-level proficiency in Mathematics (Saeb).'
    },
    source: 'INEP / Ministério da Educação (Resultados do IDEB e Saeb 2023)',
    labels: ['2005', '2007', '2009', '2011', '2013', '2015', '2017', '2019', '2021', '2023'],
    datasets: [
      { label: 'Anos Iniciais (1º ao 5º ano)', data: [3.8, 4.2, 4.6, 5.0, 5.2, 5.5, 5.8, 5.9, 5.8, 6.0], borderColor: '#059669' },
      { label: 'Anos Finais (6º ao 9º ano)', data: [3.5, 3.8, 4.0, 4.1, 4.2, 4.5, 4.7, 4.9, 5.1, 5.0], borderColor: '#0284c7' },
      { label: 'Ensino Médio', data: [3.4, 3.5, 3.6, 3.7, 3.7, 3.7, 3.8, 4.2, 4.2, 4.3], borderColor: '#e11d48' }
    ]
  },
  {
    id: 'c-pisa',
    pillar: 'education',
    code: '6.2',
    type: 'bar',
    unit: 'Pontos PISA',
    title: {
      pt: 'Desempenho no PISA 2022 (OCDE): Brasil vs. Reino Unido, Chile e Média OCDE',
      es: 'Desempeño en PISA 2022 (OCDE): Brasil vs. Reino Unido, Chile y Media OCDE',
      en: 'PISA 2022 Assessment Scores: Brazil vs. United Kingdom, Chile & OECD Mean'
    },
    takeaway: {
      pt: 'Em Matemática (379 pontos), 73% dos estudantes brasileiros de 15 anos estão abaixo do Nível 2 (mínimo para cidadania plena segundo a OCDE), com hiato de ~100 pontos (~2,5 anos de escolaridade) ante a OCDE.',
      es: 'En Matemáticas (379 pts), el 73% de los alumnos brasileños está bajo el Nivel 2 mínimo de la OCDE.',
      en: 'In PISA Math (379 points), 73% of 15-year-old Brazilian students score below Baseline Level 2, trailing the OECD by ~2.5 school years.'
    },
    uk: {
      pt: 'Reino Unido no PISA 2022: Matemática 489, Leitura 494 e Ciências 500 pontos.',
      es: 'Reino Unido en PISA 2022: Matemáticas 489, Lectura 494 y Ciencias 500.',
      en: 'UK PISA 2022 Scores: Math 489, Reading 494, Science 500.'
    },
    source: 'OCDE (Programme for International Student Assessment - PISA 2022) & INEP',
    labels: ['Matemática', 'Leitura', 'Ciências'],
    datasets: [
      { label: 'Brasil', data: [379, 410, 403], backgroundColor: '#d97706' },
      { label: 'Chile (Líder LatAm)', data: [412, 448, 444], backgroundColor: '#0284c7' },
      { label: 'Média OCDE', data: [472, 476, 485], backgroundColor: '#94a3b8' },
      { label: 'Reino Unido', data: [489, 494, 500], backgroundColor: '#1e293b' }
    ]
  },
  {
    id: 'c-neet',
    pillar: 'education',
    code: '6.3',
    type: 'line',
    unit: '% de Jovens',
    title: {
      pt: 'Jovens "Nem-Nem" (15–29 Anos que Não Estudam Nem Trabalham) e Conclusão do Ensino Médio (%)',
      es: 'Jóvenes "Ni-Ni" (15–29 Años que No Estudian Ni Trabajan) y Graduación Secundaria (%)',
      en: 'NEET Youth Rate (Ages 15–29 Neither in Employment Nor Education) & High School Completion (%)'
    },
    takeaway: {
      pt: 'Enquanto a conclusão do Ensino Médio entre jovens de 19 anos subiu de 51,2% (2012) para 71,8% (2024), 19,8% dos jovens de 15 a 29 anos (~9,6 milhões, 65% mulheres com filhos pequenos) seguem "nem-nem".',
      es: 'La graduación secundaria subió al 71,8%, pero el 19,8% de los jóvenes de 15–29 años (~9,6M) sigue "ni-ni".',
      en: 'High school completion by age 19 climbed to 71.8%, yet 19.8% of youth aged 15–29 (~9.6M, mostly young mothers) remain NEET.'
    },
    uk: {
      pt: 'Média OCDE de jovens Nem-Nem (15–29 anos): 12,6%; Reino Unido: 11,8%.',
      es: 'Media OCDE de jóvenes Ni-Ni: 12,6%; Reino Unido: 11,8%.',
      en: 'OECD average NEET rate (ages 15–29): 12.6%; UK: 11.8%.'
    },
    source: 'IBGE (PNAD Contínua Educação 2024) & OCDE Education at a Glance',
    labels: ['2012', '2014', '2016', '2018', '2020', '2022', '2024'],
    datasets: [
      { label: 'Conclusão do Ensino Médio aos 19 anos (%)', data: [51.2, 55.8, 59.4, 63.5, 68.1, 70.3, 71.8], borderColor: '#059669' },
      { label: 'Jovens 15–29 anos "Nem-Nem" (%)', data: [21.4, 21.1, 24.5, 24.2, 28.0, 21.2, 19.8], borderColor: '#e11d48' }
    ]
  },
  {
    id: 'c-edu-spend',
    pillar: 'education',
    code: '6.4',
    type: 'bar',
    unit: 'US$ PPC / Aluno / Ano',
    title: {
      pt: 'Gasto Público Anual por Aluno (US$ PPC): Educação Básica vs. Ensino Superior',
      es: 'Gasto Público Anual por Alumno (US$ PPA): Educación Básica vs. Superior',
      en: 'Annual Public Expenditure per Student (US$ PPP): Primary/Secondary vs. Tertiary'
    },
    takeaway: {
      pt: 'O Brasil investe US$ 4.350 PPC/ano por aluno na Educação Básica (menos de um terço da OCDE), mas US$ 14.850 PPC/ano por estudante no Ensino Superior público (3,4x o valor da Educação Básica).',
      es: 'Brasil invierte US$ 4.350 PPA/año por alumno en educación básica (un tercio de la OCDE), pero US$ 14.850 en educación superior.',
      en: 'Brazil spends $4,350 PPP/year per basic-education pupil (one-third of the OECD mean), but $14,850 PPP per public university student (a 3.4x ratio).'
    },
    uk: {
      pt: 'Na OCDE, a razão entre o gasto por aluno no Ensino Superior e na Educação Básica é de apenas 1,3x (vs. 3,4x no Brasil).',
      es: 'En la OCDE, la relación entre gasto universitario y básico es de solo 1,3x (vs. 3,4x en Brasil).',
      en: 'Across the OECD, tertiary-to-basic spending per student is just 1.3x (vs. 3.4x in Brazil).'
    },
    source: 'OCDE (Education at a Glance 2024) & INEP',
    labels: ['Anos Iniciais / Finais (Básico)', 'Ensino Médio', 'Ensino Superior Público'],
    datasets: [
      { label: 'Brasil (US$ PPC / aluno)', data: [4210, 4580, 14850], backgroundColor: '#d97706' },
      { label: 'Média OCDE (US$ PPC / aluno)', data: [11900, 13400, 18100], backgroundColor: '#94a3b8' }
    ]
  },

  // ==========================================================================
  // PILAR 07: ENERGIA LIMPA, CLIMA, DESMATAMENTO E BIOMAS (4 SÉRIES)
  // ==========================================================================
  {
    id: 'c-energy',
    pillar: 'energy_climate',
    code: '7.1',
    type: 'bar',
    unit: '% das Emissões GEE',
    title: {
      pt: 'Emissões Brutas de Gases de Efeito Estufa por Setor: Brasil vs. Reino Unido (%)',
      es: 'Emisiones Brutas de GEI por Sector: Brasil vs. Reino Unido (%)',
      en: 'Gross Greenhouse Gas Emissions by Sector: Brazil vs. United Kingdom (%)'
    },
    takeaway: {
      pt: 'Enquanto nos países desenvolvidos a queima de combustíveis fósseis gera ~80% das emissões, no Brasil 75% das emissões brutas (~2,3 GtCO₂e) vêm de Mudança de Uso da Terra/Desmatamento (48%) e Agropecuária (27%).',
      es: 'El 75% de las emisiones de Brasil proviene de Deforestación/Uso del Suelo (48%) y Agropecuaria (27%).',
      en: '75% of Brazil’s GHG emissions come from Land-Use Change/Deforestation (48%) and Agriculture (27%), inverted from rich nations.'
    },
    uk: {
      pt: 'No Reino Unido, 78,1% das emissões vêm de Energia e Transportes e apenas 1,2% de uso da terra.',
      es: 'En el Reino Unido, el 78,1% de las emisiones proviene de Energía y Transporte.',
      en: 'In the UK, 78.1% of GHG emissions come from Energy & Transport and just 1.2% from LULUCF.'
    },
    source: 'SEEG / Observatório do Clima (11ª Edição) & UK DESNZ',
    labels: ['Mudança de Uso da Terra / Florestas', 'Agropecuária', 'Energia e Transportes', 'Processos Industriais e Resíduos'],
    datasets: [
      { label: 'Brasil (% GEE)', data: [48.0, 27.0, 18.2, 6.8], backgroundColor: '#16a34a' },
      { label: 'Reino Unido (% GEE)', data: [1.2, 11.5, 78.1, 9.2], backgroundColor: '#64748b' }
    ]
  },
  {
    id: 'c-elec-mix',
    pillar: 'energy_climate',
    code: '7.2',
    type: 'line',
    unit: '% da Geração Elétrica',
    title: {
      pt: 'Revolução Solar e Eólica na Matriz Elétrica Brasileira (89,2% Renovável, 2010–2024)',
      es: 'Revolución Solar y Eólica en la Matriz Eléctrica Brasileña (89,2% Renovable, 2010–2024)',
      en: 'Wind & Solar Boom in Brazil’s Power Grid (89.2% Renewable Electricity, 2010–2024)'
    },
    takeaway: {
      pt: 'A geração eólica + solar saltou de quase zero (0,4%) em 2010 para 24,8% de toda a eletricidade do país em 2024, complementando a base hidrelétrica (55,8%) e biomassa (8,6%).',
      es: 'La generación eólica y solar saltó del 0,4% en 2010 al 24,8% de la electricidad de Brasil en 2024.',
      en: 'Wind and solar power surged from 0.4% in 2010 to 24.8% of Brazil’s electricity generation in 2024, lifting total renewables to 89.2%.'
    },
    uk: {
      pt: 'Eletricidade renovável: Brasil 89,2% vs. Reino Unido 46,5% e Média OCDE 33,4%.',
      es: 'Electricidad renovable: Brasil 89,2% vs. Reino Unido 46,5% y OCDE 33,4%.',
      en: 'Renewable share of electricity: Brazil 89.2% vs. UK 46.5% and OECD 33.4%.'
    },
    source: 'EPE / Ministério de Minas e Energia (Balanço Energético Nacional - BEN 2024)',
    labels: ['2010', '2013', '2016', '2019', '2021', '2023', '2024'],
    datasets: [
      { label: 'Hidrelétrica (%)', data: [78.8, 69.1, 68.1, 64.9, 56.8, 58.9, 55.8], borderColor: '#0284c7' },
      { label: 'Eólica + Solar (%)', data: [0.4, 1.2, 5.8, 10.4, 13.6, 21.5, 24.8], borderColor: '#16a34a' },
      { label: 'Termelétrica Fóssil + Nuclear (%)', data: [12.1, 21.4, 17.5, 16.2, 21.2, 11.2, 10.8], borderColor: '#64748b' }
    ]
  },
  {
    id: 'c-prodes',
    pillar: 'energy_climate',
    code: '7.3',
    type: 'bar',
    unit: 'km² / ano',
    title: {
      pt: 'Taxa Anual de Desmatamento na Amazônia Legal e no Cerrado (INPE PRODES, km², 2004–2024)',
      es: 'Tasa Anual de Deforestación en la Amazonía Legal y el Cerrado (INPE PRODES, km², 2004–2024)',
      en: 'Annual Deforestation in the Legal Amazon & Cerrado Savanna (INPE PRODES, km², 2004–2024)'
    },
    takeaway: {
      pt: 'Na Amazônia, o desmatamento caiu de 27.772 km² (2004) para 4.571 km² (2012), subiu para 13.038 km² (2021) e recuou 45,7% entre 2022 e 2024 (6.288 km²). No Cerrado, a pressão agrícola superou a Amazônia em 2023/2024.',
      es: 'La deforestación amazónica cayó un 45,7% entre 2022 y 2024 (6.288 km²), pero el Cerrado superó a la Amazonía.',
      en: 'Amazon deforestation fell 45.7% between 2022 and 2024 (to 6,288 km²), while agricultural clearing in the Cerrado biome exceeded the Amazon.'
    },
    uk: {
      pt: 'Os 6.288 km² desmatados na Amazônia em 2024 equivalem a 4x a área da Grande Londres.',
      es: 'Los 6.288 km² deforestados en 2024 equivalen a 4 veces el área del Gran Londres.',
      en: 'The 6,288 km² cleared in the Amazon in 2024 is roughly 4x the size of Greater London.'
    },
    source: 'INPE (Projeto PRODES Monitoramento por Satélite da Amazônia Legal e Cerrado)',
    labels: ['2004', '2008', '2012', '2016', '2019', '2021', '2022', '2023', '2024'],
    datasets: [
      { label: 'Amazônia Legal (km²)', data: [27772, 12911, 4571, 7893, 10129, 13038, 11594, 9064, 6288], backgroundColor: '#16a34a' },
      { label: 'Bioma Cerrado (km²)', data: [18200, 11400, 7200, 6777, 6483, 8531, 10689, 11011, 8174], backgroundColor: '#d97706' }
    ]
  },
  {
    id: 'c-climate-disasters',
    pillar: 'energy_climate',
    code: '7.4',
    type: 'line',
    unit: 'R$ Bilhões / Eventos',
    title: {
      pt: 'Eventos Climáticos Extremos (Secas e Inundações) e Prejuízos Econômicos (R$ Bi, 2013–2024)',
      es: 'Eventos Climáticos Extremos y Pérdidas Económicas Anuales (R$ Mil Millones, 2013–2024)',
      en: 'Extreme Climate Disasters (Droughts & Floods) & Annual Economic Losses (R$ Billions, 2013–2024)'
    },
    takeaway: {
      pt: 'A frequência de decretos municipais de emergência por extremos hidroclimáticos dobrou na última década, culminando na tragédia climática do Rio Grande do Sul e na seca recorde da Amazônia em 2024 (>R$ 92 bi em perdas).',
      es: 'Las pérdidas por extremos climáticos alcanzaron un récord de R$ 92,4 mil millones en 2024 (inundaciones en RS y sequía amazónica).',
      en: 'Climate disaster losses hit a record R$ 92.4B in 2024 following the historic Rio Grande do Sul floods and Amazon basin drought.'
    },
    uk: {
      pt: 'Mais de 1.942 municípios brasileiros têm alta vulnerabilidade a deslizamentos e inundações (CEMADEN).',
      es: 'Más de 1.942 municipios brasileños tienen alta vulnerabilidad a inundaciones y deslizamientos.',
      en: 'Over 1,942 Brazilian municipalities face high structural risk of flash floods and landslides (CEMADEN).'
    },
    source: 'S2iD / Defesa Civil Nacional, CEMADEN & Confederação Nacional de Municípios (CNM)',
    labels: ['2013', '2015', '2017', '2019', '2021', '2022', '2023', '2024'],
    datasets: [
      { label: 'Prejuízos Econômicos Diretos (R$ Bilhões)', data: [21.4, 28.9, 31.2, 26.8, 45.3, 52.1, 61.8, 92.4], borderColor: '#dc2626', backgroundColor: 'rgba(220,38,38,0.12)', fill: true }
    ]
  },

  // ==========================================================================
  // PILAR 08: SEGURANÇA PÚBLICA, JUSTIÇA E SISTEMA PRISIONAL (4 SÉRIES)
  // ==========================================================================
  {
    id: 'c-crime',
    pillar: 'security_justice',
    code: '8.1',
    type: 'line',
    unit: 'por 100 mil hab.',
    title: {
      pt: 'Inversão Geográfica dos Homicídios (/100 mil): São Paulo (-85%) vs. Nordeste e Norte',
      es: 'Inversión Geográfica de los Homicidios (/100 mil): São Paulo (-85%) vs. Nordeste y Norte',
      en: 'Geographic Inversion of Homicides (/100k): São Paulo (-85%) vs. Northeast & North'
    },
    takeaway: {
      pt: 'São Paulo reduziu sua taxa de homicídios em 85% entre 2000 (42,2) e 2023 (6,4), enquanto a expansão de facções para o Norte (32,1) e Nordeste (33,4) inverteu o mapa da violência letal no país.',
      es: 'São Paulo redujo sus homicidios un 85% (de 42,2 a 6,4), mientras Nordeste (33,4) y Norte (32,1) lideran la violencia letal.',
      en: 'São Paulo cut its homicide rate by 85% (from 42.2 in 2000 to 6.4 in 2023), while gang expansion pushed rates in the Northeast (33.4) and North (32.1) to the top.'
    },
    uk: {
      pt: 'Taxa nacional do Brasil: 22,8 por 100 mil (46.328 mortes) vs. 1,0 no Reino Unido e 5,7 nos EUA.',
      es: 'Tasa nacional de Brasil: 22,8 por 100 mil vs. 1,0 en el Reino Unido y 5,7 en EE.UU.',
      en: 'Brazil national rate: 22.8 per 100k (46,328 violent deaths) vs. 1.0 in the UK and 5.7 in the US.'
    },
    source: 'Fórum Brasileiro de Segurança Pública (Anuário FBSP 2024) & IPEA Atlas da Violência',
    labels: ['2000', '2005', '2010', '2015', '2017 (Pico)', '2020', '2023'],
    datasets: [
      { label: 'Região Nordeste (/100k)', data: [19.5, 25.4, 35.7, 41.8, 46.2, 36.8, 33.4], borderColor: '#dc2626' },
      { label: 'Região Norte (/100k)', data: [18.2, 24.8, 34.2, 39.5, 43.1, 33.9, 32.1], borderColor: '#d97706' },
      { label: 'Média Brasil (/100k)', data: [26.7, 25.8, 27.8, 28.9, 30.9, 23.6, 22.8], borderColor: '#64748b', borderDash: [4, 4] },
      { label: 'Estado de São Paulo (/100k)', data: [42.2, 21.9, 13.9, 11.7, 10.2, 8.1, 6.4], borderColor: '#2563eb', borderWidth: 3 }
    ]
  },
  {
    id: 'c-cyber-crime',
    pillar: 'security_justice',
    code: '8.2',
    type: 'line',
    unit: 'Índice (2018=100)',
    title: {
      pt: 'Transição Criminal: Queda do Roubo de Rua/Veículos vs. Explosão de Estelionato e Golpes Digitais',
      es: 'Transición Criminal: Caída de Robos Físicos vs. Explosión de Estafas Digitales (2018=100)',
      en: 'Crime Shift: Falling Street/Vehicle Robberies vs. Surging Digital Fraud & Scams (2018=100)'
    },
    takeaway: {
      pt: 'Desde 2018, os registros de estelionato (impulsionados por golpes eletrônicos e roubo de celulares) cresceram +368% (~2,0 milhões de boletins/ano), enquanto o roubo de veículos caiu 42%.',
      es: 'Desde 2018, las denuncias de estafa y fraude digital crecieron +368%, mientras el robo de vehículos cayó un 42%.',
      en: 'Since 2018, reported fraud and digital scams exploded +368% (~2.0M cases/year), while vehicle robberies fell 42%.'
    },
    uk: {
      pt: 'Assim como no Reino Unido (onde fraudes já representam 41% de todos os crimes segundo o CSEW), o crime patrimonial migrou para meios digitais.',
      es: 'Al igual que en el Reino Unido (donde el fraude es el 41% de los delitos), el delito migró al entorno digital.',
      en: 'Mirroring the UK (where fraud accounts for 41% of all crime in the CSEW), property crime in Brazil is rapidly migrating online.'
    },
    source: 'Fórum Brasileiro de Segurança Pública (Anuário FBSP 2024)',
    labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [
      { label: 'Estelionatos e Fraudes Digitais (2018=100)', data: [100, 124, 212, 318, 425, 452, 468], borderColor: '#dc2626' },
      { label: 'Roubo de Celulares (2018=100)', data: [100, 96, 78, 84, 98, 95, 92], borderColor: '#d97706' },
      { label: 'Roubo de Veículos (2018=100)', data: [100, 82, 64, 61, 63, 59, 58], borderColor: '#0284c7' }
    ]
  },
  {
    id: 'c-prisons',
    pillar: 'security_justice',
    code: '8.3',
    type: 'bar',
    unit: 'Mil Pessoas',
    title: {
      pt: 'Crescimento da População Prisional (3ª Maior do Mundo) e Presos Provisórios (2000–2024)',
      es: 'Población Penitenciaria (3ª Mayor del Mundo) y Presos sin Condena (2000–2024)',
      en: 'Prison Population Growth (3rd Largest Globally) & Pre-Trial Detainees (2000–2024)'
    },
    takeaway: {
      pt: 'A população carcerária triplicou desde 2000, chegando a 852 mil pessoas (incluindo prisão domiciliar monitorada), sendo ~27% presos provisórios aguardando julgamento de primeira instância.',
      es: 'La población carcelaria se triplicó desde 2000 hasta 852 mil personas, con un ~27% en prisión preventiva sin condena.',
      en: 'Brazil’s prison population tripled since 2000 to 852,000 inmates (3rd globally after US and China), with ~27% held in pre-trial detention.'
    },
    uk: {
      pt: 'Taxa de encarceramento: Brasil ~401 por 100 mil hab. vs. Reino Unido ~140 por 100 mil hab.',
      es: 'Tasa de encarcelamiento: Brasil ~401/100k vs. Reino Unido ~140/100k.',
      en: 'Incarceration rate: Brazil ~401 per 100k vs. UK ~140 per 100k.'
    },
    source: 'SENAPPEN / Ministério da Justiça (SISDEPEN) & CNJ',
    labels: ['2000', '2005', '2010', '2014', '2018', '2021', '2024'],
    datasets: [
      { label: 'Presos Condenados (Mil)', data: [152, 241, 332, 371, 498, 578, 622], backgroundColor: '#4f46e5' },
      { label: 'Presos Provisórios sem Condenação (Mil)', data: [81, 120, 164, 251, 246, 242, 230], backgroundColor: '#f43f5e' }
    ]
  },
  {
    id: 'c-justice-cost',
    pillar: 'security_justice',
    code: '8.4',
    type: 'bar',
    unit: '% do PIB',
    title: {
      pt: 'Custo do Sistema de Justiça (% do PIB): Brasil (Recorde Mundial) vs. Países Selecionados',
      es: 'Costo del Sistema Judicial (% del PIB): Brasil (Récord Mundial) vs. OCDE',
      en: 'Cost of the Justice System (% of GDP): Brazil (World Record) vs. International Peers'
    },
    takeaway: {
      pt: 'O Poder Judiciário brasileiro custa R$ 132,8 bilhões/ano (~1,3% do PIB — mais de 4x a média europeia) e acumula 84 milhões de processos em tramitação (30% execuções fiscais).',
      es: 'El Poder Judicial brasileño cuesta el 1,3% del PIB (4x la media europea) y acumula 84 millones de procesos.',
      en: 'Brazil’s Judiciary costs 1.3% of GDP (R$ 132.8B/year — over 4x the European average) while managing a backlog of 84 million pending cases.'
    },
    uk: {
      pt: 'No Reino Unido e na Alemanha, o orçamento dos tribunais consome entre 0,25% e 0,35% do PIB.',
      es: 'En el Reino Unido y Alemania, los tribunales consumen entre 0,25% y 0,35% del PIB.',
      en: 'In the UK and Germany, court systems cost between 0.25% and 0.35% of GDP.'
    },
    source: 'Conselho Nacional de Justiça (Relatório Justiça em Números 2024) & Tesouro Nacional',
    labels: ['Brasil (84M processos)', 'Colômbia', 'Alemanha', 'Média União Europeia', 'Reino Unido', 'EUA'],
    datasets: [
      { label: 'Despesa do Poder Judiciário (% do PIB)', data: [1.30, 0.58, 0.36, 0.31, 0.26, 0.21], backgroundColor: ['#dc2626', '#64748b', '#94a3b8', '#0284c7', '#1e293b', '#cbd5e1'] }
    ]
  },

  // ==========================================================================
  // PILAR 09: INFRAESTRUTURA, LOGÍSTICA, CIDADES E DIGITALIZAÇÃO (4 SÉRIES)
  // ==========================================================================
  {
    id: 'c-freight-modal',
    pillar: 'infrastructure',
    code: '9.1',
    type: 'bar',
    unit: '% da Carga (TKU)',
    title: {
      pt: 'Matriz de Transporte de Cargas (% TKU): Dependência Rodoviária do Brasil vs. EUA e China',
      es: 'Matriz de Transporte de Carga (% TKU): Dependencia Carretera de Brasil vs. EE.UU. y China',
      en: 'Freight Transport Modal Split (% TKU): Brazil’s Road Dependency vs. US & China'
    },
    takeaway: {
      pt: 'Para um país continental, o Brasil transporta 64,9% de suas cargas por rodovias (das quais apenas 12,4% são pavimentadas), encarecendo o frete agrícola e industrial em até 30% frente aos EUA.',
      es: 'Brasil transporta el 64,9% de su carga por carretera (solo el 12,4% pavimentada), encareciendo la logística.',
      en: 'Despite its continental scale, Brazil moves 64.9% of freight by road (only 12.4% of highways are paved), inflating logistics costs.'
    },
    uk: {
      pt: 'Nos EUA, ferrovias e hidrovias respondem por 53% da carga de longa distância.',
      es: 'En EE.UU., ferrocarriles e hidrovías mueven el 53% de la carga.',
      en: 'In the continental US, rail and inland waterways carry 53% of intercity freight ton-kilometers.'
    },
    source: 'INFRA S.A. (antiga EPL - Plano Nacional de Logística) & CNT',
    labels: ['Rodoviário', 'Ferroviário', 'Aquaviário / Cabotagem', 'Dutoviário e Aéreo'],
    datasets: [
      { label: 'Brasil (%)', data: [64.9, 17.4, 13.5, 4.2], backgroundColor: '#0d9488' },
      { label: 'Estados Unidos (%)', data: [40.2, 33.8, 19.2, 6.8], backgroundColor: '#64748b' },
      { label: 'China (%)', data: [34.1, 21.5, 41.2, 3.2], backgroundColor: '#0284c7' }
    ]
  },
  {
    id: 'c-infra-inv',
    pillar: 'infrastructure',
    code: '9.2',
    type: 'line',
    unit: '% do PIB',
    title: {
      pt: 'Investimento Total em Infraestrutura (% do PIB) vs. Nível de Depreciação e Modernização (1980–2024)',
      es: 'Inversión en Infraestructura (% del PIB) vs. Nivel de Depreciación y Modernización (1980–2024)',
      en: 'Total Infrastructure Investment (% GDP) vs. Depreciation & Modernization Thresholds (1980–2024)'
    },
    takeaway: {
      pt: 'O investimento em infraestrutura (público + concessões privadas) caiu de 5,2% do PIB nos anos 1970/80 para ~1,8% a 2,1% do PIB hoje — abaixo dos 4,3% do PIB necessários para modernizar o estoque de capital (ABDIB).',
      es: 'La inversión en infraestructura (~2,1% del PIB) es menos de la mitad del 4,3% requerido para modernizar el país (ABDIB).',
      en: 'Infrastructure investment (~2.1% of GDP, mostly private concessions) remains half the 4.3% of GDP needed to modernize Brazil’s capital stock.'
    },
    uk: {
      pt: 'Concessões privadas já respondem por 74% dos investimentos em rodovias, saneamento e energia no Brasil.',
      es: 'Las concesiones privadas ya representan el 74% de la inversión en infraestructura en Brasil.',
      en: 'Private concessions now account for 74% of Brazil’s infrastructure capex across transport, sanitation, and power.'
    },
    source: 'ABDIB (Livro Azul da Infraestrutura 2024) & FGV IBRE',
    labels: ['1980', '1990', '2000', '2010', '2014', '2018', '2021', '2024'],
    datasets: [
      { label: 'Investimento Efetivo em Infraestrutura (% PIB)', data: [5.2, 2.8, 2.1, 2.5, 2.4, 1.6, 1.7, 2.1], borderColor: '#0d9488', backgroundColor: 'rgba(13,148,136,0.12)', fill: true },
      { label: 'Meta de Modernização ABDIB (4,3% PIB)', data: [4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3], borderColor: '#e11d48', borderDash: [5, 5], pointRadius: 0 }
    ]
  },
  {
    id: 'c-digital-pix',
    pillar: 'infrastructure',
    code: '9.3',
    type: 'bar',
    unit: 'Bilhões de Transações',
    title: {
      pt: 'Revolução nos Meios de Pagamento: Ascensão Exponencial do PIX vs. Cartões, Boleto e TED (Bilhões/Ano)',
      es: 'Revolución en Pagos: Ascenso Exponencial de PIX vs. Tarjetas y Transferencias (Mil Millones/Año)',
      en: 'Digital Payment Revolution: Exponential Rise of PIX vs. Cards & Wire Transfers (Billions/Year)'
    },
    takeaway: {
      pt: 'Lançado pelo Banco Central em novembro de 2020, o PIX atingiu 63,8 bilhões de transações anuais em 2024 (+52% a.a.), superando a soma de cartões de crédito, débito, boleto e TED, e incluindo 71 milhões de adultos.',
      es: 'Lanzado a fines de 2020, PIX alcanzó 63,8 mil millones de transacciones en 2024, superando tarjetas y transferencias combinadas.',
      en: 'Launched by the Central Bank in late 2020, PIX reached 63.8 billion transactions in 2024, surpassing credit cards, debit cards, and wires combined.'
    },
    uk: {
      pt: 'O Brasil processa 14x mais pagamentos instantâneos per capita que o sistema Faster Payments do Reino Unido.',
      es: 'Brasil procesa 14x más pagos instantáneos que el Reino Unido.',
      en: 'Brazil processes ~14x more real-time payments than the UK’s Faster Payments system.'
    },
    source: 'Banco Central do Brasil (Estatísticas do PIX e Sistema de Pagamentos Brasileiro)',
    labels: ['2020', '2021', '2022', '2023', '2024'],
    datasets: [
      { label: 'PIX (Bilhões de Transações)', data: [0.2, 9.4, 24.1, 41.9, 63.8], backgroundColor: '#059669' },
      { label: 'Cartão de Crédito + Débito (Bilhões)', data: [22.1, 28.4, 34.2, 37.8, 40.5], backgroundColor: '#0284c7' },
      { label: 'TED + DOC + Cheque (Bilhões)', data: [2.4, 1.6, 1.1, 0.9, 0.7], backgroundColor: '#94a3b8' }
    ]
  },
  {
    id: 'c-internet-housing',
    pillar: 'infrastructure',
    code: '9.4',
    type: 'line',
    unit: '% dos Domicílios',
    title: {
      pt: 'Conectividade Digital: Domicílios com Acesso à Internet e Banda Larga Fibra Óptica (2010–2024)',
      es: 'Conectividad Digital: Hogares con Internet y Banda Ancha de Fibra Óptica (2010–2024)',
      en: 'Digital Connectivity: Household Internet Penetration & Fiber-Optic Broadband (2010–2024)'
    },
    takeaway: {
      pt: 'O acesso domiciliar à internet saltou de 27% em 2010 para 84% em 2024 (com mais de 7.000 provedores regionais de fibra óptica levando FTTH a 99% dos municípios), mas 29 milhões de pessoas ainda têm conectividade precária.',
      es: 'El acceso a internet en hogares subió del 27% en 2010 al 84% en 2024 gracias a los proveedores regionales de fibra óptica.',
      en: 'Household internet access jumped from 27% in 2010 to 84% in 2024, propelled by 7,000+ regional fiber-optic ISPs.'
    },
    uk: {
      pt: 'No Reino Unido (Ofcom), 96% dos domicílios têm acesso à internet, porém a penetração de fibra pura (FTTP) cresceu mais rápido no Brasil nos anos 2018–2023.',
      es: 'En el Reino Unido, el 96% de los hogares tiene acceso a internet.',
      en: 'In the UK (Ofcom), 96% of households have internet access.'
    },
    source: 'CETIC.br / NIC.br (Pesquisa TIC Domicílios 2024) & Anatel',
    labels: ['2010', '2013', '2016', '2018', '2020', '2022', '2024'],
    datasets: [
      { label: 'Domicílios com Internet (%)', data: [27.0, 43.0, 54.0, 67.0, 83.0, 80.0, 84.0], borderColor: '#0d9488' },
      { label: 'Banda Larga Fixa por Fibra Óptica (% dos acessos fixos)', data: [2.1, 4.8, 16.5, 34.2, 56.8, 69.4, 76.2], borderColor: '#4f46e5' }
    ]
  },

  // ==========================================================================
  // PILAR 10: COMÉRCIO EXTERIOR, AGRONEGÓCIO E INSERÇÃO GLOBAL (4 SÉRIES)
  // ==========================================================================
  {
    id: 'c-trade-bal',
    pillar: 'trade_global',
    code: '10.1',
    type: 'bar',
    unit: 'US$ Bilhões FOB',
    title: {
      pt: 'Balança Comercial Brasileira (Exportações, Importações e Superávit em US$ Bilhões, 2000–2024)',
      es: 'Balanza Comercial Brasileña (Exportaciones, Importaciones y Superávit en US$ Mil Millones, 2000–2024)',
      en: 'Brazilian Trade Balance: Exports, Imports & Structural Surplus (US$ Billions, 2000–2024)'
    },
    takeaway: {
      pt: 'As exportações brasileiras sextuplicaram desde 2000 (de US$ 55,1 bi para US$ 337,0 bi em 2024), gerando superávits recordes (US$ 98,9 bi em 2023 e US$ 74,6 bi em 2024) que blindam o balanço de pagamentos.',
      es: 'Las exportaciones se sextuplicaron desde 2000 (US$ 337,0 mil millones en 2024), generando superávits estructurales.',
      en: 'Brazilian exports grew 6x since 2000 (to $337.0B in 2024), generating structural trade surpluses ($98.9B in 2023; $74.6B in 2024).'
    },
    uk: {
      pt: 'Apesar do superávit, a corrente de comércio do Brasil (exportações + importações = ~29% do PIB) ainda é metade da média da OCDE (~60% do PIB).',
      es: 'La apertura comercial de Brasil (~29% del PIB) es la mitad de la media OCDE (~60% del PIB).',
      en: 'Despite massive surpluses, Brazil’s trade openness (exports + imports = ~29% of GDP) remains half the OECD average (~60% of GDP).'
    },
    source: 'MDIC / SECEX (Comex Stat) & Banco Central do Brasil',
    labels: ['2000', '2005', '2010', '2014', '2018', '2021', '2023', '2024'],
    datasets: [
      { label: 'Exportações FOB (US$ Bi)', data: [55.1, 118.5, 201.9, 225.1, 231.9, 280.8, 339.7, 337.0], backgroundColor: '#059669' },
      { label: 'Importações FOB (US$ Bi)', data: [55.8, 73.6, 181.8, 229.1, 185.3, 219.4, 240.8, 262.4], backgroundColor: '#94a3b8' },
      { label: 'Saldo Comercial (US$ Bi)', data: [-0.7, 44.9, 20.1, -4.0, 46.6, 61.4, 98.9, 74.6], backgroundColor: '#7c3aed' }
    ]
  },
  {
    id: 'c-china-trade',
    pillar: 'trade_global',
    code: '10.2',
    type: 'line',
    unit: '% das Exportações',
    title: {
      pt: 'Mudança Geopolítica do Comércio: Participação nas Exportações Brasileiras (China vs. EUA e UE, %)',
      es: 'Cambio Geopolítico Comercial: Destino de las Exportaciones Brasileñas (China vs. EE.UU. y UE, %)',
      en: 'Geopolitical Trade Shift: Share of Brazilian Exports (China vs. US & EU, 2000–2024, %)'
    },
    takeaway: {
      pt: 'Em 2000, a China comprava apenas 2,0% das exportações brasileiras e os EUA compravam 23,9%. Em 2023/2024, a China absorve ~30,7% (soja, minério de ferro, petróleo e carnes) — mais que EUA (11,6%) e UE (14,2%) somados.',
      es: 'China pasó de comprar el 2,0% de las exportaciones brasileñas en 2000 al 30,7% hoy, superando a EE.UU. y la UE juntos.',
      en: 'China’s share of Brazilian exports surged from 2.0% in 2000 to 30.7% in 2023–2024, exceeding the US (11.6%) and EU (14.2%) combined.'
    },
    uk: {
      pt: 'Para o Reino Unido, os maiores parceiros continuam sendo União Europeia (~42%) e Estados Unidos (~21%).',
      es: 'Para el Reino Unido, sus principales socios siguen siendo la UE (~42%) y EE.UU. (~21%).',
      en: 'By contrast, the UK’s largest export markets remain the European Union (~42%) and the United States (~21%).'
    },
    source: 'MDIC / SECEX (Balança Comercial Brasileira - Comex Stat)',
    labels: ['2000', '2004', '2008', '2012', '2016', '2020', '2023', '2024'],
    datasets: [
      { label: 'China (%)', data: [2.0, 5.6, 8.3, 17.0, 19.0, 32.4, 30.7, 28.9], borderColor: '#dc2626', borderWidth: 3 },
      { label: 'União Europeia (%)', data: [26.8, 25.1, 23.4, 20.2, 18.1, 14.8, 13.8, 14.2], borderColor: '#2563eb' },
      { label: 'Estados Unidos (%)', data: [23.9, 20.8, 14.0, 11.1, 12.5, 10.3, 10.9, 11.6], borderColor: '#64748b' }
    ]
  },
  {
    id: 'c-deind',
    pillar: 'trade_global',
    code: '10.3',
    type: 'line',
    unit: '% do Valor Adicionado',
    title: {
      pt: 'Desindustrialização Precoce: Participação da Indústria de Transformação no PIB (%) (1985–2024)',
      es: 'Desindustrialización Temprana: Participación de la Manufactura en el PIB (%) (1985–2024)',
      en: 'Premature Deindustrialization: Manufacturing Share of Value Added (% GDP, 1985–2024)'
    },
    takeaway: {
      pt: 'A indústria de transformação encolheu de 27,2% do PIB em 1985 para 11,4% em 2024 (enquanto a agropecuária + cadeia do agronegócio atingiu ~24% do PIB total), refletindo alto Custo Brasil e baixa integração em cadeias globais.',
      es: 'La industria manufacturera cayó del 27,2% del PIB en 1985 al 11,4% en 2024.',
      en: 'Manufacturing’s share of Brazilian GDP fell from 27.2% in 1985 to 11.4% in 2024, a textbook case of premature deindustrialization.'
    },
    uk: {
      pt: 'No Reino Unido, a manufatura também representa ~9,4% do PIB, porém a perda ocorreu após o país atingir alta renda per capita e serviços financeiros/tecnológicos de ponta.',
      es: 'En el Reino Unido, la desindustrialización ocurrió tras alcanzar altos ingresos y servicios avanzados.',
      en: 'While UK manufacturing is ~9.4% of GDP, the UK deindustrialized at high income with high-value financial and tech services exports.'
    },
    source: 'IBGE (Sistema de Contas Nacionais) & FGV IBRE',
    labels: ['1985', '1990', '1995', '2000', '2005', '2010', '2015', '2020', '2024'],
    datasets: [
      { label: 'Indústria de Transformação (% do VA)', data: [27.2, 22.8, 16.8, 15.3, 17.4, 15.0, 12.2, 11.9, 11.4], borderColor: '#7c3aed' },
      { label: 'Agropecuária Primária (% do VA)', data: [9.8, 7.8, 5.8, 5.5, 5.6, 4.8, 5.0, 6.8, 7.1], borderColor: '#059669' }
    ]
  },
  {
    id: 'c-grains-yield',
    pillar: 'trade_global',
    code: '10.4',
    type: 'line',
    unit: 'Índice (1990=100)',
    title: {
      pt: 'Efeito "Poupa-Terra" na Agricultura: Produção de Grãos (+438%) vs. Área Plantada (+108%) (1990–2024)',
      es: 'Efecto "Ahorro de Tierra": Producción de Granos (+438%) vs. Área Sembrada (+108%) (1990–2024)',
      en: 'Land-Sparen Tropical Agriculture: Grain Output (+438%) vs. Planted Area (+108%) (1990–2024)'
    },
    takeaway: {
      pt: 'Com duas safras anuais no mesmo solo (soja + milho safrinha) e plantio direto, a produção de grãos saltou de 58 Mt (1990) para 312 Mt (2023/24, +438%), enquanto a área plantada cresceu apenas +108% (de 37,9 para 78,8 Mha).',
      es: 'La producción de granos creció +438% (de 58 a 312 millones de toneladas) mientras el área sembrada solo creció +108%.',
      en: 'Double-cropping (soybean + winter corn) and tropical agronomy boosted grain harvests +438% (58M to 312M tons) while planted area rose just +108%.'
    },
    uk: {
      pt: 'Segundo a Embrapa, sem o ganho de produtividade por hectare desde 1990, o Brasil precisaria de +105 milhões de hectares extras para colher a safra atual.',
      es: 'Sin este salto de rendimiento por hectárea, se habrían necesitado +105 millones de hectáreas adicionales.',
      en: 'Without yield gains since 1990, Brazil would have needed an additional 105 million hectares of land to produce today’s harvest (Embrapa).'
    },
    source: 'CONAB (Série Histórica das Safras de Grãos) & Embrapa',
    labels: ['1990', '1995', '2000', '2005', '2010', '2015', '2020', '2024'],
    datasets: [
      { label: 'Produção de Grãos (Índice 1990=100 | 312 Mt)', data: [100, 139, 144, 198, 258, 358, 443, 538], borderColor: '#059669', borderWidth: 3 },
      { label: 'Área Plantada (Índice 1990=100 | 78,8 Mha)', data: [100, 99, 99, 129, 125, 153, 174, 208], borderColor: '#d97706' }
    ]
  }
];

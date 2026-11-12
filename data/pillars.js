// ============================================================================
// BRASIL EM NÚMEROS | BRAZIL BY NUMBERS — 12 PILARES, 16 KPIs COM SPARKLINES
// E 8 PARADOXOS ESTRUTURAIS (LAYOUT EDITORIAL RESPONSIVO E ADAPTATIVO)
// ============================================================================

window.BR_DATA = window.BR_DATA || {};

window.BR_DATA.UI_TEXT = {
  pt: {
    brandTitle: 'Brasil em Números',
    editionTag: '16 Pilares • 80 Séries • 27 UFs • 60 Profissões • 36 Cidades • Nomes IBGE',
    brandSub: 'Portal Público de Inteligência Estatística, Mapas, Cidades, Carreiras, Nomes e Simulação Estrutural',
    searchPlaceholder: 'Buscar entre 80 séries, 60 profissões, 36 cidades, 27 estados ou nomes...',
    ukBtnOn: 'UK / OCDE: Ativo',
    ukBtnOff: 'UK / OCDE: Oculto',
    darkBtnOff: '🌙 Escuro',
    darkBtnOn: '☀️ Claro',
    tabs: {
      overview: '📊 1. Visão Geral (16 Pilares)',
      charts: '📈 2. Explorador (80 Séries)',
      states: '🗺️ 3. Mapa IBGE & 27 UFs',
      professions: '💼 4. Profissões & Salários',
      cities: '🏙️ 5. Cidades, Lotes & Imóveis',
      names: '🪪 6. Nomes & Sobrenomes',
      correlations: '🔬 7. Correlações (OLS)',
      simulator: '🏛️ 8. Simulador & Pirâmide',
      income: '💰 9. Renda & Impostos',
      datahub: '🌐 10. Mundo & API BCB'
    },
    heroBadge: 'Edição Completa • 16 Pilares • 80 Séries • 60 Profissões • 36 Cidades (Lotes/m²) • Censo de Nomes IBGE ao Vivo',
    heroTitle: 'A enciclopédia estatística e interativa definitiva sobre a realidade brasileira.',
    heroDesc: 'Explore 80 séries históricas oficiais em 16 pilares estruturais, Mapa Vetorial Oficial do IBGE para as 27 UFs, Explorador de Salários para 60 Profissões (RAIS/CAGED/DIRPF), Atlas Urbano de Tamanho de Lotes, Apartamentos e Preço do m² em 36 Cidades (Censo 2022/FipeZap), Distribuição Histórica de Nomes e Sobrenomes (com busca ao vivo na API do IBGE), Laboratório Econométrico OLS, Simuladores Fiscais/Demográficos e API do Banco Central em tempo real.',
    openPillarCharts: 'Explorar as 5 séries deste pilar →',
    allPillars: 'Todos os 16 Pilares (80)'
  },
  es: {
    brandTitle: 'Brasil en Números',
    editionTag: '16 Pilares • 80 Series • 27 UFs • 60 Profesiones • 36 Ciudades • Nombres IBGE',
    brandSub: 'Portal Público de Inteligencia Estadística, Mapas, Ciudades, Profesiones, Nombres y Simulación',
    searchPlaceholder: 'Buscar entre 80 series, 60 profesiones, 36 ciudades, 27 estados o nombres...',
    ukBtnOn: 'UK / OCDE: Activo',
    ukBtnOff: 'UK / OCDE: Oculto',
    darkBtnOff: '🌙 Oscuro',
    darkBtnOn: '☀️ Claro',
    tabs: {
      overview: '📊 1. Visión General',
      charts: '📈 2. 80 Series',
      states: '🗺️ 3. Mapa y 27 UFs',
      professions: '💼 4. Profesiones y Sueldos',
      cities: '🏙️ 5. Ciudades y Lotes (m²)',
      names: '🪪 6. Nombres y Apellidos',
      correlations: '🔬 7. Correlaciones',
      simulator: '🏛️ 8. Simulador Fiscal',
      income: '💰 9. Renta e Impuestos',
      datahub: '🌐 10. Mundo y API BCB'
    },
    heroBadge: 'Edición Completa • 16 Pilares • 80 Series • 60 Profesiones • 36 Ciudades (Lotes/m²) • API Nombres IBGE',
    heroTitle: 'La enciclopedia estadística e interactiva definitiva sobre la realidad brasileña.',
    heroDesc: 'Síntesis completa de 80 series históricas en 16 pilares, Mapa Vectorial Oficial del IBGE (27 UFs), Sueldos por Profesión (60 carreras), Tamaño de Lotes Urbanos y m² en 36 Ciudades, Distribución de Nombres y Apellidos en el Censo IBGE en vivo, Laboratorio OLS, Simulador Fiscal y API del Banco Central.',
    openPillarCharts: 'Explorar las 5 series de este pilar →',
    allPillars: 'Todos los 16 Pilares (80)'
  },
  en: {
    brandTitle: 'Brazil by Numbers',
    editionTag: '16 Pillars • 80 Series • 27 States • 60 Professions • 36 Cities • IBGE Names',
    brandSub: 'Public Statistical Intelligence, IBGE Vector Atlas, Cities, Professions, Names & Simulation Portal',
    searchPlaceholder: 'Search 80 series, 60 professions, 36 cities, 27 states, or names...',
    ukBtnOn: 'UK / OECD: On',
    ukBtnOff: 'UK / OECD: Off',
    darkBtnOff: '🌙 Dark',
    darkBtnOn: '☀️ Light',
    tabs: {
      overview: '📊 1. Overview (16 Pillars)',
      charts: '📈 2. 80 Series Explorer',
      states: '🗺️ 3. IBGE Map & 27 States',
      professions: '💼 4. Incomes by Profession',
      cities: '🏙️ 5. Cities & Lot Sizes',
      names: '🪪 6. Names & Surnames',
      correlations: '🔬 7. OLS Correlations',
      simulator: '🏛️ 8. Fiscal & Age Sim',
      income: '💰 9. Income & Tax Calc',
      datahub: '🌐 10. World & Live API'
    },
    heroBadge: 'Flagship Edition • 16 Pillars • 80 Series • 60 Professions • 36 Cities (Lot Size/m²) • Live IBGE Names API',
    heroTitle: 'The definitive interactive statistical encyclopedia of Brazil.',
    heroDesc: 'Explore 80 official historical series across 16 structural pillars, Official IBGE 27-State Vector Map, Income by Profession Explorer (60 careers from RAIS/CAGED/Tax Returns), Urban Lot Sizes, Apartment Sizes & Price/m² across 36 Cities (Census 2022/FipeZap), First Name & Surname Distributions (with live IBGE Census API lookup), OLS Econometric Lab, Fiscal/Demographic Simulators, and Live Central Bank API.',
    openPillarCharts: 'Explore all 5 series in this pillar →',
    allPillars: 'All 16 Pillars (80)'
  }
};

window.BR_DATA.KPIS = [
  {
    id: 'pop', pillar: 'demographics', chartId: 'c-pop-peak',
    label: { pt: 'População (2024)', es: 'Población (2024)', en: 'Population (2024)' },
    value: '212,6M', sub: { pt: 'Pico demográfico em 2041: 220,4M (IBGE)', es: 'Pico demográfico en 2041: 220,4M (IBGE)', en: 'Demographic peak in 2041: 220.4M (IBGE)' },
    badge: '+0,4% a.a.', badgeColor: 'emerald', spark: [93, 119, 147, 174, 191, 203, 212.6, 220.4]
  },
  {
    id: 'tfr', pillar: 'demographics', chartId: 'c-tfr',
    label: { pt: 'Taxa de Fecundidade', es: 'Tasa de Fecundidad', en: 'Total Fertility Rate' },
    value: '1,57', sub: { pt: 'Filhos por mulher (nível de reposição: 2,10)', es: 'Hijos por mujer (nivel reemplazo: 2,10)', en: 'Births per woman (replacement level: 2.10)' },
    badge: '1960: 6,28', badgeColor: 'amber', spark: [6.28, 5.76, 4.35, 2.89, 2.38, 1.90, 1.65, 1.57]
  },
  {
    id: 'gdp_pc', pillar: 'economy', chartId: 'c-gdp-ppp',
    label: { pt: 'PIB per Capita PPC', es: 'PIB per Cápita PPA', en: 'GDP per Capita PPP' },
    value: 'US$ 20,8k', sub: { pt: 'Equivale a 36% do nível do Reino Unido', es: 'Equivale al 36% del nivel del Reino Unido', en: 'Equals 36% of the UK per-capita level' },
    badge: 'R$ 55,2 mil', badgeColor: 'sky', spark: [10.8, 11.2, 13.1, 15.4, 17.8, 19.6, 18.2, 20.8]
  },
  {
    id: 'informality', pillar: 'economy', chartId: 'c-labor',
    label: { pt: 'Informalidade no Trabalho', es: 'Informalidad Laboral', en: 'Labor Informality Rate' },
    value: '38,7%', sub: { pt: '39,8 milhões de trabalhadores sem carteira', es: '39,8 millones de ocupados informales', en: '39.8 million informal workers (PNAD)' },
    badge: 'Desemp.: 6,2%', badgeColor: 'amber', spark: [39.1, 37.8, 39.5, 41.1, 40.7, 38.7, 39.4, 38.7]
  },
  {
    id: 'selic', pillar: 'economy', chartId: 'c-selic-ipca',
    label: { pt: 'Juro Real Ex-Post', es: 'Tasa Real Ex-Post', en: 'Real Interest Rate' },
    value: '6,8% a.a.', sub: { pt: 'Selic 11,75% vs. Inflação IPCA 4,8% (BCB)', es: 'Selic 11,75% vs. Inflación IPCA 4,8%', en: 'Selic 11.75% vs. CPI Inflation 4.8%' },
    badge: 'Top 3 Global', badgeColor: 'rose', spark: [10.2, 7.8, 5.1, 7.4, 2.1, -2.4, 7.9, 6.8]
  },
  {
    id: 'tax', pillar: 'fiscal', chartId: 'c-tax',
    label: { pt: 'Carga Tributária Bruta', es: 'Carga Tributaria Bruta', en: 'Gross Tax Burden' },
    value: '32,4% PIB', sub: { pt: '44,2% da arrecadação vem do consumo', es: '44,2% proviene de impuestos al consumo', en: '44.2% of tax revenue falls on consumption' },
    badge: 'OCDE: 34,0%', badgeColor: 'indigo', spark: [28.4, 31.5, 32.8, 32.1, 31.7, 33.1, 32.6, 32.4]
  },
  {
    id: 'debt', pillar: 'fiscal', chartId: 'c-debt',
    label: { pt: 'Dívida Bruta (DBGG)', es: 'Deuda Bruta (DBGG)', en: 'Gross Public Debt' },
    value: '78,6% PIB', sub: { pt: 'Despesas obrigatórias: 91,8% do orçamento', es: 'Gasto obligatorio: 91,8% del presupuesto', en: '91.8% of federal primary spend is mandatory' },
    badge: 'Juros: 7,8% PIB', badgeColor: 'rose', spark: [55.5, 51.8, 51.5, 65.5, 75.3, 86.9, 71.7, 78.6]
  },
  {
    id: 'gini', pillar: 'inequality', chartId: 'c-ineq',
    label: { pt: 'Desigualdade (Gini)', es: 'Desigualdad (Gini)', en: 'Income Inequality (Gini)' },
    value: '0,518', sub: { pt: 'O 1% mais rico detém 26,5% da renda nacional', es: 'El 1% más rico concentra el 26,5% del ingreso', en: 'Top 1% captures 26.5% of national income' },
    badge: 'UK: 0,357', badgeColor: 'rose', spark: [0.601, 0.594, 0.569, 0.531, 0.524, 0.545, 0.544, 0.518]
  },
  {
    id: 'sewage', pillar: 'inequality', chartId: 'c-sanit',
    label: { pt: 'Coleta de Esgoto', es: 'Red de Alcantarillado', en: 'Sewage Network Access' },
    value: '56,0%', sub: { pt: '~90 milhões de brasileiros sem rede coletora', es: '~90 millones de personas sin alcantarillado', en: '~90 million residents lack mains sewerage' },
    badge: 'Água: 84,9%', badgeColor: 'teal', spark: [42.1, 45.4, 48.1, 50.3, 52.4, 54.1, 55.2, 56.0]
  },
  {
    id: 'life_exp', pillar: 'health', chartId: 'c-mort-life',
    label: { pt: 'Esperança de Vida', es: 'Esperanza de Vida', en: 'Life Expectancy' },
    value: '76,4 anos', sub: { pt: 'Aumento de +13,9 anos desde 1980 (62,5 anos)', es: 'Aumento de +13,9 años desde 1980 (62,5 años)', en: 'Up +13.9 years since 1980 (62.5 years)' },
    badge: '+13,9 anos', badgeColor: 'emerald', spark: [62.5, 66.9, 71.1, 73.9, 75.2, 76.2, 75.5, 76.4]
  },
  {
    id: 'pisa', pillar: 'education', chartId: 'c-pisa',
    label: { pt: 'PISA Matemática', es: 'PISA Matemáticas', en: 'PISA Math Score' },
    value: '379 pts', sub: { pt: 'IDEB Anos Iniciais: 6,0 | Ensino Médio: 4,3', es: 'IDEB Primaria: 6,0 | Secundaria: 4,3', en: 'Primary IDEB: 6.0 | High School IDEB: 4.3' },
    badge: 'OCDE: 472 pts', badgeColor: 'amber', spark: [334, 356, 370, 386, 391, 377, 384, 379]
  },
  {
    id: 'clean_elec', pillar: 'energy_climate', chartId: 'c-elec-mix',
    label: { pt: 'Eletricidade Renovável', es: 'Electricidad Renovable', en: 'Renewable Electricity' },
    value: '89,2%', sub: { pt: 'Matriz energética total: 49,1% renovável (EPE)', es: 'Matriz energética total: 49,1% renovable', en: 'Total primary energy mix: 49.1% renewable' },
    badge: 'OCDE: 33,4%', badgeColor: 'emerald', spark: [84.5, 79.2, 74.6, 80.4, 82.3, 78.1, 87.9, 89.2]
  },
  {
    id: 'prodes', pillar: 'energy_climate', chartId: 'c-prodes',
    label: { pt: 'PRODES Amazônia', es: 'PRODES Amazonía', en: 'Amazon Deforestation' },
    value: '6.288 km²', sub: { pt: 'Queda de 45,7% entre 2022 e 2024 (INPE)', es: 'Caída del 45,7% entre 2022 y 2024 (INPE)', en: 'Down 45.7% between 2022 and 2024 (INPE)' },
    badge: 'Pico 04: 27,7k', badgeColor: 'emerald', spark: [27772, 12911, 4571, 7893, 10129, 13038, 11594, 6288]
  },
  {
    id: 'homicide', pillar: 'security_justice', chartId: 'c-crime',
    label: { pt: 'Taxa de Homicídios', es: 'Tasa de Homicidios', en: 'Homicide Rate' },
    value: '22,8 /100k', sub: { pt: '46.328 mortes violentas/ano (SP: 6,4 | AP: 57,4)', es: '46.328 muertes violentas/año (FBSP)', en: '46,328 violent deaths/yr (SP: 6.4 | AP: 57.4)' },
    badge: 'UK: 1,0 /100k', badgeColor: 'rose', spark: [26.7, 25.8, 27.8, 28.9, 30.9, 23.6, 23.3, 22.8]
  },
  {
    id: 'pix', pillar: 'infrastructure', chartId: 'c-digital-pix',
    label: { pt: 'Transações PIX / Ano', es: 'Transacciones PIX / Año', en: 'PIX Transactions / Yr' },
    value: '63,8 Bi', sub: { pt: '84% dos domicílios conectados à internet', es: '84% de los hogares conectados a internet', en: '84% of Brazilian households online (CETIC)' },
    badge: 'Líder Global', badgeColor: 'sky', spark: [0, 0, 0, 0.2, 9.4, 24.1, 41.9, 63.8]
  },
  {
    id: 'trade', pillar: 'trade_global', chartId: 'c-trade-bal',
    label: { pt: 'Superávit Comercial', es: 'Superávit Comercial', en: 'Trade Surplus (FOB)' },
    value: 'US$ 74,6B', sub: { pt: '30,7% das exportações destinadas à China', es: '30,7% de las exportaciones van a China', en: '30.7% of exports destined for China (MDIC)' },
    badge: 'Grãos: 312Mt', badgeColor: 'emerald', spark: [-0.7, 44.9, 20.1, -4.0, 46.6, 61.4, 98.9, 74.6]
  },
  {
    id: 'lot_urban', pillar: 'housing_urban', chartId: 'c-lot-apt-size',
    label: { pt: 'Lote Urbano & Apto', es: 'Lote Urbano y Apto', en: 'Urban Lot & Apt Size' },
    value: '225 m²', sub: { pt: 'Lote médio nas capitais (Mín. Lei: 125 m² | Apto: 64 m²)', es: 'Lote medio en capitales (Mín. Ley: 125 m² | Apto: 64 m²)', en: 'Mean capital lot (Legal min: 125 m² | New apt: 64 m²)' },
    badge: 'Santos: 63,5% Apto', badgeColor: 'teal', spark: [360, 320, 290, 265, 250, 240, 230, 225]
  },
  {
    id: 'prof_wage', pillar: 'professions_work', chartId: 'c-top-professions',
    label: { pt: 'Salário Médio Habitual', es: 'Salario Medio Habitual', en: 'Mean Monthly Earnings' },
    value: 'R$ 3.215', sub: { pt: 'Mediana: R$ 2.150 (Cartório R$ 105k | Médico R$ 28,5k)', es: 'Mediana: R$ 2.150 (Notario R$ 105k | Médico R$ 28,5k)', en: 'Median: R$ 2,150 (Notary R$ 105k | Doctor R$ 28.5k)' },
    badge: '60 Carreiras', badgeColor: 'indigo', spark: [2680, 2810, 2750, 2890, 2940, 2780, 3050, 3215]
  },
  {
    id: 'names_top', pillar: 'names_identity', chartId: 'c-top-names',
    label: { pt: 'Nome & Sobrenome #1', es: 'Nombre y Apellido #1', en: '#1 Name & Surname' },
    value: 'Maria / Silva', sub: { pt: '11,7M Marias (5,8%) e 34,0M Silvas (16,7% da pop.)', es: '11,7M Marias (5,8%) y 34,0M Silvas (16,7% pob.)', en: '11.7M Marias (5.8%) & 34.0M Silvas (16.7% of pop.)' },
    badge: '2024: Helena/Miguel', badgeColor: 'amber', spark: [336, 749, 1487, 2476, 2495, 1616, 918, 1111]
  },
  {
    id: 'mei_boom', pillar: 'professions_work', chartId: 'c-mei-clt',
    label: { pt: 'Microempreendedores', es: 'Microemprendedores', en: 'Registered MEIs' },
    value: '15,8M MEIs', sub: { pt: 'Salto de +295% em 10 anos (vs. 47,2M vínculos CLT)', es: 'Salto de +295% en 10 años (vs. 47,2M empleos CLT)', en: 'Up +295% in 10 years (alongside 47.2M CLT jobs)' },
    badge: 'Aluguel: 23% Dom.', badgeColor: 'sky', spark: [1.8, 4.0, 6.6, 9.4, 11.3, 13.8, 15.1, 15.8]
  }
];

window.BR_DATA.PILLARS = [
  {
    id: 'demographics', num: '01', icon: '👥', color: '#059669', seriesCount: 5,
    keyStat: 'Fecundidade 1,57 • Pico 2041',
    title: { pt: 'População, Demografia, Censo 2022 e Migrações', es: 'Población, Demografía, Censo 2022 y Migraciones', en: 'Population, Demographics, Census 2022 & Migration' },
    desc: { pt: 'Queda acelerada da fecundidade (6,28 → 1,57), fim do bônus demográfico, inversão jovens/idosos em 2036, pico populacional em 2041 (220,4M) e saldo migratório inter-regional no Censo 2022.', es: 'Caída de la fecundidad (1,57), fin del bono demográfico, pico poblacional en 2041 y migración interna.', en: 'Rapid fertility drop (1.57), end of demographic dividend, 2041 peak (220.4M), and internal migration shifts.' }
  },
  {
    id: 'economy', num: '02', icon: '📈', color: '#0284c7', seriesCount: 5,
    keyStat: 'Agro +255% • Informalidade 38,7%',
    title: { pt: 'Economia, Produtividade, Juros e Crédito', es: 'Economía, Productividad, Tasas y Crédito', en: 'Economy, Productivity, Interest Rates & Credit' },
    desc: { pt: 'Dualismo produtivo (Agro +255% vs. Indústria/Serviços estagnados), informalidade de 38,7%, armadilha da renda média (US$ 20,8k PPC), juro real Selic vs. FBCF e spread bancário/endividamento.', es: 'Dualismo productivo, informalidad del 38,7%, trampa de renta media, tasas reales y crédito.', en: 'Productive dualism (Agri +255%), 38.7% informality, middle-income trap, real interest rates, and household credit.' }
  },
  {
    id: 'fiscal', num: '03', icon: '🏛️', color: '#4f46e5', seriesCount: 5,
    keyStat: 'Carga 32,4% PIB • Rigidez 91,8%',
    title: { pt: 'Estado Fiscal, Tributos, Previdência e Funcionalismo', es: 'Estado Fiscal, Tributos, Pensiones y Empleo Público', en: 'Public Finances, Taxes, Pensions & Civil Service' },
    desc: { pt: 'Carga tributária de 32,4% do PIB regressiva no consumo (44,2%), DBGG em 78,6% do PIB, 91,8% de despesa federal obrigatória, gasto previdenciário precoce e prêmio salarial público-privado.', es: 'Carga tributaria del 32,4% PIB, rigidez del 91,8%, gasto previsional y premio salarial público.', en: '32.4% GDP tax burden skewed to consumption, 91.8% budget rigidity, pension spending, and public-private wage gap.' }
  },
  {
    id: 'inequality', num: '04', icon: '⚖️', color: '#e11d48', seriesCount: 5,
    keyStat: 'Gini 0,518 • Esgoto 56,0%',
    title: { pt: 'Pobreza, Desigualdade, Raça/Gênero e Saneamento', es: 'Pobreza, Desigualdad, Raza/Género y Saneamiento', en: 'Poverty, Inequality, Race/Gender & Sanitation' },
    desc: { pt: 'Concentração no 1% mais rico (26,5%), gargalo de coleta e tratamento de esgoto (SNIS), redução da pobreza via transferências, série do Gini e hiato salarial por raça e gênero.', es: 'Concentración en el 1% superior (26,5%), brecha de alcantarillado, pobreza y brecha racial/género.', en: 'Top 1% income share (26.5%), sanitation gaps, poverty trends, Gini trajectory, and race/gender wage gaps.' }
  },
  {
    id: 'health', num: '05', icon: '🩺', color: '#db2777', seriesCount: 5,
    keyStat: 'Vida 76,4 anos • Obesidade 24,3%',
    title: { pt: 'Saúde Pública (SUS), Nutrição e Epidemiologia', es: 'Salud Pública (SUS), Nutrición y Epidemiología', en: 'Public Health (SUS), Nutrition & Epidemiology' },
    desc: { pt: 'Queda de 82% na mortalidade infantil e do tabagismo (9,3%) vs. alta da obesidade (24,3%), financiamento público do SUS (4,0% PIB) vs. privado (5,6% PIB), vacinação PNI e dengue/leitos UTI.', es: 'Caída de mortalidad infantil y tabaquismo vs. obesidad, gasto SUS (4,0% PIB) y vacunación.', en: '82% infant mortality drop and low smoking vs. obesity surge, SUS vs. private health spend, and immunization.' }
  },
  {
    id: 'education', num: '06', icon: '🎓', color: '#d97706', seriesCount: 5,
    keyStat: 'IDEB 6,0 vs EM 4,3 • EAD 51%',
    title: { pt: 'Educação, Capital Humano, Ensino Superior e C&T', es: 'Educación, Capital Humano, Universidad y C&T', en: 'Education, Human Capital, Higher Ed & Science' },
    desc: { pt: 'Avanço nos anos iniciais (IDEB 6,0) vs. estagnação no Ensino Médio (4,3), PISA Matemática (379 pts), jovens "nem-nem" (19,8%), gasto por aluno (Básico vs. Superior) e explosão do ensino EAD (51%).', es: 'Avance en primaria vs. estancamiento en secundaria, PISA, jóvenes ni-ni y explosión universitaria EAD.', en: 'Early primary IDEB gains vs. high school stagnation, PISA gaps, NEET youth, per-pupil spend, and 51% online higher ed.' }
  },
  {
    id: 'energy_climate', num: '07', icon: '🌱', color: '#16a34a', seriesCount: 5,
    keyStat: 'Eletric. 89,2% Limpa • 75% GEE Terra',
    title: { pt: 'Energia Limpa, Clima, Desmatamento e Biocombustíveis', es: 'Energía Limpia, Clima, Deforestación y Biocombustibles', en: 'Clean Energy, Climate, Deforestation & Biofuels' },
    desc: { pt: 'Matriz elétrica 89,2% renovável (boom solar e eólico), 75% das emissões de GEE vindas de Uso da Terra e Agro (SEEG), desmatamento PRODES Amazônia/Cerrado, desastres climáticos e biocombustíveis.', es: 'Electricidad 89,2% renovable, emisiones por uso del suelo, PRODES y biocombustibles.', en: '89.2% renewable electricity, 75% land-use/agri GHG profile, PRODES deforestation, climate losses, and biofuels.' }
  },
  {
    id: 'security_justice', num: '08', icon: '🛡️', color: '#dc2626', seriesCount: 5,
    keyStat: 'Homicídios 22,8/100k • 84M Processos',
    title: { pt: 'Segurança Pública, Crime Digital, Prisões e Justiça', es: 'Seguridad Pública, Delito Digital, Prisiones y Justicia', en: 'Public Safety, Cyber Crime, Prisons & Justice' },
    desc: { pt: 'Inversão geográfica dos homicídios (SP -85% vs. Norte/Nordeste), explosão de golpes digitais (+368%), 852 mil presos, Judiciário custando 1,3% do PIB (84M processos) e letalidade policial/trânsito.', es: 'Inversión geográfica de homicidios, estafas digitales (+368%), 852 mil presos y costo judicial (1,3% PIB).', en: 'Geographic inversion of homicides, +368% digital fraud surge, 852k prisoners, and judiciary costing 1.3% of GDP.' }
  },
  {
    id: 'infrastructure', num: '09', icon: '🚄', color: '#0d9488', seriesCount: 5,
    keyStat: '65% Carga Rodoviária • PIX 63,8 Bi',
    title: { pt: 'Infraestrutura, Logística, Mobilidade e Digitalização', es: 'Infraestructura, Logística, Movilidad y Digitalización', en: 'Infrastructure, Logistics, Mobility & Digitalization' },
    desc: { pt: 'Dependência rodoviária (64,9% da carga), subinvestimento físico (2,1% vs. 4,3% do PIB), liderança mundial do PIX (63,8 bi transações), fibra óptica (84% domicílios) e crise dos ônibus urbanos vs. motos.', es: 'Dependencia carretera (64,9%), baja inversión física, liderazgo mundial de PIX y crisis del autobús urbano.', en: 'Road freight dependency (64.9%), infrastructure capex gap, PIX real-time payments boom, fiber broadband, and urban transit.' }
  },
  {
    id: 'trade_global', num: '10', icon: '🌐', color: '#7c3aed', seriesCount: 5,
    keyStat: 'Saldo US$ 74,6B • China 30,7%',
    title: { pt: 'Comércio Exterior, Agronegócio, Indústria e IDP', es: 'Comercio Exterior, Agronegocio, Industria e IED', en: 'Foreign Trade, Agribusiness, Manufacturing & FDI' },
    desc: { pt: 'Superávit comercial estrutural (US$ 74,6B–98,9B), China absorvendo 30,7% das exportações, desindustrialização precoce (11,4% PIB), efeito poupa-terra na safra de grãos (312 Mt) e Investimento Direto (IDP).', es: 'Superávit comercial estructural, ascenso de China (30,7%), desindustrialización y productividad agrícola.', en: 'Structural trade surpluses, China at 30.7% of exports, premature deindustrialization, grain yield boom, and FDI inflows.' }
  },
  {
    id: 'institutions', num: '11', icon: '⚖️', color: '#be123c', seriesCount: 5,
    keyStat: 'Emendas R$ 53 Bi • 34% Municípios',
    title: { pt: 'Democracia, Governança, Emendas e Federalismo', es: 'Democracia, Gobernanza, Enmiendas y Federalismo', en: 'Democracy, Governance, Budget Amendments & Federalism' },
    desc: { pt: 'Escalada das emendas parlamentares (R$ 53 bi/ano), fragmentação partidária (NEP), sub-representação feminina na Câmara (17,7%), percepção de corrupção/governança e dependência fiscal de 5.570 municípios.', es: 'Escalada de enmiendas parlamentarias (R$ 53 mil millones), fragmentación partidaria y dependencia fiscal municipal.', en: 'Surge of congressional budget amendments (R$ 53B/yr), party fragmentation, women in parliament (17.7%), and municipal fiscal dependency.' }
  },
  {
    id: 'society_culture', num: '12', icon: '🎭', color: '#0369a1', seriesCount: 5,
    keyStat: 'Turismo 6,6M • Diáspora 4,6M',
    title: { pt: 'Turismo, Interiorização, Religião e Sociedade Digital', es: 'Turismo, Interiorización, Religión y Sociedad Digital', en: 'Tourism, Interiorization, Religion & Digital Society' },
    desc: { pt: 'Ascensão das cidades médias do interior vs. metrópoles, paradoxo do turismo internacional estagnado (6,6M visitantes/ano), transição religiosa nos Censos (1970–2022), tempo online (#1 global) e diáspora (4,6M no exterior).', es: 'Ascenso de ciudades medias, paradoja del turismo internacional (6,6M), transición religiosa y diáspora (4,6M).', en: 'Rise of interior agribusiness cities, international tourism stagnation (6.6M visitors/yr), Census religious shift, and 4.6M diaspora.' }
  },
  {
    id: 'housing_urban', num: '13', icon: '🏙️', color: '#0f766e', seriesCount: 5,
    keyStat: 'Lotes 145–360m² • R$/m² FipeZap',
    title: { pt: 'Habitação, Tamanho de Lotes, Imóveis e Uso do Solo', es: 'Vivienda, Tamaño de Lotes, Inmuebles y Uso del Suelo', en: 'Housing, Urban Lot Sizes, Real Estate & Land Use' },
    desc: { pt: 'Redução histórica do tamanho médio dos lotes urbanos (360m² → 165m² nas metrópoles) e dos apartamentos novos, ranking do preço do m² (FipeZap), explosão do aluguel no Censo 2022, MapBiomas (851M ha) e urbanismo das calçadas/árvores.', es: 'Tamaño medio de lotes urbanos y apartamentos, precio del m², auge del alquiler, MapBiomas y urbanismo.', en: 'Historical shrinkage of urban residential lots and new apartments, price/m² rankings, rental boom, MapBiomas land cover, and street quality.' }
  },
  {
    id: 'professions_work', num: '14', icon: '💼', color: '#4338ca', seriesCount: 5,
    keyStat: '60 Profissões • 15,8M MEIs',
    title: { pt: 'Profissões, Salários, Carreiras, Escolaridade e MEIs', es: 'Profesiones, Salarios, Carreras, Educación y MEIs', en: 'Professions, Salaries, Careers, Education & MEIs' },
    desc: { pt: 'Remuneração das 60 principais profissões brasileiras (de Titulares de Cartório e Juízes a Médicos, Engenheiros de IA, Professores e Trabalhadores de App), ocupações que mais empregam, prêmio salarial universitário e boom dos 15,8M de MEIs.', es: 'Remuneración de 60 profesiones en Brasil, ocupaciones más numerosas, premio universitario y auge de los MEIs.', en: 'Earnings across 60 Brazilian professions (from Notaries and Judges to Doctors, Software Engineers, Teachers, and App Workers), and the 15.8M MEI boom.' }
  },
  {
    id: 'names_identity', num: '15', icon: '🪪', color: '#b45309', seriesCount: 5,
    keyStat: 'Silva 16,7% • Maria 11,7M',
    title: { pt: 'Nomes, Sobrenomes, Raízes Étnicas e Famílias (IBGE)', es: 'Nombres, Apellidos, Raíces Étnicas y Familias (IBGE)', en: 'First Names, Surnames, Ethnic Roots & Family Structure' },
    desc: { pt: 'Os nomes próprios mais comuns do Brasil (Maria 11,7M, José 5,7M, Ana 3,1M), distribuição dos sobrenomes (Silva 34M, Santos 21M), revolução dos nomes de bebês nos cartórios (Helena, Miguel, Gael), composição racial e novos arranjos familiares.', es: 'Nombres y apellidos más comunes (Maria, José, Silva, Santos), tendencias en recién nacidos, composición racial y familias.', en: 'Brazil’s most common first names and surnames (Maria, José, Silva, Santos), 2024 baby name shifts (Helena, Miguel, Gael), racial makeup, and household types.' }
  },
  {
    id: 'consumption_life', num: '16', icon: '🛒', color: '#9333ea', seriesCount: 5,
    keyStat: 'Habitação 36,6% • 92M Pets',
    title: { pt: 'Consumo das Famílias, Alimentação, Bets, Pets e Esporte', es: 'Consumo Familiar, Alimentación, Apuestas, Mascotas y Deporte', en: 'Household Consumption, Diet, Sports Betting, Pets & Culture' },
    desc: { pt: 'Como o brasileiro gasta seu dinheiro (POF IBGE), transição alimentar (queda do arroz/feijão vs. ultraprocessados), febre das apostas online ("Bets"), 92 milhões de cães/gatos vs. 40 milhões de crianças e maiores torcidas do país.', es: 'Presupuesto familiar (POF), transición alimentaria, fiebre de apuestas online ("Bets"), 92M de mascotas y deporte.', en: 'Household budget structure (POF), dietary shift (rice/beans vs. ultra-processed foods), online betting surge ("Bets"), 92M pets vs. 40M children, and sports.' }
  }
];

window.BR_DATA.PARADOXES = [
  {
    num: 'I',
    title: { pt: 'Envelhecimento Europeu antes da Renda Plena', es: 'Envejecimiento Europeo antes de Altos Ingresos', en: 'European Aging Before High Income' },
    text: { pt: 'A França levou 115 anos e o Reino Unido 45 anos para dobrar a proporção de idosos de 7% para 14%; o Brasil fará essa transição em apenas 21 anos (2011–2032), com fecundidade de 1,57 e PIB per capita equivalente a um terço da OCDE.', es: 'Francia tardó 115 años en duplicar su población mayor del 7% al 14%; Brasil lo hará en solo 21 años (2011–2032).', en: 'France took 115 years to double its senior share from 7% to 14%; Brazil is doing it in just 21 years (2011–2032) at one-third of OECD per-capita income.' }
  },
  {
    num: 'II',
    title: { pt: 'Superpotência Agroambiental vs. Estagnação Urbana', es: 'Superpotencia Agro vs. Estancamiento Urbano', en: 'Agri-Productivity Boom vs. Urban Stagnation' },
    text: { pt: 'Entre 1995 e 2024, a produtividade do trabalho na agropecuária cresceu +255% com tecnologia tropical (Embrapa), enquanto a indústria (-3,2%) e os serviços tradicionais (+4,2%), que empregam 85% dos brasileiros, ficaram estagnados.', es: 'Entre 1995 y 2024, la productividad agropecuaria creció +255%, mientras industria y servicios permanecieron estancados.', en: 'From 1995 to 2024, agricultural labor productivity jumped +255%, while manufacturing (-3.2%) and services (+4.2%), employing 85% of workers, flatlined.' }
  },
  {
    num: 'III',
    title: { pt: 'Carga Tributária de OCDE com Estado Regressivo', es: 'Recaudación OCDE con Tributo Regresivo', en: 'OECD Tax Burden with Regressive Incidence' },
    text: { pt: 'O Brasil arrecada 32,4% do PIB (próximo aos 34,0% da OCDE), mas 44,2% vêm de tributos indiretos sobre consumo e 91,8% do orçamento federal é obrigatório, enquanto emendas parlamentares já capturam R$ 53 bilhões/ano.', es: 'Brasil recauda el 32,4% del PIB, pero el 44,2% proviene del consumo y el 91,8% del presupuesto federal es gasto obligatorio.', en: 'Brazil collects 32.4% of GDP in taxes, yet 44.2% falls on consumption and 91.8% of federal spending is mandatory.' }
  },
  {
    num: 'IV',
    title: { pt: 'Eletricidade de Primeiro Mundo, Emissões Florestais', es: 'Electricidad Limpia, Emisiones Forestales', en: 'G20’s Cleanest Grid, Land-Use Carbon Profile' },
    text: { pt: '89,2% da eletricidade brasileira é renovável (vs. 33,4% na OCDE). Por isso, a descarbonização brasileira depende fundamentalmente de zerar o desmatamento na Amazônia e no Cerrado (48% das emissões de GEE) e recuperar pastagens.', es: 'El 89,2% de la electricidad brasileña es renovable; el 75% de sus emisiones proviene del uso de la tierra y agropecuaria.', en: '89.2% of Brazil’s electricity is renewable (vs. 33.4% in the OECD); 75% of national GHG emissions come from land-use change and agriculture.' }
  },
  {
    num: 'V',
    title: { pt: 'Digitalização Financeira Líder vs. Déficit de Saneamento', es: 'Finanzas Digitales Líderes vs. Rezago Sanitario', en: 'World-Class FinTech vs. 19th-Century Sanitation Gap' },
    text: { pt: 'O país que processa 63,8 bilhões de transações instantâneas no PIX por ano e é #1 mundial em tempo conectado (9h13/dia) ainda possui ~90 milhões de habitantes (44% da população) sem conexão à rede coletora de esgoto.', es: 'El país que procesa 63,8 mil millones de pagos PIX al año aún tiene al 44% de su población sin red de alcantarillado.', en: 'A nation processing 63.8 billion instant PIX payments annually still leaves 44% of its population (~90 million people) without mains sewage collection.' }
  },
  {
    num: 'VI',
    title: { pt: 'A Grande Inversão Geográfica da Violência', es: 'La Gran Inversión Geográfica de la Violencia', en: 'The Great Geographic Inversion of Homicides' },
    text: { pt: 'Em 2000, São Paulo tinha taxa de 42,2 homicídios por 100 mil hab. — mais que o dobro do Nordeste (19,5). Em 2023, São Paulo caiu para 6,4 (-85%), enquanto Nordeste (33,4) e Norte (32,1) tornaram-se o epicentro da letalidade.', es: 'En 2000, São Paulo tenía 42,2 homicidios/100k y el Nordeste 19,5; hoy São Paulo tiene 6,4 (-85%) y el Nordeste 33,4.', en: 'In 2000, São Paulo’s homicide rate (42.2/100k) was double the Northeast’s (19.5). By 2023, São Paulo fell 85% to 6.4, while the Northeast (33.4) and North (32.1) surged.' }
  },
  {
    num: 'VII',
    title: { pt: 'Gigante Natural com Turismo Internacional de Uma Torre Eiffel', es: 'Gigante Natural con Turismo Estancado en 6,6M', en: 'Continental Megadiversity with 1 Eiffel Tower of Tourists' },
    text: { pt: 'Apesar de liderar o ranking mundial de biodiversidade e patrimônio natural, o Brasil recebe apenas ~6,6 milhões de turistas internacionais por ano (praticamente o mesmo patamar de 2005 e equivalente apenas aos visitantes pagantes da Torre Eiffel), contra 42 milhões no México e 85 milhões na Espanha.', es: 'Pese a su biodiversidad, Brasil recibe solo 6,6 millones de turistas extranjeros al año frente a 42 millones en México.', en: 'Despite unmatched natural biodiversity, Brazil attracts just ~6.6M international tourists a year (roughly equal to the Eiffel Tower alone), vs. 42M in Mexico.' }
  },
  {
    num: 'VIII',
    title: { pt: 'Federalismo sem Receita Própria e Judiciário Recordista', es: 'Federalismo Dependiente y Costo Judicial Récord', en: 'Dependent Municipalities & World-Record Judicial Spend' },
    text: { pt: 'Dos 5.570 municípios brasileiros, 34% não arrecadam nem 10% do próprio orçamento (dependendo >90% de repasses), enquanto o Poder Judiciário consome 1,3% do PIB (4x a média europeia) para administrar 84 milhões de processos.', es: 'El 34% de los 5.570 municipios no genera ni el 10% de sus ingresos, y el Poder Judicial consume el 1,3% del PIB.', en: '34% of Brazil’s 5,570 municipalities generate under 10% of their own revenue, while the Judiciary consumes a world-record 1.3% of GDP.' }
  }
];

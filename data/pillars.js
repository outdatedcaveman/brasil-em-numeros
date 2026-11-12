// ============================================================================
// BRASIL EM NÚMEROS | BRAZIL BY NUMBERS — PILARES, KPIs E PARADOXOS ESTRUTURAIS
// Fontes Oficiais: IBGE, BCB, STN, IPEA, DataSUS, INEP, EPE, SEEG, INPE, FBSP, CNJ, MDIC
// ============================================================================

window.BR_DATA = window.BR_DATA || {};

window.BR_DATA.UI_TEXT = {
  pt: {
    brandTitle: 'Brasil em Números',
    editionTag: 'Edição Completa • 10 Pilares • 40 Séries',
    brandSub: 'Portal Público de Inteligência Estatística e Simulação Estrutural do Brasil',
    searchPlaceholder: 'Buscar séries, indicadores ou fontes (ex: fecundidade, Gini, PRODES, Selic, PIX, homicídios)...',
    ukBtnOn: 'Benchmark UK / OCDE: Ativo',
    ukBtnOff: 'Benchmark UK / OCDE: Oculto',
    tabs: {
      overview: '1. Visão Geral & 10 Pilares',
      charts: '2. Explorador (40 Séries)',
      states: '3. Mapa & Atlas das 27 UFs',
      correlations: '4. Lab de Correlações (XY)',
      simulator: '5. Simulador Fiscal & Demográfico',
      income: '6. Calculadora de Renda',
      benchmark: '7. Brasil vs. Mundo (OCDE/BRICS)',
      datahub: '8. Dados Abertos & API'
    },
    heroBadge: 'Portal Público de Inteligência Estatística • Inspirado em UK by Numbers & Our World in Data',
    heroTitle: 'Entenda os desafios e as transformações estruturais do Brasil com dados oficiais auditáveis.',
    heroDesc: 'Síntese integrada de 40 séries históricas oficiais em 10 pilares temáticos (IBGE, Banco Central, Tesouro Nacional, IPEA, DataSUS, INEP, EPE, SEEG, INPE, FBSP, CNJ, Anatel e MDIC), acompanhada de Mapa Coroplético das 27 UFs, Laboratório de Regressão e Correlação, Simulador Dinâmico da Dívida Pública (DBGG), Pirâmide Etária (1980–2060) e Calculadora de Posição na Pirâmide de Renda.',
    openPillarCharts: 'Explorar as 4 séries deste pilar →',
    allPillars: 'Todos os 10 Pilares (40)'
  },
  es: {
    brandTitle: 'Brasil en Números',
    editionTag: 'Edición Completa • 10 Pilares • 40 Series',
    brandSub: 'Portal Público de Inteligencia Estadística y Simulación Estructural de Brasil',
    searchPlaceholder: 'Buscar series, indicadores o fuentes (ej: fecundidad, Gini, PRODES, Selic, PIX, homicidios)...',
    ukBtnOn: 'Benchmark UK / OCDE: Activo',
    ukBtnOff: 'Benchmark UK / OCDE: Oculto',
    tabs: {
      overview: '1. Visión General y 10 Pilares',
      charts: '2. Explorador (40 Series)',
      states: '3. Mapa y Atlas de 27 Estados',
      correlations: '4. Lab de Correlaciones (XY)',
      simulator: '5. Simulador Fiscal y Demográfico',
      income: '6. Calculadora de Ingresos',
      benchmark: '7. Brasil vs. Mundo (OCDE/BRICS)',
      datahub: '8. Datos Abiertos y Descarga'
    },
    heroBadge: 'Portal Público de Inteligencia Estadística • Inspirado en UK by Numbers y Our World in Data',
    heroTitle: 'Comprenda los desafíos y transformaciones estructurales de Brasil a través de datos oficiales auditables.',
    heroDesc: 'Síntesis integrada de 40 series históricas oficiales en 10 pilares temáticos (IBGE, Banco Central, Tesoro Nacional, IPEA, DataSUS, INEP, EPE, SEEG, INPE, FBSP, CNJ, Anatel y MDIC), con Mapa Coroplético de las 27 UFs, Laboratorio de Correlación, Simulador de Deuda Pública (DBGG), Pirámide Demográfica y Calculadora de Distribución del Ingreso.',
    openPillarCharts: 'Explorar las 4 series de este pilar →',
    allPillars: 'Todos los 10 Pilares (40)'
  },
  en: {
    brandTitle: 'Brazil by Numbers',
    editionTag: 'Complete Edition • 10 Pillars • 40 Series',
    brandSub: 'Public Statistical Intelligence & Structural Simulation Portal for Brazil',
    searchPlaceholder: 'Search series, indicators, or sources (e.g., fertility, Gini, PRODES, Selic, PIX, homicides)...',
    ukBtnOn: 'UK / OECD Benchmark: On',
    ukBtnOff: 'UK / OECD Benchmark: Off',
    tabs: {
      overview: '1. Overview & 10 Pillars',
      charts: '2. Chart Explorer (40 Series)',
      states: '3. Map & 27-State Atlas',
      correlations: '4. Correlation Lab (XY)',
      simulator: '5. Fiscal & Demographic Sim',
      income: '6. Income Percentile Calc',
      benchmark: '7. Brazil vs. World (OECD/BRICS)',
      datahub: '8. Open Data & Export'
    },
    heroBadge: 'Public Statistical Intelligence Portal • Inspired by UK by Numbers & Our World in Data',
    heroTitle: 'Understand Brazil’s structural challenges and transformations through clear, auditable official data.',
    heroDesc: 'Integrated synthesis of 40 official historical series across 10 thematic pillars (IBGE, Central Bank, National Treasury, IPEA, DataSUS, INEP, EPE, SEEG, INPE, FBSP, CNJ, Anatel, and MDIC), featuring an interactive 27-State Choropleth Map, OLS Correlation Lab, Public Debt (DBGG) Simulator, Demographic Pyramid (1980–2060), and Household Income Percentile Calculator.',
    openPillarCharts: 'Explore all 4 series in this pillar →',
    allPillars: 'All 10 Pillars (40)'
  }
};

window.BR_DATA.KPIS = [
  {
    id: 'pop',
    pillar: 'demographics',
    chartId: 'c-pop-peak',
    label: { pt: 'População 2024', es: 'Población 2024', en: 'Population 2024' },
    value: '212,6M',
    sub: { pt: 'Pico em 2041: 220,4M', es: 'Pico en 2041: 220,4M', en: 'Peak in 2041: 220.4M' },
    badge: '+0,4% a.a.',
    badgeColor: 'emerald'
  },
  {
    id: 'tfr',
    pillar: 'demographics',
    chartId: 'c-tfr',
    label: { pt: 'Fecundidade Total', es: 'Fecundidad Total', en: 'Fertility Rate' },
    value: '1,57',
    sub: { pt: 'Reposição: 2,10 filhos', es: 'Reemplazo: 2,10 hijos', en: 'Replacement: 2.10' },
    badge: '1960: 6,28',
    badgeColor: 'amber'
  },
  {
    id: 'gdp_pc',
    pillar: 'economy',
    chartId: 'c-gdp-ppp',
    label: { pt: 'PIB per Capita PPC', es: 'PIB per Cápita PPA', en: 'GDP per Capita PPP' },
    value: 'US$ 20,8k',
    sub: { pt: '36% do nível do UK', es: '36% del nivel de UK', en: '36% of UK level' },
    badge: 'R$ 55,2 mil',
    badgeColor: 'sky'
  },
  {
    id: 'informality',
    pillar: 'economy',
    chartId: 'c-labor',
    label: { pt: 'Informalidade', es: 'Informalidad', en: 'Informality Rate' },
    value: '38,7%',
    sub: { pt: '39,8M trabalhadores', es: '39,8M trabajadores', en: '39.8M workers' },
    badge: 'Desemp: 6,2%',
    badgeColor: 'amber'
  },
  {
    id: 'selic',
    pillar: 'economy',
    chartId: 'c-selic-ipca',
    label: { pt: 'Juro Real Ex-Post', es: 'Tasa Real Ex-Post', en: 'Real Interest Rate' },
    value: '6,8% a.a.',
    sub: { pt: 'Selic 11,75% vs IPCA 4,8%', es: 'Selic 11,75% vs IPCA 4,8%', en: 'Selic 11.75% / CPI 4.8%' },
    badge: 'Top 3 Global',
    badgeColor: 'rose'
  },
  {
    id: 'tax',
    pillar: 'fiscal',
    chartId: 'c-tax',
    label: { pt: 'Carga Tributária', es: 'Carga Tributaria', en: 'Tax Burden (% GDP)' },
    value: '32,4%',
    sub: { pt: '44,2% sobre consumo', es: '44,2% en consumo', en: '44.2% on consumption' },
    badge: 'OCDE: 34,0%',
    badgeColor: 'indigo'
  },
  {
    id: 'debt',
    pillar: 'fiscal',
    chartId: 'c-debt',
    label: { pt: 'Dívida Bruta (DBGG)', es: 'Deuda Bruta (DBGG)', en: 'Gross Public Debt' },
    value: '78,6%',
    sub: { pt: 'Rigidez orç.: 91,8%', es: 'Rigidez pres.: 91,8%', en: '91.8% mandatory spend' },
    badge: 'Juros: 7,8% PIB',
    badgeColor: 'rose'
  },
  {
    id: 'gini',
    pillar: 'inequality',
    chartId: 'c-ineq',
    label: { pt: 'Índice de Gini', es: 'Índice de Gini', en: 'Gini Coefficient' },
    value: '0,518',
    sub: { pt: '1% Topo detém 26,5%', es: '1% Top tiene 26,5%', en: 'Top 1% holds 26.5%' },
    badge: 'UK: 0,357',
    badgeColor: 'rose'
  },
  {
    id: 'sewage',
    pillar: 'inequality',
    chartId: 'c-sanit',
    label: { pt: 'Coleta de Esgoto', es: 'Red Alcantarillado', en: 'Sewage Network' },
    value: '56,0%',
    sub: { pt: '~90M sem rede (SNIS)', es: '~90M sin red (SNIS)', en: '~90M lack mains network' },
    badge: 'Água: 84,9%',
    badgeColor: 'teal'
  },
  {
    id: 'life_exp',
    pillar: 'health',
    chartId: 'c-mort-life',
    label: { pt: 'Esperança de Vida', es: 'Esperanza de Vida', en: 'Life Expectancy' },
    value: '76,4 anos',
    sub: { pt: '1980: 62,5 anos (IBGE)', es: '1980: 62,5 años (IBGE)', en: '1980: 62.5 yrs (IBGE)' },
    badge: '+13,9 anos',
    badgeColor: 'emerald'
  },
  {
    id: 'pisa',
    pillar: 'education',
    chartId: 'c-pisa',
    label: { pt: 'PISA Matemática', es: 'PISA Matemáticas', en: 'PISA Math Score' },
    value: '379 pts',
    sub: { pt: 'IDEB Ens. Médio: 4,3', es: 'IDEB Secundaria: 4,3', en: 'High School IDEB: 4.3' },
    badge: 'OCDE: 472 pts',
    badgeColor: 'amber'
  },
  {
    id: 'clean_elec',
    pillar: 'energy_climate',
    chartId: 'c-elec-mix',
    label: { pt: 'Eletricidade Limpa', es: 'Electricidad Limpia', en: 'Clean Electricity' },
    value: '89,2%',
    sub: { pt: 'Matriz total: 49,1% ren.', es: 'Matriz total: 49,1% ren.', en: 'Total energy: 49.1% ren.' },
    badge: 'OCDE: 33,4%',
    badgeColor: 'emerald'
  },
  {
    id: 'prodes',
    pillar: 'energy_climate',
    chartId: 'c-prodes',
    label: { pt: 'PRODES Amazônia', es: 'PRODES Amazonía', en: 'Amazon Deforestation' },
    value: '6.288 km²',
    sub: { pt: '-45,7% vs. 2022 (INPE)', es: '-45,7% vs. 2022 (INPE)', en: '-45.7% vs. 2022 (INPE)' },
    badge: 'Pico 04: 27,7k',
    badgeColor: 'emerald'
  },
  {
    id: 'homicide',
    pillar: 'security_justice',
    chartId: 'c-crime',
    label: { pt: 'Taxa de Homicídios', es: 'Tasa de Homicidios', en: 'Homicide Rate' },
    value: '22,8 /100k',
    sub: { pt: '46.328 MVI (FBSP)', es: '46.328 muertes (FBSP)', en: '46,328 deaths (FBSP)' },
    badge: 'SP: 6,4 | AP: 57,4',
    badgeColor: 'rose'
  },
  {
    id: 'pix',
    pillar: 'infrastructure',
    chartId: 'c-digital-pix',
    label: { pt: 'Transações PIX / Ano', es: 'Transacciones PIX', en: 'PIX Transactions/Yr' },
    value: '63,8 Bi',
    sub: { pt: '84% domicílios c/ web', es: '84% hogares con web', en: '84% households online' },
    badge: 'Líder Global',
    badgeColor: 'sky'
  },
  {
    id: 'trade',
    pillar: 'trade_global',
    chartId: 'c-trade-bal',
    label: { pt: 'Saldo Comercial', es: 'Balanza Comercial', en: 'Trade Surplus' },
    value: 'US$ 74,6B',
    sub: { pt: '30,7% export. p/ China', es: '30,7% export. a China', en: '30.7% exports to China' },
    badge: 'Grãos: 312Mt',
    badgeColor: 'emerald'
  }
];

window.BR_DATA.PILLARS = [
  {
    id: 'demographics',
    num: '01',
    icon: '👥',
    color: '#059669',
    seriesCount: 4,
    keyStat: '1,57 filho/mulher • Pico 2041',
    title: {
      pt: 'População, Demografia e Transição Etária',
      es: 'Población, Demografía y Transición de Edad',
      en: 'Population, Demographics & Age Transition'
    },
    desc: {
      pt: 'Queda acelerada da fecundidade (de 6,28 para 1,57), fim do bônus demográfico, inversão entre jovens e idosos em 2036 e pico populacional em 2041 (220,4 milhões).',
      es: 'Caída acelerada de la fecundidad (de 6,28 a 1,57), fin del bono demográfico, inversión entre jóvenes y ancianos en 2036 y pico poblacional en 2041.',
      en: 'Rapid fertility drop (from 6.28 to 1.57), end of the demographic dividend, youth-to-senior crossover in 2036, and population peak in 2041 (220.4M).'
    }
  },
  {
    id: 'economy',
    num: '02',
    icon: '📈',
    color: '#0284c7',
    seriesCount: 4,
    keyStat: 'Agro +255% • Informalidade 38,7%',
    title: {
      pt: 'Economia, Trabalho, Renda e Produtividade',
      es: 'Economía, Trabajo, Ingresos y Productividad',
      en: 'Economy, Labor, Income & Productivity'
    },
    desc: {
      pt: 'Dualismo produtivo (agropecuária +255% vs. estagnação da indústria e serviços), informalidade estrutural de 38,7%, baixa taxa de investimento (16,5% do PIB) e juro real elevado.',
      es: 'Dualismo productivo (agro +255% vs. estancamiento industrial y de servicios), informalidad del 38,7%, baja inversión (16,5% PIB) y altas tasas reales.',
      en: 'Productive dualism (agribusiness +255% vs. stagnant manufacturing/services), 38.7% structural informality, low investment (16.5% GDP), and high real interest rates.'
    }
  },
  {
    id: 'fiscal',
    num: '03',
    icon: '🏛️',
    color: '#4f46e5',
    seriesCount: 4,
    keyStat: 'Carga 32,4% PIB • Rigidez 91,8%',
    title: {
      pt: 'Estado Fiscal, Tributos, Previdência e Dívida',
      es: 'Estado Fiscal, Tributos, Pensiones y Deuda',
      en: 'Public Finances, Taxation, Pensions & Debt'
    },
    desc: {
      pt: 'Carga tributária de padrão OCDE (32,4% do PIB) concentrada no consumo (44,2%), 91,8% de despesas obrigatórias, gasto previdenciário precoce e DBGG em 78,6% do PIB.',
      es: 'Carga tributaria del 32,4% del PIB concentrada en consumo (44,2%), 91,8% de gasto obligatorio, alto gasto previsional y deuda bruta del 78,6% del PIB.',
      en: 'OECD-like tax burden (32.4% GDP) heavily skewed to consumption (44.2%), 91.8% mandatory budget rigidity, high pension spending, and 78.6% GDP gross debt.'
    }
  },
  {
    id: 'inequality',
    num: '04',
    icon: '⚖️',
    color: '#e11d48',
    seriesCount: 4,
    keyStat: 'Gini 0,518 • Esgoto 56,0%',
    title: {
      pt: 'Pobreza, Desigualdade, Transferências e Habitação',
      es: 'Pobreza, Desigualdad, Transferencias y Saneamiento',
      en: 'Poverty, Inequality, Transfers & Sanitation'
    },
    desc: {
      pt: 'Concentração extrema no 1% do topo (26,5% da renda nacional), redução da extrema pobreza via transferências e déficit histórico de coleta de esgoto (44% sem rede).',
      es: 'Concentración en el 1% superior (26,5% del ingreso), reducción de pobreza extrema y déficit histórico de alcantarillado (44% sin red).',
      en: 'Extreme Top 1% income share (26.5%), poverty reduction via targeted transfers, and persistent sanitation gaps (44% lacking sewage collection).'
    }
  },
  {
    id: 'health',
    num: '05',
    icon: '🩺',
    color: '#db2777',
    seriesCount: 4,
    keyStat: 'Vida 76,4 anos • Obesidade 24,3%',
    title: {
      pt: 'Saúde Pública (SUS), Nutrição e Epidemiologia',
      es: 'Salud Pública (SUS), Nutrición y Epidemiología',
      en: 'Public Health (SUS), Nutrition & Epidemiology'
    },
    desc: {
      pt: 'Queda drástica da mortalidade infantil e do tabagismo (9,3%), contraposta à duplicação da obesidade adulta (24,3%), subfinanciamento público do SUS (4,0% PIB) e oscilação vacinal.',
      es: 'Caída de mortalidad infantil y tabaquismo (9,3%) frente al alza de obesidad adulta (24,3%) y gasto público en salud del 4,0% del PIB.',
      en: 'Sharp drop in infant mortality and smoking (9.3%) contrasted with surging adult obesity (24.3%), public health spending at 4.0% of GDP, and immunization recovery.'
    }
  },
  {
    id: 'education',
    num: '06',
    icon: '🎓',
    color: '#d97706',
    seriesCount: 4,
    keyStat: 'IDEB Iniciais 6,0 vs EM 4,3 • PISA 379',
    title: {
      pt: 'Educação, Capital Humano e Ciência & Tecnologia',
      es: 'Educación, Capital Humano y Ciencia y Tecnología',
      en: 'Education, Human Capital & Science / R&D'
    },
    desc: {
      pt: 'Avanço consistente na alfabetização e anos iniciais (IDEB 6,0), mas estagnação no Ensino Médio (4,3), baixo aprendizado em Matemática no PISA (379) e 19,8% de jovens "nem-nem".',
      es: 'Avance en primaria (IDEB 6,0), pero estancamiento en secundaria (4,3), rezago en PISA Matemáticas (379) y 19,8% de jóvenes "ni-ni".',
      en: 'Strong progress in early primary (IDEB 6.0), but high school stagnation (4.3), low PISA Math scores (379 vs. 472 OECD), and 19.8% NEET youth rate.'
    }
  },
  {
    id: 'energy_climate',
    num: '07',
    icon: '🌱',
    color: '#16a34a',
    seriesCount: 4,
    keyStat: 'Eletric. 89,2% Limpa • 75% GEE Terra/Agro',
    title: {
      pt: 'Energia Limpa, Clima, Desmatamento e Biomas',
      es: 'Energía Limpia, Clima, Deforestación y Biomas',
      en: 'Clean Energy, Climate, Land Use & Biomes'
    },
    desc: {
      pt: 'Matriz elétrica mais limpa do G20 (89,2% renovável com boom solar e eólico), enquanto 75% das emissões de GEE decorrem de mudança de uso da terra (Amazônia/Cerrado) e agropecuária.',
      es: 'Matriz eléctrica más limpia del G20 (89,2% renovable), mientras el 75% de las emisiones GEI provienen del uso del suelo y agropecuaria.',
      en: 'Cleanest G20 power grid (89.2% renewable via hydro, wind, and solar boom), while 75% of GHG emissions stem from deforestation and agriculture.'
    }
  },
  {
    id: 'security_justice',
    num: '08',
    icon: '🛡️',
    color: '#dc2626',
    seriesCount: 4,
    keyStat: 'Homicídios 22,8/100k • 84M Processos',
    title: {
      pt: 'Segurança Pública, Justiça e Sistema Prisional',
      es: 'Seguridad Pública, Justicia y Sistema Penitenciario',
      en: 'Public Safety, Justice & Prison System'
    },
    desc: {
      pt: 'Inversão geográfica dos homicídios (queda de 85% em SP vs. alta no Norte/Nordeste), explosão de crimes digitais, 852 mil presos e Judiciário custando 1,3% do PIB com 84 milhões de processos.',
      es: 'Inversión geográfica de homicidios (caída del 85% en SP vs. Norte/Nordeste), explosión de estafas digitales, 852 mil presos y alto costo judicial (1,3% PIB).',
      en: 'Geographic inversion of homicides (85% drop in São Paulo vs. North/Northeast), surge in cyber fraud, 852k prisoners, and judiciary costing 1.3% of GDP.'
    }
  },
  {
    id: 'infrastructure',
    num: '09',
    icon: '🚄',
    color: '#0d9488',
    seriesCount: 4,
    keyStat: '65% Carga Rodoviária • PIX 63,8 Bi',
    title: {
      pt: 'Infraestrutura, Logística, Cidades e Digitalização',
      es: 'Infraestructura, Logística, Ciudades y Digitalización',
      en: 'Infrastructure, Logistics, Cities & Digitalization'
    },
    desc: {
      pt: 'Contraste entre infraestrutura física subfinanciada (investimento de 1,8% do PIB e 65% de dependência rodoviária) e infraestrutura digital de ponta (PIX, Open Finance e 84% de banda larga).',
      es: 'Contraste entre infraestructura física rezagada (inversión del 1,8% PIB y 65% transporte carretero) y liderazgo digital (PIX con 63,8 mil millones de operaciones).',
      en: 'Stark contrast between underfunded physical logistics (1.8% GDP investment, 65% road freight dependency) and world-leading digital public infrastructure (PIX).'
    }
  },
  {
    id: 'trade_global',
    num: '10',
    icon: '🌐',
    color: '#7c3aed',
    seriesCount: 4,
    keyStat: 'Superávit US$ 74,6B • China 30,7%',
    title: {
      pt: 'Comércio Exterior, Agronegócio e Inserção Global',
      es: 'Comercio Exterior, Agronegocio e Inserción Global',
      en: 'Foreign Trade, Agribusiness & Global Integration'
    },
    desc: {
      pt: 'Superávits comerciais estruturais impulsionados por grãos (312 Mt), petróleo e minério, ascensão da China (30,7% das exportações) e recuo da indústria de transformação para 11,4% do PIB.',
      es: 'Superávits comerciales impulsados por granos (312 Mt), petróleo y minerales, ascenso de China (30,7% de exportaciones) y desindustrialización temprana.',
      en: 'Structural trade surpluses driven by grains (312 Mt), oil, and iron ore, China’s rise to 30.7% of exports, and premature deindustrialization (manufacturing at 11.4% GDP).'
    }
  }
];

window.BR_DATA.PARADOXES = [
  {
    num: 'I',
    title: {
      pt: 'Envelhecimento Europeu antes da Renda Plena',
      es: 'Envejecimiento Europeo antes de Altos Ingresos',
      en: 'European Aging Before High Income'
    },
    text: {
      pt: 'A França levou 115 anos e o Reino Unido 45 anos para dobrar a proporção de idosos de 7% para 14%; o Brasil fará essa transição em apenas 21 anos (2011–2032), com fecundidade de 1,57 e PIB per capita equivalente a um terço da OCDE.',
      es: 'Francia tardó 115 años en duplicar su población mayor del 7% al 14%; Brasil lo hará en solo 21 años (2011–2032) con un tercio del ingreso OCDE.',
      en: 'France took 115 years to double its senior share from 7% to 14%; Brazil is doing it in just 21 years (2011–2032) at one-third of OECD per-capita income.'
    }
  },
  {
    num: 'II',
    title: {
      pt: 'Superpotência Agroambiental vs. Estagnação Urbana',
      es: 'Superpotencia Agro vs. Estancamiento Urbano',
      en: 'Agri-Productivity Boom vs. Urban Stagnation'
    },
    text: {
      pt: 'Entre 1995 e 2024, a produtividade do trabalho na agropecuária cresceu +255% com tecnologia tropical (Embrapa), enquanto a indústria (-3,2%) e os serviços tradicionais (+4,2%), que empregam 85% dos brasileiros, ficaram estagnados.',
      es: 'Entre 1995 y 2024, la productividad agropecuaria creció +255%, mientras industria (-3,2%) y servicios (+4,2%) permanecieron estancados.',
      en: 'From 1995 to 2024, agricultural labor productivity jumped +255%, while manufacturing (-3.2%) and services (+4.2%), employing 85% of workers, flatlined.'
    }
  },
  {
    num: 'III',
    title: {
      pt: 'Carga Tributária de OCDE com Estado Regressivo',
      es: 'Recaudación OCDE con Tributo Regresivo',
      en: 'OECD Tax Burden with Regressive Incidence'
    },
    text: {
      pt: 'O Brasil arrecada 32,4% do PIB (próximo aos 34,0% da OCDE), mas 44,2% vêm de tributos indiretos sobre consumo e 91,8% do orçamento federal é obrigatório, restando menos de 2% do PIB para investimento público em infraestrutura.',
      es: 'Brasil recauda el 32,4% del PIB, pero el 44,2% proviene del consumo y el 91,8% del presupuesto federal es gasto obligatorio.',
      en: 'Brazil collects 32.4% of GDP in taxes (near the 34.0% OECD mean), yet 44.2% falls on consumption and 91.8% of federal spending is mandatory.'
    }
  },
  {
    num: 'IV',
    title: {
      pt: 'Eletricidade de Primeiro Mundo, Emissões Florestais',
      es: 'Electricidad Limpia, Emisiones Forestales',
      en: 'G20’s Cleanest Grid, Land-Use Carbon Profile'
    },
    text: {
      pt: '89,2% da eletricidade brasileira é renovável (vs. 33,4% na OCDE). Por isso, a descarbonização brasileira depende fundamentalmente de zerar o desmatamento na Amazônia e no Cerrado (48% das emissões de GEE) e recuperar pastagens.',
      es: 'El 89,2% de la electricidad brasileña es renovable; el 75% de sus emisiones proviene del uso de la tierra y agropecuaria.',
      en: '89.2% of Brazil’s electricity is renewable (vs. 33.4% in the OECD); 75% of national GHG emissions come from land-use change and agriculture.'
    }
  },
  {
    num: 'V',
    title: {
      pt: 'Digitalização Financeira Líder vs. Déficit de Saneamento',
      es: 'Finanzas Digitales Líderes vs. Rezago Sanitario',
      en: 'World-Class FinTech vs. 19th-Century Sanitation Gap'
    },
    text: {
      pt: 'O país que processa 63,8 bilhões de transações instantâneas no PIX por ano e tem 84% dos domicílios conectados à internet ainda possui ~90 milhões de habitantes (44% da população) sem conexão à rede coletora de esgoto.',
      es: 'El país que procesa 63,8 mil millones de pagos PIX al año aún tiene al 44% de su población sin red de alcantarillado.',
      en: 'A nation processing 63.8 billion instant PIX payments annually still leaves 44% of its population (~90 million people) without mains sewage collection.'
    }
  },
  {
    num: 'VI',
    title: {
      pt: 'A Grande Inversão Geográfica da Violência',
      es: 'La Gran Inversión Geográfica de la Violencia',
      en: 'The Great Geographic Inversion of Homicides'
    },
    text: {
      pt: 'Em 2000, São Paulo tinha taxa de 42,2 homicídios por 100 mil hab. — mais que o dobro do Nordeste (19,5). Em 2023, São Paulo caiu para 6,4 (-85%), enquanto Nordeste (33,4) e Norte (32,1) tornaram-se o epicentro da letalidade.',
      es: 'En 2000, São Paulo tenía 42,2 homicidios/100k y el Nordeste 19,5; hoy São Paulo tiene 6,4 (-85%) y el Nordeste 33,4.',
      en: 'In 2000, São Paulo’s homicide rate (42.2/100k) was double the Northeast’s (19.5). By 2023, São Paulo fell 85% to 6.4, while the Northeast (33.4) and North (32.1) surged.'
    }
  }
];

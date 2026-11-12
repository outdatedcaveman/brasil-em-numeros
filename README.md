# 🇧🇷 Brasil em Números | Brazil by Numbers

**Portal Público de Inteligência Estatística e Simulação Estrutural do Brasil**  
*Public Statistical Intelligence & Structural Simulation Portal for Brazil (PT-BR / ES / EN)*

[![License: CC BY 4.0](https://img.shields.io/badge/Data%20License-CC%20BY%204.0-emerald.svg)](https://creativecommons.org/licenses/by/4.0/)
[![Code License: MIT](https://img.shields.io/badge/Code%20License-MIT-blue.svg)](LICENSE)

Inspirado em iniciativas como **UK by Numbers** e **Our World in Data**, o portal **Brasil em Números** reúne **40 séries históricas oficiais auditáveis** organizadas em **10 Pilares Estruturais**, além de **6 ferramentas analíticas e simuladores interativos** integrados (zero-build, client-side).

---

## 🌐 Acesso Online / Live Portal

- **GitHub Pages (Aplicação Web Completa):** [https://outdatedcaveman.github.io/brasil-em-numeros/](https://outdatedcaveman.github.io/brasil-em-numeros/)
- **Versão Standalone (Arquivo Único):** [`standalone.html`](standalone.html)
- **Dados Abertos Brutos (JSON / CSV):** [`data/dataset.json`](data/dataset.json) | [`data/atlas_27_ufs.csv`](data/atlas_27_ufs.csv)

---

## 📊 Os 10 Pilares Estruturais (40 Séries Históricas)

1. **População, Demografia e Transição Etária** — Queda da fecundidade (6,28 → 1,57), transição jovens vs. idosos (inversão em 2036), pico populacional em 2041 (220,4M) e fim do bônus demográfico.
2. **Economia, Trabalho, Renda e Produtividade** — Produtividade setorial (Agro +255% vs. Indústria/Serviços estagnados), desemprego na mínima (6,2%) vs. informalidade estrutural (38,7%), armadilha da renda média (PIB per capita PPC) e Selic vs. IPCA vs. FBCF.
3. **Estado Fiscal, Tributos, Previdência e Dívida** — Carga tributária (32,4% PIB) regressiva no consumo (44,2%), evolução da DBGG (78,6% PIB), rigidez orçamentária federal (91,8% obrigatório) e gasto previdenciário vs. demografia.
4. **Pobreza, Desigualdade, Transferências e Habitação** — Concentração no 1% mais rico (26,5% da renda nacional), gargalo regional de água e esgoto (SNIS: 56% coleta), trajetória da pobreza/extrema pobreza e série histórica do Índice de Gini (0,518).
5. **Saúde Pública (SUS), Nutrição e Epidemiologia** — Obesidade adulta (24,3%) vs. queda do tabagismo (9,3%), queda de 82% na mortalidade infantil e alta da esperança de vida (76,4 anos), financiamento público (SUS 4,0% PIB) vs. privado (5,6% PIB) e cobertura vacinal PNI.
6. **Educação, Capital Humano e Ciência & Tecnologia** — IDEB Anos Iniciais (6,0) vs. estagnação do Ensino Médio (4,3), comparativo internacional PISA 2022 (Matemática 379 pts), geração "Nem-Nem" (19,8%) e gasto público por aluno (Básico vs. Superior).
7. **Energia Limpa, Clima, Desmatamento e Biomas** — Emissões de GEE por setor (SEEG: 75% Uso da Terra e Agro), matriz elétrica 89,2% renovável com boom solar/eólico (EPE), desmatamento PRODES na Amazônia e Cerrado (INPE) e perdas por eventos climáticos extremos.
8. **Segurança Pública, Justiça e Sistema Prisional** — Inversão geográfica dos homicídios (queda de 85% em SP vs. Norte/Nordeste), transição para crimes digitais/estelionato (+368%), população prisional (852 mil) e custo mundialmente recorde do Judiciário (1,3% do PIB / 84M processos, CNJ).
9. **Infraestrutura, Logística, Cidades e Digitalização** — Matriz de transporte de cargas (64,9% rodoviária), hiato de investimento em infraestrutura (2,1% vs. 4,3% do PIB), revolução do PIX (63,8 bilhões de transações/ano, BCB) e expansão da fibra óptica (84% dos domicílios).
10. **Comércio Exterior, Agronegócio e Inserção Global** — Superávit comercial estrutural (US$ 74,6B–98,9B), ascensão da China (30,7% das exportações), desindustrialização precoce (manufatura em 11,4% do PIB) e efeito "poupa-terra" na produtividade de grãos (CONAB/Embrapa).

---

## 🛠️ Ferramentas Interativas e Simuladores Inclusos

- **Explorador de Séries com Transformação de Dados:** Alterne qualquer série entre Linha, Barras, Área ou Tabela; aplique **Índice Base 100 (`1º ano = 100`)**, **Variação Acumulada (`Δ%`)** ou **Escala Logarítmica**, e exporte gráficos em **PNG** ou **CSV**.
- **Mapa Coroplético Interativo das 27 UFs:** Cartograma vetorial interativo dos 26 Estados + DF colorido dinamicamente por 12 indicadores oficiais (PIB per capita, IDH, Esperança de Vida, Esgoto, Água, Informalidade, Pobreza, Gini, IDEB Anos Iniciais, IDEB Ensino Médio, Homicídios e População).
- **Comparador "Raio-X" Estadual (Radar 0–100):** Compare até 3 UFs simultaneamente em 7 dimensões normalizadas.
- **Laboratório de Correlações e Regressão Linear (OLS):** Gráfico de dispersão/bolhas cruzando quaisquer duas variáveis estaduais com cálculo automático de **Pearson ($r$)**, **$R^2$** e equação da reta de regressão linear ($y = \alpha + \beta x$).
- **Simulador Dinâmico da Dívida Pública (DBGG 2025–2035):** Simule trajetórias da dívida bruta ajustando crescimento real do PIB ($g$), juro real implícito ($r$), resultado primário ($s_p$) e choques, com cálculo imediato do **Superávit Primário Estabilizador**.
- **Simulador da Pirâmide Demográfica (1980–2060):** Visualize a transformação da estrutura etária brasileira por sexo e faixa etária e o colapso da razão de suporte previdenciário.
- **Calculadora de Posição na Pirâmide de Renda:** Descubra seu percentil exato na distribuição de renda brasileira (PNAD/WID), comparação com a mediana nacional, média da sua UF e paridade de poder de compra internacional (US$ PPC).
- **Trilíngue Nativo:** Interface e metadados completos em **Português (PT-BR)**, **Espanhol (ES)** e **Inglês (EN)**, com alternância de benchmark **Reino Unido (UK) / OCDE**.

---

## 🏛️ Fontes Primárias Oficiais

- **IBGE** (Censo Demográfico 2022, Projeções 2024, PNAD Contínua, Contas Nacionais, Tábuas de Mortalidade)
- **Banco Central do Brasil (BCB)** (SGS, Estatísticas Fiscais, Estatísticas do PIX)
- **Secretaria do Tesouro Nacional (STN)** & **IFI / Senado Federal** (Boletim CTB, RREO, PAF)
- **IPEA** (Ipeadata, Atlas da Violência) & **FGV IBRE** (Observatório da Produtividade)
- **Ministério da Saúde / DataSUS** (SIM, SINASC, Vigitel, PNI)
- **INEP / MEC** (IDEB, Saeb) & **OCDE** (PISA 2022, Education at a Glance, Revenue Statistics)
- **EPE / MME** (Balanço Energético Nacional), **SEEG / Observatório do Clima** & **INPE** (PRODES)
- **Fórum Brasileiro de Segurança Pública (FBSP)**, **SENAPPEN** & **CNJ** (Justiça em Números)
- **SNIS / SINISA**, **ABDIB**, **CETIC.br / Anatel**, **MDIC / SECEX** & **CONAB / Embrapa**

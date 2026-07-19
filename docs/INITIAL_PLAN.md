# Plano inicial do portfólio

## Estado

- Fase: planejamento estrutural anterior à implementação.
- Base: `AGENTS.md`, `docs/CODEX_WORKFLOW.md`, `docs/REFERENCE_ANALYSIS.md`, contexto profissional fornecido e imagem estrutural anexada.
- Decisão: preservar a linguagem central da referência com adaptações justificadas neste documento.
- Fora do escopo desta etapa: scaffold do Astro, componentes, CSS, JavaScript, assets derivados, conteúdo fictício, paleta final, publicação e merge.

## Objetivo do produto

Construir um portfólio técnico, autoral, sério e levemente disruptivo que:

1. Posicione Vinicius Rafael como Designer Gráfico, Arte-finalista e profissional de Desenvolvimento Técnico Têxtil.
2. Mostre rapidamente projetos reais e a participação de Vinicius em cada um.
3. Traduza processos gráficos e têxteis para recrutadores, profissionais técnicos e contratantes leigos.
4. Organize o conteúdo como um sistema contemporâneo de arquivos, fichas, projetos e produção.
5. Permaneça estático, acessível, responsivo, performático e fácil de manter no GitHub Pages.

## Públicos e tarefas principais

### Recrutador de design e produção

- Entender cargo, diferencial e senioridade demonstrável.
- Ver projetos representativos cedo.
- Confirmar autoria, processo, ferramentas, experiência e contato.
- Acessar currículo e perfis profissionais.

### Contratante leigo

- Entender o que Vinicius pode produzir ou preparar.
- Relacionar termos técnicos a resultados visuais.
- Diferenciar simulação de produção física.
- Encontrar um canal de contato verificável.

### Profissional técnico

- Avaliar terminologia, processo, viabilidade e qualidade dos arquivos apresentados.
- Identificar técnicas, ferramentas, limitações e participação real.
- Confirmar que informações confidenciais não foram expostas.

## Proposição central

Apresentar Vinicius como alguém que transforma demandas visuais em arquivos e soluções organizadas para produção gráfica e têxtil, conectando criação, arte-finalização, preparação técnica e acompanhamento produtivo.

As atividades de atendimento e organização operacional sustentam esse eixo; não devem parecer cargos concorrentes ou falta de foco.

## Arquitetura da informação

### Ordem da home

1. Navegação curta e link de salto.
2. Abertura.
3. Ficha profissional/Sobre mim.
4. Três projetos em destaque.
5. Biblioteca de projetos.
6. Experiência profissional.
7. Marcas presentes em projetos desenvolvidos.
8. Contato final.

### Navegação principal

- Projetos.
- Sobre/Experiência.
- Contato.
- Currículo, somente quando houver arquivo real e atualizado.

A navegação deve apontar para âncoras reais, funcionar sem JavaScript e não ocupar espaço que concorra com a abertura.

## Especificação das seções

### 1. Abertura

#### Conteúdo

- Logo autoral em uma função confirmada para abertura.
- “Vinicius Rafael”.
- “Portfólio”.
- “Designer Gráfico · Arte-finalista · Desenvolvimento Técnico Têxtil”.
- Frase curta de posicionamento, somente após aprovação do texto.
- Ações: “Ver projetos” e contato/currículo real.

#### Composição

- Preservar assimetria, grande escala e espaço vazio da referência.
- Evitar hero centralizado convencional.
- Usar altura fluida; não exigir uma tela inteira antes do conteúdo.
- Sinalizar continuidade e permitir acesso imediato aos projetos.

#### Animação do logo

- Sequência conceitual: linhas estruturais → contorno → pontos/trama → versão final → informações profissionais.
- Duração alvo: aproximadamente 1,2 a 1,8 segundo.
- Preferir SVG original e CSS.
- Não usar vídeo ou GIF.
- Não bloquear foco, interação ou leitura.
- Executar no máximo uma vez por sessão como melhoria progressiva.
- Exibir estado final funcional sem JavaScript.
- Com `prefers-reduced-motion: reduce`, não desenhar nem deslocar; mostrar o estado final imediatamente.

### 2. Ficha profissional

#### Conteúdo aprovado

Usar como parágrafo único:

> Experiência em design gráfico, arte-finalização e desenvolvimento técnico aplicado à produção têxtil e gráfica. Atuo na criação de layouts e modelos técnicos, além da preparação de arquivos para bordado, DTF, silk, sublimação, impressão e corte, sempre com foco em viabilidade produtiva, organização e qualidade final.

#### Prioridade interna

1. Nome e cargo.
2. Resumo.
3. Localização e formação verificadas.
4. Contatos reais.
5. Programas.
6. Habilidades.

Não exibir data de nascimento, classificações de domínio, contato fictício ou texto longo sobre ferramentas.

#### Programas iniciais

- CorelDRAW.
- Adobe Illustrator.
- Adobe Photoshop.
- Software de bordado, após confirmar nome real.
- Software RIP, após confirmar nome real.
- Microsoft Office.

Cada programa usa ícone autorizado e nome textual. Não usar barras, estrelas ou porcentagens.

#### Habilidades prioritárias

- Design gráfico.
- Arte-finalização.
- Vetorização.
- Modelos técnicos.
- Bordado computadorizado.
- Estamparia.
- Impressão e corte.
- Preparação para produção.

### 3. Projetos em destaque

Selecionar três projetos reais que demonstrem amplitude sem perder foco. A seleção inicial desejável é:

1. Um modelo técnico ou case que conecte desenho e viabilidade produtiva.
2. Um projeto de bordado com processo e evidências claras.
3. Um projeto de estamparia, DTF, silk ou sublimação com aplicação verificável.

A seleção depende dos materiais disponíveis; não criar projetos substitutos.

Cada destaque deve mostrar:

- Prévia visual.
- Nome.
- Tipo de projeto.
- Técnicas.
- Ano.
- Participação de Vinicius.
- Natureza da evidência.
- Ação “Ver projeto”.

### 4. Biblioteca de projetos

#### Taxonomia

Separar campos que hoje aparecem misturados:

- Tipo de projeto.
- Técnicas.
- Ferramentas.
- Ano.
- Natureza da evidência.
- Estado do projeto.

Filtros iniciais devem nascer dos dados reais. “Todos” é o estado padrão. Não exibir contador até haver conteúdo suficiente, derivação automática e significado claro.

#### Card-pasta

A silhueta de pasta permanece, mas seu conteúdo essencial deve estar sempre visível:

- Miniatura ou recorte.
- Nome do projeto.
- Tipo/categoria.
- Ano.
- Técnicas.
- Estado ou natureza da evidência.
- Ação de abertura.

Hover pode elevar a ficha ou mover discretamente a aba, mas foco e toque devem oferecer a mesma informação. O card inteiro pode ser um link quando houver uma única ação principal.

#### Estados

- Padrão.
- Foco visível.
- Hover complementar.
- Visitado, quando a diferenciação for útil e acessível.
- Em preparação, apenas se verdadeiro e necessário; preferir ocultar itens sem conteúdo publicável.

### 5. Experiência profissional

Manter quatro áreas integradas:

1. Design e arte-finalização.
2. Produção gráfica.
3. Atendimento técnico e orçamentos.
4. Organização de pedidos.

Na primeira visualização, apresentar empresa, período, cargo confirmado e síntese das áreas. No desktop, usar divisões editoriais, cards ou painel expansível. No mobile, usar acordeões acessíveis ou `<details>/<summary>` adequadamente estilizados.

O conteúdo deve resumir:

- Interpretação e organização de demandas.
- Criação, adaptação e desenvolvimento de layouts/modelos técnicos.
- Preparação de arquivos para produção.
- Comunicação entre cliente, criação e produção.
- Acompanhamento e organização operacional.

Não declarar operação, execução física, cargo ou etapa técnica sem confirmação.

### 6. Marcas

Usar exatamente:

- Título: “Marcas presentes em projetos desenvolvidos”.
- Descrição: “Projetos realizados durante minha atuação profissional por meio das empresas em que trabalhei.”

Regras:

- Exibir somente marcas comprovadas e autorizadas.
- Não sugerir contratação direta.
- Relacionar marca e case quando houver contexto suficiente.
- Enquanto os assets faltarem, omitir a grade na versão pública; placeholders neutros pertencem apenas ao planejamento.
- Não usar o logo de Vinicius como preenchimento da grade.

### 7. Contato final

- Repetir uma variação aprovada do logo como assinatura, sem criar nova versão.
- Exibir e-mail, LinkedIn, Behance, GitHub e currículo apenas quando reais e relevantes.
- Usar links descritivos e alvos de toque confortáveis.
- Não criar formulário falso.
- Não prometer disponibilidade profissional sem informação atual confirmada.

## Arquitetura dos cases

Cada rota de projeto deve seguir:

1. Título, ano, tipo, técnicas e natureza das evidências.
2. Contexto e objetivo.
3. Minha participação.
4. Materiais ou demanda recebida.
5. Processo em etapas.
6. Resultado ou estado alcançado.
7. Identificação de simulação, IA, amostra e produção física.
8. Contexto empresarial, marca e créditos.
9. Navegação de retorno, projeto anterior/próximo e contato.

### Sequências por técnica

- Modelos técnicos: contexto → referência recebida → desenho técnico/fashion flat → detalhes/aplicações → entrega.
- Bordado: arte → preparação/digitalização realmente executada → preview identificado → amostra ou peça física comprovada.
- DTF: arte/mockup → preparação do arquivo → arquivo de impressão → aplicação física somente quando documentada.
- Silk screen/serigrafia: criação/adaptação → separação de cores, se executada → preparação → aplicação comprovada.
- Sublimação: layout/distribuição → arquivo preparado → simulação → aplicação comprovada.
- Impressão e corte: layout → contorno/marcas, se executados → arquivo final → resultado físico comprovado.

## Mapa inicial de componentes

Os nomes são de planejamento e podem mudar após o scaffold:

- `BaseLayout`: documento, metadados e estrutura global.
- `SkipLink`: acesso direto ao conteúdo principal.
- `SiteHeader`: navegação curta e versão compacta aprovada do logo.
- `Opening`: composição de abertura.
- `LogoConstructionIntro`: melhoria progressiva da animação, separada do conteúdo.
- `ProfessionalFile`: ficha profissional.
- `ProgramList`: ícone, nome e descrição opcional.
- `SkillTags`: lista sem classificação de domínio.
- `FeaturedProjects`: três destaques.
- `ProjectFilters`: filtros textuais e estado operável.
- `ProjectFolderCard`: preview e metadados de projeto.
- `EvidenceLabel`: natureza da imagem ou do resultado.
- `ExperienceSection`: resumo das quatro áreas.
- `ExperienceDisclosure`: expansão acessível.
- `BrandContext`: texto e marcas autorizadas.
- `ContactFooter`: assinatura e canais reais.
- `ProjectCaseLayout`: estrutura compartilhada dos estudos de caso.
- `ProcessSteps`: sequência visual e textual.

Evitar componentes para fragmentos usados uma única vez quando isso não melhorar semântica, consistência ou manutenção.

## Modelo de conteúdo inicial

### Projeto

- `slug`.
- `title`.
- `year`.
- `summary`.
- `projectType`.
- `techniques`.
- `tools`.
- `role` ou participação.
- `companyContext`, quando aplicável.
- `brandContext`, quando aplicável.
- `featured`.
- `status`.
- `draft`.
- `cover`.
- `evidenceType` por imagem.
- `aiGenerated` por imagem quando aplicável.
- `alt` por imagem.
- `credits`.
- `confidentialityReviewed`.
- Etapas do processo.
- Resultado comprovável.

Campos exatos devem ser definidos com Content Collections do Astro e schema tipado. Não duplicar dados em componentes nem manter contadores manuais.

### Experiência

- Empresa.
- Período.
- Cargo confirmado.
- Resumo.
- Áreas integradas.
- Observação de confidencialidade, se necessária.

### Programa

- Nome.
- Ícone/asset autorizado.
- Descrição curta opcional.

### Marca

- Nome.
- Logo autorizado.
- Alt text.
- Contexto empresarial.
- Cases relacionados.

## Sistema visual inicial

### Três níveis

1. Seções: grandes áreas, respiro, poucos contornos.
2. Cards e fichas: projetos, experiência, programas e marcas.
3. Etiquetas e metadados: categoria, ano, técnica, estado e ferramenta.

### Tipografia

- Display: “Portfólio”, “Projetos” e títulos principais.
- Mono/técnica: categorias, dados, etiquetas e metadados.
- Body: resumo, experiência e cases.
- Usar fontes de sistema nesta fase.
- Criar tokens para troca futura.
- Não incorporar fonte proprietária.
- Não usar mono em todos os parágrafos.

### Tokens a preparar

- Escala tipográfica fluida.
- Espaçamentos.
- Largura máxima de conteúdo e leitura.
- Raios.
- Espessuras e estilos de linha.
- Camadas/z-index.
- Durações e curvas de movimento.
- Estados de foco e interação.
- Tokens semânticos de cor, sem valores finais até aprovação.

Nenhuma paleta final é definida neste plano.

## Responsividade

| Largura | Direção estrutural |
| --- | --- |
| 320–390 px | Uma coluna; abertura sem altura fixa; ficha linear; chips quebrando linha; experiência em acordeões; marcas em uma ou duas colunas; pastas em uma coluna; filtros com quebra ou painel acessível. |
| 768 px | Ficha pode formar duas zonas mantendo ordem DOM; projetos em duas colunas; experiência preferencialmente empilhada. |
| 1024 px | Experiência e marcas podem dividir espaço se o texto permanecer legível; projetos em duas ou três colunas. |
| 1440 px ou mais | Container máximo; quatro pastas somente quando previews e metadados mantiverem leitura confortável. |

Testar 360, 390, 768, 1024 e 1440 px, além de 320 CSS px para reflow. Validar zoom de 200%, orientação retrato/paisagem, nomes longos e aumento de espaçamento.

## Acessibilidade

- HTML semântico e um `h1` inequívoco.
- Landmarks e sequência coerente de headings.
- Link “Pular para o conteúdo”.
- Ordem visual igual à ordem lógica.
- Navegação integral por teclado.
- Foco visível, não encoberto e consistente.
- Cards, filtros e acordeões com nome, função e estado acessíveis.
- Informação essencial sempre disponível sem hover.
- Ícone acompanhado de texto.
- Alt texts definidos a partir do papel da imagem.
- Identificação textual próxima para IA e simulação.
- Touch targets de pelo menos 24 × 24 CSS px; meta de conforto maior para ações principais.
- Contraste validado depois da aprovação da paleta.
- Redução de movimento respeitada em todas as transições.
- Sem rolagem horizontal causada por títulos, chips, filtros ou cards.

## Desempenho e GitHub Pages

- Astro com TypeScript estrito.
- Saída estática.
- CSS próprio e JavaScript mínimo.
- SVG original para logos, sem efeitos destrutivos.
- WebP ou AVIF para imagens raster, mantendo originais fora do pipeline público quando necessário.
- Dimensões explícitas para evitar mudanças de layout.
- Lazy loading abaixo da dobra; destaque principal carregado com prioridade proporcional.
- Animações por transform/opacidade e SVG/CSS quando possível.
- Configurar `site` e `base` conforme o repositório do GitHub Pages.
- Planejar sitemap, robots, metadados, Open Graph, dados estruturados, 404 e links internos.
- Não adicionar framework de UI, backend ou dependência sem justificativa.

## Confidencialidade e integridade

Antes de publicar qualquer case:

1. Confirmar autoria e participação.
2. Confirmar contexto empresarial e autorização de marca.
3. Classificar cada evidência.
4. Remover contatos, pedidos, preços, códigos, medidas e dados internos.
5. Não publicar arquivos editáveis proprietários, tech packs completos, arquivos de bordado/RIP ou documentos de produção sem autorização.
6. Verificar nomes de arquivos, URLs, metadados e EXIF.
7. Identificar qualquer reconstrução, simulação ou imagem gerada por IA.

## Fases futuras de implementação

### Fase 0 — inventário e decisões

- Materializar a referência original.
- Receber logos e identificar suas funções oficiais.
- Inventariar projetos, marcas, contatos e currículo.
- Classificar evidências e confidencialidade.
- Confirmar terminologia, formação, cargos e períodos.
- Selecionar três destaques.

### Fase 1 — fundação técnica

- Criar o projeto Astro com TypeScript estrito.
- Definir Content Collections e schemas.
- Configurar CSS global, tokens, semântica e GitHub Pages.
- Criar layout, metadados e estrutura de testes/checks.

### Fase 2 — estrutura da home

- Implementar abertura estática funcional.
- Implementar ficha profissional.
- Implementar destaques, biblioteca, experiência, marcas e contato.
- Validar responsividade e ordem semântica antes de movimento.

### Fase 3 — cases e conteúdo real

- Adicionar projetos com a skill `project-content-entry`.
- Usar `fashion-project-case` nos conteúdos têxteis.
- Validar autoria, evidências, alt texts e rotas.

### Fase 4 — interação e movimento

- Adicionar filtros com JavaScript mínimo.
- Implementar estados das pastas.
- Adicionar animação progressiva do logo.
- Validar teclado, toque e `prefers-reduced-motion`.

### Fase 5 — validação e release

- Executar `responsive-accessibility-audit`.
- Executar `final-portfolio-review`.
- Corrigir bloqueadores.
- Executar typecheck, lint, testes e build existentes.
- Usar `github-pages-release` sem merge automático.

## Registro de mudanças estruturais

| Elemento original | Problema identificado | Alteração proposta | Especialista que recomendou | Justificativa | Impacto esperado |
| --- | --- | --- | --- | --- | --- |
| Experiência e marcas antes da biblioteca | Projetos reais aparecem tarde | Inserir três destaques e biblioteca antes de experiência e marcas | Design, UX, Hiring | Clareza para contratação é a prioridade do projeto | Reduzir tempo até evidência de trabalho |
| Abertura com “Portifólio” e nome pouco evidente | Grafia incorreta e identificação tardia | Corrigir “Portfólio” e mostrar Vinicius Rafael, cargo e CTAs na abertura | UX, Hiring | O visitante precisa compreender perfil e próximo passo em segundos | Melhorar primeira impressão e conversão |
| Abertura muito alta | Pode atrasar leitura e projetos | Usar altura fluida e indicar continuidade | Design, UX, Acessibilidade | Preservar impacto sem bloquear conteúdo | Melhorar acesso e reflow |
| Animação potencialmente tratada como loading | Risco de bloqueio, movimento excessivo e dependência de JS | Tornar animação progressiva, não bloqueante, uma vez por sessão e reduzível | Design, Acessibilidade | Conteúdo deve existir desde o início | Melhorar acesso, desempenho e robustez |
| Data de nascimento na ficha | Dado pessoal sem valor para contratação | Remover | Design, UX, Fashion, Hiring, Acessibilidade | Requisito explícito e princípio de minimização | Reduzir exposição e ruído |
| Muitos campos e contornos na ficha | Hierarquia achatada e texto pequeno | Priorizar nome, cargo, resumo e contato; simplificar dados secundários | Design, UX, Acessibilidade | Melhorar escaneabilidade sem perder metáfora | Leitura mais rápida e confortável |
| Ícones de programas sem nomes claros | Depende de reconhecimento visual | Exibir ícone e nome; remover aparência de proficiência | Design, UX, Hiring, Acessibilidade | Ferramenta precisa ser compreensível e honesta | Melhorar compreensão e acessibilidade |
| Experiência com quatro blocos densos | Home se aproxima de currículo extenso | Resumir e usar expansão acessível | Design, UX, Fashion, Hiring, Acessibilidade | Preservar amplitude em leitura progressiva | Reduzir densidade e manter foco |
| Grade de marcas preenchida pelo logo autoral | Confunde identidade e clientes | Publicar apenas marcas autorizadas com contexto; omitir enquanto faltarem assets | Design, UX, Fashion, Hiring | Não sugerir contratação direta nem inventar marcas | Preservar credibilidade |
| “+632” na grade de marcas | Métrica sem definição ou prova | Remover | Todos os especialistas | Métricas não comprovadas são proibidas | Evitar perda de confiança |
| Contagens codificadas em Projetos | Números parecem reais e categorias são pouco legíveis | Usar filtros textuais; quantidades somente derivadas e explicadas | Design, UX, Fashion, Hiring | Facilitar navegação e preservar integridade | Melhorar descoberta e confiança |
| Pastas completamente vazias | Não provam trabalho nem comunicam ação | Incluir prévia, nome, tipo, ano, técnicas, evidência e CTA | Todos os especialistas | A pasta deve ser unidade navegável, não decoração | Transformar conceito em portfólio funcional |
| Grade fixa de quatro pastas | Risco de overflow e conteúdo estreito | Usar grade progressiva de uma a quatro colunas | UX, Acessibilidade | Mobile first e reflow | Melhorar responsividade |
| Interação sugerida por elevação/abertura | Pode depender de hover | Garantir informação e ação por teclado, foco e toque | UX, Acessibilidade | Nenhuma função pode depender somente de hover | Melhorar operação universal |
| Mesmo peso de moldura em tudo | Seções, cards e tags competem | Aplicar três níveis de hierarquia visual | Design, UX, Acessibilidade | Espaço e peso devem comunicar prioridade | Aumentar clareza mantendo identidade |
| Tipografia técnica em textos densos | Reduz legibilidade | Reservar mono para dados e usar body legível | Design, UX, Hiring, Acessibilidade | Técnica não deve comprometer leitura | Melhorar conforto e zoom |
| Taxonomia mistura entregas e técnicas | Modelos técnicos, DTF, silk e sublimação não são equivalentes | Separar tipo de projeto, técnica e evidência | Fashion, UX | Evitar erro técnico e facilitar filtros | Melhorar precisão e compreensão leiga |
| Contato tratado como metadado pequeno | Ação de contratação não é evidente | Adicionar CTAs na abertura, navegação e contato final | UX, Hiring | A jornada precisa terminar em ação verificável | Aumentar possibilidade de contato |
| Logos repetidos sem função | Identidade vira ornamento | Mapear função por variação e limitar aplicações | Design, Fashion | Preservar valor e integridade da marca | Aumentar coerência autoral |

## Decisões que exigem aprovação do autor

- Arquivo considerado logo principal e função oficial de cada variação.
- Seleção dos três projetos em destaque.
- Termos exatos para modelos técnicos, modelagens virtuais, bordado e softwares.
- Formação, instituição, cargo, períodos, localização e contatos.
- Marcas e imagens autorizadas.
- Currículo público e canais prioritários.
- Frase curta de posicionamento da abertura.
- Paleta final e fontes futuras.

## Critérios de aceite antes de considerar a primeira versão pronta

- Conteúdo real substitui todos os placeholders publicáveis.
- Nome, cargo e diferencial são compreensíveis em dez segundos.
- Projetos aparecem cedo e três destaques possuem evidência suficiente.
- Nenhuma pasta pública fica vazia.
- Autoria, empresa, marca, IA, simulação e produção física estão identificadas.
- Nenhuma métrica, cliente, contato ou resultado foi inventado.
- Logos originais permanecem intactos e têm função documentada.
- Home e cases funcionam sem JavaScript; melhorias progressivas não bloqueiam conteúdo.
- Teclado, foco, leitor de tela, toque, zoom, reflow e redução de movimento foram validados.
- Não há overflow em 360, 390, 768, 1024 e 1440 px.
- Typecheck, lint, testes e build disponíveis passam.
- GitHub Pages, base path, rotas, links, metadados, sitemap, robots e 404 foram revisados.
- Revisão final multidisciplinar não possui bloqueadores.

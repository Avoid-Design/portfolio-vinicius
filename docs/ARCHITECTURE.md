# Arquitetura técnica do protótipo v1

## Estado e fonte das decisões

Este documento consolida a arquitetura aprovada antes da implementação. Foram consultados, em paralelo e em modo somente leitura:

- Frontend Astro Engineer;
- Accessibility and Responsive Reviewer;
- Performance and SEO Reviewer.

As decisões preservam `AGENTS.md`, `docs/REFERENCE_ANALYSIS.md`, `docs/INITIAL_PLAN.md` e a referência `references/estrutura-base-portfolio.png`. O pedido atual autoriza projetos demonstrativos e, por ser mais específico, substitui apenas a restrição anterior de não criar projetos substitutos. Os demonstrativos serão inequívocos, sem clientes, marcas, métricas ou resultados inventados.

## Decisões fundamentais

- Astro atual, saída estática e TypeScript estrito.
- HTML semântico, CSS próprio e JavaScript mínimo.
- Nenhum framework de UI, backend, banco, CMS, analytics ou biblioteca de animação.
- Cinco projetos demonstrativos em uma única Content Collection; três deles destacados.
- Cases demonstrativos com URL própria, aviso visível, `noindex,follow` e exclusão do sitemap.
- GitHub Pages em `https://avoid-design.github.io/portfolio-vinicius/` com base `/portfolio-vinicius/`.
- Melhoria progressiva: menu, filtros e animação não podem retirar conteúdo quando JavaScript falhar.
- Base visual neutra e contrastante, explicitamente provisória; nenhuma paleta final é aprovada nesta versão.
- Logos originais não serão redesenhados. O logo principal oficial recebido está preservado como PNG transparente; a capa e o apoio mantêm slots estáticos e explicitamente pendentes até a entrega dos respectivos arquivos originais.

## Dependências mínimas

Produção:

- `astro`;
- `@astrojs/sitemap`.

Desenvolvimento:

- `typescript`;
- `@astrojs/check`;
- `@playwright/test`, necessário para filtros, URL, teclado, breakpoints, redução de movimento, rotas e links.

Não haverá linter apenas nominal. A ausência de lint será registrada até que exista uma ferramenta real. O projeto e o workflow usam Node 24 e `package-lock.json`.

## Estrutura prevista

```text
.
├── .github/workflows/deploy-pages.yml
├── astro.config.mjs
├── package.json
├── package-lock.json
├── playwright.config.ts
├── tsconfig.json
├── public/
│   ├── assets/
│   │   ├── logos/
│   │   ├── brands/
│   │   ├── curriculum/
│   │   └── og/
│   └── robots.txt
├── src/
│   ├── assets/projects/
│   ├── components/
│   ├── config/site.ts
│   ├── content/projects/
│   ├── content.config.ts
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   │   ├── 404.astro
│   │   ├── index.astro
│   │   └── projetos/[slug].astro
│   ├── scripts/
│   ├── styles/
│   └── utils/
└── tests/
```

`references/` permanece documentação e não entra no build. SVGs oficiais de marca, quando fornecidos, ficarão intactos em `public/assets/logos/`. Raster de projetos ficará em `src/assets/projects/` para processamento pelo Astro.

## Configuração Astro e URLs

Configuração-alvo:

```js
export default defineConfig({
  output: 'static',
  site: 'https://avoid-design.github.io',
  base: '/portfolio-vinicius/',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap(/* filtro de rotas não indexáveis */)],
});
```

Um único helper `withBase()` em `src/utils/urls.ts`, baseado em `import.meta.env.BASE_URL`, deve construir links internos, âncoras, cases e assets públicos. Componentes não podem espalhar `/portfolio-vinicius/` nem usar caminhos root-relative como `/projetos/...`.

## Configuração central do perfil

`src/config/site.ts` centraliza:

- nome, cargo, frase, resumo, localização, formação e disponibilidade;
- URL pública e metadados SEO;
- navegação;
- e-mail, WhatsApp, LinkedIn, Behance, GitHub e currículo;
- estado `configured` ou `pending` de cada canal.

Canal pendente não renderiza `<a>`, `href="#"`, URL fictícia, `aria-disabled` nem item tabulável. Deve aparecer como texto “Pendente” ou “Disponível em breve” e constar em `TODO.md`.

Experiência, programas, habilidades e taxonomia ficam em módulos de dados pequenos. Criar collections adicionais para esses dados seria abstração prematura.

## Content Collection de projetos

A coleção atual usa `src/content.config.ts`, `glob()` e schema tipado. Categorias:

- `modelos-tecnicos`;
- `bordado`;
- `dtf`;
- `silk`;
- `sublimacao`.

Tipos de evidência:

- `physical-production`;
- `real-photo`;
- `mockup`;
- `simulation`;
- `ai-generated`.

Campos:

- `title`, `slug`, `category`, `year`, `featured`, `clientLabel`, `segment`;
- `summary`, `context`, `responsibilities`, `tools`, `techniques`;
- `cover`, `gallery`, `stages`, `result`;
- `evidenceType`, `aiGeneratedAssets`, `publicBrand`, `brandDisclaimer`;
- `order`, `demonstrative`, `draft`, `companyContext`, `confidentialityReviewed`.

Cada mídia informa asset, alt text, tipo de evidência, estado de IA e disclosure. Cada etapa informa título, descrição e mídia opcional. O schema deve recusar:

- slug fora de minúsculas ASCII e hífens;
- projeto demonstrativo sem aviso;
- marca pública sem contexto/disclaimer;
- responsabilidades ou técnicas vazias;
- alt text vazio em imagem informativa;
- IA sem `evidenceType: ai-generated`.

Os cinco registros são:

| Slug | Categoria | Destaque |
| --- | --- | --- |
| `desenvolvimento-tecnico-uniforme` | Modelos técnicos | Sim |
| `bordado-computadorizado` | Bordado | Sim |
| `preparacao-estampa-dtf` | DTF | Sim |
| `preparacao-silk` | Silk | Não |
| `preparacao-sublimacao` | Sublimação | Não |

Todos usam `clientLabel: "Projeto demonstrativo"`, `publicBrand: false`, ano “A confirmar”, placeholders vetoriais neutros e o aviso “Conteúdo demonstrativo — substituir por projeto real.” Não haverá fotografia que pareça produção física.

## Rotas

- `/portfolio-vinicius/`;
- `/portfolio-vinicius/projetos/desenvolvimento-tecnico-uniforme/`;
- `/portfolio-vinicius/projetos/bordado-computadorizado/`;
- `/portfolio-vinicius/projetos/preparacao-estampa-dtf/`;
- `/portfolio-vinicius/projetos/preparacao-silk/`;
- `/portfolio-vinicius/projetos/preparacao-sublimacao/`;
- `/portfolio-vinicius/404.html`;
- `/portfolio-vinicius/robots.txt`;
- sitemap gerado pela integração.

`src/pages/projetos/[slug].astro` usa `getStaticPaths()` e a coleção, exclui drafts, ordena por `order` e injeta projeto anterior/próximo. Não haverá modal como substituto de rota.

## Componentes

- `BaseLayout`: documento `pt-BR`, metadados, skip link, header, estilos e estrutura global.
- `SeoHead`: title, description, canonical, Open Graph, Twitter Card, robots e JSON-LD.
- `SiteHeader`: menu discreto e indicação progressiva da seção ativa.
- `Opening`: composição assimétrica e conteúdo imediatamente disponível.
- `BrandAsset`: seleciona o asset oficial configurado ou apresenta um estado pendente honesto.
- `AboutExperience`: reúne perfil e experiência no mesmo bloco principal.
- `ProjectsSection`: reúne destaques, biblioteca e contexto profissional no mesmo bloco principal.
- `ProfessionalFile`: Sobre, perfil, programas, habilidades e canais.
- `ProgramList` e `SkillTags`: coleções compactas e textuais.
- `FeaturedProjects`: subconjunto derivado de `featured`.
- `ProjectFilters`: filtros progressivos com URL.
- `ProjectFolderCard`: um único link, preview e metadados sempre visíveis.
- `EvidenceLabel` e `AiDisclosure`: natureza da evidência em texto.
- `ExperienceSection`: disclosures nativos, sem duplicação desktop/mobile.
- `BrandContext`: texto obrigatório e placeholders neutros.
- `ContactFooter`: canais reais ou estados pendentes.
- `ProjectCaseLayout`: estrutura compartilhada, aviso e navegação anterior/próximo.
- `ProcessSteps`: etapas provenientes da collection, sem inventar processo no componente.

## Contratos de acessibilidade

### Estrutura

- Skip link como primeiro foco, apontando para `#conteudo-principal`.
- `header`, `nav`, `main` e `footer` com landmarks inequívocos.
- Um `h1` por página; seções com `h2`; cards e blocos internos com `h3`.
- Ordem visual igual à ordem DOM e sem duplicação para breakpoints.
- `scroll-margin-block-start` para âncoras e foco não encoberto pelo header.
- Listas reais para programas, habilidades, projetos, marcas e contatos.

### Menu

- Um `<details>` nativo mantém o menu recolhido e operável com ou sem JavaScript.
- O `<summary>` nomeia o controle e informa seu estado pelo comportamento nativo.
- Enter, Espaço e Escape funcionam; Escape devolve foco ao acionador.
- Sem armadilha de foco em menu não modal.
- Seção ativa usa `aria-current="location"` e indicador não dependente de cor.

### Cards e experiência

- Um link abrangente por card, sem controles aninhados.
- “Abrir projeto”, metadados e aviso demonstrativo sempre visíveis.
- Ornamentos da pasta com `aria-hidden="true"`.
- Hover somente em `@media (hover: hover) and (pointer: fine)`; foco é equivalente ou mais forte.
- Experiência usa uma única estrutura `<details>/<summary>` em todos os breakpoints.

### Links, foco e contraste

- Pendências são texto, não links desabilitados.
- Foco global com outline visível, offset e suporte a `forced-colors`.
- Texto normal com contraste mínimo 4,5:1; texto grande, limites e estados relevantes com 3:1.
- Estado não depende somente de cor.
- Alvo mínimo 24 × 24 CSS px; meta de 44 × 44 px para ações principais.

## Filtro progressivo

- Sem JavaScript, todos os projetos e suas rotas ficam visíveis.
- Após inicialização, filtros são um grupo nomeado de botões com `aria-pressed`.
- Parâmetro: `?categoria=modelos-tecnicos|bordado|dtf|silk|sublimacao`; “Todos” remove o parâmetro.
- A ação atualiza `[hidden]`, botão ativo, contagem derivada, History API e região `aria-live="polite"`/`aria-atomic="true"`.
- `popstate` restaura o estado; valor inválido volta a “Todos”.
- Foco permanece no filtro acionado e itens ocultos saem da navegação.
- Canonical ignora query e hash.

## Movimento e logo

O HTML/CSS base mostra imediatamente o logo oficial, o conteúdo e os estados pendentes. Não há introdução animada, overlay, loading, captura de foco ou bloqueio de rolagem. A rolagem suave é um refinamento e volta ao comportamento imediato com `prefers-reduced-motion: reduce`.

O arquivo oficial do logo principal nunca será alterado. A imagem 1 de capa e a imagem 3 de apoio serão inseridas apenas quando suas exportações originais forem fornecidas; até lá, o site não tenta reconstruí-las.

## Sistema visual e responsividade

`tokens.css` define os seis tokens semânticos solicitados e tokens de tipografia, espaço, largura, raios, linhas, foco, camadas e movimento. As três funções tipográficas usam fontes de sistema: display, mono/técnica e body.

Hierarquia:

1. Seções abertas e com respiro.
2. Cards/fichas com borda funcional.
3. Etiquetas/metadados leves.

CSS mobile first. Validar 320, 360, 390, 768, 1024 e 1440 px, zoom de 200%, aumento de espaçamento, retrato e paisagem. Aplicar `clamp()`, `min-width: 0`, `max-width: 100%`, `overflow-wrap` e grids com `minmax()` para impedir overflow.

## SEO, imagens e performance

- Home usa o title e description aprovados.
- Case usa título e resumo próprios, deixando explícito que é demonstrativo.
- Canonical e `og:url` absolutos, com base e barra final.
- `og:locale="pt_BR"`; OG e Twitter só referenciam imagem pública existente.
- Sem imagem social válida, usar Twitter `summary` e registrar o asset pendente.
- JSON-LD `Person` somente na home e somente com dados configurados; sem contato, formação concluída, empregador ou perfis fictícios.
- 404 usa `noindex,follow`, fica fora do sitemap e retorna ao site por URL base-aware.
- Demonstrativos usam `noindex,follow` e ficam fora do sitemap.
- `robots.txt` aponta ao sitemap, com a limitação documentada de que o arquivo sob subcaminho não governa toda a origem `avoid-design.github.io`.
- Logos no formato original fornecido; fotografias e imagens de projeto em AVIF/WebP com dimensões reservadas, `srcset`/`sizes` e lazy loading abaixo da dobra.
- LCP não usa lazy loading.
- Sem fonte remota, vídeo automático, runtime de framework ou asset remoto desnecessário.

## Scripts e validação

Scripts previstos:

- `dev`;
- `build`;
- `preview`;
- `check` e `typecheck` com `astro check`;
- `test` e `test:e2e` com Playwright;
- `test:dist` para inspecionar artefatos, links, metadados, base, sitemap, robots e 404.

Playwright deve cobrir:

- home e cinco cases;
- anterior/próximo e 404;
- filtro, query, `popstate`, contagem e `aria-live`;
- menu, detalhes, cards e teclado;
- JavaScript desabilitado;
- redução de movimento;
- ausência de overflow nos breakpoints;
- headings, landmarks e foco básico;
- links e assets sob o base path.

Testes automatizados não equivalem a conformidade WCAG. A validação manual permanece obrigatória.

## Workflow do GitHub Pages

`.github/workflows/deploy-pages.yml`:

- gatilhos: push em `main` e `workflow_dispatch`;
- concorrência: grupo `pages`, cancelamento da execução anterior;
- build com `contents: read` apenas;
- checkout, Node 24 com cache npm, `npm ci`, browser do Playwright, check, lint se existir, testes, build e `test:dist`;
- upload de `dist` somente após todos os checks;
- deploy separado com `pages: write` e `id-token: write`;
- environment `github-pages` e URL retornada pelo deploy;
- nenhum PAT ou token armazenado.

`configure-pages` é omitido: Astro já conhece `site`/`base`, e a origem Pages será configurada manualmente como GitHub Actions. Isso reduz complexidade e permissões.

## Documentos e pendências

- `README.md`: instalação, execução, teste, build e publicação.
- `CONTENT_GUIDE.md`: perfil, projetos, logos, currículo, marcas, IA e alt texts.
- `TODO.md`: links, currículo, dados e conteúdo reais.
- `TODO_ASSETS.md`: logos, ícones, marcas, imagens de projetos, OG e favicon final.
- `CHANGELOG.md`: primeira versão funcional.
- `docs/FINAL_REVIEW.md`: criado após as revisões obrigatórias.

## Critérios de aceite arquitetural

- Build gera home, cinco cases, 404, sitemap e robots sob o base correto.
- Nenhum link ou asset interno quebra no project site.
- Projetos demonstrativos são inequívocos, não indexáveis e sem afirmações inventadas.
- Home e cases permanecem navegáveis sem JavaScript.
- URL, filtros, `aria-pressed`, cards e `aria-live` ficam sincronizados.
- Menu, pastas, disclosures e contatos funcionam por teclado e toque.
- Movimento reduzido mostra o estado final sem atraso.
- Não existe overflow nos breakpoints definidos.
- Tokens neutros atendem contraste antes da conclusão.
- Checks, testes, build e inspeção de `dist` passam antes do deploy.
- Workflow usa permissões mínimas, concorrência e nenhum segredo próprio.

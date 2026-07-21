# Portfólio de Vinicius Rafael

Protótipo funcional do portfólio profissional de Vinicius Rafael — Designer Gráfico, Arte-finalista e profissional de Desenvolvimento Técnico Têxtil.

O projeto usa Astro, TypeScript estrito, HTML semântico, CSS próprio e JavaScript progressivo. A versão atual contém cinco cases demonstrativos claramente identificados; eles não representam clientes, marcas ou produções reais.

A home atual está organizada em quatro blocos contínuos — Início; Sobre e experiência; Projetos; Contato — com menu superior recolhido. O logo principal oficial já está aplicado sem alteração. As exportações originais da capa (imagem 1) e do apoio de seções (imagem 3) permanecem pendentes e têm slots identificados no protótipo.

## Executar localmente

Requisito: Node.js 24.

```bash
npm install
npm run dev
```

URL local: `http://localhost:4321/portfolio-vinicius/`.

O primeiro `npm install` gera `package-lock.json`, que deve ser versionado para permitir `npm ci` no workflow.

## Verificações

```bash
npm run typecheck
npm run build
npm run test:dist
npx playwright install chromium
npm test
```

`npm test` inicia o preview do build existente. Execute o build antes dos testes de navegador. Não há linter configurado nesta versão; `astro check` é o typecheck real, não um lint nominal.

## Arquitetura e conteúdo

- `src/content/projects/`: cinco entradas da Content Collection.
- `src/content.config.ts`: schema, enums e validações de integridade.
- `src/config/site.ts`: perfil, SEO e canais profissionais.
- `src/data/`: experiência, programas, habilidades e taxonomia.
- `src/components/`: seções e unidades reutilizáveis.
- `src/pages/projetos/[slug].astro`: rotas estáticas dos cases.
- `CONTENT_GUIDE.md`: procedimento para substituir demonstrativos por conteúdo real.
- `docs/ARCHITECTURE.md`: decisões técnicas consolidadas.

## GitHub Pages

O site foi configurado para:

`https://avoid-design.github.io/portfolio-vinicius/`

O workflow `.github/workflows/deploy-pages.yml` executa em push para `main` ou manualmente, instala pelo lockfile, roda typecheck, build, inspeção do `dist` e Playwright antes do deploy. O repositório deve usar **GitHub Actions** como fonte do Pages.

O workflow não faz merge. Trabalhe em branch, revise o pull request e mantenha a decisão de publicação com a equipe.

## Como o AGENTS.md funciona

O [`AGENTS.md`](AGENTS.md) na raiz contém decisões permanentes de produto, conteúdo, UX, tecnologia, Git e orquestração. O Codex o descobre automaticamente ao iniciar uma sessão no repositório e combina suas regras com instruções globais; arquivos mais próximos do diretório de trabalho têm precedência.

Não duplicar essas regras em prompts rotineiros. Atualizar o arquivo somente quando uma decisão precisar persistir para toda a equipe.

Referência oficial: [Custom instructions with AGENTS.md](https://learn.chatgpt.com/docs/agent-configuration/agents-md).

## Localização oficial dos agentes

A estrutura inicialmente proposta mencionava `.agents/agents/*.md`. Na versão validada (`codex-cli 0.144.1`), agentes personalizados de projeto são carregados oficialmente como arquivos TOML em `.codex/agents/`, com `name`, `description` e `developer_instructions`.

Por isso, os agentes foram adaptados para `.codex/agents/*.toml`. As repository skills permanecem no local oficial `.agents/skills/<nome>/SKILL.md`.

Referências oficiais: [Subagents](https://learn.chatgpt.com/docs/agent-configuration/subagents) e [Build skills](https://learn.chatgpt.com/docs/build-skills).

## Agentes especializados

- `ux-ui-portfolio-designer`: UX/UI de portfólios fluidos, direção visual, jornada de contratação, responsividade e acessibilidade.
- `frontend-portfolio-engineer`: implementação Astro, qualidade de código, testes, desempenho, SEO e GitHub Pages.

Solicitar subagentes diretamente no prompt. Usar somente a especialidade necessária; em tarefas grandes, UX/UI analisa primeiro e Frontend implementa depois. Exemplo:

> Peça ao `ux-ui-portfolio-designer` uma análise somente leitura desta seção. Depois, use `frontend-portfolio-engineer` para implementar as recomendações aprovadas.

## Repository skills

- `$portfolio-design-review`: revisão conjunta de Design, UX e Hiring.
- `$fashion-project-case`: criação ou revisão de case técnico têxtil.
- `$responsive-accessibility-audit`: auditoria responsiva e de acessibilidade.
- `$project-content-entry`: cadastro íntegro de um novo projeto.
- `$github-pages-release`: preparação e validação de release no GitHub Pages.
- `$final-portfolio-review`: revisão multidisciplinar anterior à release.

### Como invocar

No CLI ou IDE, usar `/skills` ou mencionar a skill com `$nome-da-skill`. Também é possível usar linguagem natural; a descrição no front matter permite acionamento implícito.

Exemplos:

> Use a skill `portfolio-design-review` para revisar a home.

> Use `$fashion-project-case` para adicionar este projeto de bordado.

> Use `$responsive-accessibility-audit` ao concluir esta página.

> Use `$final-portfolio-review` antes da release.

## Reconhecimento e atualização

As skills são detectadas automaticamente quando mudam. Se uma skill ou agente novo não aparecer, iniciar uma nova conversa/sessão do Codex; no IDE, recarregar a extensão; no CLI, encerrar e abrir novamente no diretório do repositório. O `AGENTS.md` é lido uma vez no início de cada execução, portanto mudanças nele exigem uma nova execução para garantia de recarga.

Detalhes de responsabilidades e operação estão em [`docs/CODEX_WORKFLOW.md`](docs/CODEX_WORKFLOW.md).

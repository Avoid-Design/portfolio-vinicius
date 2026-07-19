# Fluxo de trabalho com Codex

## Equipe virtual

O agente principal conserva o contexto do usuário, planeja a tarefa, delega análises independentes e integra as decisões. Agentes especializados reduzem ruído no contexto principal, mas cada subagente consome tokens, tempo e ferramentas próprios; usar paralelismo somente quando as frentes forem realmente independentes.

Os agentes de projeto ficam em `.codex/agents/*.toml`. As skills que orquestram fluxos repetíveis ficam em `.agents/skills/*/SKILL.md`.

## Responsabilidades e limites

| Agente | Usar para | Não usar para |
| --- | --- | --- |
| `digital-design-director` | Hierarquia, tipografia, identidade, cards, pastas e logos | Fechar paleta, alterar logos ou implementar código |
| `ux-information-architect` | Jornada, navegação, categorias, CTAs, mobile e estrutura de cases | Inventar pesquisa, métricas ou aumentar texto sem função |
| `frontend-astro-engineer` | Astro, TypeScript, componentes, conteúdo, CSS, rotas, testes e build | Adicionar stack pesada, backend ou abstrações prematuras |
| `technical-fashion-designer` | Terminologia e processo de flats, tech packs, bordado, DTF, silk e sublimação | Inventar especificações ou tratar simulação como produção real |
| `accessibility-responsive-reviewer` | Semântica, teclado, leitores de tela, movimento e breakpoints | Declarar conformidade total com auditoria parcial |
| `performance-seo-reviewer` | Build, Pages, assets, JavaScript, metadados, sitemap, 404 e links | Inventar métricas ou publicar sem autorização |
| `hiring-reviewer` | Clareza, confiança, foco e decisão de entrevista | Falar por uma empresa específica ou impor gosto pessoal como mercado |

## Fluxos de orquestração

### Tarefas grandes em duas fases

Aplicar quando a tarefa alterar arquitetura, identidade, múltiplas seções ou release.

1. Fase 1 — análise paralela
   - Design avalia identidade e hierarquia.
   - UX avalia compreensão e jornada.
   - Fashion avalia fidelidade técnica quando houver conteúdo têxtil.
   - Acessibilidade avalia acesso e responsividade.
   - Hiring avalia clareza para contratação.
2. O agente principal aguarda todos, deduplica achados e resolve conflitos pelos critérios do `AGENTS.md`.
3. Fase 2 — implementação e validação
   - Front-end implementa o conjunto aprovado.
   - Acessibilidade valida a implementação.
   - Performance valida build, Pages e SEO.
   - O agente principal integra e executa os checks finais.

Não permitir escrita concorrente nos mesmos arquivos. Preferir agentes revisores em modo somente leitura e reservar a escrita a um único implementador por conjunto de arquivos.

### Fluxos por skill

- `portfolio-design-review`: Design + UX + Hiring; consolidar sem editar.
- `fashion-project-case`: classificar evidências, revisar com Fashion e estruturar o case sem inventar dados.
- `responsive-accessibility-audit`: executar build, auditar e corrigir apenas dentro do escopo autorizado.
- `project-content-entry`: confirmar autoria, marcas e natureza das imagens antes do cadastro.
- `github-pages-release`: validar branch, checks, build e Pages; nunca fazer merge automático.
- `final-portfolio-review`: acionar os seis revisores e decidir a aprovação final.

## Quando não usar subagentes

Não delegar quando:

- a tarefa for pequena, local e claramente sequencial;
- um único agente puder concluir com menos contexto do que a coordenação exigiria;
- as frentes dependerem continuamente umas das outras;
- agentes precisariam editar os mesmos arquivos;
- ainda faltar uma decisão do usuário que mudaria todo o escopo;
- a tarefa consistir apenas em uma consulta simples ou correção mecânica.

## Custos de contexto

Cada subagente recebe contexto e produz um resultado próprio. Para controlar custo e context rot:

- Delegar tarefas estreitas, independentes e com formato de saída definido.
- Enviar apenas arquivos e decisões necessários à especialidade.
- Pedir citações de `caminho:linha`, componentes e rotas, evitando logs integrais.
- Aguardar todos antes de sintetizar; não repetir o relatório bruto no contexto principal.
- Usar a menor quantidade de agentes que cubra o risco real.

## Como revisar os resultados

1. Confirmar se cada agente respondeu ao escopo e citou evidências.
2. Separar fatos observados, inferências e preferências.
3. Deduplicar achados equivalentes sem perder particularidades.
4. Classificar em crítico, importante ou refinamento.
5. Resolver conflitos nesta ordem: contratação, integridade, acessibilidade, responsividade, desempenho, coerência visual e experimentação.
6. Converter recomendações aceitas em mudanças verificáveis.
7. Solicitar nova validação aos revisores afetados após a implementação.

## Como evitar conflitos

- Definir um proprietário de escrita para cada arquivo.
- Pedir análises somente leitura na primeira fase.
- Não iniciar implementação antes de consolidar relatórios independentes.
- Preservar mudanças existentes e revisar o diff antes de editar.
- Registrar divergências que exijam decisão do autor, especialmente paleta, logos, autoria e confidencialidade.
- Nunca permitir merge automático ou escrita direta em `main`/`master`.

## Como iniciar uma nova tarefa

1. Abrir o Codex na raiz do repositório para carregar `AGENTS.md`, agentes e skills.
2. Informar objetivo, escopo, materiais disponíveis e se alterações estão autorizadas.
3. Mencionar a skill desejada ou pedir subagentes pelos nomes oficiais.
4. Para paralelismo, definir divisão, modo de escrita e obrigação de aguardar todos.
5. Exigir uma síntese com prioridades, evidências, conflitos e validações.

Exemplos:

> Use a skill `portfolio-design-review` para revisar a home.

> Delegue em paralelo a análise desta seção para Design, UX e Hiring. Aguarde todos e entregue uma síntese.

> Use a skill `fashion-project-case` para adicionar este projeto de bordado.

> Use a skill `final-portfolio-review` antes da release.

> Use `frontend-astro-engineer` para implementar somente as recomendações aprovadas; depois peça validação a Acessibilidade e Performance.

## Atualização do Codex

O Codex detecta alterações de skills automaticamente, mas pode ser necessário iniciar uma nova sessão se a lista não atualizar. Para agentes e `AGENTS.md`, iniciar uma nova conversa ou reiniciar o CLI/IDE garante a releitura. No IDE, recarregar a extensão; no CLI, sair e abrir novamente na raiz do repositório.

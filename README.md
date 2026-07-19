# Portfólio de Vinicius Rafael

Infraestrutura inicial de colaboração com Codex para o portfólio profissional de Vinicius Rafael — Designer Gráfico, Arte-finalista e profissional de Desenvolvimento Técnico Têxtil.

Esta etapa configura apenas instruções, agentes especializados e skills reutilizáveis. O site completo ainda não foi implementado.

## Como o AGENTS.md funciona

O [`AGENTS.md`](AGENTS.md) na raiz contém decisões permanentes de produto, conteúdo, UX, tecnologia, Git e orquestração. O Codex o descobre automaticamente ao iniciar uma sessão no repositório e combina suas regras com instruções globais; arquivos mais próximos do diretório de trabalho têm precedência.

Não duplicar essas regras em prompts rotineiros. Atualizar o arquivo somente quando uma decisão precisar persistir para toda a equipe.

Referência oficial: [Custom instructions with AGENTS.md](https://learn.chatgpt.com/docs/agent-configuration/agents-md).

## Localização oficial dos agentes

A estrutura inicialmente proposta mencionava `.agents/agents/*.md`. Na versão validada (`codex-cli 0.144.1`), agentes personalizados de projeto são carregados oficialmente como arquivos TOML em `.codex/agents/`, com `name`, `description` e `developer_instructions`.

Por isso, os agentes foram adaptados para `.codex/agents/*.toml`. As repository skills permanecem no local oficial `.agents/skills/<nome>/SKILL.md`.

Referências oficiais: [Subagents](https://learn.chatgpt.com/docs/agent-configuration/subagents) e [Build skills](https://learn.chatgpt.com/docs/build-skills).

## Agentes especializados

- `digital-design-director`: identidade, hierarquia, tipografia e coerência visual.
- `ux-information-architect`: jornada, navegação e arquitetura de informação.
- `frontend-astro-engineer`: implementação Astro, TypeScript, CSS, rotas e build.
- `technical-fashion-designer`: fidelidade técnica de modelos, bordado, DTF, silk e sublimação.
- `accessibility-responsive-reviewer`: WCAG, teclado, movimento e breakpoints.
- `performance-seo-reviewer`: GitHub Pages, desempenho, metadados e descoberta.
- `hiring-reviewer`: leitura como recrutador e contratante leigo.

Solicitar subagentes diretamente no prompt e indicar se o trabalho deve ser paralelo, somente leitura e aguardado antes da síntese. Exemplo:

> Delegue em paralelo a análise desta seção para `digital-design-director`, `ux-information-architect` e `hiring-reviewer`. Aguarde todos e entregue uma síntese.

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

# Fluxo de trabalho com Codex

## Equipe virtual enxuta

O agente principal conserva o contexto, decide prioridades e integra o trabalho. O repositório dispõe de somente dois subagentes em `.codex/agents/`:

| Agente | Usar para | Não usar para |
| --- | --- | --- |
| `ux-ui-portfolio-designer` | UX/UI, identidade, hierarquia, jornada, contratação, acessibilidade e responsividade | Editar código por padrão, alterar logos, fechar paleta ou inventar conteúdo |
| `frontend-portfolio-engineer` | Astro, TypeScript, CSS, conteúdo, testes, performance, SEO e GitHub Pages | Adicionar stack pesada, inventar dados ou fazer merge automático |

As skills ficam em `.agents/skills/*/SKILL.md` e retêm procedimentos específicos, inclusive conteúdo têxtil, acessibilidade e release. Não criar um agente para cada disciplina: carregar a skill adequada e delegar somente quando a revisão independente compensar o custo.

## Fluxo padrão

Para tarefa pequena ou correção local, o agente principal trabalha sem subagentes.

Para arquitetura, identidade, múltiplas seções ou release:

1. O `ux-ui-portfolio-designer` analisa em modo somente leitura e entrega critérios verificáveis.
2. O agente principal prioriza o resultado segundo `AGENTS.md`.
3. O `frontend-portfolio-engineer` implementa o conjunto aprovado e executa as validações.
4. O agente principal revisa o diff, resolve pendências e decide o próximo passo.

Não permitir escrita concorrente nos mesmos arquivos. Quando as duas leituras forem independentes, elas podem ocorrer em paralelo; a implementação continua com um único proprietário.

## Fluxos por skill

- `portfolio-design-review`: revisar com UX/UI; não editar sem autorização.
- `fashion-project-case`: aplicar o checklist têxtil da skill; usar UX/UI para clareza e Frontend para cadastro quando necessário.
- `responsive-accessibility-audit`: build, inspeção, breakpoints e correções; delegar apenas conforme o risco.
- `project-content-entry`: confirmar autoria, marcas e evidências; Frontend implementa quando houver código ou schema.
- `github-pages-release`: Frontend valida branch, checks, build e Pages; nunca fazer merge automático.
- `final-portfolio-review`: UX/UI e Frontend revisam em paralelo, ambos em modo somente leitura.

## Quando não usar subagentes

Não delegar quando a tarefa for pequena, sequencial, mecânica, compartilhar os mesmos arquivos ou puder ser concluída com menos contexto pelo agente principal. Também não delegar antes de uma decisão do usuário que alteraria todo o escopo.

## Economia de contexto

- Enviar somente objetivo, arquivos e critérios necessários.
- Pedir resultado curto, priorizado e com `caminho:linha`.
- Evitar repetir relatórios completos no contexto principal.
- Preferir um agente; usar os dois apenas quando houver análise e implementação claramente separadas.
- Reaproveitar as decisões já registradas em vez de reanalisar o projeto inteiro.

## Como revisar resultados

1. Separar fatos, inferências e preferências.
2. Classificar em crítico, importante ou refinamento.
3. Resolver conflitos nesta ordem: contratação, integridade, acessibilidade, responsividade, desempenho, coerência visual e experimentação.
4. Converter recomendações aceitas em mudanças verificáveis.
5. Executar typecheck, testes e build aplicáveis antes de concluir código.

## Como iniciar uma tarefa

Abrir o Codex na raiz, declarar objetivo, escopo, materiais e autorização de escrita. Exemplos:

> Use a skill `portfolio-design-review` para revisar a home.

> Peça ao `ux-ui-portfolio-designer` uma análise somente leitura desta seção e entregue prioridades.

> Use a skill `fashion-project-case` para adicionar este projeto de bordado.

> Use `frontend-portfolio-engineer` para implementar esta seção e validar o build.

> Use a skill `final-portfolio-review` antes da release.

## Atualização do Codex

Skills podem ser detectadas automaticamente após alteração. Para garantir que os dois agentes e o `AGENTS.md` sejam recarregados, iniciar uma nova conversa ou reiniciar o CLI/IDE na raiz do repositório.

# AGENTS.md

## Missão do projeto

Construir um portfólio técnico, autoral, sério e levemente disruptivo para Vinicius Rafael, voltado à obtenção de vagas em design gráfico, arte-finalização, desenvolvimento técnico têxtil e produção gráfica.

## Princípios visuais

- Criar uma identidade técnica e autoral, com referências a arquivos, pastas, fichas e softwares produtivos.
- Evitar aparência genérica de agência ou template.
- Concentrar a ousadia na composição, tipografia e interação, preservando a leitura e a prioridade dos projetos.
- Não finalizar a paleta sem aprovação.
- Preservar integralmente os logos fornecidos, sem inventar versões da marca; atribuir uma função definida a cada variação.
- Evitar excesso de caixas e efeitos sem função.

## Princípios de UX

- Explicar rapidamente quem é Vinicius e o que ele produz; mostrar projetos cedo.
- Tornar informações técnicas compreensíveis para leigos.
- Adotar mobile first e não depender somente de hover.
- Manter textos concisos e apresentar processos por comparação visual e etapas.
- Não usar números ou métricas não comprovadas.

## Regras de conteúdo

- Não inventar clientes, marcas, resultados, métricas ou especificações.
- Identificar imagens geradas por IA e não apresentar simulações como produção física real.
- Explicar quando o trabalho foi realizado por meio de uma empresa.
- Não expor informações confidenciais.
- Usar português do Brasil e textos de interface curtos e objetivos.

## Regras técnicas

- Usar Astro, TypeScript estrito, HTML semântico, CSS próprio e JavaScript mínimo.
- Preferir componentes reutilizáveis e conteúdo centralizado.
- Preparar a publicação para GitHub Pages.
- Usar SVG para logos e WebP ou AVIF para imagens.
- Respeitar `prefers-reduced-motion`.
- Não adicionar dependências sem necessidade nem criar abstrações prematuras.
- Executar os scripts existentes de typecheck, lint, testes e build aplicáveis; o build é obrigatório antes de concluir mudanças de código. Se um script ainda não existir, registrar a ausência em vez de inventar uma validação.
- Não alterar `main` ou `master` diretamente. Trabalhar em branch e nunca fazer merge automático.

## Uso de subagentes

Para tarefas complexas, solicitar subagentes explicitamente, sobretudo em auditoria visual, UX, fashion design técnico, acessibilidade, testes, performance e revisão de contratação. Evitar subagentes quando a tarefa for pequena, sequencial ou compartilhar o mesmo conjunto de arquivos.

O agente principal deve:

1. Planejar.
2. Delegar análises independentes.
3. Aguardar todos.
4. Sintetizar os resultados.
5. Priorizar conflitos.
6. Implementar ou coordenar alterações.
7. Executar testes finais.

Evitar múltiplos subagentes escrevendo simultaneamente nos mesmos arquivos.

### Orquestração para tarefas grandes

Para tarefas que alterem arquitetura, identidade, múltiplas seções ou release, use subagentes em duas fases.

- Fase 1 — análise paralela: Design, UX, Fashion, Acessibilidade e Contratação.
- Fase 2 — implementação e validação: Front-end implementa; Acessibilidade e Performance validam; o agente principal integra e executa testes.

## Critérios de decisão

Quando houver conflito, priorizar nesta ordem:

1. Clareza para contratação.
2. Integridade e honestidade do conteúdo.
3. Acessibilidade.
4. Responsividade.
5. Desempenho.
6. Coerência visual.
7. Experimentação estética.

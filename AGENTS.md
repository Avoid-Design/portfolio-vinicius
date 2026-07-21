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
- Preservar o formato original fornecido para logos, preferindo SVG quando existir; usar WebP ou AVIF para imagens de projeto.
- Respeitar `prefers-reduced-motion`.
- Não adicionar dependências sem necessidade nem criar abstrações prematuras.
- Executar os scripts existentes de typecheck, lint, testes e build aplicáveis; o build é obrigatório antes de concluir mudanças de código. Se um script ainda não existir, registrar a ausência em vez de inventar uma validação.
- Não alterar `main` ou `master` diretamente. Trabalhar em branch e nunca fazer merge automático.

## Uso de subagentes

Usar no máximo dois subagentes especializados e somente quando o custo de coordenação for justificado:

- `ux-ui-portfolio-designer`: UX, UI, direção visual, jornada de contratação, responsividade e acessibilidade percebida.
- `frontend-portfolio-engineer`: Astro, implementação, testes, desempenho, SEO e GitHub Pages.

Evitar subagentes quando a tarefa for pequena, sequencial ou compartilhar o mesmo conjunto de arquivos. Conhecimento têxtil e fluxos específicos permanecem nas repository skills, sem criar um agente adicional.

O agente principal deve:

1. Planejar.
2. Delegar somente a especialidade necessária.
3. Aguardar o resultado quando houver delegação.
4. Sintetizar os resultados.
5. Priorizar conflitos.
6. Implementar ou coordenar alterações.
7. Executar testes finais.

Evitar múltiplos subagentes escrevendo simultaneamente nos mesmos arquivos.

### Orquestração para tarefas grandes

Para tarefas que alterem arquitetura, identidade, múltiplas seções ou release, use subagentes em duas fases.

- Fase 1 — direção: `ux-ui-portfolio-designer` analisa em modo somente leitura e entrega critérios verificáveis.
- Fase 2 — implementação: `frontend-portfolio-engineer` implementa o conjunto aprovado e executa validações; o agente principal integra e decide.

## Critérios de decisão

Quando houver conflito, priorizar nesta ordem:

1. Clareza para contratação.
2. Integridade e honestidade do conteúdo.
3. Acessibilidade.
4. Responsividade.
5. Desempenho.
6. Coerência visual.
7. Experimentação estética.

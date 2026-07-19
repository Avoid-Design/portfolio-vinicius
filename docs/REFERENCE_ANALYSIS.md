# Análise da referência estrutural

## Estado do documento

- Referência: imagem fornecida visualmente na conversa, destinada a `references/estrutura-base-portfolio.png`.
- Escopo: estrutura, identidade, UX, contexto têxtil, contratação, acessibilidade e responsividade.
- Natureza: análise pré-implementação; não é reprodução pixel a pixel nem auditoria de código.
- Limitação do asset: a imagem foi analisada no contexto da conversa, mas o arquivo original ainda não está materializado no repositório. Não recriar, comprimir ou alterar a referência para preencher essa ausência.

## Método

Foram realizadas cinco análises independentes, em modo somente leitura:

1. Digital Design Director.
2. UX and Information Architect.
3. Technical Fashion Designer.
4. Hiring Reviewer.
5. Accessibility and Responsive Reviewer.

O agente principal consolidou os resultados segundo a prioridade definida no `AGENTS.md`: clareza para contratação, integridade, acessibilidade, responsividade, desempenho, coerência visual e experimentação.

## Leitura objetiva da imagem

A referência apresenta uma página vertical longa, composta por:

1. Abertura ampla e assimétrica, com uma variação construtiva do logo à esquerda, uma variação circular na área superior e o título “Portifólio” acompanhado das áreas profissionais à direita.
2. Ficha profissional com variação compacta do logo, nome, cargo, resumo, dados pessoais, contatos, programas e habilidades.
3. Bloco dividido entre experiência profissional textual e uma grade de marcas ainda preenchida por repetições do logo autoral.
4. Transição tipográfica de grande escala para a seção “Projetos”.
5. Linha de categorias acompanhadas por números sem contexto comprovável.
6. Biblioteca com oito pastas vazias, sem miniatura ou metadados de projeto.

A linguagem visual já é autoral e coerente com arquivo, ficha, processo e produção. O material ainda funciona como estrutura conceitual: não comprova projetos, marcas, métricas, autoria ou resultados.

## Síntese executiva

### Forças da referência

- Identidade imediatamente distinta de um template genérico.
- Metáfora de fichas, arquivos e pastas coerente com produção gráfica e têxtil.
- Abertura assimétrica com bom contraste entre escala, massa e espaço vazio.
- Ficha profissional capaz de organizar perfil, ferramentas e habilidades sem criar um segundo hero.
- Título “Projetos” como ruptura editorial forte.
- Potencial para transformar as pastas em navegação funcional e os cases em documentação de processo.

### Problemas prioritários

- Projetos reais aparecem tarde e, na referência, estão vazios.
- Quase todos os elementos recebem contorno e peso semelhantes, reduzindo a hierarquia.
- Experiência e ficha usam textos e metadados pequenos e densos.
- Marcas, contatos e números são placeholders ambíguos que não podem chegar à publicação.
- A taxonomia mistura tipos de entrega e técnicas produtivas.
- Ícones, pastas e futuros efeitos sugerem dependência potencial de reconhecimento visual ou hover.
- A referência não diferencia arte, arquivo técnico, simulação, IA e produção física.

### Decisão consolidada

Preservar a intenção estrutural e visual, mas reorganizar a jornada para:

1. Identificar Vinicius, o cargo principal e a ação esperada já na abertura.
2. Manter o Sobre como ficha curta.
3. Mostrar três projetos reais em destaque imediatamente depois da ficha.
4. Apresentar a biblioteca antes da experiência detalhada e das marcas.
5. Transformar pastas, filtros, programas e acordeões em componentes operáveis por teclado, toque e leitores de tela.

## Preservar

| Elemento | Prioridade | Justificativa consolidada |
| --- | --- | --- |
| Metáfora de sistema técnico, ficha, arquivo e pasta | Crítica | É o principal diferencial estrutural e conecta design, organização e produção. |
| Integridade das variações do logo | Crítica | Os logos são autorais e não podem ser redesenhados, simplificados ou usados como decoração genérica. |
| Abertura ampla e assimétrica | Importante | Cria reconhecimento e evita o hero convencional, desde que não bloqueie nem atrase o conteúdo. |
| Sobre mim como ficha profissional | Importante | Organiza identidade, resumo, ferramentas, habilidades e contato sem duplicar a abertura. |
| Posicionamento profissional | Importante | “Designer Gráfico · Arte-finalista · Desenvolvimento Técnico Têxtil” mantém foco e integra as demais atividades. |
| Quatro áreas conceituais da experiência | Importante | Demonstram atuação multidisciplinar com um eixo profissional coerente. |
| Título “Projetos” em escala expressiva | Importante | Marca editorialmente o núcleo do portfólio. |
| Modelos técnicos, bordado, DTF, silk e sublimação | Importante | São áreas relevantes, desde que taxonomia, participação e evidências sejam precisas. |
| Separação tipográfica por função | Importante | Display para grandes títulos, mono/técnica para dados e body legível para leitura contínua. |
| Linhas, abas e etiquetas técnicas seletivas | Refinamento | Reforçam precisão quando representam agrupamento ou estado real. |

## Adaptar

| Elemento original | Prioridade | Adaptação |
| --- | --- | --- |
| Experiência e marcas antes dos projetos | Crítica | Usar abertura → ficha → três destaques → biblioteca → experiência → marcas → contato. |
| Abertura sem nome evidente e com grafia “Portifólio” | Crítica | Mostrar “Vinicius Rafael”, corrigir para “Portfólio”, preservar o cargo principal e incluir ações claras. |
| Abertura muito alta | Importante | Manter impacto e assimetria com altura fluida, deixando evidente que há conteúdo abaixo. |
| Mesmo peso para seções, cards e metadados | Crítica | Aplicar três níveis: seções com respiro, cards/fichas funcionais e metadados leves. |
| Ficha com muitos campos e linhas | Importante | Priorizar nome, cargo, resumo e contato; agrupar formação/localização; simplificar dados secundários. |
| Ícones de programas isolados | Importante | Exibir ícone e nome legível; descrição apenas quando necessária. |
| Experiência extensa na primeira visualização | Importante | Resumir empresa, período, cargo e quatro frentes; permitir expansão acessível. |
| Grade de marcas | Crítica | Usar apenas marcas comprovadas, com título e contexto aprovados; omitir ou usar placeholders neutros no planejamento. |
| Linha numérica de categorias | Crítica | Substituir por filtros textuais; quantidades somente quando derivadas de conteúdo real e claramente rotuladas. |
| Pastas vazias | Crítica | Incluir prévia, nome, categoria, ano, técnicas, natureza da evidência e ação “Ver projeto”. |
| Grade fixa | Importante | Projetar mobile first, com uma coluna em telas estreitas e crescimento progressivo. |
| Contato tratado como metadado pequeno | Crítica | Manter dados compactos na ficha e adicionar CTAs na abertura e no contato final. |
| Taxonomia de projetos | Importante | Separar tipo de projeto, técnica e natureza da evidência. “Modelos técnicos” não é equivalente a DTF, silk ou sublimação. |
| Terminologia técnica | Importante | Explicar “DTF”, usar “Silk screen” ou “Serigrafia” na primeira ocorrência e confirmar termos ambíguos. |
| Título gigante | Importante | Usar escala fluida e quebra controlada, sem cortes ou overflow em zoom e mobile. |
| Composição mobile | Crítica | Reorganizar pela ordem semântica, não apenas empilhar a composição desktop. |

## Remover

| Elemento | Prioridade | Motivo |
| --- | --- | --- |
| Data de nascimento | Importante | Não contribui para contratação e expõe dado pessoal desnecessário. |
| “+632” e contagens como “1238”, “12312”, “123”, “321” e “421” | Crítica | São métricas sem definição ou comprovação. |
| Contatos fictícios | Crítica | Prejudicam confiança e não podem funcionar como ações públicas. |
| Pastas vazias na versão publicada | Crítica | Comunicam ausência ou falha, não um acervo profissional. |
| Repetição do logo como marca de cliente | Crítica | Confunde identidade autoral, placeholder e prova profissional. |
| Micro-logo repetido após cada área profissional | Importante | Usa a marca sem função e gera ruído. |
| Molduras completas em todo fragmento | Importante | Achatam hierarquia e aumentam densidade cognitiva. |
| Ícones ou quadrados sem nome | Importante | Dependem de reconhecimento visual e não comunicam função. |
| Aparência de barra de proficiência | Importante | Percentuais e níveis subjetivos são proibidos e não comprováveis. |
| Texto integral de currículo na home | Importante | A página deve resumir amplitude e conduzir a cases e currículo. |
| Hover como único meio de revelar ou acionar conteúdo | Crítica | Exclui teclado, toque e pessoas que não percebem o estado visual. |
| Loading ou animação bloqueante | Crítica | A página e o conteúdo devem estar disponíveis desde o início. |

## Adicionar

| Elemento | Prioridade | Finalidade |
| --- | --- | --- |
| Três projetos reais em destaque | Crítica | Comprovar capacidade e diferencial antes do currículo detalhado. |
| Autoria e participação por case | Crítica | Explicar o que Vinicius recebeu, criou, adaptou, preparou ou acompanhou. |
| Natureza de cada evidência | Crítica | Identificar arte, arquivo técnico, simulação/mockup, IA, amostra e produção física. |
| Contexto empresarial e de marca | Crítica | Evitar sugestão de contratação direta e preservar integridade. |
| Navegação curta e link de salto | Importante | Acessar projetos, experiência e contato sem percorrer toda a página. |
| CTAs verificáveis | Crítica | “Ver projetos”, currículo e contato devem ser ações reais. |
| Filtros operáveis e estado ativo | Importante | Permitir busca por categoria/técnica com texto, teclado, toque e foco. |
| Estados funcionais das pastas | Importante | Repouso, foco, hover complementar, abertura e estado visitado sem esconder informação essencial. |
| Processo visual por técnica | Importante | Mostrar entrada, preparação, participação e resultado sem inventar etapas. |
| Glossário curto para leigos | Importante | Traduzir somente os termos necessários, no ponto de uso. |
| Revisão de confidencialidade | Crítica | Proteger clientes, pedidos, medidas, arquivos editáveis, preços e dados internos. |
| Tokens de escala, espaço, contorno e tipografia | Importante | Sustentar hierarquia, consistência e responsividade sem fechar a paleta. |
| Estrutura semântica e foco consistente | Crítica | Preparar landmarks, headings, controles, ordem e operação acessível. |
| Contato final | Importante | Encerrar a jornada depois que o visitante viu evidências do trabalho. |

## Função provisória das variações do logo

As funções abaixo descrevem linguagens observadas, não nomes oficiais de arquivos. A implementação depende do inventário dos SVGs originais e da confirmação do autor.

| Variação observada | Função proposta | Restrições |
| --- | --- | --- |
| Construção linear expandida com contornos, diagonais e pontos periféricos | Abertura e narrativa não bloqueante de construção/processo | Uso pontual; não chamar de molde, arquivo vetorial ou pontos de bordado apenas pela aparência. |
| Marca híbrida compacta com partes sólidas e núcleo tramado | Assinatura da ficha profissional e possível contato final | Confirmar se é a aplicação principal; não repetir como placeholder. |
| Linguagem tramada/pontilhada | Marcador de processo têxtil ou bordado, caso exista como asset original independente | Não extrair, recortar ou fabricar uma nova versão. |
| Variação sólida/compacta | Favicon, navegação ou assinatura pequena, caso exista oficialmente | Não simplificar outra versão manualmente. |
| Logo repetido na grade de marcas | Nenhuma função de cliente | Remover da seção de marcas; é placeholder do wireframe. |

### Confirmações necessárias

- Qual arquivo é o logo principal.
- Quais variações existem como SVG original independente.
- Qual versão foi criada para usos compactos.
- Se a leitura de trama/bordado corresponde à intenção do autor.
- Onde cada variação já foi aprovada para uso.

## Taxonomia e evidências técnicas

### Estrutura recomendada

- Tipo de projeto: modelo técnico, identidade/aplicação, preparação gráfica ou outro tipo confirmado.
- Técnica: bordado computadorizado, DTF, silk screen/serigrafia, sublimação, impressão e corte.
- Natureza da evidência: arte, arquivo técnico, simulação/mockup, imagem gerada por IA, amostra/prova ou produção física.
- Estado: estudo, arquivo preparado, amostra ou produção registrada, sempre apoiado pelos materiais.

### Cuidados terminológicos

- Confirmar se “modelo técnico” significa fashion flat/desenho técnico proporcional.
- Não usar “modelagem” para desenho técnico se não houve desenvolvimento de moldes.
- Confirmar o significado de “modelagens virtuais”.
- Não declarar tech pack completo, separação de cores, digitalização de bordado, gravação de tela, impressão ou operação de máquina sem evidência.
- Informar a participação real em cada etapa e distinguir preparação de execução física.

## Acessibilidade e responsividade previstas

Esta seção registra riscos da referência, não conformidade da futura implementação.

- Usar um `h1` claro, landmarks, headings coerentes e link “Pular para o conteúdo”.
- Preservar a mesma ordem lógica no DOM e na apresentação visual.
- Usar corpo legível, line-height confortável e largura de leitura controlada.
- Permitir zoom de 200%, aumento de espaçamento e reflow a 320 CSS px.
- Validar 360, 390, 768, 1024 e 1440 px sem overflow ou corte de títulos.
- Usar ícone mais texto; não depender de tooltip.
- Implementar filtros como botões com estado ou controles equivalentes.
- Implementar experiência móvel com `<details>/<summary>` ou botões com estado anunciado.
- Garantir foco visível, não encoberto e ordem previsível.
- Projetar alvos de toque com no mínimo 24 × 24 CSS px e meta confortável próxima de 44 × 44 px nas ações principais.
- Com `prefers-reduced-motion: reduce`, exibir o logo final imediatamente e suprimir movimentos não essenciais.
- Manter todo o conteúdo funcional sem JavaScript.
- Validar contraste quando a paleta for aprovada: texto normal, foco, limites e estados de controles.

Critérios WCAG relevantes para a futura implementação: 1.1.1, 1.3.1, 1.3.2, 1.3.3, 1.4.1, 1.4.3, 1.4.4, 1.4.10, 1.4.11, 1.4.12, 1.4.13, 2.1.1, 2.4.1, 2.4.3, 2.4.6, 2.4.7, 2.4.11, 2.4.12, 2.5.8 e 4.1.2.

## Leitura para contratação

### Recrutador de design e produção

A referência comunica um posicionamento específico e uma identidade memorável, mas ainda não comprova a qualidade do trabalho. A decisão de entrevista depende de projetos reais com autoria, processo, resultado e contexto honestos.

### Contratante leigo

A referência parece organizada e especializada, mas termos técnicos e pastas vazias não explicam qual problema Vinicius resolve. Exemplos concretos, traduções curtas e contato direto são necessários.

### Cinco ajustes de maior impacto

1. Mostrar três projetos reais logo após a ficha.
2. Remover números não comprovados e contextualizar marcas, autoria, IA e simulações.
3. Organizar toda a amplitude sob o eixo “design e arte-finalização aplicados à produção têxtil e gráfica”.
4. Transformar pastas em entradas informativas e operáveis.
5. Destacar projetos, currículo e contato e traduzir termos técnicos para leigos.

## Divergências e decisões

Não houve divergência relevante entre os especialistas. Os pontos de tensão foram resolvidos assim:

- Abertura ampla versus acesso rápido: preservar a assimetria, mas usar altura fluida, CTAs e conteúdo disponível desde o início.
- Fidelidade à ordem original versus contratação: mover projetos para antes de experiência e marcas.
- Riqueza técnica versus legibilidade: manter metadados e linguagem mono apenas onde têm função; corpo e experiência usam tipografia de leitura.
- Marcas como credibilidade versus risco de vínculo indevido: publicar somente assets autorizados com contexto explícito; omitir enquanto faltarem provas.
- Movimento autoral versus acessibilidade/desempenho: usar SVG/CSS não bloqueante, uma vez por sessão, com estado final imediato e redução de movimento.

## Bloqueadores antes da implementação visual final

1. Materializar a imagem original em `references/estrutura-base-portfolio.png` sem alteração.
2. Receber e inventariar todos os SVGs originais dos logos.
3. Confirmar três projetos de destaque com assets e autoria.
4. Confirmar taxonomia, terminologia e participação por case.
5. Confirmar contatos, currículo, formação, cargo e períodos reais.
6. Confirmar marcas autorizadas e o contexto empresarial.
7. Classificar cada imagem como real, simulação, IA ou produção física.
8. Revisar confidencialidade e remover dados proprietários.
9. Obter aprovação posterior da paleta; nenhuma cor final foi decidida nesta análise.

## Critérios de sucesso da estrutura

- Em dez segundos, o visitante entende nome, cargo principal e diferencial.
- Há um projeto real visível ou um CTA inequívoco para projetos desde a abertura.
- Três destaques aparecem imediatamente após a ficha profissional.
- Nenhuma pasta publicada fica vazia.
- Todos os cards mostram nome, categoria, ano, técnica e natureza da evidência sem hover.
- Nenhum número, marca, cliente, contato ou resultado aparece sem comprovação.
- Cada case explica contexto, participação, processo e resultado.
- Contato e currículo são alcançáveis pela navegação e pelo final da página.
- A interface funciona por teclado, toque e leitores de tela e respeita redução de movimento.
- Não há overflow ou mudança incoerente de ordem nos breakpoints definidos.

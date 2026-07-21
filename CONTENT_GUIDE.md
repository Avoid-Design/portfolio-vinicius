# Guia de conteúdo

Este guia descreve como substituir os placeholders do protótipo sem inventar informações nem expor material confidencial. Leia `AGENTS.md` antes de alterar conteúdo.

## Alterar o perfil

Edite `src/config/site.ts` para nome, cargo, frase, resumo, localização, formação, disponibilidade e SEO.

Cada canal em `contacts` possui estado:

- `pending`: renderiza texto sem link;
- `configured`: exige valor real e `href` válido.

Não use `#`, URL fictícia ou link vazio. Remova a pendência correspondente de `TODO.md` somente após testar o destino.

## Adicionar ou substituir um projeto

Use a skill `$project-content-entry`; para modelo técnico, bordado, DTF, silk ou sublimação, use também `$fashion-project-case`.

1. Confirme título, categoria, ano, autoria e participação.
2. Confirme se o trabalho ocorreu por meio de uma empresa.
3. Confirme autorização para marcas e imagens.
4. Classifique cada evidência.
5. Remova dados confidenciais e metadados de arquivos.
6. Coloque assets em `src/assets/projects/<slug>/`.
7. Crie ou atualize `src/content/projects/<slug>.md`.
8. Execute typecheck, build, inspeção do dist e testes.

O `slug` aceita letras ASCII minúsculas, números e hífens. A rota final será `/projetos/<slug>/` sob o base path do GitHub Pages.

Ao substituir um demonstrativo real:

- use ano numérico confirmado;
- defina `demonstrative: false`;
- substitua o aviso por uma descrição compatível com o schema atualizado;
- reavalie o `noindex` aplicado atualmente a todas as rotas de projetos;
- inclua no sitemap somente depois de revisar integridade, autoria e confidencialidade.

## Evidências, simulações e IA

Valores permitidos:

- `physical-production`: produção física documentada;
- `real-photo`: fotografia real;
- `mockup`: mockup demonstrativo;
- `simulation`: simulação visual;
- `ai-generated`: imagem gerada por IA.

Cada mídia informa `evidenceType` e `aiGenerated`. Assets de IA também devem constar em `aiGeneratedAssets`. Use `AiDisclosure` com um dos textos aprovados:

- Simulação visual;
- Aplicação ilustrativa;
- Mockup demonstrativo;
- Imagem gerada por IA.

Nunca apresente mockup, render, preview de software ou imagem de IA como produção física.

Simulações, mockups e imagens geradas por IA exigem disclosure textual. Projetos com `draft: false` também exigem `confidentialityReviewed: true`; o schema bloqueia o build quando esses contratos não são atendidos.

## Alt texts

- Descreva o que a imagem comunica naquele ponto do case.
- Identifique vista, etapa ou comparação relevante.
- Informe quando a imagem for placeholder, mockup, simulação ou IA.
- Não repita a legenda palavra por palavra.
- Não comece automaticamente com "imagem de".
- Para ornamento sem informação, use SVG com `aria-hidden="true"` em vez de alt redundante.

Exemplo:

> Vista frontal e posterior de uma camiseta em traço técnico, com posição da aplicação destacada.

## Logos

O logo principal oficial (imagem 2) está preservado sem alteração em `public/assets/logos/logo-principal-preto.png`. Ele é a assinatura central do site e também atende navegação, favicon e contato.

Os arquivos originais da imagem 1 (capa) e da imagem 3 (apoio de seções e abas) ainda estão pendentes. Quando forem fornecidos, coloque-os em `public/assets/logos/` e atualize somente `src/config/brand.ts`; não redesenhe, vetorize automaticamente, recorte prévias nem altere proporções.

## Marcas

Coloque logos autorizados em `public/assets/brands/`. Registre:

- nome correto;
- autorização de uso;
- empresa por meio da qual o trabalho foi realizado;
- cases relacionados;
- alt text.

Mantenha o texto "Projetos realizados durante minha atuação profissional por meio das empresas em que trabalhei." Não sugira contratação direta.

## Currículo

Coloque o PDF revisado em `public/assets/curriculum/`, use nome estável e sem dados pessoais desnecessários, configure o canal em `src/config/site.ts` e teste o link sob `/portfolio-vinicius/`.

## Publicação

Antes de tornar um case indexável, execute as skills `$responsive-accessibility-audit` e `$final-portfolio-review`, revise o diff e confirme que nenhum cliente, marca, resultado, métrica ou etapa foi inferido.

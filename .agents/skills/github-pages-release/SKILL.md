---
name: github-pages-release
description: "Publicar ou preparar release no GitHub Pages com branch, Git, checks, build, base path, links e workflow verificados. Não usar para merge automático nem para push/publicação sem autorização explícita."
---

# Preparar uma release no GitHub Pages

1. Ler o `AGENTS.md` e confirmar se a solicitação autoriza apenas preparação ou também commit e push.
2. Verificar branch atual e status do Git; interromper se estiver em `main` ou `master` ou se houver mudanças alheias não compreendidas.
3. Executar os scripts existentes de typecheck, lint e testes. Registrar como indisponível qualquer script ausente.
4. Executar o build e tratar falhas antes de avançar.
5. Verificar `site`, `base`, trailing slashes, rotas e assets para o caminho do GitHub Pages.
6. Verificar links internos, 404, sitemap, robots, metadados e URLs canônicas aplicáveis.
7. Revisar o workflow de Pages, suas permissões, artefato e gatilhos sem expor segredos.
8. Revisar o diff e criar um commit focado somente se autorizado pela solicitação.
9. Fazer push da branch somente se a publicação ou o push estiver explicitamente autorizado e os checks passarem.
10. Nunca fazer merge automático. Entregar checklist de publicação, commit/branch, checks, pendências e passos manuais.

Não contornar proteções, não reescrever histórico e não declarar publicação concluída sem evidência.

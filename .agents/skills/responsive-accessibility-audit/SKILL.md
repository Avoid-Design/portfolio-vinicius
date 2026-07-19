---
name: responsive-accessibility-audit
description: "Auditoria responsiva e de acessibilidade ao concluir seção, página ou release, incluindo WCAG, teclado, foco, movimento e breakpoints. Não usar como alegação automática de conformidade nem para mudanças visuais sem escopo."
---

# Auditar responsividade e acessibilidade

1. Ler o `AGENTS.md` aplicável e confirmar o escopo e os comandos disponíveis.
2. Executar o build antes da auditoria. Se o projeto ainda não fornecer build, registrar o bloqueio sem simular sucesso.
3. Inspecionar HTML semântico, landmarks, headings, nomes acessíveis e textos alternativos.
4. Revisar navegação por teclado, ordem e visibilidade do foco.
5. Verificar `prefers-reduced-motion` e operação sem animação ou hover.
6. Avaliar 360, 390, 768, 1024 e 1440 px, incluindo overflow, títulos, menus, filtros e touch targets.
7. Acionar o agente `accessibility-responsive-reviewer` para uma revisão independente.
8. Corrigir falhas críticas somente quando a tarefa autorizar alterações; caso contrário, entregar correções propostas.
9. Reexecutar verificações afetadas e documentar pendências, critérios WCAG e limites do método.

Priorizar bloqueios de acesso sobre refinamentos visuais. Citar arquivo, linha, componente, breakpoint e evidência quando possível.

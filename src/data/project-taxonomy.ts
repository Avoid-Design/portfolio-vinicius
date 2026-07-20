export const categories = [
  { key: 'todos', label: 'Todos' },
  { key: 'modelos-tecnicos', label: 'Modelos técnicos' },
  { key: 'bordado', label: 'Bordado' },
  { key: 'dtf', label: 'DTF' },
  { key: 'silk', label: 'Silk' },
  { key: 'sublimacao', label: 'Sublimação' },
] as const;

export const categoryLabels = Object.fromEntries(
  categories.filter(({ key }) => key !== 'todos').map(({ key, label }) => [key, label]),
) as Record<string, string>;

export const evidenceLabels = {
  'physical-production': 'Produção física documentada',
  'real-photo': 'Fotografia real',
  mockup: 'Mockup demonstrativo',
  simulation: 'Simulação visual',
  'ai-generated': 'Imagem gerada por IA',
} as const;

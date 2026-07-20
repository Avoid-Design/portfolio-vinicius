import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const evidenceType = z.enum([
  'physical-production',
  'real-photo',
  'mockup',
  'simulation',
  'ai-generated',
]);

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => {
    const media = z
      .object({
        id: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
        asset: image(),
        alt: z.string().trim().min(1),
        evidenceType,
        aiGenerated: z.boolean(),
        disclosure: z
          .enum([
            'Simulação visual',
            'Aplicação ilustrativa',
            'Mockup demonstrativo',
            'Imagem gerada por IA',
          ])
          .optional(),
      })
      .superRefine((value, context) => {
        if (value.aiGenerated !== (value.evidenceType === 'ai-generated')) {
          context.addIssue({
            code: 'custom',
            message: 'aiGenerated deve corresponder ao evidenceType ai-generated.',
          });
        }

        if (
          ['simulation', 'mockup', 'ai-generated'].includes(value.evidenceType) &&
          !value.disclosure
        ) {
          context.addIssue({
            code: 'custom',
            path: ['disclosure'],
            message: 'Simulação, mockup ou imagem gerada por IA exige disclosure textual.',
          });
        }

        if (value.evidenceType === 'mockup' && value.disclosure !== 'Mockup demonstrativo') {
          context.addIssue({
            code: 'custom',
            path: ['disclosure'],
            message: 'Mídia mockup deve usar o disclosure Mockup demonstrativo.',
          });
        }

        if (value.evidenceType === 'ai-generated' && value.disclosure !== 'Imagem gerada por IA') {
          context.addIssue({
            code: 'custom',
            path: ['disclosure'],
            message: 'Mídia gerada por IA deve usar o disclosure Imagem gerada por IA.',
          });
        }
      });

    const stage = z.object({
      title: z.string().trim().min(1),
      description: z.string().trim().min(1),
      media: media.optional(),
    });

    return z
      .object({
        title: z.string().trim().min(1),
        slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
        category: z.enum(['modelos-tecnicos', 'bordado', 'dtf', 'silk', 'sublimacao']),
        year: z.union([z.number().int().min(1900).max(2100), z.literal('A confirmar')]),
        featured: z.boolean(),
        clientLabel: z.string().trim().min(1),
        segment: z.string().trim().min(1),
        summary: z.string().trim().min(1),
        context: z.string().trim().min(1),
        responsibilities: z.array(z.string().trim().min(1)).min(1),
        tools: z.array(z.string().trim().min(1)).min(1),
        techniques: z.array(z.string().trim().min(1)).min(1),
        cover: media,
        gallery: z.array(media),
        stages: z.array(stage).min(1),
        result: z.string().trim().min(1),
        evidenceType,
        aiGeneratedAssets: z.array(z.string()),
        publicBrand: z.boolean(),
        brandDisclaimer: z.string().trim().min(1),
        order: z.number().int().nonnegative(),
        demonstrative: z.boolean(),
        demonstrativeNotice: z.string().trim().min(1),
        draft: z.boolean(),
        companyContext: z.string().trim().optional(),
        confidentialityReviewed: z.boolean(),
      })
      .superRefine((value, context) => {
        if (
          value.demonstrative &&
          value.demonstrativeNotice !== 'Conteúdo demonstrativo — substituir por projeto real.'
        ) {
          context.addIssue({
            code: 'custom',
            path: ['demonstrativeNotice'],
            message: 'Projeto demonstrativo precisa usar o aviso oficial.',
          });
        }

        if (value.publicBrand && !value.companyContext) {
          context.addIssue({
            code: 'custom',
            path: ['companyContext'],
            message: 'Marca pública exige contexto empresarial.',
          });
        }

        if (!value.draft && !value.confidentialityReviewed) {
          context.addIssue({
            code: 'custom',
            path: ['confidentialityReviewed'],
            message: 'Projeto publicado exige revisão de confidencialidade concluída.',
          });
        }

        const allMedia = [
          value.cover,
          ...value.gallery,
          ...value.stages.flatMap((item) => (item.media ? [item.media] : [])),
        ];
        const generatedIds = allMedia.filter((item) => item.aiGenerated).map((item) => item.id).sort();
        const declaredIds = [...value.aiGeneratedAssets].sort();

        if (generatedIds.join('|') !== declaredIds.join('|')) {
          context.addIssue({
            code: 'custom',
            path: ['aiGeneratedAssets'],
            message: 'aiGeneratedAssets deve listar exatamente as mídias geradas por IA.',
          });
        }
      });
  },
});

export const collections = { projects };

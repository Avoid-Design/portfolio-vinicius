import { withBase } from '../utils/urls';

export type BrandAsset = {
  label: string;
  status: 'configured' | 'pending';
  src: string;
  width?: number;
  height?: number;
};

export const brandAssets = {
  primary: {
    label: 'Logo principal de Vinicius Rafael',
    status: 'configured',
    src: withBase('assets/logos/logo-principal-preto.png'),
    width: 2247,
    height: 2067,
  },
  cover: {
    label: 'Capa do portfólio',
    status: 'configured',
    src: withBase('assets/logos/logo-capa.png'),
    width: 807,
    height: 743,
  },
  support: {
    label: 'Logo de apoio',
    status: 'pending',
    src: withBase('assets/logos/logo-apoio.png'),
  },
} as const satisfies Record<string, BrandAsset>;

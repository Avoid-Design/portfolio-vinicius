export const PUBLIC_SITE_URL = 'https://avoid-design.github.io/portfolio-vinicius/';

export const site = {
  name: 'Vinicius Rafael',
  portfolioLabel: 'Portfólio',
  role: 'Designer Gráfico · Arte-finalista · Desenvolvimento Técnico Têxtil',
  statement: 'Do desenvolvimento visual à preparação para produção.',
  summary:
    'Experiência em design gráfico, arte-finalização e desenvolvimento técnico aplicado à produção têxtil e gráfica. Atuo na criação de layouts e modelos técnicos, além da preparação de arquivos para bordado, DTF, silk, sublimação, impressão e corte, sempre com foco em viabilidade produtiva, organização e qualidade final.',
  location: 'Bauru–SP · Brasil',
  education: 'Bacharelado em Design · Cursando',
  availability: 'Disponível para oportunidades presenciais, híbridas e remotas.',
  title: 'Vinicius Rafael — Design Gráfico e Desenvolvimento Técnico Têxtil',
  description:
    'Portfólio de design gráfico, arte-finalização, modelos técnicos, bordado, estamparia e preparação de arquivos para produção têxtil e gráfica.',
} as const;

export type ContactChannel = {
  label: string;
  value: string;
  status: 'configured' | 'pending';
  href?: string;
};

export const contacts: ContactChannel[] = [
  { label: 'E-mail', value: 'Pendente', status: 'pending' },
  { label: 'WhatsApp', value: 'Pendente', status: 'pending' },
  { label: 'LinkedIn', value: 'Pendente', status: 'pending' },
  { label: 'Behance', value: 'Pendente', status: 'pending' },
  { label: 'GitHub', value: 'Pendente', status: 'pending' },
  { label: 'Currículo', value: 'Disponível em breve', status: 'pending' },
];

export const navigation = [
  { label: 'Home', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Projetos', id: 'projetos' },
] as const;

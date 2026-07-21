import { withBase } from '../utils/urls';

export const programs = [
  {
    name: 'CorelDRAW',
    icon: { src: withBase('assets/programs/coreldraw.png'), width: 73, height: 71 },
  },
  {
    name: 'Adobe Illustrator',
    icon: { src: withBase('assets/programs/adobe-illustrator.png'), width: 73, height: 71 },
  },
  {
    name: 'Adobe Photoshop',
    icon: { src: withBase('assets/programs/adobe-photoshop.png'), width: 73, height: 71 },
  },
  {
    name: 'Software de bordado',
    icon: { src: withBase('assets/programs/software-bordado.png'), width: 72, height: 72 },
  },
  {
    name: 'Software RIP',
    icon: { src: withBase('assets/programs/software-rip.png'), width: 73, height: 71 },
  },
  {
    name: 'Microsoft Office',
    icon: { src: withBase('assets/programs/microsoft-office.png'), width: 74, height: 99 },
  },
] as const;

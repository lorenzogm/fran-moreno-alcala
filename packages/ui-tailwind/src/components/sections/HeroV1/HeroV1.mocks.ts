import { HeroV1Props } from './HeroV1';

export const HeroV1Mock: HeroV1Props = {
  title: 'Ring',
  logo: {
    src: 'https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg',
    alt: 'Ring Logo',
  },
  titleFirstRow: 'Data to enrich your',
  titleSecondRow: 'online business',
  subtitle:
    'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
  image: {
    src: 'https://api.lorem.space/image/fashion?w=1000&h=800',
    alt: '',
  },
  navigation: [
    { title: 'Product', link: '#' },
    { title: 'Features', link: '#' },
    { title: 'Marketplace', link: '#' },
    { title: 'Company', link: '#' },
  ],
  buttonPrimaryLink: '/',
  buttonPrimaryText: 'Get started',
  buttonSecondaryLink: '/',
  buttonSecondaryText: 'Live Demo',
};

import { HeroV1Props } from './HeroV1';

export const HeroV1Mock: HeroV1Props = {
  titleFirstRow: 'Data to enrich your',
  titleSecondRow: 'online business',
  subtitle:
    'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
  image: {
    src: 'https://api.lorem.space/image/fashion?w=1000&h=800',
    alt: '',
  },
  navigation: [
    { text: 'Product', link: '#' },
    { text: 'Features', link: '#' },
    { text: 'Marketplace', link: '#' },
    { text: 'Company', link: '#' },
  ],
  buttonPrimaryLink: '/',
  buttonPrimaryText: 'Get started',
  buttonSecondaryLink: '/',
  buttonSecondaryText: 'Live Demo',
};

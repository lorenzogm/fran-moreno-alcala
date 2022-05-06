import { ListV1Mock } from '../../modules/ListV1/ListV1.mocks';
import { ListV2Mock } from '../../modules/ListV2/ListV2.mocks';
import { ListV3Mock } from '../../modules/ListV3/ListV3.mocks';
import { HeaderV1Props } from './HeaderV1';

export const HeaderV1Mock: HeaderV1Props = {
  title: 'Ring',
  logo: {
    src: 'https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg',
    alt: 'Ring Logo',
  },
  navigation: [
    {
      title: 'Solutions',
      link: '',
      items: ListV2Mock.items,
      callsToAction: ListV3Mock,
    },
    {
      title: 'Docs',
      link: '/',
    },
    {
      title: 'Resources',
      link: '/',
      items: ListV2Mock.items,
      list: ListV1Mock,
    },
  ],
  primaryButtonLink: '/',
  primaryButtonTitle: 'Sign up',
  secondaryButtonLink: '/',
  secondaryButtonTitle: 'Sign in',
};

export interface ContentPageStoryblok {
  header?: (FooterStoryblok | GlobalStoryblok | GlobalReferenceStoryblok | HeaderStoryblok)[];
  footer?: GlobalReferenceStoryblok[];
  body?: (FeaturesV1Storyblok | HeroV1Storyblok)[];
  _uid: string;
  component: 'ContentPage';
  [k: string]: any;
}

export interface DefaultLayoutStoryblok {
  header?: any[];
  footer?: (FooterStoryblok | GlobalStoryblok | GlobalReferenceStoryblok | HeaderStoryblok)[];
  _uid: string;
  component: 'DefaultLayout';
  [k: string]: any;
}

export interface FeatureStoryblok {
  title: string;
  subtitle: string;
  _uid: string;
  component: 'Feature';
  [k: string]: any;
}

export interface FeaturesV1Storyblok {
  pretitle: string;
  title: string;
  subtitle: string;
  features: FeatureStoryblok[];
  _uid: string;
  component: 'FeaturesV1';
  [k: string]: any;
}

export interface FooterStoryblok {
  _uid: string;
  component: 'Footer';
  [k: string]: any;
}

export interface GlobalStoryblok {
  global?: (FooterStoryblok | GlobalStoryblok | GlobalReferenceStoryblok | HeaderStoryblok)[];
  _uid: string;
  component: 'Global';
  [k: string]: any;
}

export interface GlobalReferenceStoryblok {
  reference?: string;
  _uid: string;
  component: 'GlobalReference';
  [k: string]: any;
}

export interface HeaderStoryblok {
  navigation: NavigationItemStoryblok[];
  _uid: string;
  component: 'Header';
  [k: string]: any;
}

export interface HeroV1Storyblok {
  titleFirstRow: string;
  titleSecondRow: string;
  subtitle: string;
  buttonPrimaryText: string;
  buttonPrimaryLink:
    | {
        cached_url?: string;
        linktype?: string;
        [k: string]: any;
      }
    | {
        id?: string;
        cached_url?: string;
        linktype?: 'story';
        [k: string]: any;
      }
    | {
        url?: string;
        cached_url?: string;
        linktype?: 'asset' | 'url';
        [k: string]: any;
      }
    | {
        email?: string;
        linktype?: 'email';
        [k: string]: any;
      };
  buttonSecondaryText: string;
  buttonSecondaryLink:
    | {
        cached_url?: string;
        linktype?: string;
        [k: string]: any;
      }
    | {
        id?: string;
        cached_url?: string;
        linktype?: 'story';
        [k: string]: any;
      }
    | {
        url?: string;
        cached_url?: string;
        linktype?: 'asset' | 'url';
        [k: string]: any;
      }
    | {
        email?: string;
        linktype?: 'email';
        [k: string]: any;
      };
  image: {
    alt?: string;
    copyright?: string;
    id: number;
    filename: string;
    name: string;
    title?: string;
  };
  _uid: string;
  component: 'HeroV1';
  [k: string]: any;
}

export interface NavigationItemStoryblok {
  title: string;
  items?: NavigationItemStoryblok[];
  _uid: string;
  component: 'NavigationItem';
  [k: string]: any;
}

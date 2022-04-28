export interface ContentPageStoryblok {
  layout?: DefaultLayoutStoryblok[];
  main?: (
    | FeaturesV1Storyblok
    | FooterV1Storyblok
    | HeaderV1Storyblok
    | HeroV1Storyblok
    | HeroV2Storyblok
    | NavigationV1Storyblok
    | ProductDetailV1Storyblok
  )[];
  _uid: string;
  component: 'ContentPage';
  [k: string]: any;
}

export interface DefaultLayoutStoryblok {
  header?: (
    | FeaturesV1Storyblok
    | FooterV1Storyblok
    | HeaderV1Storyblok
    | HeroV1Storyblok
    | HeroV2Storyblok
    | NavigationV1Storyblok
    | ProductDetailV1Storyblok
  )[];
  footer?: (
    | FeaturesV1Storyblok
    | FooterV1Storyblok
    | HeaderV1Storyblok
    | HeroV1Storyblok
    | HeroV2Storyblok
    | NavigationV1Storyblok
    | ProductDetailV1Storyblok
  )[];
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

export interface FooterV1Storyblok {
  _uid: string;
  component: 'FooterV1';
  [k: string]: any;
}

export interface HeaderV1Storyblok {
  navigation: NavigationItemStoryblok[];
  _uid: string;
  component: 'HeaderV1';
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

export interface HeroV2Storyblok {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink:
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
  image?: {
    alt?: string;
    copyright?: string;
    id: number;
    filename: string;
    name: string;
    title?: string;
  };
  _uid: string;
  component: 'HeroV2';
  [k: string]: any;
}

export interface NavigationItemStoryblok {
  title: string;
  link?:
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
  items?: NavigationItemStoryblok[];
  _uid: string;
  component: 'NavigationItem';
  [k: string]: any;
}

export interface NavigationV1Storyblok {
  title?: string;
  navigation?: NavigationItemStoryblok[];
  _uid: string;
  component: 'NavigationV1';
  [k: string]: any;
}

export interface ProductDetailV1Storyblok {
  _uid: string;
  component: 'ProductDetailV1';
  [k: string]: any;
}

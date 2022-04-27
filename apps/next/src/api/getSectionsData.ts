import { SectionsProps, Story } from '@ring/cms-storyblok';
import { sectionFetcherMapping } from '@ring/commerce-swell';

type GetSectionsDataProps = {
  content: Story['content'];
  productSlug?: string;
};

export async function getSectionsData({ content, productSlug }: GetSectionsDataProps) {
  const sections: Array<string> = [
    ...content.main.map((section: SectionsProps) => section.component),
    // ...content.layout.map((section: SectionsProps) => section.component),
  ];

  // unique values
  const sectionsNameUnique = sections.filter((sectionName, index) => sections.indexOf(sectionName) === index);

  const sectionsWithFetcher = sectionsNameUnique
    // not all sections require more data
    .filter(
      (sectionName) =>
        // @ts-expect-error not all the sections are included in the mapping
        sectionFetcherMapping[sectionName] !== undefined,
    );
  // return the fetcher instead of the section name

  const sectionsFetcher = {
    names: sectionsWithFetcher,
    fetchers: sectionsWithFetcher.map((sectionName) => {
      // @ts-expect-error not all the sections are included in the mapping
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      const fetcher = sectionFetcherMapping[sectionName];

      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return fetcher({ productSlug });
    }),
  };

  const sectionListData = await Promise.all(sectionsFetcher.fetchers).catch((e) => console.error(e));

  if (!sectionListData) {
    throw new Error('"sectionListWithData must be defined');
  }

  const sectionsWithData = sectionsFetcher.names.reduce((previousValue, currentValue, currentIndex) => {
    return {
      ...previousValue,
      [currentValue]: sectionListData[currentIndex],
    };
  }, {});

  return sectionsWithData as SectionsProps;
}

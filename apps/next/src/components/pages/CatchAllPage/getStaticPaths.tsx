import { GetStaticPaths } from 'next';

export const getStaticPaths: GetStaticPaths = () => {
  // const { data } = await Storyblok.get('cdn/links/')

  // const paths = []
  // Object.keys(data.links).forEach((linkKey) => {
  //   if (data.links[linkKey].is_folder) {
  //     return
  //   }

  //   // get array for slug because of catch all
  //   const { slug } = data.links[linkKey]

  //   const slugAsArray = slug.split('/')
  //   const [firstPath] = slugAsArray

  //   if (firstPath !== 'global') {
  //     // create additional languages
  //     if (locales) {
  //       locales.forEach((locale) => {
  //         paths.push({
  //           params: { slug: slug === 'home' ? ['/'] : slugAsArray },
  //           locale,
  //         })
  //       })
  //     } else {
  //       paths.push({
  //         params: { slug: slug === 'home' ? ['/'] : slugAsArray },
  //       })
  //     }
  //   }
  // })

  return {
    paths: [],
    fallback: 'blocking',
  };
};

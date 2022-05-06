import { Image } from '@ring/ui-tailwind';

import { StoryblokImage } from '../types';

export function parseImage(image: StoryblokImage): Image {
  return { src: image.filename, alt: image.alt || image.name };
}

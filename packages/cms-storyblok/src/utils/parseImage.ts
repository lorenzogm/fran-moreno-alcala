import { Image } from '@ring/ui-tailwind';

export type StoryblokImage = {
  alt?: string;
  copyright?: string;
  id: number;
  filename: string;
  name: string;
  title?: string;
};

export function parseImage(image: StoryblokImage): Image {
  return { src: image.filename, alt: image.alt || image.name };
}

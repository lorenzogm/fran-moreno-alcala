import { VideoV1 as VideoV1UI } from '@ring/ui-tailwind';
import React, { ReactElement } from 'react';

import { VideoV1Storyblok } from '../../../types';
import { parseVideo } from '../../../utils/parseVideo';

type VideoV1Props = VideoV1Storyblok;

export function VideoV1({ video, autoPlay }: VideoV1Props): ReactElement {
  return <VideoV1UI autoPlay={autoPlay} video={parseVideo(video)} />;
}

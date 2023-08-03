export interface IVideo {
  src?: string;
  state?: VideoState;
  runningtime?: number;
}

export interface IImage {
  src?: string;
  state?: ImageState;
}

type VideoState = 'normal' | 'delete' | 'select' | 'video_play' | 'error';
type ImageState = 'normal' | 'delete' | 'select' | 'error';

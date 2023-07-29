export interface IVideo {
  type?: 'video';
  src?: string;
  state?: VideoState;
  runningtime?: number;
}

export interface IImage {
  type?: 'image';
  src?: string;
  state?: ImageState;
}

type VideoState = 'normal' | 'delete' | 'select' | 'video_play' | 'error';
type ImageState = 'normal' | 'delete' | 'select' | 'error';

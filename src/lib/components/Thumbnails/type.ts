export interface IThumbnails {
  type?: 'video' | 'image';
  src?: string;
  state?: VideoState;
  runningtime?: number;
}

type VideoState = 'normal' | 'delete' | 'select' | 'video_play' | 'error';

/**
export interface IVideo extends IThumbnails {
  state?: VideoState;
}

export interface IImage extends IThumbnails {
  state?: ImageState;
}

type VideoState = 'normal' | 'delete' | 'select' | 'video_play' | 'error';
type ImageState = 'normal' | 'delete' | 'select' | 'error';

 */

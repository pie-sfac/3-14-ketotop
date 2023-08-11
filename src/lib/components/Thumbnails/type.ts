export interface IVideo extends React.HTMLAttributes<HTMLElement> {
  src?: string;
  $state?: VideoState;
  runningtime?: number;
}

export interface IImage extends React.HTMLAttributes<HTMLElement> {
  src: string;
  $state?: ImageState;
}

type VideoState = 'normal' | 'delete' | 'select' | 'video_play' | 'error';
type ImageState = 'normal' | 'delete' | 'select' | 'error';

export interface IDelete extends React.HTMLAttributes<HTMLElement> {
  name: string;
}

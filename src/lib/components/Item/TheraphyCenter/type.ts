export interface ITheraphyCenterStrict {
  publishDate: PublishDate;
  videoName: string;
  uploadCount: number;
  isOutlined: boolean;
}

type PublishDate = [number, number, number];

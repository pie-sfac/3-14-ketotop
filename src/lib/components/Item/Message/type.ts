export interface IMessageStrict {
  publishDate: PublishDate;
  text: string;
  starRating: number;
  isOutlined: boolean;
}

type PublishDate = [number, number, number];

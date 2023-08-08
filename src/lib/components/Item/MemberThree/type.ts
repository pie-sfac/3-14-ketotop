export interface IMemberThreeStrict {
  profImgUrl?: string;
  name: string;
  phoneNumber: string;
  starRating: number;
  attendingPhysician: string;
  publishDate: PublishDate;
  isOutlined: boolean;
}

type PublishDate = [number, number, number];

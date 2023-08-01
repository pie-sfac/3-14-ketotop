export interface IMemberThreeStrict {
  profImgUrl?: string;
  name: string;
  phoneNumber: PhoneNumber;
  starRating: number;
  attendingPhysician: string;
  publishDate: PublishDate;
  isOutlined: boolean;
}

type PhoneNumber = [string, string, string];
type PublishDate = [number, number, number];

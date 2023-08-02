export interface IStaffStrict {
  profImgUrl?: string;
  name: string;
  phoneNumber: PhoneNumber;
  starRating: number;
  memberCount: number;
  memo: string;
  isOutlined: boolean;
}

type PhoneNumber = [string, string, string];

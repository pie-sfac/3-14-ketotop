export interface IRecordStrict {
  publishDate: PublishDate;
  templateName: string;
  attendingPhysician: string;
  isOutlined: boolean;
}

type PublishDate = [number, number, number];

export interface IMemberOneStrict {
  profImgUrl?: string;
  name: string;
  isMale: boolean;
  membershipDuration: MembershipDuration;
  membershipUses: MembershipUses;
  attendingPhysician: string;
  publishDate: PublishDate;
  isOutlined: boolean;
}

type MembershipDuration = [number, number, number, number, number, number];
type MembershipUses = [number, number];
type PublishDate = [number, number, number];

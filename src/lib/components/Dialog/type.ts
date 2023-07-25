// TODO: any 지워나가기
export type DialogProps = {
  title: string;
  description?: string;
  grayButtonName: string;
  priButtonName?: string;
  onCloseEffect: () => void;
  onGrayEffect: () => void;
  onPriEffect?: () => void;
  isOpen: boolean;
};

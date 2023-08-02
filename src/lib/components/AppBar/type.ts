import { IconName } from '@lib/foundation/Icon/type';

export interface IAppBar {
  size?: 'large' | 'medium' | 'full';
  type?: {
    icon?: { icon_L?: IconName; icon_R?: IconName };
    text?: { text_L?: string; text_R?: string };
    count?: { text?: string; count?: number };
  };
  pagename?: string;
}

// export interface IAppBar {
//   type: IAppBarIcon | IAppBarText | IAppBarCount;
//   pagename: string;
// }

// export interface IAppBarIcon {
//   icon_L?: string;
//   icon_R?: string;
// }

// export interface IAppBarText {
//   text_L?: string;
//   text_R?: string;
// }

// export interface IAppBarCount {
//   count?: number;
// }

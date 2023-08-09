import { IconName } from '../../foundation/Icon/type';

export interface IAppBar {
  pagename: string;
  size?: 'large' | 'medium' | 'full';
  type?: {
    icon?: { icon_L?: IconName; icon_R?: IconName };
    text?: { text_L?: string; text_R?: string };
    count?: { text?: string; count?: number };
  };
  iconAttr?: IconProps;
  pagenameAttr?: PagenameProps;
  buttonAttr?: ButtonProps;
  children?: React.ReactNode;
}

export interface IconProps extends React.HTMLAttributes<HTMLElement> {
  name?: string;
}

export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  text?: string;
  count?: string;
}

export interface PagenameProps extends React.HTMLAttributes<HTMLElement> {
  pagename?: string;
}

// 아래 ) 시도했는데 안된 것
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

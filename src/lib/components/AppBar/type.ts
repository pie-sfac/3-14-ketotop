export interface IAppBar extends React.HTMLAttributes<HTMLElement> {
  pagename: string;
  type: 'icon' | 'button' | 'plain';
  size?: 'large' | 'medium' | 'full';
  // children?: React.ReactNode[] | React.ReactNode; 오류발생
  children?: any;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export interface IconProps extends React.HTMLAttributes<HTMLElement> {
  name: string;
}

export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  text: string;
  count?: string;
}

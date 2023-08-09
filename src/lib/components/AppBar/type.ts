export interface IAppBar extends React.HTMLAttributes<HTMLElement> {
  pagename: string;
  size?: 'large' | 'medium' | 'full';
  type?: 'icon' | 'button';
  // children?: React.ReactNode[] | React.ReactNode; 오류발생
  children?: any;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export interface IconProps extends React.HTMLAttributes<HTMLElement> {
  name?: string;
}

export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  text?: string;
  count?: string;
}

export interface PagenameProps extends React.HTMLAttributes<HTMLElement> {
  text?: string;
}

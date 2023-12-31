export interface ButtonType {
  size: ButtonSize;
  state: ButtonState;
  children: React.ReactNode;
  [key: string]: any;
}

export type ButtonSize = 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'full';
export type ButtonState = 'normal' | 'enabled' | 'disabled';

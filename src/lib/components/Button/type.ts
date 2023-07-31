export interface ButtonType {
  size: ButtonSize;
  state: ButtonState;
  children: React.ReactNode;
}

type ButtonSize = 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'full';
type ButtonState = 'normal' | 'enabled' | 'disabled';

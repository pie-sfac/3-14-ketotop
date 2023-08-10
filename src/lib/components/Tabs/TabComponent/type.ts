export interface TabComponentProps {
  instance: 'Select' | 'Unselect';
  children?: React.ReactNode;
  isVisible: boolean;
  onClick: () => void;
}

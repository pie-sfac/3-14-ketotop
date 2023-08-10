export interface INavBar {
  children?: React.ReactNode;
  memberName?: string;
}

export interface INavBottom {
  onClickNavItem: (arg0: string) => void;
  selected: string;
  isLabel: boolean;
}

export interface INavBottomItem extends React.HTMLAttributes<HTMLElement> {
  icon: string;
  label: string;
  isSelected: boolean;
  isLabel: boolean;
}

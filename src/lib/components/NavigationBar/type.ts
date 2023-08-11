export interface INavBar {
  page: 'menulist' | 'defalut';
  menuList?: (string | undefined)[];
  selected?: number;
  onMenuClick?: (idx: number) => void;
  onLogoClick?: () => void;
  onMypageClick?: () => void;
  onNoticeClick?: () => void;
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

export interface INavTopMenu {
  instance: 'select' | 'unselect';
  children?: any;
  onClick: () => void;
}

export interface INavTopProfile {
  children?: React.ReactNode;
  memberName?: string;
  onMypageClick?: () => void;
  onNoticeClick?: () => void;
}

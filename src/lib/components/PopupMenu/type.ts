export interface PopupMenuProps {
  /** 상단 컴포넌트 종류 */
  header?: 'NavigationBar' | 'AppBar';
  itemList: [string?] | [string?, string?] | [string?, string?, string?] | [string?, string?, string?, string?];
}

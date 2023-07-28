export interface PopupMenuProps {
  /** 상단 컴포넌트 종류 */
  headerType?: 'NavigationBar' | 'AppBar';
  itemList: [string?] | [string?, string?] | [string?, string?, string?] | [string?, string?, string?, string?];
}

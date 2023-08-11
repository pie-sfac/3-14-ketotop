import Display from './Display';
import List from './List';

/**
 * @description - PopupMenu 컴포넌트
 * @function Display - PopupMenu Display 스타일 ( 상위 컴포넌트 )
 * @function List - PopupMenu List 스타일 ( 하위 컴포넌트 )
 */
const PopupMenu = {
  /**
   * @description - PopupMenu Display 스타일
   * @param { 'NavigationBar' | 'AppBar' } $headerType? 상단 컴포넌트 종류 (옵셔널)
   * @param { React.ReactNode } children 자식 컴포넌트
   */
  Display,
  /**
   * @description - PopupMenu List 스타일
   * @params
   * { string } item 리스트 항목
   */
  List,
};

export default PopupMenu;

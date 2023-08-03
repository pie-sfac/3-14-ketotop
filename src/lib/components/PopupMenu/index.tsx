import { FC } from 'react';
import { PopupMenuProps } from './type';
import * as St from './styles';
import PopupMenuList from './PopupMenuList';

/**
 * @description - PopupMenu 스타일
 * @params
 * { 'NavigationBar' | 'AppBar' } headerType? 상단 컴포넌트 종류 (옵셔널)
 * @params
 * {[string?] | [string?, string?] | [string?, string?, string?] | [string?, string?, string?, string?]} itemList 항목 리스트
 */

const PopupMenu: FC<PopupMenuProps> = ({ headerType, itemList }) => {
  return (
    <>
      <St.PopupMenuStyles headerType={headerType} itemList={itemList}>
        <PopupMenuList itemList={itemList} />
      </St.PopupMenuStyles>
    </>
  );
};

export default PopupMenu;

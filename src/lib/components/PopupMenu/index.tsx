import { FC } from 'react';
import { PopupMenuProps } from './type';
import * as St from './styles';
import PopupMenuList from './PopupMenuList';

const PopupMenuDisplay: FC<PopupMenuProps> = ({ headerType, itemList }) => {
  return (
    <>
      <St.PopupMenuStyles headerType={headerType} itemList={itemList}>
        <PopupMenuList itemList={itemList} />
      </St.PopupMenuStyles>
    </>
  );
};

export default PopupMenuDisplay;

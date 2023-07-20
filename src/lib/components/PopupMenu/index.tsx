import { FC } from 'react';
import { PopupMenuProps } from './type';
import { PopupMenuStyles } from './styles';
import PopupMenuList from './PopupMenuList';

const PopupMenuDisplay: FC<PopupMenuProps> = ({ header, itemList }) => {
  return (
    <>
      <PopupMenuStyles header={header} itemList={itemList}>
        <PopupMenuList itemList={itemList} />
      </PopupMenuStyles>
    </>
  );
};

export default PopupMenuDisplay;

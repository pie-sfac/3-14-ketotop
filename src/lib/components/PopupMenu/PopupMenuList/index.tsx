import { FC } from 'react';
import { ListProps } from './type';
import { PopupMenuListStyles } from './styles';

const PopupMenuList: FC<ListProps> = ({ itemList }) => {
  return itemList.map((item, index) => <PopupMenuListStyles key={index}>{item}</PopupMenuListStyles>);
};

export default PopupMenuList;

import { FC } from 'react';
import { ListProps } from './type';
import * as St from './styles';

const PopupMenuList: FC<ListProps> = ({ itemList }) => {
  return itemList.map((item, index) => <St.PopupMenuListStyles key={index}>{item}</St.PopupMenuListStyles>);
};

export default PopupMenuList;

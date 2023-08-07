import { FC } from 'react';
import { ListProps } from './type';
import * as St from './styles';

/**
 * @description - PopupMenu List 스타일
 * @params
 * { string } item 리스트 항목
 */

const List: FC<ListProps> = ({ item }) => {
  return <St.ListStyles key={item}>{item}</St.ListStyles>;
};

export default List;

import { FC } from 'react';
import { Fnd } from '../../..';
import { ListProps } from './type';
import * as St from './styles';

/**
 * @description - PopupMenu List 스타일
 * @params
 * { string } item 리스트 항목
 */
const List: FC<ListProps> = ({ item, ...rest }) => {
  return (
    <St.ListStyles key={item} {...rest}>
      <Fnd.TypographyStyles.Body2>{item}</Fnd.TypographyStyles.Body2>
    </St.ListStyles>
  );
};

export default List;

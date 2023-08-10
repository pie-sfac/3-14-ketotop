import { Fnd } from '../../../..';
import { INavBottomItem } from '../../type';
import * as St from './styles';

export const NavItem = ({ icon, label, isSelected, isLabel, onClick }: INavBottomItem) => {
  const selectedIconName = `appbar_${icon}_24px`;
  const generalIconName = `appbar_${icon}_gray_24px`;

  return (
    <St.NavItem onClick={onClick}>
      {isSelected ? (
        <Fnd.IconStyles name={selectedIconName}></Fnd.IconStyles>
      ) : (
        <Fnd.IconStyles name={generalIconName}></Fnd.IconStyles>
      )}
      {isLabel && <Fnd.TypographyStyles.Caption2>{label}</Fnd.TypographyStyles.Caption2>}
    </St.NavItem>
  );
};

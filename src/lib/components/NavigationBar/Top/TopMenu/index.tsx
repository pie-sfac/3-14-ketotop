import { INavTopMenu } from '../../type';
import * as St from './styles';

import { Fnd } from '../../../../';

const NavTopMenu = ({ instance, children, onClick }: INavTopMenu) => {
  return (
    <Fnd.TypographyStyles.Body3 as={'div'}>
      <St.ItemsListWrapper $instance={instance} onClick={onClick}>
        <li>{children}</li>
      </St.ItemsListWrapper>
    </Fnd.TypographyStyles.Body3>
  );
};

export default NavTopMenu;

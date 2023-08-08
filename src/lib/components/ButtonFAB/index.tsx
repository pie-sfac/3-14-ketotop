import * as St from './styles';
import { Fnd } from '../..';
import { FAB_Type } from './type';

const FloatingActionButtons = ({ type, children }: FAB_Type) => {
  let TypographyComponent;
  switch (type) {
    case 'Round':
      TypographyComponent = Fnd.TypographyStyles.Body2;
      break;
    case 'Circle':
      TypographyComponent = Fnd.TypographyStyles.Body2;
      break;
  }
  return(
    <>
    <Fnd.FoundationGlobalStyles />
      <St.FabWrapper $typename={type}>
        <TypographyComponent>{children}</TypographyComponent>
      </St.FabWrapper>
    </>
  );
}

export default FloatingActionButtons;
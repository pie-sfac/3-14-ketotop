import { Fnd } from '@lib/index';
import {LabelType} from './type';
import * as St from './styles';

const Label = ({ type,bgcolor,fontcolor, children }: LabelType) => {
  let TypographyComponent;

  switch (type) {
    case 'Rectangle':
      TypographyComponent = Fnd.TypographyStyles.Caption2;
      break;
      case 'Round':
      TypographyComponent = Fnd.TypographyStyles.Caption1;
      break;
  }
  return (
    <>
      <Fnd.FoundationGlobalStyles />
        <St.LabelWrapper $typename={type} $bgcolor={bgcolor} $fontcolor={fontcolor}>
          <TypographyComponent>{children}</TypographyComponent>
        </St.LabelWrapper>
    </>
  );
};

export default Label;
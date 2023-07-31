import * as St from './styles';
import { Fnd } from '../../../index';
import { ButtonType } from '../type';

/** Props = size , state('normal','enabled','disabled')  */
const Contained = ({ size, state, children }: ButtonType) => {
  let TypographyComponent;

  switch (size) {
    case 'x-small':
      TypographyComponent = Fnd.TypographyStyles.Caption1;
      break;
    case 'small':
    case 'medium':
      TypographyComponent = Fnd.TypographyStyles.Body4;
      break;
    case 'large':
    case 'x-large':
    case 'full':
      TypographyComponent = Fnd.TypographyStyles.Body1;
      break;
  }
  const isDisabled = state === 'disabled';
  return (
    <>
      <Fnd.FoundationGlobalStyles />
      <St.ButtonWrapper $size={size} $state={state} disabled={isDisabled}>
        <TypographyComponent>{children}</TypographyComponent>
      </St.ButtonWrapper>
    </>
  );
};
export default Contained;

import * as St from './styles';
import { Fnd } from '@lib/index';
import { ButtonType } from '@lib/components/Button/type';

/** Props = size , state('normal','enabled','disabled')  */
const Outline = ({ size, state, children }: ButtonType) => {
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
export default Outline;

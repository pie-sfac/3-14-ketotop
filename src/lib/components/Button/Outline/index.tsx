import * as St from './styles';
import { Fnd } from '@lib/index';
import { ButtonType } from '@lib/components/Button/type';

export const Outline = ({ size, state, children }: ButtonType) => {
  let TypographyComponent;

  switch (size) {
    case 'x-small':
      TypographyComponent = Fnd.TypographyStyles.Caption1;
      break;
    case 'small':
      TypographyComponent = Fnd.TypographyStyles.Body4;
      break;
    case 'medium':
      TypographyComponent = Fnd.TypographyStyles.Body4;
      break;
    case 'large':
      TypographyComponent = Fnd.TypographyStyles.Body1;
      break;
    case 'x-large':
      TypographyComponent = Fnd.TypographyStyles.Body1;
      break;
    case 'full':
      TypographyComponent = Fnd.TypographyStyles.Body1;
      break;
    default:
      TypographyComponent = Fnd.TypographyStyles.Caption1;
      break;
  }

  return (
    <>
      <Fnd.FoundationGlobalStyles />
      <St.ButtonWrapper size={size} state={state} disabled={state === 'disabled'}>
        <TypographyComponent>{children}</TypographyComponent>
      </St.ButtonWrapper>
    </>
  );
};

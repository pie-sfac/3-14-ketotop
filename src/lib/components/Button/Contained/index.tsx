import * as St from './styles';
import { Fnd } from '../../../index';
import { ButtonType } from '../type';
/**
 * @description - Contained 스타일의 버튼 (모든 props 필수)
 * @params
 * { 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'full' } size 버튼 크기
 * @params
 * { 'normal' | 'enabled' | 'disabled' } state 버튼 상태
 */
const Contained = ({ size, state, children, ...rest }: ButtonType) => {
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
      <St.ButtonWrapper $size={size} $state={state} disabled={isDisabled} {...rest}>
        <TypographyComponent>{children}</TypographyComponent>
      </St.ButtonWrapper>
    </>
  );
};
export default Contained;

import * as St from './styles';
import { Fnd } from '../../..';
import { ButtonType } from '../type';

/**
 * @description - Outline 스타일의 버튼 (모든 props 필수)
 * @params
 * { 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'full' } size 버튼 크기
 * @params
 * { 'normal' | 'enabled' | 'disabled' } state 버튼 상태
 */
const Outline = ({ size, state, children, ...rest }: ButtonType) => {
  let TypographyComponent;
  if (!size) throw new Error('size props는 필수입니다.');
  if (!state) throw new Error('state props는 필수입니다.');
  if (!children) throw new Error('children props는 필수입니다.');

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
export default Outline;

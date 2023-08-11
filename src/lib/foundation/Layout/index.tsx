import { ILayout } from './type';
import { LayoutContainer } from './styles';

const Layout = ({ children, $size = 'tablet', $system = 'android' }: ILayout) => {
  if ($system !== 'android' && $system !== 'ios') throw new Error('$system 값에 오류가 있습니다');
  if ($size !== 'tablet' && $size !== 'pc' && $size !== 'phone') throw new Error('$size 값에 오류가 있습니다');

  return (
    <LayoutContainer $size={$size} $system={$system}>
      {children}
    </LayoutContainer>
  );
};

export default Layout;

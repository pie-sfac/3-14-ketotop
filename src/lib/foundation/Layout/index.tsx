import { ILayout } from './type';
import { LayoutContainer } from './styles';

const Layout = ({ children, size = 'tablet', system = 'android' }: ILayout) => {
  return (
    <LayoutContainer size={size} system={system}>
      {children}
    </LayoutContainer>
  );
};

export default Layout;

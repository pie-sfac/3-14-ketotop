import { Fnd } from '../../index';
import Icon from './Icon';
import Button from './Button';
import * as St from './styles';
import { IAppBar } from './type';

/** @description AppBar 스타일의 컴포넌트
 * @params
 * {size : 'large' | 'medium' | 'full'}
 * @params
 * {pagename : string}
 * @params
 * {type : {icon : {icon_R : string, icon_L : string}}, {text : {text_R : string, text_L : string}}, {count : {count : number, text : string}}} */

const Wrapper = ({ pagename, size = 'large', type, children, onClick }: IAppBar) => {
  if (!pagename) throw new Error('pagename prop is required');
  if (size !== 'full' && size !== 'large' && size !== 'medium')
    throw new Error(`size prop should be 'large' | 'medium' | 'full'`);
  if (!type) throw new Error(`type prop is required 'plain' | 'icon' | 'button'`);
  if (type === 'button' && !children) throw new Error(`Wrapper의 자식으로 Button 컴포넌트가 필요합니다.`);
  if (type === 'icon' && !children) throw new Error(`Wrapper의 자식으로 Icon 컴포넌트가 필요합니다.`);

  return (
    <>
      <Fnd.FoundationGlobalStyles />
      <Fnd.TypographyStyles.Body1 as={'div'}>
        <St.AppBarContainer size={size}>
          {/* 기본타입 */}
          {type === 'plain' && (
            <St.DefalutLayout>
              <St.FixedItems>
                <St.IconBox>
                  {/* 아이콘 추후 자동완성 되도록 만들기 */}
                  <Icon name={`back_24px`} onClick={onClick} />
                </St.IconBox>
                <St.PageName>{pagename}</St.PageName>
              </St.FixedItems>
            </St.DefalutLayout>
          )}

          {/* large, medium 사이즈 */}
          {size !== 'full' && children && (
            <St.DefalutLayout>
              <St.FixedItems>
                <St.IconBox>
                  <Icon name={`back_24px`} onClick={onClick} />
                </St.IconBox>
                <St.PageName>{pagename}</St.PageName>
              </St.FixedItems>
              {/* 아이콘 타입 */}
              {type === 'icon' && (
                <St.IconItems>
                  {children.length ? (
                    <>
                      <St.IconBox>{children[0]}</St.IconBox>
                      <St.IconBoxNomargin>{children[1]}</St.IconBoxNomargin>
                    </>
                  ) : (
                    <St.IconBoxNomargin>{children}</St.IconBoxNomargin>
                  )}
                </St.IconItems>
              )}
              {/* 버튼 타입 */}
              {type === 'button' && (
                <St.IconItems>
                  {children.length ? (
                    <>
                      {children[0]}
                      {children[1]}
                    </>
                  ) : (
                    children
                  )}
                </St.IconItems>
              )}
            </St.DefalutLayout>
          )}

          {/* full 사이즈 */}
          {size === 'full' && (
            <St.FullPopupLayout>
              <St.PageName>{pagename}</St.PageName>
              <St.IconBoxNomargin>
                <Icon name={`delete_24px`} onClick={onClick} />
              </St.IconBoxNomargin>
            </St.FullPopupLayout>
          )}
        </St.AppBarContainer>
      </Fnd.TypographyStyles.Body1>
    </>
  );
};

const AppBar = { Wrapper, Icon, Button };

export default AppBar;

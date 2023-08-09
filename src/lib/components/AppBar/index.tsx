import { Fnd } from '../../index';
import AppBarIcon from './Icon';
import * as St from './styles';
import { IAppBar } from './type';

/** @description AppBar 스타일의 컴포넌트
 * @params
 * {size : 'large' | 'medium' | 'full'}
 * @params
 * {pagename : string}
 * @params
 * {type : {icon : {icon_R : string, icon_L : string}}, {text : {text_R : string, text_L : string}}, {count : {count : number, text : string}}} */

const AppBar = ({ pagename, size = 'large', type, children, onClick }: IAppBar) => {
  if (!pagename) throw new Error('pagename prop is required');
  if (size !== 'full' && size !== 'large' && size !== 'medium')
    throw new Error(`size prop should be 'large' | 'medium' | 'full'`);
  // if (type) throw new Error(`size prop should be 'large' | 'medium' | 'full'`);

  return (
    <Fnd.TypographyStyles.Body1 as={'div'}>
      <St.AppBarContainer size={size}>
        {/* 기본타입 */}
        {!type && (
          <St.DefalutLayout>
            <St.FixedItems>
              <St.IconBox>
                <AppBarIcon name={`back`} onClick={onClick} />
              </St.IconBox>
              <div>{pagename}</div>
            </St.FixedItems>
          </St.DefalutLayout>
        )}

        {/* large, medium 사이즈 */}
        {size !== 'full' && children && (
          <St.DefalutLayout>
            <St.FixedItems>
              <St.IconBox>
                <AppBarIcon name={`back`} onClick={onClick} />
              </St.IconBox>
              <div>{pagename}</div>
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
        {size === 'full' && children && (
          <St.FullPopupLayout>
            <div>{pagename}</div>
            <St.IconBoxNomargin>
              <AppBarIcon name={`delete`} onClick={onClick} />
            </St.IconBoxNomargin>
          </St.FullPopupLayout>
        )}
      </St.AppBarContainer>
    </Fnd.TypographyStyles.Body1>
  );
};

export default AppBar;

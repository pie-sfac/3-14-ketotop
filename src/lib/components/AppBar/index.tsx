import { Fnd } from '../../index';
import AppBarButton from './Button';
import AppBarIcon from './Icon';
import AppBarPagename from './Page';
import * as St from './styles';
import { IAppBar } from './type';

/** @description AppBar 스타일의 컴포넌트
 * @params
 * {size : 'large' | 'medium' | 'full'}
 * @params
 * {pagename : string}
 * @params
 * {type : {icon : {icon_R : string, icon_L : string}}, {text : {text_R : string, text_L : string}}, {count : {count : number, text : string}}} */

const AppBar = ({ pagename, size = 'large', type, iconAttr, buttonAttr, pagenameAttr }: IAppBar) => {
  if (!pagename) throw new Error('pagename prop is required');
  if (size !== 'full' && size !== 'large' && size !== 'medium')
    throw new Error(`size prop should be 'large' | 'medium' | 'full'`);
  // if (type) throw new Error(`size prop should be 'large' | 'medium' | 'full'`);

  return (
    <Fnd.TypographyStyles.Body1 as={'div'}>
      <St.AppBarContainer size={size}>
        {
          // full (페이지네임 + X 아이콘)
          size === 'full' ? (
            <St.FullPopupLayout>
              <AppBarPagename pagename={pagename} {...pagenameAttr} />
              <St.IconBoxNomargin>
                <AppBarIcon name={`delete`} />
              </St.IconBoxNomargin>
            </St.FullPopupLayout>
          ) : (
            // large or medium (<뒤로가기아이콘 + 페이지네임 + 아이콘||텍스트)
            <St.DefalutLayout>
              <St.FixedItems>
                <St.IconBox>
                  <AppBarIcon name={`back`} />
                </St.IconBox>
                <AppBarPagename pagename={pagename} {...pagenameAttr} />
              </St.FixedItems>

              {type?.icon && (
                <St.IconItems>
                  {type?.icon.icon_L && (
                    <St.IconBox>
                      <AppBarIcon name={`${type.icon?.icon_L}`} {...iconAttr} />
                    </St.IconBox>
                  )}
                  {type.icon.icon_R && (
                    <St.IconBoxNomargin>
                      <AppBarIcon name={`${type.icon?.icon_R}`} {...iconAttr} />
                    </St.IconBoxNomargin>
                  )}
                </St.IconItems>
              )}

              {type?.text && (
                <St.IconItems>
                  {type?.text.text_L && <AppBarButton text={`${type?.text?.text_L}`} {...buttonAttr} />}
                  {type?.text.text_R && <AppBarButton text={`${type?.text?.text_R}`} {...buttonAttr} />}
                </St.IconItems>
              )}

              {type?.count && (
                <AppBarButton text={`${type?.count.text}`} count={`${type?.count.count}`} {...buttonAttr} />
              )}
            </St.DefalutLayout>
          )
        }
      </St.AppBarContainer>
    </Fnd.TypographyStyles.Body1>
  );
};

export default AppBar;

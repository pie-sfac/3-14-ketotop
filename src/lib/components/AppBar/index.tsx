import { Fnd } from '../../index';
import * as St from './styles';
import { IAppBar } from './type';

/** @description AppBar 스타일의 컴포넌트
 * @params
 * {size : 'large' | 'medium' | 'full'}
 * @params
 * {pagename : string}
 * @params
 * {type : {icon : {icon_R : string, icon_L : string}}, {text : {text_R : string, text_L : string}}, {count : {count : number, text : string}}} */

const AppBar = ({ pagename, size = 'large', type }: IAppBar) => {
  return (
    <Fnd.TypographyStyles.Body1>
      <St.AppBarContainer size={size}>
        {
          // full (페이지네임 + X 아이콘)
          size === 'full' ? (
            <St.FullPopupLayout>
              <div>{pagename}</div>
              <St.IconBoxNomargin>
                <Fnd.IconStyles name={'delete'} />
              </St.IconBoxNomargin>
            </St.FullPopupLayout>
          ) : (
            // large or medium (<뒤로가기아이콘 + 페이지네임 + 아이콘||텍스트)
            <St.DefalutLayout>
              <St.FixedItems>
                <St.IconBox>
                  <Fnd.IconStyles name={`back`} />
                </St.IconBox>
                <div>{pagename}</div>
              </St.FixedItems>

              {type?.icon && (
                <St.IconItems>
                  {type?.icon.icon_L && (
                    <St.IconBox>
                      <Fnd.IconStyles name={`${type.icon?.icon_L}`} />
                    </St.IconBox>
                  )}
                  {type.icon.icon_R && (
                    <St.IconBoxNomargin>
                      <Fnd.IconStyles name={`${type.icon?.icon_R}`} />
                    </St.IconBoxNomargin>
                  )}
                </St.IconItems>
              )}

              {type?.text && (
                <St.IconItems>
                  {type?.text.text_L && <St.TextBox>{type?.text?.text_L}</St.TextBox>}
                  {type?.text.text_R && <St.TextBox>{type?.text?.text_R}</St.TextBox>}
                </St.IconItems>
              )}

              {type?.count && (
                <St.TextBox>
                  {type?.count.text}({type?.count.count})
                </St.TextBox>
              )}
            </St.DefalutLayout>
          )
        }
      </St.AppBarContainer>
    </Fnd.TypographyStyles.Body1>
  );
};

export default AppBar;

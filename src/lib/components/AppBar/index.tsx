import { Fnd } from '../../index';
import * as St from './styles';
import { IAppBar } from './type';

const AppBar = ({ pagename = '페이지네임', size = 'large', type }: IAppBar) => {
  return (
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
  );
};

export default AppBar;

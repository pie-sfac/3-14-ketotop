import { IconStyles } from '@lib/foundation';
import {
  AppBarContainer,
  DefalutLayout,
  FixedItems,
  FullPopupLayout,
  IconBox,
  IconBoxNomargin,
  IconItems,
  TextBox,
} from './styles';
import { IAppBar } from './type';

const AppBar = ({ pagename = '페이지네임', size = 'large', type }: IAppBar) => {
  return (
    <AppBarContainer size={size}>
      {
        // full (페이지네임 + X 아이콘)
        size === 'full' ? (
          <FullPopupLayout>
            <div>{pagename}</div>
            <IconBoxNomargin>
              <IconStyles name={'delete'} />
            </IconBoxNomargin>
          </FullPopupLayout>
        ) : (
          // large or medium (<뒤로가기아이콘 + 페이지네임 + 아이콘||텍스트)
          <DefalutLayout>
            <FixedItems>
              <IconBox>
                <IconStyles name={`back`} />
              </IconBox>
              <div>{pagename}</div>
            </FixedItems>

            {type?.icon && (
              <IconItems>
                {type?.icon.icon_L && (
                  <IconBox>
                    <IconStyles name={`${type.icon?.icon_L}`} />
                  </IconBox>
                )}
                {type.icon.icon_R && (
                  <IconBoxNomargin>
                    <IconStyles name={`${type.icon?.icon_R}`} />
                  </IconBoxNomargin>
                )}
              </IconItems>
            )}

            {type?.text && (
              <IconItems>
                {type?.text.text_L && <TextBox>{type?.text?.text_L}</TextBox>}
                {type?.text.text_R && <TextBox>{type?.text?.text_R}</TextBox>}
              </IconItems>
            )}

            {type?.count && (
              <TextBox>
                {type?.count.text}({type?.count.count})
              </TextBox>
            )}
          </DefalutLayout>
        )
      }
    </AppBarContainer>
  );
};

export default AppBar;

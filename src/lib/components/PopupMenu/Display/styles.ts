import styled from 'styled-components';
import { PopupMenuProps } from './type';
import { Fnd } from '../../..';

export const PopupMenuStyles = styled.section<PopupMenuProps>`
  /** Style */
  display: inline-flex;
  flex-direction: column;
  border-radius: 1rem;
  border: 0.1rem solid var(--Line_200);
  background: var(--Bg_Wh);
  color: var(--Text_900);

  /** Shadow */
  ${Fnd.ShadowBoxStyles}

  /** 조건부 렌더링 */
  ${(props) => {
    switch (props.$headerType) {
      case 'NavigationBar':
        return 'margin-top: 0.6rem;';
      case 'AppBar':
        return 'margin-top: 0.8rem;';
      default:
        return '';
    }
  }}
`;

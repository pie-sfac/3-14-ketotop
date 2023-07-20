import styled from 'styled-components';
import { PopupMenuProps } from './type';

export const PopupMenuStyles = styled.section<PopupMenuProps>`
  /** Style */
  display: inline-flex;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid var(--Line_200);
  background: var(--Bg_Wh);
  /** Shadow */
  box-shadow: 0px 0px 8px 2px var(--Shadow);

  /** 조건부 렌더링 */
  ${(props) => {
    switch (props.header) {
      case 'NavigationBar':
        return 'margin-top: 6px;';
      case 'AppBar':
        return 'margin-top: 8px;';
      default:
        return '';
    }
  }}
`;

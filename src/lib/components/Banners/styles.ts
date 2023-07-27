import styled from 'styled-components';
import { IBanners } from './type';
// import { PopupMenuProps } from './type';

export const BannersContainer = styled.div<IBanners>`
  display: flex;
  justify-content: space-around;

  width: 312px;
  height: 80px;
  border-radius: 10px;

  color: white;
  cursor: pointer;

  background-color: blue;
`;
//   /** Style */
//   display: inline-flex;
//   flex-direction: column;
//   border-radius: 10px;
//   border: 1px solid var(--Line_200);
//   background: var(--Bg_Wh);
//   /** Shadow */
//   box-shadow: 0px 0px 8px 2px var(--Shadow);
//   /** 조건부 렌더링 */
//   ${(props) => {
//     switch (props.header) {
//       case 'NavigationBar':
//         return 'margin-top: 6px;';
//       case 'AppBar':
//         return 'margin-top: 8px;';
//       default:
//         return '';
//     }
//   }}
// `;

// 박스 (높이, 넓이)
// 바탕색 (색변화)
// 이미지 (사이즈조절,위치조정??)
// 텍스트 (크기,위치조정??)

import styled from 'styled-components';

export const TabWrapper = styled.section`
  display: flex;
  width: 1245px;
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 28px;

  // 스크롤바 숨기기
  overflow-x: auto;
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
  &::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }
`;

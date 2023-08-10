import styled from 'styled-components';

export const TabWrapper = styled.section`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  padding-left: 2rem;
  padding-top: 2rem;
  padding-bottom: 2.8rem;

  // 스크롤바 숨기기
  overflow-x: auto;
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
  &::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }
`;

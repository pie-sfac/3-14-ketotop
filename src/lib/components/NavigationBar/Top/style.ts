import { styled } from 'styled-components';

export const NavTopContainer = styled.div`
  height: 50px;
  width: 1024px;

  position: relative;
  display: flex;
  align-items: center;
  padding: 0 2.4rem;

  color: var(--Text_900);

  background-color: white;
  box-sizing: border-box;

  // 타이포그래피 body3으로 바꿔줘야 함
  font-size: 1.4rem;
  font-weight: 500;

  border-bottom: 1px solid var(--Gray_200);
`;

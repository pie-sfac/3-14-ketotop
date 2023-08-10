import { styled } from 'styled-components';

export const NavBottomContainer = styled.div`
  height: 4.7rem;
  width: 102.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-top: 0.1rem solid var(--Line_200);
  background-color: white;

  padding-bottom: 3.6rem;
  // 임시 스타일
  margin-bottom: 1rem;
`;

// 메뉴 목록
export const MenuList = styled.div`
  width: 40.8rem;

  display: flex;
  justify-content: space-between;
`;

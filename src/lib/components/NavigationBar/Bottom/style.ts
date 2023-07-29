import { styled } from 'styled-components';

export const NavBottomContainer = styled.div`
  height: 47px;
  width: 1024px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-top: 1px solid var(--Line_200);
  background-color: white;

  padding-bottom: 36px;
  // 임시 스타일
  margin-bottom: 10px;
`;

// 메뉴 목록
export const MenuList = styled.div`
  width: 408px;

  display: flex;
  justify-content: space-between;
`;

// 각
export const Menu = styled.div`
  width: 56px;

  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;
`;

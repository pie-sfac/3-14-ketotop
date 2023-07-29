import { styled } from 'styled-components';

export const NavTopContainer = styled.div`
  height: 50px;
  width: 1024px;

  position: relative;
  display: flex;
  align-items: center;
  padding: 0 24px;

  color: var(--Text_900);

  background-color: white;
  box-sizing: border-box;
  // 임시설정
  margin-bottom: 10px;

  font-size: 14px;
  font-weight: 500;
`;

// 로고 + 메뉴
export const FixedItems = styled.div`
  display: flex;

  position: absolute;
  right: 32px;
  top: 50%;
  transform: translate(0, -50%);
`;

// 메뉴 리스트
export const ItemsList = styled.ul`
  display: flex;
  li {
    margin-left: 32px;
    cursor: pointer;
    &.focused {
      color: var(--Pri_500);
    }
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  margin: 0 16px;

  cursor: pointer;

  // 구독상태
  div {
    width: 62px;
    height: 21px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 4px;
    font-size: 10px;
    color: var(--Pri_500);
    background-color: var(--Bg_100);
  }

  // 사용자 이름
  span {
    display: inline-block;

    margin: 0 8px;
  }
`;

// 분류 선
export const Line100 = styled.div`
  height: 22px;
  width: 1px;

  background-color: var(--Line_200);
`;

// 아이콘 마진 설정
export const IconWrapper = styled.div`
  margin-left: 12px;
  img {
    cursor: pointer;
  }
`;

import { styled } from 'styled-components';

export const NavTopContainer = styled.div`
  height: 50px;
  width: 1024px;

  position: relative;
  display: flex;
  align-items: center;
  padding: 0 24px;

  color: var(--Text_900);
  // 임시설정
  box-sizing: border-box;
  background-color: white;
  margin-bottom: 10px;

  font-size: 14px;
  font-weight: 500;
`;

export const ItemsList = styled.ul`
  display: flex;
  li {
    margin-left: 32px;
    cursor: pointer;
  }
`;

export const FixedItems = styled.div`
  display: flex;
  position: absolute;
  right: 32px;
`;
export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 0 16px;

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
  span {
    display: inline-block;
    margin: 0 8px;
  }
`;

export const Line100 = styled.div`
  height: 22px;
  width: 1px;
  background-color: var(--Line_200);
`;

export const IconWrapper = styled.div`
  margin-left: 12px;
`;

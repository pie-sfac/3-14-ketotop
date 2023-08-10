import { styled } from 'styled-components';

// 로고 + 메뉴
export const FixedItems = styled.div`
  display: flex;
  align-items: center;

  position: absolute;
  right: 3.2rem;
  top: 50%;
  transform: translate(0, -50%);
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  margin: 0 1.6rem;

  cursor: pointer;

  // 사용자 이름
  span {
    display: inline-block;

    margin: 0 0.8rem;
  }
`;

// 구독상태
export const Subscribe = styled.div`
  width: 6.2rem;
  height: 2.1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0.4rem;
  color: var(--Pri_500);
  background-color: var(--Bg_100);
`;

// 분류 선
export const Line100 = styled.div`
  height: 2.2rem;
  width: 0.1rem;

  background-color: var(--Line_200);
`;

// 아이콘 마진 설정
export const IconWrapper = styled.div`
  margin-left: 1.2rem;
  img {
    cursor: pointer;
  }
`;

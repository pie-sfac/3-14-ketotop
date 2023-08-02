import { styled } from 'styled-components';
import { IAppBar } from './type';

export const AppBarContainer = styled.div<IAppBar>`
  width: ${(props) => (props.size === 'medium' ? '650px' : '1024px')};
  height: ${(props) => (props.size === 'full' ? '56px' : '48px')};
  box-sizing: border-box;

  background-color: white;

  //임시스타일
  margin-bottom: 10px;
`;

// 중간: 페이지네임 우:닫힘 의 레이아웃 (size: full)
export const FullPopupLayout = styled.div<IAppBar>`
  // 이게 안들어가면 오차가 생김... 추후에 다시 보기
  height: 56px;
  box-sizing: border-box;
  //

  padding: 16px 24px;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  :last-child {
    position: absolute;
    right: 24px;
    transform: translate(50%, 0);
  }
`;

// 좌:뒤로가기 우:버튼 의 레이아웃 (size: large, medium)
export const DefalutLayout = styled.div<IAppBar>`
  padding: 12px 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// 아이콘 감싸는 박스
export const IconBox = styled.div`
  height: 24px;
  width: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 8px;

  img {
    cursor: pointer;
  }
`;

// 아이콘 감싸는 박스 마진 없는 버전
export const IconBoxNomargin = styled(IconBox)`
  margin-right: 0px;
`;

// 텍스트 감싸는 박스
export const TextBox = styled.div`
  margin-left: 20px;
  cursor: pointer;
`;

// 좌측 아이템 (뒤로가기아이콘, 페이지네임)
export const FixedItems = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const IconItems = styled.div`
  display: flex;
  align-items: center;
`;

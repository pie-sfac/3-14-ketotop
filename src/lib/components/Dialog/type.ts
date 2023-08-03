export type DialogProps = {
  /**
   * 볼드체로 렌더되는 글씨
   */
  title: string;
  /**
   * title밑에 렌더되는 서브텍스트, 필수 값 아님
   */
  description?: string;
  /**
   * 그레이버튼에 렌더되는 텍스트
   */
  grayButtonName: string;
  /**
   * 프라이버튼에 렌더되는 텍스트, 필수 값 아님
   */
  priButtonName?: string;
  /**
   * 닫기버튼을 누르면 실행될 Callback함수
   */
  onCloseEffect: () => void;
  /**
   * 그레이버튼을 누르면 실행될 Callback함수
   */
  onGrayEffect: () => void;
  /**
   * 프라이버튼을 누르면 실행될 Callback함수
   */
  onPriEffect?: () => void;
  /**
   * 해당 상태에 따라서 Dialog의 렌더 여부가 결정
   */
  isOpen: boolean;
};

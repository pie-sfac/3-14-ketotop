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
   * 닫기버튼을 누르면 실행될 Callback함수
   */
  onCloseEffect: () => void;
  /**
   * 해당 상태에 따라서 Dialog의 렌더 여부가 결정
   */
  isOpen: boolean;
  /**
   * 다이얼로그의 버튼 컴포넌트(Dialog.XxxButton)
   */
  children: React.ReactNode;
};

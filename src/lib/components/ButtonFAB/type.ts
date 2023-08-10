export interface FAB_Type {
  /**
   * 버튼 컴퍼넌트의 입력 값
   */
  children: React.ReactNode;
  /**
   * 버튼을 클릭할 시 실행될 callback 함수
   */
  onClickEffect: () => void;
}
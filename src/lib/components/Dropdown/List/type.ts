export type ListDropdownProps = {
  /**
   * dropdown되는 items들이 속해있는 범주, 좌측에 렌더되는 텍스트
   */
  category: string;
  /**
   * dropdown되는 옵션들
   */
  items: string[];
  /**
   * 유저가 선택한 value값, 리스트가 없는 상태에서 렌더되는 텍스트
   */
  value: string;
  /**
   * 컴포넌트의 너비, 필수값이므로 디자인 시안에 맞게 설정
   */
  width: string;
  /**
   * 유저가 리스트를 클릭하면 실행하게 될 Callback함수, 인자로는 선택된 value를 넘겨준다
   */
  onChange: (param: string) => void;
  /**
   * 닫기 버튼을 클릭하면 실행하게 될 Callback함수, 인자로는 선택된 value를 넘겨준다
   */
  onClose: (param: string) => void;
};

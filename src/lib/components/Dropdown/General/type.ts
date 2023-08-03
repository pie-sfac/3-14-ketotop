export type DropdownProps = {
  /**
   * 유저가 선택한 value값, 리스트가 없는 상태에서 렌더되는 텍스트
   */
  value: string;
  /**
   * dropdown되는 옵션들
   */
  items: string[];
  /**
   * 선택해야 할 값이 어떠한 내용인지 설명하는 텍스트
   */
  title: string;
  /**
   * 아무것도 선택되지 않았을 시 렌더되는 텍스트
   */
  placeholder: string;
  /**
   * 유저가 리스트를 클릭하면 실행하게 될 Callback함수, 인자로는 선택된 value를 넘겨준다
   */
  onChange: (params: string) => void;
  /**
   * 컴포넌트의 너비, 필수값이므로 디자인 시안에 맞게 설정
   */
  width: string;
};

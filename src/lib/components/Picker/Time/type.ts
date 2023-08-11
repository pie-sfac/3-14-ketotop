export interface TimePickerType {
  /**
   * 타임피커 취소버튼을 누르면 실행되는 callback 함수 
   */
  onCanselEffect: () => void;
  /**
   * 타임피커 확인버튼을 누르면 실행되는 callback 함수 
   */
  onClickEffect: () => void;
}
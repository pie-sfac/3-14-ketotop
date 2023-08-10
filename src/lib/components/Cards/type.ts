export interface OptionType {
  /**
   * 볼드체로 렌더되는 글씨
   */
  title: string;
  /**
   * title밑에 렌더되는 서브텍스트
   */
  description: string;
}

export interface CalendarDataType {
  /**
   * Data의 표시 달 수
   */
  month: string;
  /**
   * 고객의 이름
   */
  name: string;
  /**
   * 고객의 해당 달의 총 스케쥴 건
   */
  totalschadule: number;
  /**
   * 고객의 해당 달의 총 스케쥴 취소 건
   */
  cancelschadule: number;
  /**
   * 고객의 해당 달의 총 스케쥴 취소 퍼센트
   */
  cancel: number;
}

export interface LinkLargeType {
  /**
   * 볼드체로 렌더되는 글씨
   */
  title: string;
  /**
   * title밑에 렌더되는 서브텍스트
   */
  description: string;
  /**
   * 썸네일에 사용될 이미지 주소 값
   */
  thumbnail: string;
  /**
   * LinkCards를 누르면 실행될 Callback함수
   */
  onClickEffect: () => void;
}

export interface LinkMediumType {
  /**
   * title밑에 렌더되는 서브텍스트
   */
  description: string;
  /**
   * 썸네일에 사용될 이미지 주소 값
   */
  thumbnail: string;
  /**
   * LinkCards를 누르면 실행될 Callback함수
   */
  onClickEffect: () => void;
}

export interface LinkMediumTypeDel {
  /**
   * title밑에 렌더되는 서브텍스트
   */
  description: string;
  /**
   * 썸네일에 사용될 이미지 주소 값
   */
  thumbnail: string;
  /**
   * LinkCards를 누르면 실행될 Callback함수
   */
  onClickEffect: () => void;
  /**
   * 닫기버튼을 누르면 실행될 Callback함수
   */
  onDelEffect: () => void;
}
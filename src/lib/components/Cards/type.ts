export interface CardsType {
  /**
   * 사용하는 Cards의 타입
   */
  type: TypeName;
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
  /**
   * 닫기버튼을 누르면 실행될 Callback함수
   */
  onDelEffect: () => void;
}

export type TypeName = 
'Option_in'| 'Option_ac' | 'Calendar_data' | 'Link_large' | 'Link_medium' | 'Link_medium_deldelt';
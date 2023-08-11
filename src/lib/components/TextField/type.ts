import { InputHTMLAttributes } from 'react';

export interface TextFieldType extends Partial<InputHTMLAttributes<HTMLInputElement>> {
  /**
   * 입력받아야 할 TextField의 주제
   */
  labelText: string;
  /**
   * 그레이 색상으로 표시되는 inactived 메세지
   */
  inactiveMessage?: string;
  /**
   * 레드 색상으로 표시되는 error 메세지, $error가 true이면 렌더된다
   */
  errorMessage?: string;
  /**
   * 그린 색상으로 표시되는 success 메세지, $success가 true이면 렌더된다
   */
  successMessage?: string;
  /**
   * 에러여부, default: false, onBlur나 onChnage등의 이벤트 핸들러로 조작을 권고
   */
  isError?: boolean;
  /**
   * 성공여부, default: false, onBlur나 onChnage등의 이벤트 핸들러로 조작을 권고
   */
  isSuccess?: boolean;
}

export interface StyledProps {
  $error: boolean;
  $success: boolean;
}

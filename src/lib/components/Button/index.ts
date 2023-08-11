import Outline from './Outline/index';
import Contained from './Contained/index';
/**
 * @description Button 스타일 ( Outline , Contained )
 */
const Button = {
  /**
   * @description - Outline 스타일의 버튼 (모든 props 필수)
   * @params
   * { 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'full' } size 버튼 크기
   * @params
   * { 'normal' | 'enabled' | 'disabled' } state 버튼 상태
   */
  Outline,
  /**
   * @description - Contained 스타일의 버튼 (모든 props 필수)
   * @params
   * { 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'full' } size 버튼 크기
   * @params
   * { 'normal' | 'enabled' | 'disabled' } state 버튼 상태
   */
  Contained,
};
export default Button;

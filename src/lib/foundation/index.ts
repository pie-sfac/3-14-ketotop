import { createGlobalStyle } from 'styled-components';
import { ColorStyles } from './Color/styles';
import { ResetCSS } from './Reset/styles';
import Layout from './Layout';
import { Typography, FontFamilyStyle } from './Typography';
import Icon from './Icon';
import SelectionControls from './SelectionControls';
import Graphic from './Graphic';
import ShadowBox from './Shadow/styled';

/** @description Foundation 글로벌 스타일 */
const FoundationGlobalStyles = createGlobalStyle`
  ${ResetCSS}
  ${FontFamilyStyle}
  ${ColorStyles}
`;

/**
 * @description - Layout 스타일
 * @params
 * {ReactNode} children 자식 노드
 * @params
 * { 'android' | 'ios' } size 크기 ( 기본: tablet )
 * @params
 * { 'tablet' | 'pc' | 'phone' } system 시스템 ( 기본: android )
 */
const LayoutStyles = Layout;

/** @description - Typography 스타일 */
const TypographyStyles = Typography;

/**
 * @description - Icon 스타일
 * @params
 * {string} name 이름 (필수, 자동완성 사용시 name={''} 형태로 사용해야함)
 * @params
 * {string} extension 확장자 ( 기본: svg )
 * @params
 * {number} height 높이
 * @params
 * {number} width 너비
 */
const IconStyles = Icon;

/**
 * @description - Graphic 스타일
 * @params
 * {string} name 이름 (필수, 자동완성 사용시 name={''} 형태로 사용해야함)
 * @params
 * {string} extension 확장자 ( 기본: svg )
 * @params
 * {number} areaHeight 선택영역 높이
 * @params
 * {number} areaWidth 선택영역 너비
 * @params
 * {number} imgHeight 이미지 높이
 * @params
 * {number} imgWidth 이미지 너비
 */
const GraphicStyles = Graphic;

/**
 * @description - SelectionControls 스타일
 * @params
 * { 'checkbox' | 'radio' } type 타입 (필수)
 * @params
 * {boolean} selected 선택됨
 * @params
 * {boolean} disabled 비활성화됨
 */
const SelectionControlsStyles = SelectionControls;

/**
 * @description ShadowBoxStyles 스타일 ( css 파일에 ${Fnd.ShadowBoxStyles} 를 넣으면 적용가능 ) */
const ShadowBoxStyles = ShadowBox;

// 모든 스타일 export
export {
  FoundationGlobalStyles,
  LayoutStyles,
  TypographyStyles,
  IconStyles,
  GraphicStyles,
  SelectionControlsStyles,
  ShadowBoxStyles,
};

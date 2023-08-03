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
 * @description Layout 스타일
 * @type {(children : ReactNode) , (size : 'android' | 'ios' ( 기본:tablet )) , (system : 'tablet' | 'pc' | 'phone' ( 기본:android ))} ) */
const LayoutStyles = Layout;

/** @description Typography 스타일 */
const TypographyStyles = Typography;

/**
 * @description Icon 스타일
 * @type {( name : string (필수) , 자동완성 사용시 name={''} 형태로 사용해야함) , (extension : string ( 기본:svg )) , (height : number) , (width : number)}
 */
const IconStyles = Icon;

/**
 * @description Graphic 스타일
 * @type {( name : string (필수) , 자동완성 사용시 name={''} 형태로 사용해야함) , (extension : string ( 기본:svg )) , (height : number) , (width : number)}
 */
const GraphicStyles = Graphic;

/**
 * @description SelectionControls 스타일
 * @type {( type : 'checkbox' | 'radio' (필수) , selected : boolean , disabled : boolean)} */
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

import { css } from 'styled-components';
import { RobotoFontFace } from './Roboto/css/roboto';
import { PretendardFontFace } from './Pretendard/css/pretendard';

export const FontFamilyStyle = css`
  ${RobotoFontFace}
  ${PretendardFontFace}
  *,
  body {
    font-family: 'Roboto', 'Pretendard';
  }
`;

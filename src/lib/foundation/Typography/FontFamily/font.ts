import { css } from 'styled-components';
import { RobotoFontFace } from './Roboto/styles';
import { PretendardFontFace } from './Pretendard/styles';

export const FontFamilyStyle = css`
  ${RobotoFontFace}
  ${PretendardFontFace}
  *,
  body {
    font-family: 'Roboto', 'Pretendard';
  }
`;

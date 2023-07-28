import { css } from 'styled-components';
import PretendardBlack from 'pretendard/dist/web/static/woff2/Pretendard-Black.woff2';
import PretendardExtraBold from 'pretendard/dist/web/static/woff2/Pretendard-ExtraBold.woff2';
import PretendardBold from 'pretendard/dist/web/static/woff2/Pretendard-Bold.woff2';
import PretendardSemiBold from 'pretendard/dist/web/static/woff2/Pretendard-SemiBold.woff2';
import PretendardMedium from 'pretendard/dist/web/static/woff2/Pretendard-Medium.woff2';
import PretendardRegular from 'pretendard/dist/web/static/woff2/Pretendard-Regular.woff2';
import PretendardLight from 'pretendard/dist/web/static/woff2/Pretendard-Light.woff2';
import PretendardExtraLight from 'pretendard/dist/web/static/woff2/Pretendard-ExtraLight.woff2';
import PretendardThin from 'pretendard/dist/web/static/woff2/Pretendard-Thin.woff2';

export const PretendardFontFace = css`
  /*
Copyright (c) 2021 Kil Hyung-jin, with Reserved Font Name Pretendard.
https://github.com/orioncactus/pretendard

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
http://scripts.sil.org/OFL
*/

  @font-face {
    font-family: 'Pretendard';
    font-weight: 900;
    src:
      local('Pretendard Black'),
      url(${PretendardBlack}) format('woff2');
    unicode-range: U+AC00-D7A3;
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 800;
    src:
      local('Pretendard ExtraBold'),
      url(${PretendardExtraBold}) format('woff2');
    unicode-range: U+AC00-D7A3;
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 700;
    src:
      local('Pretendard Bold'),
      url(${PretendardBold}) format('woff2');
    unicode-range: U+AC00-D7A3;
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 600;
    src:
      local('Pretendard SemiBold'),
      url(${PretendardSemiBold}) format('woff2');
    unicode-range: U+AC00-D7A3;
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 500;
    src:
      local('Pretendard Medium'),
      url(${PretendardMedium}) format('woff2');
    unicode-range: U+AC00-D7A3;
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    src:
      local('Pretendard Regular'),
      url(${PretendardRegular}) format('woff2');
    unicode-range: U+AC00-D7A3;
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 300;
    src:
      local('Pretendard Light'),
      url(${PretendardLight}) format('woff2');
    unicode-range: U+AC00-D7A3;
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 200;
    src:
      local('Pretendard ExtraLight'),
      url(${PretendardExtraLight}) format('woff2');
    unicode-range: U+AC00-D7A3;
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 100;
    src:
      local('Pretendard Thin'),
      url(${PretendardThin}) format('woff2');
    unicode-range: U+AC00-D7A3;
  }
`;

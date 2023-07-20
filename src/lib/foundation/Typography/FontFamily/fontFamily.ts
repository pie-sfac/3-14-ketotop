import { css } from 'styled-components';

export const fontFamily = css`
  @font-face {
    font-family: 'Pretendard';
    font-weight: 900;
    font-display: swap;
    src:
      local('Pretendard Black'),
      url('/pretendard/dist/web/woff2/Pretendard-Black.woff2') format('woff2'),
      url('/pretendard/dist/web/woff/Pretendard-Black.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 800;
    font-display: swap;
    src:
      local('Pretendard ExtraBold'),
      url('/pretendard/dist/web/woff2/Pretendard-ExtraBold.woff2') format('woff2'),
      url('/pretendard/dist/web/woff/Pretendard-ExtraBold.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 700;
    font-display: swap;
    src:
      local('Pretendard Bold'),
      url('/pretendard/dist/web/woff2/Pretendard-Bold.woff2') format('woff2'),
      url('/pretendard/dist/web/woff/Pretendard-Bold.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 600;
    font-display: swap;
    src:
      local('Pretendard SemiBold'),
      url('/pretendard/dist/web/woff2/Pretendard-SemiBold.woff2') format('woff2'),
      url('/pretendard/dist/web/woff/Pretendard-SemiBold.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 500;
    font-display: swap;
    src:
      local('Pretendard Medium'),
      url('/pretendard/dist/web/woff2/Pretendard-Medium.woff2') format('woff2'),
      url('/pretendard/dist/web/woff/Pretendard-Medium.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    font-display: swap;
    src:
      local('Pretendard Regular'),
      url('/pretendard/dist/web/woff2/Pretendard-Regular.woff2') format('woff2'),
      url('/pretendard/dist/web/woff/Pretendard-Regular.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 300;
    font-display: swap;
    src:
      local('Pretendard Light'),
      url('/pretendard/dist/web/woff2/Pretendard-Light.woff2') format('woff2'),
      url('/pretendard/dist/web/woff/Pretendard-Light.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 200;
    font-display: swap;
    src:
      local('Pretendard ExtraLight'),
      url('/pretendard/dist/web/woff2/Pretendard-ExtraLight.woff2') format('woff2'),
      url('/pretendard/dist/web/woff/Pretendard-ExtraLight.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 100;
    font-display: swap;
    src:
      local('Pretendard Thin'),
      url('/pretendard/dist/web/woff2/Pretendard-Thin.woff2') format('woff2'),
      url('/pretendard/dist/web/woff/Pretendard-Thin.woff') format('woff');
  }

  body,
  #app {
    font-family: 'Pretendard';
  }
`;

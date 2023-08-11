import { css } from 'styled-components';
import RobotoThin from 'roboto-fontface/fonts/roboto/Roboto-Thin.woff2';
import RobotoThinItalic from 'roboto-fontface/fonts/roboto/Roboto-ThinItalic.woff2';
import RobotoLight from 'roboto-fontface/fonts/roboto/Roboto-Light.woff2';
import RobotoLightItalic from 'roboto-fontface/fonts/roboto/Roboto-LightItalic.woff2';
import RobotoRegular from 'roboto-fontface/fonts/roboto/Roboto-Regular.woff2';
import RobotoRegularItalic from 'roboto-fontface/fonts/roboto/Roboto-RegularItalic.woff2';
import RobotoMedium from 'roboto-fontface/fonts/roboto/Roboto-Medium.woff2';
import RobotoMediumItalic from 'roboto-fontface/fonts/roboto/Roboto-MediumItalic.woff2';
import RobotoBold from 'roboto-fontface/fonts/roboto/Roboto-Bold.woff2';
import RobotoBoldItalic from 'roboto-fontface/fonts/roboto/Roboto-BoldItalic.woff2';
import RobotoBlack from 'roboto-fontface/fonts/roboto/Roboto-Black.woff2';
import RobotoBlackItalic from 'roboto-fontface/fonts/roboto/Roboto-BlackItalic.woff2';

export const RobotoFontFace = css`
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoThin}) format('woff2');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoThinItalic}) format('woff2');
    font-weight: 100;
    font-style: italic;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoLight}) format('woff2');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoLightItalic}) format('woff2');
    font-weight: 300;
    font-style: italic;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoRegular}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoRegularItalic}) format('woff2');
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoMedium}) format('woff2');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoMediumItalic}) format('woff2');
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoBold}) format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoBoldItalic}) format('woff2');
    font-weight: 700;
    font-style: italic;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoBlack}) format('woff2');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoBlackItalic}) format('woff2');
    font-weight: 900;
    font-style: italic;
  }
`;

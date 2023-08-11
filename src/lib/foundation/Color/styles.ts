import { css } from 'styled-components';
import color from './data/foundationColor.json';

export const ColorStyles = css`
  :root {
    ${Object.entries(color)
      .map(([key, value]) => {
        return `--${key}: ${value};`;
      })
      .join('\n')}
  }
`;

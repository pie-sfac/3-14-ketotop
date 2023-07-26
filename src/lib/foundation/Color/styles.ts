import color from './data/foundationColor.json';

export const ColorStyles = `
  :root {
    ${Object.entries(color)
      .map(([key, value]) => {
        return `--${key}: ${value};`;
      })
      .join('\n')}
  }
`;

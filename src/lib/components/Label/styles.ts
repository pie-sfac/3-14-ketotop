import { styled } from 'styled-components';
import { TypeName, BgColor, FontColor } from './type';

export const LabelShape = ({ $typename }: { $typename: TypeName }) => {
  switch ($typename) {
    case 'Rectangle':
      return `
        display: inline-flex;
        padding: 4px 8px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 4px;
      `;
    case 'Round':
      return `
        display: inline-flex;
        padding: 4px 8px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 100px;
      `;
  }
};

export const LabelBgColor = ({ $bgcolor }: { $bgcolor: BgColor }) => {
  switch ($bgcolor) {
    case 'Blue':
      return `
        background-color: var(--Bgc_50);
      `;
    case 'Gray':
      return `
        background-color: var(--Bg_100);
        `;
    case 'Green':
      return `
        background-color: #E6F9EA;
        `;
  }
};
export const LabelFontColor = ({ $fontcolor }: { $fontcolor: FontColor }) => {
  switch ($fontcolor) {
    case 'Blue':
      return `
        color: var(--Pri_500);
      `;
    case 'Gray':
      return `
        color: var(--Text_700);
        `;
    case 'Green':
      return `
        color: var(--System_Positive);
        `;
    case 'Red':
      return `
        color: var(--System_Error);
      `;
  }
};

export const LabelWrapper = styled.label<{ $typename: TypeName; $bgcolor: BgColor; $fontcolor: FontColor }>`
  ${LabelShape}
  ${LabelBgColor}
  ${LabelFontColor}
`;

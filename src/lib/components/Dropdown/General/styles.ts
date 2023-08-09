import { styled } from 'styled-components';
import { Fnd } from '../../..';

export const DropdownWrapper = styled.div<{ $width: string }>`
  /* Custom Desing from Figma */
  position: relative;
  /* TODO: 너비지정을 어떻게할지 고민 */
  width: ${({ $width }) => $width};
  /* Reset */
  box-sizing: border-box;
  /* For Test */
`;

export const DropdownLabel = styled(Fnd.TypographyStyles.Body4)`
  /* Custom Desing from Figma */
  margin-bottom: 4px;
`;

export const DropdownButton = styled.button<{ $isVisible: boolean; $value: string }>`
  /* Reset Button CSS */
  padding: 10px 16px;
  background-color: var(--Bgc_Wh);
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
  /* Custom Desing from Figma */
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ $isVisible }) => ($isVisible ? 'var(--Pri_500)' : 'var(--Line_300)')};
  border-radius: 4px;
  border-radius: 10px;
  color: ${({ $value }) => ($value.length ? 'var(--Text_900)' : 'var(--Text_Hold)')};
  width: 100%;
  text-align: start;

  &:disabled {
    background-color: var(--Bg_100);
    color: var(--Text_400);
  }
`;

export const DropdownValueWrapper = styled.ul<{ $isVisible: boolean }>`
  /* Reset */
  box-sizing: border-box;
  /* Custom Desing from Figma */
  width: 100%;
  border: 1px solid var(--Line_300);
  border-radius: 4px;
  border-radius: 10px;
  margin-top: 4px;
  overflow: hidden;

  display: ${({ $isVisible }) => ($isVisible ? 'block' : 'none')};
  position: absolute;
`;

export const DropdownValue = styled(Fnd.TypographyStyles.Body4)`
  /* Custom Desing from Figma */
  padding: 12px 8px;
  color: var(--Text_900);
  background-color: var(--Bg_Wh);
  /* Dynamic Background */
  &.selected {
    background-color: var(--Bgc_100);
  }

  &:hover {
    background-color: var(--Bgc_100);
  }
`;

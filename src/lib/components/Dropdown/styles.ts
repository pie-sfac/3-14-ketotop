import { styled } from 'styled-components';
import { Fnd } from '@lib/index';
const { TypographyStyles: Typo } = Fnd;

export const DropdownWrapper = styled.div`
  /* Custom Desing from Figma */
  position: relative;
  /* TODO: 너비지정을 어떻게할지 고민 */
  width: inherit;
  /* Reset */
  box-sizing: border-box;
  /* For Test */
`;

export const DropdownLabel = styled(Typo.Body4)`
  /* Custom Desing from Figma */
  margin-bottom: 4px;
`;

export const DropdownButton = styled.button<{ isVisible: boolean; value: string }>`
  /* Reset Button CSS */
  border: none;
  padding: 10px 16px;
  background: none;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
  /* Custom Desing from Figma */
  display: flex;
  align-items: center;
  border: 1px solid ${({ isVisible }) => (isVisible ? 'var(--Pri_500)' : 'var(--Line_300)')};
  border-radius: 4px;
  color: ${({ value }) => (value.length ? 'var(--Text_900)' : 'var(--Text_Hold)')};
  width: 100%;
  text-align: start;
`;
export const IconWrapper = styled.div`
  display: block;
  margin-left: auto;
  /* TODO : 안돌아가는 이유를 모르겠다 */
  transform: ${(isVisible) => (isVisible ? 'rotate(0)' : 'rotate(180deg)')};
`;

export const DropdownValueWrapper = styled.ul<{ isVisible: boolean }>`
  /* Reset */
  box-sizing: border-box;
  /* Custom Desing from Figma */
  width: 100%;
  border: 1px solid var(--Line_300);
  border-radius: 4px;
  margin-top: 4px;

  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  position: absolute;
`;

export const DropdownValue = styled(Typo.Body4)`
  /* Custom Desing from Figma */
  padding: 12px 8px;
  color: var(--Text_900);
  background-color: var(--Bg_Wh);

  &:hover {
    background-color: var(--Bgc_100);
  }
`;

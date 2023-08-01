import { styled } from 'styled-components';
import { Fnd } from '@lib/index';

export const ListDropdownWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const ContentWrapper = styled(Fnd.TypographyStyles.Body2)<{ value: string; width: string }>`
  /* Width By props */
  width: ${({ width }) => width};
  box-sizing: border-box;
  padding: 8px 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 4px;
  border: 1px solid var(--Pri_200);
  border-radius: 10px;
  /* Dynamic */
  background-color: ${({ value }) => (value.length ? 'var(--Bgc_50)' : 'var(--Bgc_Wh)')};
  color: ${({ value }) => (value.length ? 'var(--Pri_500)' : 'var(--Text_700)')};
`;

export const SelectionWrapper = styled.div`
  position: relative;
`;

export const DropdownButtonWrapper = styled(Fnd.TypographyStyles.Body2)`
  /* Reset Button CSS */
  border: none;
  padding: 0;
  background: none;
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
  color: inherit;
  cursor: pointer;
`;

export const DropdownButtonText = styled.span`
  display: inline-block;
  margin-right: 24px;
`;

export const ItemsWrapper = styled.ul<{ $isVisible: boolean }>`
  /* Width By Figma */
  width: 134px;
  border-radius: 10px;
  box-shadow: 0 0 8px 2px var(--Shadow);
  position: absolute;
  z-index: 10;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  background-color: var(--Bg_Wh);
  margin-top: 4px;
  /* Dynamic */
  display: ${({ $isVisible }) => ($isVisible ? 'block' : 'none')};
`;

export const Item = styled(Fnd.TypographyStyles.Body4)`
  padding: 8px 12px;
  text-align: center;
  cursor: pointer;
  color: var(--Text_900);

  &:hover {
    background-color: var(--Bgc_100);
  }
  &.selected {
    background-color: var(--Bgc_100);
  }
`;

export const CloseButtonWrapper = styled.div`
  cursor: pointer;
`;

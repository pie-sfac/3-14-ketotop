import { styled } from 'styled-components';
import { Fnd } from '../../../';

export const ListDropdownWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
`;

export const ContentWrapper = styled(Fnd.TypographyStyles.Body2)<{ $value: string; $width: string }>`
  /* Width By props */
  width: ${({ $width }) => $width};
  box-sizing: border-box;
  padding: 0.8rem 2.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 0.4rem;
  border: 0.1rem solid var(--Pri_200);
  border-radius: 1rem;
  /* Dynamic */
  background-color: ${({ $value }) => ($value.length ? 'var(--Bgc_50)' : 'var(--Bgc_Wh)')};
  color: ${({ $value }) => ($value.length ? 'var(--Pri_500)' : 'var(--Text_700)')};
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
  margin-right: 2.4rem;
`;

export const ItemsWrapper = styled.ul<{ $isVisible: boolean }>`
  /* Width By Figma */
  width: 13.4rem;
  border-radius: 1rem;
  box-shadow: 0 0 0.8rem 0.2rem var(--Shadow);
  position: absolute;
  z-index: 10;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  background-color: var(--Bg_Wh);
  margin-top: 0.4rem;
  /* Dynamic */
  display: ${({ $isVisible }) => ($isVisible ? 'block' : 'none')};
`;

export const Item = styled(Fnd.TypographyStyles.Body4)`
  padding: 0.8rem 1.2rem;
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
  width: 2.4rem;
  height: 2.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

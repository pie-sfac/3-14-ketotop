import { styled, css } from 'styled-components';
import { TypographyStyles as Typo } from '../../foundation';

export const Dialog = styled.div`
  /* Layout */
  width: 34rem;
  border-radius: 1rem;
  box-sizing: border-box;
  border: 0.1rem solid var(--Gray_300);
  background-color: var(--Bg_Wh);
  padding: 4rem 2rem 1.6rem;
  /* Position */
  position: relative;
  text-align: center;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Contents = styled.div`
  color: var(--Text_900);
`;

const Ellipsis = css`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
`;

export const TitleWrapper = styled(Typo.Title6)`
  margin-bottom: 0.8rem;
  /* Ellipsis */
  ${Ellipsis}
  -webkit-line-clamp: 2;
`;

export const SubTextWrapper = styled(Typo.Body4)`
  /* Ellipsis */
  ${Ellipsis}
  -webkit-line-clamp: 3;
`;

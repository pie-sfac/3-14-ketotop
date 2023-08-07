import { styled, css } from 'styled-components';

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
  width: 2.4rem;
  height: 2.4rem;
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

export const TitleWrapper = styled.div`
  margin-bottom: 0.8rem;
  /* Ellipsis */
  ${Ellipsis}
  -webkit-line-clamp: 2;
`;

export const SubTextWrapper = styled.div`
  /* Ellipsis */
  ${Ellipsis}
  -webkit-line-clamp: 3;
`;

const BtnStyle = css`
  padding: 0.8rem 1.2rem;
  border-radius: 0.4rem;
  /* TODO: reset CSS 수정 */
  border: none;
  width: 14.5rem;
`;
export const BtnWrapper = styled.div`
  margin-top: 2.8rem;
  display: flex;
  justify-content: center;
  gap: 0.8rem;
`;

export const GrayBtn = styled.button`
  ${BtnStyle}
  background-color: var(--Bg_100);
  color: inherit;
`;

export const PriBtn = styled.button`
  ${BtnStyle}
  background-color: var(--Pri_500);
  color: var(--Text_Wh);
`;

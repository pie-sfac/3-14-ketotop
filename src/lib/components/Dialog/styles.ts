import { styled, css } from 'styled-components';

export const Dialog = styled.div`
  /* TODO: must delete lined_reset css 적용 시 지울 라인들 */
  color: black;
  & p {
    margin: 0;
  }
  /* Layout */
  width: 340px;
  border-radius: 10px;
  box-sizing: border-box;
  border: 1px solid var(--Gray_300);
  background-color: var(--Bg_Wh);
  /* Position */
  position: relative;
  text-align: center;
`;

export const Icon = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Contents = styled.div`
  margin: 40px 20px 16px;
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
  margin-bottom: 8px;
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
  padding: 8px 12px;
  border-radius: 4px;
  /* TODO: reset CSS 수정 */
  border: none;
  width: 145px;
`;
export const BtnWrapper = styled.div`
  margin-top: 28px;
`;

export const GrayBtn = styled.button<{ marginNeed: boolean }>`
  ${BtnStyle}
  background-color: var(--Bg_100);
  color: inherit;
  margin-right: ${({ marginNeed }) => (marginNeed ? '8px' : '')};
`;

export const PriBtn = styled.button`
  ${BtnStyle}
  background-color: var(--Pri_500);
  color: var(--Text_Wh);
`;

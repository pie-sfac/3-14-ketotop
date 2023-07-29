import styled from 'styled-components';
import { IBanners } from './type';
import { TypographyStyles } from '@lib/foundation';

export const BannersContainer = styled.div<IBanners>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: ${({ $reverse }) => ($reverse ? 'row-reverse' : null)};

  width: 312px;
  height: 80px;

  // 색상 스타일
  color: ${({ type }) => (type === 'fill' ? 'var(--Text_Wh)' : '  var(--Text_900)')};
  background-color: ${({ type }) => (type === 'fill' ? 'var(--Pri_500)' : 'white')};
  // 보더 스타일
  border: 1px solid ${({ type }) => (type === 'outline' ? 'var(--Line_200)' : null)};
  border-radius: 10px;

  cursor: pointer;

  img {
    width: ${({ $manual }) => ($manual ? null : '100%')};
    height: ${({ $manual }) => ($manual ? null : '100%')};
  }
`;

export const TextStyles = styled(TypographyStyles.Caption1)`
  max-height: 80px;
`;

export const NormalText = styled.p<IBanners>`
  // 글자수 초과시
  white-space: normal;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

export const BoldText = styled(NormalText)`
  font-weight: bold;

  margin-top: 2px;
`;
// 박스 (높이, 넓이)
// 바탕색 (색변화)
// 이미지 (사이즈조절,위치조정??)
// 텍스트 (크기,위치조정??)

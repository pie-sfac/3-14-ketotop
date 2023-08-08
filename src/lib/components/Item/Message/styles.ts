import styled from 'styled-components';
import * as OriginalStyles from '../../../components/Item/styles';
import { Fnd } from '../../../index';

export const ItemLayout = styled(OriginalStyles.ItemLayout)`
  // 필요한 오버라이딩 스타일이 있으면 여기에 작성
`;

export const ContentWrapperStyles = styled(OriginalStyles.ContentWrapperStyles)`
  gap: 32px;
`;

export const StarRatingWrapperStyles = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
`;

export const TextFont = styled(Fnd.TypographyStyles.Body4)`
  color: var(--Text_900);
  text-align: center;
`;

export const TextFieldsStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const MessageFont = styled(Fnd.TypographyStyles.Body4)`
  color: var(--Text_900);
  width: 645px;
  overflow: hidden;
  white-space: nowrap;
  // overflow가 되면 ...으로 표시
  text-overflow: ellipsis;
`;

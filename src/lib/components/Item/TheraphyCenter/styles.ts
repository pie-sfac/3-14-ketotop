import * as OriginalStyles from '@lib/components/Item/styles';
import { Fnd } from '@src/lib';
import styled from 'styled-components';

export const ItemLayout = styled(OriginalStyles.ItemLayout)`
  // 필요한 오버라이딩 스타일이 있으면 여기에 작성
`;

export const ContentWrapperStyles = styled(OriginalStyles.ContentWrapperStyles)`
  gap: 32px;
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

export const CountTextFont = styled(Fnd.TypographyStyles.Body4)`
  color: var(--Pri_500);
  text-align: center;
  width: 24px;
`;

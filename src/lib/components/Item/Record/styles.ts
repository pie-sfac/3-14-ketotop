import * as OriginalStyles from '@lib/components/Item/styles';
import { Fnd } from '@src/lib';
import styled from 'styled-components';

export const ItemLayout = styled(OriginalStyles.ItemLayout)`
  // 필요한 오버라이딩 스타일이 있으면 여기에 작성
`;

export const ContentWrapperStyles = styled(OriginalStyles.ContentWrapperStyles)`
  gap: 32px;
`;

export const LabelStyles = styled.div`
  display: flex;
  padding: 4px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  background: var(--Bg_100);
`;

export const LabelTextFont = styled(Fnd.TypographyStyles.Body4)`
  color: var(--Text_700);
`;

export const TextFont = styled(Fnd.TypographyStyles.Body4)`
  color: var(--Text_900);
  text-align: center;
`;

export const TemplateTextFont = styled(Fnd.TypographyStyles.Body4)`
  color: var(--Text_900);
  width: 135px;
`;

export const TextFieldsStyles = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
  flex: 1 0 0;
`;

export const ContentStyles = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
  flex: 1 0 0;
`;

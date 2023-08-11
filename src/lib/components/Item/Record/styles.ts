import styled from 'styled-components';
import * as OriginalStyles from '../../../components/Item/styles';
import { Fnd } from '../../../index';

export const ItemLayout = styled(OriginalStyles.ItemLayout)`
  // 필요한 오버라이딩 스타일이 있으면 여기에 작성
`;

export const ContentWrapperStyles = styled(OriginalStyles.ContentWrapperStyles)`
  gap: 3.2rem;
`;

export const InfoWrapperStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const LabelWrapperStyles = styled.div`
  display: flex;
  height: 2.8rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  label {
    height: 100%;
    width: auto;
  }
`;

export const LabelStyles = styled.div`
  display: flex;
  width: 100%;
  padding: 0.4rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 0.4rem;
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
  min-width: 13.5rem;
  max-width: 73.6rem;
  overflow: hidden;
  white-space: nowrap;
  // overflow가 되면 ...으로 표시
  text-overflow: ellipsis;
`;

export const TextFieldsStyles = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2.4rem;
  flex: 1 0 0;
`;

export const ContentStyles = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2.4rem;
  flex: 1 0 0;
`;

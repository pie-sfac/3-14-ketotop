import styled from 'styled-components';
import * as OriginalStyles from '../../../components/Item/styles';
import { Fnd } from '../../../index';

export const ItemLayout = styled(OriginalStyles.ItemLayout)`
  // 필요한 오버라이딩 스타일이 있으면 여기에 작성
`;

export const ContentWrapperStyles = styled(OriginalStyles.ContentWrapperStyles)`
  gap: 3.2rem;
`;

export const TextFont = styled(Fnd.TypographyStyles.Body4)`
  color: var(--Text_900);
  text-align: center;
  width: 8rem;
  overflow: hidden;
  white-space: nowrap;
  // overflow가 되면 ...으로 표시
  text-overflow: ellipsis;
`;

export const TextFieldsStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
`;

export const CountTextFont = styled(Fnd.TypographyStyles.Body4)`
  color: var(--Pri_500);
  text-align: center;
  width: 2.4rem;
`;

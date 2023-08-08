import styled from 'styled-components';
import * as OriginalStyles from '../../../components/Item/styles';
import { Fnd } from '../../../index';
export const ItemLayout = styled(OriginalStyles.ItemLayout)`
  // 필요한 오버라이딩 스타일이 있으면 여기에 작성
`;

export const ContentWrapperStyles = styled(OriginalStyles.ContentWrapperStyles)`
  // 필요한 경우 여기에 오버라이딩 스타일을 작성
`;

export const InfoWrapperStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const LabelWrapperStyles = styled.div`
  display: flex;
  width: 8.1rem;
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

export const NameTextFont = styled(Fnd.TypographyStyles.Body2)`
  width: 6.4rem;
  color: var(--Text_900);
  overflow: hidden;
  white-space: nowrap;
`;

export const LabelTextFont = styled(Fnd.TypographyStyles.Body4)`
  color: var(--Text_700);
`;

export const TextFont = styled(Fnd.TypographyStyles.Body4)`
  color: var(--Text_900);
  text-align: center;
`;

export const TextFieldsStyles = styled.div`
  display: flex;
  width: 38.3rem;
  align-items: center;
  gap: 2.4rem;
`;

export const ContentStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;
  flex: 1 0 0;
`;

export const ProfileStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

export const ProfileGraphicStyles = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    box-sizing: border-box;
  }

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    border: 0.7 0.5rem solid var(--Line_300);
    border-radius: 50%;
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
`;

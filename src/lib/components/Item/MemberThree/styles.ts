import styled from 'styled-components';
import * as OriginalStyles from '../../../components/Item/styles';
import { Fnd } from '../../../index';

export const ItemLayout = styled(OriginalStyles.ItemLayout)`
  // 필요한 오버라이딩 스타일이 있으면 여기에 작성
`;

export const ContentWrapperStyles = styled(OriginalStyles.ContentWrapperStyles)`
  // 필요한 경우 여기에 오버라이딩 스타일을 작성
`;
export const StarRatingTextWrapper = styled.div`
  width: 65px;
`;

export const PhoneNumberWrapperStyles = styled.div`
  width: 130px;
`;

export const StarRatingWrapperStyles = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
`;

export const InfoWrapperStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;
export const LabelWrapperStyles = styled.div`
  display: flex;
  width: 81px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
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

export const NameTextFont = styled(Fnd.TypographyStyles.Body2)`
  width: 64px;
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
  width: 383px;
  align-items: center;
  gap: 24px;
`;

export const ContentStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  flex: 1 0 0;
`;

export const ProfileStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ProfileGraphicStyles = styled.div`
  width: 24px;
  height: 24px;
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
    border: 0.75px solid var(--Line_300);
    border-radius: 50%;
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
`;

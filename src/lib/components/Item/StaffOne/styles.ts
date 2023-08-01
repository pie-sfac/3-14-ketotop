import * as OriginalStyles from '@lib/components/Item/styles';
import { Fnd } from '@src/lib';
import styled from 'styled-components';

export const StaffLayoutStyles = styled(OriginalStyles.ItemLayout)`
  gap: 252px;
`;

export const StarRatingTextWrapper = styled.div`
  width: 65px;
`;

export const PhoneNumberWrapperStyles = styled.div`
  width: 130px;
`;

export const CountWrapperStyles = styled.div`
  width: 90px;
`;

export const InfoWrapperStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const MemoFont = styled(Fnd.TypographyStyles.Body4)`
  color: var(--Text_900);
  width: 120px;
  overflow: hidden;
  white-space: nowrap;
`;

export const NameTextFont = styled(Fnd.TypographyStyles.Body2)`
  width: 64px;
  color: var(--Text_900);
  overflow: hidden;
  white-space: nowrap;
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

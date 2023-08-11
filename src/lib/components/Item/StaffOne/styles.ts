import styled from 'styled-components';
import * as OriginalStyles from '../../../components/Item/styles';
import { Fnd } from '../../../index';

export const StaffLayoutStyles = styled(OriginalStyles.ItemLayout)`
  gap: 25.2rem;
`;

export const StarRatingTextWrapper = styled.div`
  width: 6.5rem;
`;

export const PhoneNumberWrapperStyles = styled.div`
  width: 13rem;
`;

export const CountWrapperStyles = styled.div`
  width: 9rem;
`;

export const InfoWrapperStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

export const MemoFont = styled(Fnd.TypographyStyles.Body4)`
  color: var(--Text_900);
  width: 12rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const NameTextFont = styled(Fnd.TypographyStyles.Body2)`
  width: 6.4rem;
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

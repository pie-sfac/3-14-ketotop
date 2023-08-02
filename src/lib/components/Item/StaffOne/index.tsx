import * as St from '@lib/components/Item/StaffOne/styles';
import { Fnd } from '@src/lib';
import { IStaffStrict } from './type';

const StaffOne = ({ profImgUrl = '', name, phoneNumber, starRating, memberCount, memo, isOutlined }: IStaffStrict) => {
  const [phoneNumber1, phoneNumber2, phoneNumber3] = phoneNumber;
  const formattedPhoneNumber = `${phoneNumber1}-${phoneNumber2}-${phoneNumber3}`;

  const countText = `${memberCount}명`;

  const formattedStarRating = starRating.toFixed(1);

  const starRatingText = `${formattedStarRating}/5.0점`;

  if (starRating < 0 || starRating > 5) {
    throw new Error('별점 숫자는 0 이상, 5이하 의 숫자만 가능합니다.');
  }
  const handleError = (event: any) => {
    event.target.style.display = 'none';
  };
  return (
    <>
      <Fnd.FoundationGlobalStyles />
      <St.StaffLayoutStyles $isOutline={isOutlined}>
        <St.ContentStyles>
          <St.ProfileStyles>
            <St.ProfileGraphicStyles>
              <img src={profImgUrl} alt='Profile' onError={handleError} />
              <Fnd.GraphicStyles name={'Profile_24px'} />
            </St.ProfileGraphicStyles>
            <St.NameTextFont>{name}</St.NameTextFont>
          </St.ProfileStyles>
          <St.TextFieldsStyles>
            <St.PhoneNumberWrapperStyles>
              <St.TextFont>{formattedPhoneNumber}</St.TextFont>
            </St.PhoneNumberWrapperStyles>
            <St.CountWrapperStyles>
              <St.TextFont>{countText}</St.TextFont>
            </St.CountWrapperStyles>
            <St.StarRatingTextWrapper>
              <St.TextFont>{starRatingText}</St.TextFont>
            </St.StarRatingTextWrapper>
          </St.TextFieldsStyles>
        </St.ContentStyles>
        <St.InfoWrapperStyles>
          <St.MemoFont>{memo}</St.MemoFont>
        </St.InfoWrapperStyles>
      </St.StaffLayoutStyles>
    </>
  );
};

export default StaffOne;

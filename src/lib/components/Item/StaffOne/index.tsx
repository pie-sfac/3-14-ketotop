import { Fnd } from '../../..';
import * as St from './styles';
import { IStaffStrict } from './type';

const StaffOne = ({ profImgUrl = '', name, phoneNumber, starRating, memberCount, memo, isOutlined }: IStaffStrict) => {
  const countText = `${memberCount}명`;

  const formattedStarRating = starRating.toFixed(1);

  const starRatingText = `${formattedStarRating}/5.0점`;

  // props 검사 시작
  if (starRating < 0 || starRating > 5) {
    throw new Error('별점 숫자는 0 이상, 5이하 의 숫자만 가능합니다.');
  }
  const handleError = (event: any) => {
    event.target.style.display = 'none';
  };
  if (typeof profImgUrl !== 'string') {
    throw new Error("'profImgUrl' prop이 잘못되었습니다. 문자열 타입이어야 합니다.");
  }

  if (typeof name !== 'string') {
    throw new Error("'name' prop이 잘못되었습니다. 문자열 타입이어야 합니다.");
  }
  if (typeof memo !== 'string') {
    throw new Error("'memo' prop이 잘못되었습니다. 문자열 타입이어야 합니다.");
  }
  if (typeof memberCount !== 'number') {
    throw new Error("'memberCount' prop이 잘못되었습니다. 숫자 타입이어야 합니다.");
  }
  if (typeof isOutlined !== 'boolean') {
    throw new Error("'isOutlined' prop이 잘못되었습니다. boolean 타입이어야 합니다.");
  }
  function validateKoreanPhoneNumber(phoneNumber: string) {
    // 숫자로 변환
    const numericPhoneNumber = Number(phoneNumber);

    // 숫자가 아니거나 길이가 올바르지 않으면 에러
    if (isNaN(numericPhoneNumber) || (phoneNumber.length !== 10 && phoneNumber.length !== 11)) {
      throw new Error('올바르지 않은 전화번호입니다.');
    }

    // 휴대폰 번호 패턴
    if (/^01[016789]\d{7,8}$/.test(phoneNumber)) {
      return;
    }

    // 지역번호 패턴 (예: 02, 031, 032 등)
    if (/^(02|0[3-6][1-5])\d{6,7}$/.test(phoneNumber)) {
      return;
    }

    throw new Error('올바르지 않은 전화번호 패턴입니다.');
  }
  validateKoreanPhoneNumber(phoneNumber);

  function formatPhoneNumber(phoneNumber: string) {
    if (typeof phoneNumber !== 'string' || phoneNumber.length < 10 || phoneNumber.length > 11) {
      throw new Error('올바르지 않은 전화번호입니다.');
    }

    let phoneNumber1, phoneNumber2, phoneNumber3;

    // 지역번호가 2자리인 경우 (예: 서울 02)
    if (phoneNumber.startsWith('02')) {
      phoneNumber1 = phoneNumber.slice(0, 2);
      phoneNumber2 = phoneNumber.slice(2, 2 + 3 + (phoneNumber.length - 10)); // 중간 번호 (3~4자리)
      phoneNumber3 = phoneNumber.slice(-4); // 마지막 번호 (4자리)
    } else {
      phoneNumber1 = phoneNumber.slice(0, 3); // 지역번호 or 휴대폰 번호 시작 (3자리)
      phoneNumber2 = phoneNumber.slice(3, -4); // 중간 번호 (3~4자리)
      phoneNumber3 = phoneNumber.slice(-4); // 마지막 번호 (4자리)
    }

    return `${phoneNumber1}-${phoneNumber2}-${phoneNumber3}`;
  }
  const formattedPhoneNumber = formatPhoneNumber(phoneNumber);
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

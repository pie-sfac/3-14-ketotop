import * as St from '@lib/components/Item/MemberThree/styles';
import { Fnd } from '@src/lib';
import { IMemberThreeStrict } from './type';

const MemberThree = ({
  profImgUrl,
  name,
  phoneNumber,
  starRating,
  attendingPhysician,
  publishDate,
  isOutlined,
}: IMemberThreeStrict) => {
  const padNumber = (num: number) => (num < 10 ? `0${num}` : `${num}`);

  const [publishYear, publishMonth, publishDay] = publishDate;
  const formattedPublishDate = `${publishYear}-${padNumber(publishMonth)}-${padNumber(publishDay)}`;

  const [phoneNumber1, phoneNumber2, phoneNumber3] = phoneNumber;
  const formattedPhoneNumber = `${phoneNumber1}-${phoneNumber2}-${phoneNumber3}`;

  const starRatingText = `${starRating}/5.0점`;

  const fullStars = Math.floor(starRating);
  const halfStars = Math.ceil(starRating) - fullStars;
  const emptyStars = 5 - fullStars - halfStars;

  const handleError = (event: any) => {
    event.target.style.display = 'none';
  };
  return (
    <>
      <Fnd.FoundationGlobalStyles />
      <St.ItemLayout $isOutline={isOutlined}>
        <St.ContentWrapperStyles>
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
              <St.StarRatingWrapperStyles>
                {Array(fullStars)
                  .fill(null)
                  .map((_, idx) => (
                    <Fnd.IconStyles key={idx} name={'star_on'} />
                  ))}
                {Array(halfStars)
                  .fill(null)
                  .map((_, idx) => (
                    <Fnd.IconStyles key={idx} name={'half_star'} />
                  ))}
                {Array(emptyStars)
                  .fill(null)
                  .map((_, idx) => (
                    <Fnd.IconStyles key={idx} name={'star_off'} />
                  ))}
              </St.StarRatingWrapperStyles>
              <St.StarRatingTextWrapper>
                <St.TextFont>{starRatingText}</St.TextFont>
              </St.StarRatingTextWrapper>
            </St.TextFieldsStyles>
          </St.ContentStyles>
          <St.InfoWrapperStyles>
            <St.LabelWrapperStyles>
              <St.LabelStyles>
                <St.LabelTextFont>{attendingPhysician}</St.LabelTextFont>
              </St.LabelStyles>
            </St.LabelWrapperStyles>
            <St.TextFont>{formattedPublishDate}</St.TextFont>
          </St.InfoWrapperStyles>
        </St.ContentWrapperStyles>
      </St.ItemLayout>
    </>
  );
};

export default MemberThree;

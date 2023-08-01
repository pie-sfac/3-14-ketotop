import * as St from '@lib/components/Item/Message/styles';
import { Fnd } from '@src/lib';
import styled from 'styled-components';
import { IMessageStrict } from './type';

const Message = ({ publishDate, text, starRating, isOutlined }: IMessageStrict) => {
  const padNumber = (num: number) => (num < 10 ? `0${num}` : `${num}`);

  const [publishYear, publishMonth, publishDay] = publishDate;
  const formattedPublishDate = `${publishYear}-${padNumber(publishMonth)}-${padNumber(publishDay)}`;

  const fullStars = Math.floor(starRating);
  const halfStars = Math.ceil(starRating) - fullStars;
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <>
      <Fnd.FoundationGlobalStyles />
      <St.ItemLayout $isOutline={isOutlined}>
        <St.ContentWrapperStyles>
          <St.TextFont>{formattedPublishDate}</St.TextFont>
          <St.TextFieldsStyles>
            <St.MessageFont>{text}</St.MessageFont>
          </St.TextFieldsStyles>
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
        </St.ContentWrapperStyles>
      </St.ItemLayout>
    </>
  );
};

export default Message;

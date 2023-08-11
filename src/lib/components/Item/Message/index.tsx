import { Fnd } from '../../..';
import * as St from './styles';
import { IMessageStrict } from './type';

const Message = ({ publishDate, text, starRating, isOutlined }: IMessageStrict) => {
  const padNumber = (num: number) => (num < 10 ? `0${num}` : `${num}`);

  const [publishYear, publishMonth, publishDay] = publishDate;
  const formattedPublishDate = `${publishYear}-${padNumber(publishMonth)}-${padNumber(publishDay)}`;

  const fullStars = Math.floor(starRating);
  const halfStars = Math.ceil(starRating) - fullStars;
  const emptyStars = 5 - fullStars - halfStars;
  // props 검사 시작
  if (
    !Array.isArray(publishDate) ||
    publishDate.length !== 3 ||
    !publishDate.every((num) => typeof num === 'number') ||
    publishDate[0] < 1000 || // 0 번째 index가 4자리 숫자인지 검사
    !(publishDate[1] >= 1 && publishDate[1] <= 12) || // 1 번째 index가 1~12인지 검사
    !(publishDate[2] >= 1 && publishDate[2] <= 31) // 2 번째 index가 1~31인지 검사
  ) {
    throw new Error(
      "'publishDate' prop이 잘못되었습니다. [년도(4자리), 월, 일] 형식이며, 각 숫자의 앞자리는 0이 될 수 없습니다.",
    );
  }
  if (starRating < 0 || starRating > 5) {
    throw new Error('별점 숫자는 0 이상, 5이하 의 숫자만 가능합니다.');
  }
  if (typeof text !== 'string') {
    throw new Error("'text' prop이 잘못되었습니다. 문자열 타입이어야 합니다.");
  }
  if (typeof isOutlined !== 'boolean') {
    throw new Error("'isOutlined' prop이 잘못되었습니다. boolean 타입이어야 합니다.");
  }
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

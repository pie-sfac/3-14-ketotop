import { Fnd, Cmp } from '../../..';
import * as St from './styles';
import { IRecordStrict } from './type';

const Record = ({ publishDate, templateName, attendingPhysician, isOutlined }: IRecordStrict) => {
  const padNumber = (num: number) => (num < 10 ? `0${num}` : `${num}`);
  const [publishYear, publishMonth, publishDay] = publishDate;
  const formattedPublishDate = `${publishYear}-${padNumber(publishMonth)}-${padNumber(publishDay)}`;

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
  if (typeof templateName !== 'string') {
    throw new Error("'templateName' prop이 잘못되었습니다. 문자열 타입이어야 합니다.");
  }
  if (typeof attendingPhysician !== 'string') {
    throw new Error("'attendingPhysician' prop이 잘못되었습니다. 문자열 타입이어야 합니다.");
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
          <St.ContentStyles>
            <St.TextFieldsStyles>
              <St.TemplateTextFont>{templateName}</St.TemplateTextFont>
            </St.TextFieldsStyles>
          </St.ContentStyles>
          <St.LabelWrapperStyles>
            <Cmp.Label type='Rectangle' bgcolor='Gray' fontcolor='Gray'>
              {/* {attendingPhysician} */}
              <St.LabelTextFont>{attendingPhysician}</St.LabelTextFont>
            </Cmp.Label>
          </St.LabelWrapperStyles>
        </St.ContentWrapperStyles>
      </St.ItemLayout>
    </>
  );
};

export default Record;

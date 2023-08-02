import { Fnd } from '../../..';
import * as St from './styles';
import { IRecordStrict } from './type';

const Record = ({ publishDate, templateName, attendingPhysician, isOutlined }: IRecordStrict) => {
  const padNumber = (num: number) => (num < 10 ? `0${num}` : `${num}`);
  const [publishYear, publishMonth, publishDay] = publishDate;
  const formattedPublishDate = `${publishYear}-${padNumber(publishMonth)}-${padNumber(publishDay)}`;
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
          <St.LabelStyles>
            <St.LabelTextFont>{attendingPhysician}</St.LabelTextFont>
          </St.LabelStyles>
        </St.ContentWrapperStyles>
      </St.ItemLayout>
    </>
  );
};

export default Record;

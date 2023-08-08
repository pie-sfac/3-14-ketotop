import { Fnd, Cmp } from '../../..';
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

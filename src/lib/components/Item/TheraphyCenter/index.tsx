import { Fnd } from '../../..';
import * as St from './styles';
import { ITheraphyCenterStrict } from './type';

const TheraphyCenter = ({ publishDate, videoName, uploadCount, isOutlined }: ITheraphyCenterStrict) => {
  const padNumber = (num: number) => (num < 10 ? `0${num}` : `${num}`);

  const [publishYear, publishMonth, publishDay] = publishDate;
  const formattedPublishDate = `${publishYear}-${padNumber(publishMonth)}-${padNumber(publishDay)}`;

  const formattedUploadCount = `+${uploadCount}`;
  return (
    <>
      <Fnd.FoundationGlobalStyles />
      <St.ItemLayout $isOutline={isOutlined}>
        <St.ContentWrapperStyles>
          <St.TextFont>{formattedPublishDate}</St.TextFont>
          <St.TextFieldsStyles>
            <St.TextFont>{videoName}</St.TextFont>
            <St.CountTextFont>{formattedUploadCount}</St.CountTextFont>
          </St.TextFieldsStyles>
        </St.ContentWrapperStyles>
      </St.ItemLayout>
    </>
  );
};

export default TheraphyCenter;

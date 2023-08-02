import * as St from './styles'; // 분리된 스타일 파일에서 스타일을 불러옵니다.
import { Fnd } from '@src/lib';
import { IMemberOneStrict } from './type';

const MemberOne = ({
  profImgUrl = '',
  name,
  isMale,
  membershipDuration,
  membershipUses,
  attendingPhysician,
  publishDate,
  isOutlined,
}: IMemberOneStrict) => {
  const padNumber = (num: number) => (num < 10 ? `0${num}` : `${num}`);

  const [startYear, startMonth, startDay, endYear, endMonth, endDay] = membershipDuration;
  const formattedDuration = `${startYear}.${padNumber(startMonth)}.${padNumber(startDay)} ~ ${endYear}.${padNumber(
    endMonth,
  )}.${padNumber(endDay)}`;

  const [publishYear, publishMonth, publishDay] = publishDate;
  const formattedPublishDate = `${publishYear}-${padNumber(publishMonth)}-${padNumber(publishDay)}`;

  const [used, total] = membershipUses;
  const formattedUses = `${used}회 / ${total}회`;

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
              <St.TextFont>{isMale ? '남' : '여'}</St.TextFont>
              <St.TextFont>{formattedDuration}</St.TextFont>
              <St.TextFont>{formattedUses}</St.TextFont>
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

export default MemberOne;

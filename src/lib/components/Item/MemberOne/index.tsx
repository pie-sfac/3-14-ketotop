import * as St from './styles'; // 분리된 스타일 파일에서 스타일을 불러옵니다.
import { Fnd, Cmp } from '../../..';
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
  // prop 검사
  if (typeof profImgUrl !== 'string') {
    throw new Error("'profImgUrl' prop이 잘못되었습니다. 문자열 타입이어야 합니다.");
  }

  if (typeof name !== 'string') {
    throw new Error("'name' prop이 잘못되었습니다. 문자열 타입이어야 합니다.");
  }

  if (typeof isMale !== 'boolean') {
    throw new Error("'isMale' prop이 잘못되었습니다. boolean 타입이어야 합니다.");
  }

  if (
    !Array.isArray(membershipDuration) ||
    membershipDuration.length !== 6 ||
    !membershipUses.every((num) => typeof num === 'number') ||
    typeof membershipDuration[0] !== 'number' ||
    typeof membershipDuration[3] !== 'number' ||
    membershipDuration[0] < 10 || // 0 번째 index가 2자리 숫자인지 검사
    membershipDuration[3] < 10 || // 3 번째 index가 2자리 숫자인지 검사
    !(membershipDuration[1] >= 1 && membershipDuration[1] <= 12) || // 1 번째 index가 1~12인지 검사
    !(membershipDuration[4] >= 1 && membershipDuration[4] <= 12) || // 4 번째 index가 1~12인지 검사
    !(membershipDuration[2] >= 1 && membershipDuration[2] <= 31) || // 2 번째 index가 1~31인지 검사
    !(membershipDuration[5] >= 1 && membershipDuration[5] <= 31) // 5 번째 index가 1~31인지 검사
  ) {
    throw new Error(
      "'membershipDuration' prop이 잘못되었습니다. [년도(2자리), 월, 일, 년도(2자리), 월, 일] 형식이며, 특정 조건을 충족해야합니다.",
    );
  }

  if (
    !Array.isArray(membershipUses) ||
    membershipUses.length !== 2 ||
    !membershipUses.every((num) => typeof num === 'number')
  ) {
    throw new Error(
      "'membershipUses' prop이 잘못되었습니다. [숫자, 숫자] 형식이며, 각 숫자의 앞자리는 0이 될 수 없습니다.",
    );
  }

  if (typeof attendingPhysician !== 'string') {
    throw new Error("'attendingPhysician' prop이 잘못되었습니다. 문자열 타입이어야 합니다.");
  }

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

  if (typeof isOutlined !== 'boolean') {
    throw new Error("'isOutlined' prop이 잘못되었습니다. boolean 타입이어야 합니다.");
  }
  // prop 검사 끝

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
              <Cmp.Label type='Rectangle' bgcolor='Gray' fontcolor='Gray'>
                <St.LabelTextFont as={'span'}>{attendingPhysician}</St.LabelTextFont>
              </Cmp.Label>
            </St.LabelWrapperStyles>
            <St.TextFont>{formattedPublishDate}</St.TextFont>
          </St.InfoWrapperStyles>
        </St.ContentWrapperStyles>
      </St.ItemLayout>
    </>
  );
};

export default MemberOne;

import MemberOne from './MemberOne';
import MemberThree from './MemberThree';
import Message from './Message';
import Record from './Record';
import StaffOne from './StaffOne';
import TheraphyCenter from './TheraphyCenter';

/**
 * @MemberOne - Member_1 스타일 ( props :
 * profImgUrl (따로 url 작성하지 않으면 기본 프로필 설정 , 필수아님) );
 * name(string),
 * isMale(boolean),
 * membershipDuration(배열안에 6개의 숫자 , 가장 앞자리 0 입력불가),
 * membershipUses(배열안에 2개의 숫자 , 가장 앞자리 0 입력불가),
 * attendingPhysician(string),
 * publishDate(배열안에 3개의 숫자 , 가장 앞자리 0 입력불가),
 * isOutlined (이하 필수조건),
 * @MemberThree - - Member_3 스타일 ( props :
 * profImgUrl (따로 url 작성하지 않으면 기본 프로필 설정 , 필수아님) );
 * name(string),
 * phoneNumber(배열안에 3개의 문자열),
 * starRating(number),
 * attendingPhysician(string),
 * publishDate(배열안에 3개의 숫자 , 가장 앞자리 0 입력불가),
 * isOutlined (boolean),
 * @Message - Message 스타일 ( props :
 * publishDate(배열안에 3개의 숫자 , 가장 앞자리 0 입력불가),
 * text(string),
 * starRating(number),
 * isOutlined (boolean),
 * @Record - Record 스타일 ( props :
 * publishDate(배열안에 3개의 숫자 , 가장 앞자리 0 입력불가),
 * templateName(string),
 * attendingPhysician(string),
 * isOutlined (boolean),
 * @StaffOne - Staff_1 스타일 ( props :
 * profImgUrl (따로 url 작성하지 않으면 기본 프로필 설정 , 필수아님) );
 * name(string),
 * phoneNumber(배열안에 3개의 문자열),
 * memberCount(number),
 * starRating(number),
 * memo(string),
 * isOutlined (boolean),
 * @TheraphyCenter - TheraphyCenter 스타일 ( props :
 * publishDate(배열안에 3개의 숫자 , 가장 앞자리 0 입력불가),
 * text(string),
 * starRating(number),
 * isOutlined (boolean),
 */
const Item = {
  MemberOne,
  MemberThree,
  Message,
  Record,
  StaffOne,
  TheraphyCenter,
};

export default Item;

import MemberOne from './MemberOne';
import MemberThree from './MemberThree';
import Message from './Message';
import Record from './Record';
import StaffOne from './StaffOne';
import TheraphyCenter from './TheraphyCenter';

/**
 * @description Item 스타일 ( MemberOne , MemberThree , Message , Record , StaffOne , TheraphyCenter )
 */
const Item = {
  /**
   * @description - Member_1 스타일 ( profImgUrl 제외 props 전부 필수 )
   * @params
   * {string} profImgUrl 이미지 url ( 기본:'' )
   * @params
   * {string} name 이름
   * @params
   * {boolean} isMale 성별
   * @params
   * {[nuber,nuber,nuber,nuber,nuber,nuber]} membershipDuration  멤버쉽 기간 ( 각 숫자의 앞자리는 0 불가 )
   * @params
   * {[nuber,nuber]} membershipUses 멤버쉽 남은 횟수 와 총 횟수 ( 각 숫자의 앞자리는 0 불가 )
   * @params
   * {string} attendingPhysician 담당의사
   * @params
   * {[nuber,nuber,nuber]} publishDate 작성일 ( 각 숫자의 앞자리는 0 불가 ),
   * @params
   * {boolean} isOutlined 아웃라인 여부
   */
  MemberOne,

  /**
   * @description - Member_3 스타일 ( profImgUrl 제외 props 전부 필수 )
   * @params
   * {string} profImgUrl 이미지 url ( 기본:'' )
   * @params
   * {string} name 이름
   * @params
   * {[string, string, string]} phoneNumber 전화번호
   * @params
   * {number} starRating 별점
   * @params
   * {string} attendingPhysician 담당의사
   * @params
   * {[number,number,number]} publishDate 작성일 ( 각 숫자의 앞자리는 0 불가 ),
   * @params
   * {boolean} isOutlined 아웃라인 여부
   */
  MemberThree,

  /**
   * @description - Message 스타일 ( props 전부 필수 )
   * @params
   * {[number,number,number]} publishDate 작성일 ( 각 숫자의 앞자리는 0 불가 )
   * @params
   * {string} text 텍스트
   * @params
   * {number} starRating 별점
   * @params
   * {boolean} isOutlined 아웃라인 여부
   */
  Message,

  /**
   * @description - Record 스타일 ( props 전부 필수 )
   * @params
   * {[number,number,number]} publishDate 작성일 ( 각 숫자의 앞자리는 0 불가 )
   * @params
   * {string} templateName 템플릿 이름
   * @params
   * {string} attendingPhysician 담당의사
   * @params
   * {boolean} isOutlined 아웃라인 여부
   */
  Record,

  /**
   * @description - Staff_1 스타일 ( profImgUrl 제외 props 전부 필수 )
   * @params
   * {string} profImgUrl 이미지 url ( 기본:'' )
   * @params
   * {string} name 이름
   * @params
   * {[string, string, string]} phoneNumber 전화번호
   * @params
   * {number} starRating 별점
   * @params
   * {number} memberCount 멤버 수
   * @params
   * {string} memo 메모
   * @params
   * {boolean} isOutlined 아웃라인 여부
   */
  StaffOne,

  /**
   * @description - TheraphyCenter 스타일 ( props 전부 필수 )
   * @params
   * {[number, number, number]} publishDate 작성일
   * @params
   * {string} videoName 비디오 이름
   * @params
   * {number} uploadCount 업로드 횟수
   * @params
   * {boolean} isOutlined 아웃라인 여부
   */
  TheraphyCenter,
};

export default Item;

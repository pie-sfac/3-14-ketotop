import OptionIn from "./Option_in";
import OptionAc from "./Option_ac";
import LinkLarge from "./Link_Large";
import LinkMedium from "./Link_Medium";
import LinkMediumDel from "./Link_Medium_Del";
import CalendarData from "./Calendar_data";

/**
 * @description Cards 스타일 ( OptionIn , OptionAc, LinkLarge, LinkMedium, LinkMediumDel, CalendarData )
 */
const Cards = {
  /**
   * @description - Option_In 스타일
   * @params
   * {string} title 제목
   * @params
   * {string} description 설명
   */
  OptionIn,
  /**
   * @description - Option_Ac 스타일
   * @params
   * {string} title 제목
   * @params
   * {string} description 설명
   */
  OptionAc,
  /**
   * @description - Link_Large 스타일
   * @params
   * {string} Thumbnail 이미지 url ( 기본:'' )
   * @params
   * {string} title 제목
   * @params
   * {string} description 설명
   * @params
   * {() => void} onClickEffect Link클릭 callback 함수
   */
  LinkLarge,
  /**
   * @description - Link_Medium 스타일
   * @params
   * {string} Thumbnail 이미지 url ( 기본:'' )
   * @params
   * {string} description 설명
   * @params
   * {() => void} onClickEffect Link클릭 callback 함수
   */
  LinkMedium,
  /**
   * @description - Link_Medium_Del 스타일
   * @params
   * {string} Thumbnail 이미지 url ( 기본:'' )
   * @params
   * {string} description 설명
   * @params
   * {() => void} onClickEffect Link클릭 callback 함수
   * @params
   * {() => void} onDelEffect 닫기버튼 callback 함수
   */
  LinkMediumDel,
  /**
   * @description - Calendar_Data 스타일
   * @params
   * {string} description 설명
   */
  CalendarData,
}

export default Cards;
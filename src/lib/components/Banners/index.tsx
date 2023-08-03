import { IBanners } from './type';
import * as St from './styles';

/** @description Banner 스타일의 컴포넌트
 * @params 
 * {type : 'fill' | 'outline'}
 * @params 
 * {normalText : string}
 * @params 
 * {boldText : string}
 * @params 
 * {src : string}
 * @params 
 * {$manual : boolean}
 * @params 
 * {$reverse : boolean}

 *  */

const Banners = ({ type = 'fill', boldText, normalText, src, $reverse = false, $manual = true }: IBanners) => {
  return (
    <St.BannersContainer type={type} $reverse={$reverse} $manual={$manual}>
      {/* 실제 주어진 디자인 폰트는 나무고딕으로 되어있음 */}
      {(normalText || boldText) && (
        <St.TextStyles as={'div'}>
          <St.NormalText>{normalText}</St.NormalText>
          <St.BoldText>{boldText}</St.BoldText>
        </St.TextStyles>
      )}
      {/* 이미지와 텍스트 둘 다 없는 경우, 내용이 없다는 문구 출력 */}
      {src ? <img src={src}></img> : boldText ? null : normalText ? null : <div>내용이 없습니다</div>}
    </St.BannersContainer>
  );
};

export default Banners;

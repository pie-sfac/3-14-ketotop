import { IBanners } from './type';
import * as St from './styles';
import { useState } from 'react';

/** @description Banner 스타일의 컴포넌트
 * @params
 * {'fill' | 'outline'} type : 배너의 타입
 * @params
 * {string} normalText : 배너의 일반 텍스트
 * @params
 * {string} boldText : 배너의 굵은 텍스트
 * @params
 * {string} src : 배너의 이미지 주소
 * @params
 * {boolean} $manual : 배너의 이미지를 수동으로 넣을지 자동으로 넣을지
 * @params
 * {boolean} $reverse : 배너의 텍스트와 이미지의 위치를 바꿀지 말지
 */

const Banners = ({ type = 'fill', boldText, normalText, src, alt, $reverse = false, $manual = true }: IBanners) => {
  if (type !== 'fill' && type !== 'outline') throw new Error(`type porp should be 'fill' | 'outline'`);
  if ($manual !== true && $manual !== false) throw new Error(`$manual porp should be boolean type`);
  if ($reverse !== true && $reverse !== false) throw new Error(`$reverse porp should be boolean type`);

  const [loadError, setLoadError] = useState(false);
  const handleImageError = () => {
    setLoadError(true);
  };
  const altText = loadError ? '이미지로딩 에러' : alt;

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
      {src ? (
        <img src={src} alt={altText} onError={handleImageError} />
      ) : boldText ? null : normalText ? null : (
        <div>내용이 없습니다</div>
      )}
    </St.BannersContainer>
  );
};

export default Banners;

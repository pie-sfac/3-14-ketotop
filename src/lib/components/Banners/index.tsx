import { BannersContainer, BoldText, NormalText, TextStyles } from './styles';
import { IBanners } from './type';

const Banners = ({ type = 'fill', boldText, normalText, src, $reverse = false, $manual = true }: IBanners) => {
  return (
    <BannersContainer type={type} $reverse={$reverse} $manual={$manual}>
      {/* 실제 주어진 디자인 폰트는 나무고딕으로 되어있음 */}
      {(normalText || boldText) && (
        <TextStyles as={'div'}>
          <NormalText>{normalText}</NormalText>
          <BoldText>{boldText}</BoldText>
        </TextStyles>
      )}
      {/* 이미지와 텍스트 둘 다 없는 경우, 내용이 없다는 문구 출력 */}
      {src ? <img src={src}></img> : boldText ? null : normalText ? null : <div>내용이 없습니다</div>}
    </BannersContainer>
  );
};

export default Banners;

import { useState } from 'react';
import { Image } from './type';
import * as St from './styles';

const baseURL = 'https://port-0-psd-asset-server-eg4e2alkf2i7md.sel4.cloudtype.app';
const Graphic = ({ name, extension = 'svg', areaHeight, areaWidth, imgHeight, imgWidth }: Image) => {
  if (areaHeight !== undefined && typeof areaHeight !== 'number') {
    throw new Error('Graphic 컴포넌트의 areaHeight는 number 타입이어야 합니다.');
  }
  if (areaWidth !== undefined && typeof areaWidth !== 'number') {
    throw new Error('Graphic 컴포넌트의 areaWidth는 number 타입이어야 합니다.');
  }
  if (imgHeight !== undefined && typeof imgHeight !== 'number') {
    throw new Error('Graphic 컴포넌트의 imgHeight는 number 타입이어야 합니다.');
  }
  if (imgWidth !== undefined && typeof imgWidth !== 'number') {
    throw new Error('Graphic 컴포넌트의 imgWidth는 number 타입이어야 합니다.');
  }

  const [loadError, setLoadError] = useState(false);
  const baseIconURL = `${baseURL}/uploads/images/`;

  const handleImageError = () => {
    setLoadError(true);
  };

  const imageUrl = loadError ? `${baseIconURL}Logo.svg` : `${baseIconURL}${name}.${extension}`;
  const altText = loadError ? '이미지가 서버에 존재하지 않습니다.' : `${name} 이미지`;

  return (
    <St.GraphicWrapper $height={areaHeight} $width={areaWidth}>
      <img
        src={imageUrl}
        alt={altText}
        style={{
          height: imgHeight ? `${imgHeight}rem` : undefined,
          width: imgWidth ? `${imgWidth}rem` : undefined,
        }}
        onError={handleImageError}
      />
    </St.GraphicWrapper>
  );
};

export default Graphic;

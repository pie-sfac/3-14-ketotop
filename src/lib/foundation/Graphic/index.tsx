import { useState } from 'react';
import { Image } from './type';
import * as St from './styles';

const baseURL = 'https://port-0-psd-asset-server-eg4e2alkf2i7md.sel4.cloudtype.app';
const Graphic = ({ name, extension = 'svg', areaHeight = 2.4, areaWidth = 2.4, imgHeight, imgWidth }: Image) => {
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

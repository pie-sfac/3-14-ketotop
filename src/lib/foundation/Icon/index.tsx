import { useState } from 'react';
import { IIcon } from './type';
import * as St from './styles';
const baseURL = 'https://port-0-psd-asset-server-eg4e2alkf2i7md.sel4.cloudtype.app';

const Icon = ({ name, extension = 'svg', $height, $width, $iconSize }: IIcon) => {
  const [loadError, setLoadError] = useState(false);
  const baseIconURL = `${baseURL}/uploads/icons/`;

  const handleImageError = () => {
    setLoadError(true);
  };

  const imageUrl = loadError ? `${baseIconURL}Logo.svg` : `${baseIconURL}${name}.${extension}`;
  const altText = loadError ? '이미지가 서버에 존재하지 않습니다.' : name;

  return (
    <St.IconContainer $height={$height} $width={$width} $iconSize={$iconSize}>
      <img src={imageUrl} alt={`${altText}아이콘`} onError={handleImageError} />
    </St.IconContainer>
  );
};

export default Icon;

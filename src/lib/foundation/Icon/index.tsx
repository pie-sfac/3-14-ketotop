import { useState } from 'react';
import { IIcon } from './type';
const baseURL = 'https://port-0-psd-asset-server-eg4e2alkf2i7md.sel4.cloudtype.app';
const Icon = ({ name, extension = 'svg', height, width }: IIcon) => {
  const [loadError, setLoadError] = useState(false);
  const baseIconURL = `${baseURL}/uploads/icons/`;

  const handleImageError = () => {
    setLoadError(true);
  };

  const imageUrl = loadError ? `${baseIconURL}Logo.svg` : `${baseIconURL}${name}.${extension}`;
  const altText = loadError ? '이미지가 서버에 존재하지 않습니다.' : name;

  return <img src={imageUrl} alt={altText} height={height} width={width} onError={handleImageError} />;
};

export default Icon;

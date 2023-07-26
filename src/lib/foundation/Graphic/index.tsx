import { useState } from 'react';
import { Image } from './type';

const Graphic = ({ name, extension = 'svg', height, width, category }: Image) => {
  const [loadError, setLoadError] = useState(false);
  const baseIconURL = `${import.meta.env.VITE_SERVER_URL}/uploads/images/`;

  const handleImageError = () => {
    setLoadError(true);
  };

  const imageUrl = loadError ? `${baseIconURL}Logo.svg` : `${baseIconURL}${name}.${extension}`;
  const altText = loadError ? '이미지가 서버에 존재하지 않습니다.' : name;

  return <img src={imageUrl} alt={altText} height={height} width={width} onError={handleImageError} />;
};

export default Graphic;

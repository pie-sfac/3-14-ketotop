import React from 'react';
import Image from './type';

const Graphic:React.FC = ({name, category}:Image) => {
  const URL = import.meta.env.VITE_SERVER_URL;
  return (
    <>
      {/* <img src= '../../../../public/assets/images/Graphic/Empty/Album.svg' alt=''/> */}
      <img src= {`${URL}/uploads/images/${name}.svg`} alt={name}/>
    </>
  )
}

export default Graphic;
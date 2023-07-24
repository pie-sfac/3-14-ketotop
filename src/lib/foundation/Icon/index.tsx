import { IIcon } from './type';

// 사용 환경변수 VITE_SERVER_URL
const Icon = ({ name, height, width }: IIcon) => {
  const URL = import.meta.env.VITE_SERVER_URL;
  return (
    <>
      <img src={`${URL}/uploads/icons/${name}.svg`} alt={name} height={height} width={width} />
    </>
  );
};
export default Icon;

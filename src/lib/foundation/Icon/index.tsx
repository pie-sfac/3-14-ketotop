import { IIcon } from './type';

const Icon = ({ name, height, width }: IIcon) => {
  return (
    <>
      <img src={`../public/assets/Icon/${name}.svg`} alt={name} height={height} width={width} />
    </>
  );
};
export default Icon;

// 레포지토리 src 내 assets폴더 이용시 url
// https://raw.githubusercontent.com/3-14-ketotop/3-14-ketotop/dev/src/assets/Icons/Add.svg

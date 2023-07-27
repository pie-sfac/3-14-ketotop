import { BannersContainer } from './styles';
import { IBanners } from './type';

const Banners = (props: IBanners) => {
  console.log(props);

  return (
    <BannersContainer>
      <p>{props.text}</p>
      <img src={props.img}></img>
    </BannersContainer>
  );
};

export default Banners;

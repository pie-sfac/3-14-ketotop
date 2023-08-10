// import * as St from './styles';
// import { Cmp } from '../../..';
// import { ButtonWrapper } from '../Button/styles';
// import { TypographyStyles as typo } from '../../../foundation';

// const TimePicker = () => {
//   return (
//     <St.TimePickerLayOut>
//       <div>
//         <typo.Title6>시간 설정</typo.Title6>
//       </div>
//       <St.Line />
//       <div>
//         <typo.Title1>00시 00분</typo.Title1>
//         <typo.Title1>00시 00분</typo.Title1>
//         <typo.Title1>00시 00분</typo.Title1>
//         <typo.Title1>00시 00분</typo.Title1>
//         <typo.Title1>00시 00분</typo.Title1>
//       </div>
//       <ButtonWrapper>
//         <Cmp.Button.Contained state='normal' size='medium'>
//           {'취소'}
//         </Cmp.Button.Contained>
//         <Cmp.Button.Contained state='enabled' size='medium'>
//           {'완료'}
//         </Cmp.Button.Contained>
//       </ButtonWrapper>
//     </St.TimePickerLayOut>
//   )
// }

// export default TimePicker;

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Container = () => {
  const month = Array(12).fill(0).map((v, i) => v = i + 1);
  const day = Array(31).fill(0).map((v, i) => v = i + 1);

  return (
    <div>
      {/* <h1>아무거나 나와라 좀</h1> */}
      <Swiper
        direction={'vertical'}
        slidesPerView={5}
        loop={true}
        slideToClickedSlide={true}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      <span>월</span>
    </div>
  );
};

export default Container;

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

import * as St from './styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styled from 'styled-components';

const Time = () => {
  const hour = Array(24).fill(null).map((v, i) => v = i);
  const minute = Array(60).fill(null).map((v, i) => v = i);

  const TimePickerSelectContainer = styled.div`
    /* width: 77px; */
    mask-image: linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0)),
      linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    mask-size: 100% 50%;
    mask-repeat: no-repeat;
    mask-position: top, bottom;
    -webkit-mask-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0) 100%
      ),
      linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
    -webkit-mask-size: 100% 50%;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-position: top, bottom;
    display: flex;

    & > div {
      height: 280px;
      font-size: 26px;
      font-weight: 700;
    }
    & > span {
      color: red;
    }
`;
  return (
    <St.TimePickerLayOut>

      <h1>아무거나 나와라 좀</h1>
    <TimePickerSelectContainer>
      <Swiper 
        direction={'vertical'}
        slidesPerView={5}
        loop={true}
        // loopAdditionalSlides={5}
        slideToClickedSlide={true}
        centeredSlides={true}
        initialSlide={0}
        onSlideChange={(swiper) => console.log(swiper.realIndex)} //이벤트 사용
      >
        {hour.map(num => <SwiperSlide key={num} >{({ isActive }) => (
          isActive ? <St.ActiveTimeBg>{num}</St.ActiveTimeBg>:''
            // <div className={(isActive ? 'underline' : '')}>{num}</div>
        )}
        </SwiperSlide>)}
      </Swiper>
      <span>시</span>
      <Swiper 
        direction={'vertical'}
        slidesPerView={5}
        loop={true}
        // loopAdditionalSlides={5}
        slideToClickedSlide={true}
        centeredSlides={true}
        onSlideChange={(swiper) => console.log(swiper.realIndex)} //이벤트 사용
      >
        {minute.map(num => <SwiperSlide key={num} >{({ isActive }) => (
            isActive ? <St.ActiveTimeBg>{num}</St.ActiveTimeBg>:''
            // <St.ActiveTimeBg>{num}</St.ActiveTimeBg>
          
            // <div className={'p-2.5 text-gray_10 ' + (isActive ? 'underline' : '')}>{num}</div>
        )}
        </SwiperSlide>)}
      </Swiper>
      <span>분</span>
    </TimePickerSelectContainer>
    </St.TimePickerLayOut>
  );
};

export default Time;



// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';

// const container = () => {
//     const month = Array(12).fill().map((v, i) => v = i + 1)
//     const day = Array(31).fill().map((v, i) => v = i + 1)

//     return (
//         <div>
//             <Swiper
//                 className='h-56'
//                 direction={'vertical'}
//                 slidesPerView={4}
//                 loop={true}
//                 loopAdditionalSlides={5}
//                 slideToClickedSlide={true}
//                 centeredSlides={true}
//                 onSlideChange={(swiper) => console.log(swiper.realIndex + 1)}
//             >
//                 {month.map(no => <SwiperSlide key={no} >{({ isActive }) => (
//                     <div className={'p-2.5 text-gray_10 ' + (isActive ? 'underline' : '')}>{no}</div>
//                 )}</SwiperSlide>)}
//             </Swiper>
//             <span>월</span>
//             <Swiper
//                 direction={'vertical'}
//                 slidesPerView={4}
//                 loop={true}
//                 loopAdditionalSlides={5}
//                 slideToClickedSlide={true}
//                 centeredSlides={true}
//                 onSlideChange={(swiper) => console.log(swiper.realIndex + 1)}
//             >
//                 {day.map(no => <SwiperSlide key={no} >{({ isActive }) => (
//                     <div className={'p-2.5 text-gray_10 ' + (isActive ? 'underline' : '')}>{no}</div>
//                 )}</SwiperSlide>)}
//             </Swiper>
//             <span>일</span>
//         </div>
//     );
// };

// export default container;
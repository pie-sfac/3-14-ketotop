import * as St from './styles';
import { Cmp } from '../../..';
import { TimePickerType } from './type';
import { TypographyStyles as typo } from '../../../foundation';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

/**
 * @description TimePicker 컴포넌트
 * @params
 * { 'onClickEffect', 'onCanselEffect' }
 */
const Time = ({ onClickEffect, onCanselEffect, onChangeHour, onChangeMinute }: TimePickerType) => {
  const hour = Array(24)
    .fill(null)
    .map((v, i) => (i.toString().length < 2 ? '0' + i.toString() : i));
  const minute = Array(60)
    .fill(null)
    .map((v, i) => (i.toString().length < 2 ? '0' + i.toString() : i));

  return (
    <St.TimePickerLayOut>
      <St.Header>
        <typo.Title6>시간 설정</typo.Title6>
      </St.Header>
      <St.Layout>
        <St.TimePickerSelectContainer>
          <Swiper
            direction={'vertical'}
            slidesPerView={5}
            loop={true}
            slideToClickedSlide={true}
            centeredSlides={true}
            initialSlide={0}
            onSlideChange={(swiper) => onChangeHour(swiper.realIndex)}
          >
            {hour.map((num) => (
              <SwiperSlide key={num}>
                {({ isActive }) =>
                  isActive ? (
                    <St.ActiveTimeBg>
                      <typo.Title1>{num}</typo.Title1>
                    </St.ActiveTimeBg>
                  ) : (
                    <St.UnActiveTimeBg>
                      <typo.Title4>{num}</typo.Title4>
                    </St.UnActiveTimeBg>
                  )
                }
              </SwiperSlide>
            ))}
          </Swiper>
          <p>시</p>
          <Swiper
            direction={'vertical'}
            slidesPerView={5}
            loop={true}
            slideToClickedSlide={true}
            centeredSlides={true}
            onSlideChange={(swiper) => onChangeMinute(swiper.realIndex)}
          >
            {minute.map((num) => (
              <SwiperSlide key={num}>
                {({ isActive }) =>
                  isActive ? (
                    <St.ActiveTimeBg>
                      <typo.Title1>{num}</typo.Title1>
                    </St.ActiveTimeBg>
                  ) : (
                    <St.UnActiveTimeBg>
                      <typo.Title4>{num}</typo.Title4>
                    </St.UnActiveTimeBg>
                  )
                }
              </SwiperSlide>
            ))}
          </Swiper>
          <p>분</p>
        </St.TimePickerSelectContainer>
      </St.Layout>
      <St.ButtonContainer>
        <Cmp.Button.Contained state='normal' size='medium' onClick={onCanselEffect}>
          {'취소'}
        </Cmp.Button.Contained>
        <Cmp.Button.Contained state='enabled' size='medium' onClick={onClickEffect}>
          {'완료'}
        </Cmp.Button.Contained>
      </St.ButtonContainer>
    </St.TimePickerLayOut>
  );
};

export default Time;

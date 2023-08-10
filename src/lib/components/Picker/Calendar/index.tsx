import React, { SyntheticEvent, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale';
import CalendarProps from './type';
import { Fnd } from '../../..';

const prevBtn = 'https://port-0-psd-asset-server-eg4e2alkf2i7md.sel4.cloudtype.app/uploads/icons/back_small_24px.svg';
const nextBtn = 'https://port-0-psd-asset-server-eg4e2alkf2i7md.sel4.cloudtype.app/uploads/icons/next_small_24px.svg';

const Calendar: React.FC<CalendarProps> = ({ dates, setDates }): JSX.Element => {
  if (!Array.isArray(dates) || dates.length !== 2 || !dates.every((date) => date === null || date instanceof Date)) {
    throw new Error(
      "'dates' prop 이 잘못되었습니다. [Date | null, Date | null] 형식이어야 합니다. (useState()의 state)",
    );
  }

  if (typeof setDates !== 'function') {
    throw new Error("'setDates' prop 이 잘못되었습니다. 함수 타입이어야 합니다. (useState()의 setState)");
  }

  const handleChange = (updatedDates: [Date | null, Date | null], event: SyntheticEvent<any, Event> | undefined) => {
    setDates(updatedDates);
  };

  useEffect(() => {
    const arrowElement = document.querySelector('.react-datepicker__month-read-view--down-arrow');
    const arrowElementTwo = document.querySelector('.react-datepicker__year-read-view--down-arrow');
    if (arrowElement) {
      arrowElement.remove(); // 요소 삭제
    }
    if (arrowElementTwo) {
      arrowElementTwo.remove(); // 요소 삭제
    }
    const monthReadView = document.querySelector('.react-datepicker__month-read-view--selected-month');
    if (monthReadView) {
      // 이미 추가된 이미지가 있는지 확인
      const prevImg = monthReadView.previousSibling as HTMLImageElement;
      const nextImg = monthReadView.nextSibling as HTMLImageElement;
      if (!prevImg?.tagName || prevImg.tagName !== 'IMG' || !nextImg?.tagName || nextImg.tagName !== 'IMG') {
        // 이미지 추가
        const prevImgToInsert = document.createElement('img');
        prevImgToInsert.src = prevBtn;
        prevImgToInsert.alt = '이전';

        const nextImgToInsert = document.createElement('img');
        nextImgToInsert.src = nextBtn;
        nextImgToInsert.alt = '다음';

        // 월 표시 영역 앞뒤에 이미지 삽입
        monthReadView.insertAdjacentElement('beforebegin', prevImgToInsert);
        monthReadView.insertAdjacentElement('afterend', nextImgToInsert);
      }
    }
    const monthReadViewTwo = document.querySelector('.react-datepicker__year-read-view--selected-year');
    if (monthReadViewTwo) {
      // 이미 추가된 이미지가 있는지 확인
      const prevImg = monthReadViewTwo.previousSibling as HTMLImageElement;
      const nextImg = monthReadViewTwo.nextSibling as HTMLImageElement;
      if (!prevImg?.tagName || prevImg.tagName !== 'IMG' || !nextImg?.tagName || nextImg.tagName !== 'IMG') {
        // 이미지 추가
        const prevImgToInsert = document.createElement('img');
        prevImgToInsert.src = prevBtn;
        prevImgToInsert.alt = '이전';

        const nextImgToInsert = document.createElement('img');
        nextImgToInsert.src = nextBtn;
        nextImgToInsert.alt = '다음';

        // 월 표시 영역 앞뒤에 이미지 삽입
        monthReadViewTwo.insertAdjacentElement('beforebegin', prevImgToInsert);
        monthReadViewTwo.insertAdjacentElement('afterend', nextImgToInsert);
      }
    }
    const containerElement = document.querySelector('.react-datepicker__month-dropdown-container');
    if (containerElement) {
      const existingLineDiv = containerElement.nextElementSibling as HTMLElement; // Element 형식을 사용
      if (!existingLineDiv || !existingLineDiv.classList.contains('line-div')) {
        const lineDiv = document.createElement('div');
        lineDiv.style.width = '1px';
        lineDiv.style.height = '15px';
        lineDiv.style.background = '#E7E7E7';
        lineDiv.className = 'line-div'; // 클래스 이름을 추가

        containerElement.insertAdjacentElement('afterend', lineDiv);
      }
    }
  }, []);
  return (
    <>
      <Fnd.FoundationGlobalStyles />
      <DatePicker
        selected={dates?.[0] || null}
        onChange={handleChange}
        startDate={dates?.[0] || null}
        endDate={dates?.[1] || null}
        selectsRange
        inline
        showMonthDropdown
        showYearDropdown
        dateFormat='yyyy/MM/dd'
        locale={ko}
      />
    </>
  );
};

export default Calendar;

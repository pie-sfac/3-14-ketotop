import styled from 'styled-components';

const CalendarWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 10px;
  background: #fff;
  // 스타일 정의
  .react-datepicker__day:hover {
    border-radius: 100%;
    border: 1px solid var(--primary-primary-300, #6691ff);
    color: #000;
    background-color: initial;
    box-sizing: border-box;
  }
  .react-datepicker__day--today {
    border-radius: initial;
    border: initial;
    color: initial;
    background-color: initial;
    box-sizing: initial;
  }
  .react-datepicker__day--selected,
  .react-datepicker__day--range-start,
  .react-datepicker__day--in-range,
  .react-datepicker__day--in-selecting-range {
    border-radius: 100%;
    border: 1px solid var(--primary-primary-300, #6691ff);
    color: #000;
    background-color: initial;
    box-sizing: border-box;
  }
  .react-datepicker__day--range-end {
    background-color: #6691ff;
    box-sizing: border-box;
    color: #fff;
  }
  .react-datepicker {
    display: inline-flex;
    padding: 24px 0px 16px 0px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    border-radius: 10px;
    background: transparent;
    border: none;
    width: 372px;
    height: auto;
  }
  .react-datepicker__month-container {
    width: 372px;
  }
  .react-datepicker__navigation {
    // screen-reader-only
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
  .react-datepicker__header__dropdown {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    margin-bottom: 16px;
    flex-direction: row-reverse;
  }
  .react-datepicker__month-read-view,
  .react-datepicker__year-read-view {
    display: flex;
    align-items: center;
    gap: 20px;
    visibility: visible !important;
  }
  .react-datepicker__month-dropdown {
    background-color: #f0f0f0;
    position: absolute;
    width: 50%;
    left: 49%;
    top: 30px;
    z-index: 1;
    text-align: center;
    border-radius: 0.3rem;
    border: none;
  }
  .react-datepicker__year-dropdown {
    background-color: #f0f0f0;
    position: absolute;
    width: 50%;
    left: 2%;
    top: 30px;
    z-index: 1;
    text-align: center;
    border-radius: 0.3rem;
    border: none;
  }
  .react-datepicker__month-read-view--selected-month,
  .react-datepicker__year-read-view--selected-year {
    color: #1d1d1d;
    text-align: center;
    /* Pretendard/PT_Title6_bold_16 */
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 136%;
  }
  .react-datepicker__current-month {
    // screen-reader-only
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
  .react-datepicker__header {
    text-align: center;
    background-color: initial;
    border-bottom: initial;
    border-top-left-radius: initial;
    padding: initial;
    position: relative;
    width: 100%;
  }
  .react-datepicker__day-names {
    display: flex;
    position: relative;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 38px;
    border-top: 1px solid var(--border-line-line-200, #e7e7e7);
    border-bottom: 1px solid var(--border-line-line-200, #e7e7e7);
    background: var(--bg-bg-50, #fbfbfb);
    margin-bottom: 0px;
    div + div {
      margin-left: 34px;
    }
    div {
      color: var(--text-text-700, #505050);
      text-align: center;
      /* Pretendard/PT_Body4_regular_14 */
      font-family: Pretendard;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 144%; /* 20.16px */
    }
    div:first-child {
      color: var(--system-erro, #df291d);
    }
  }
  .react-datepicker__month {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 12px 18px 0px 18px;
    margin: 0px;
    color: var(--text-text-900, #1d1d1d);
    text-align: center;
    /* Pretendard/PT_Body4_regular_14 */
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 144%; /* 20.16px */
  }
  .react-datepicker__week {
    display: flex;
    align-items: center;
    .react-datepicker__day {
      display: flex;
      width: 48px;
      height: 44px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }
    :first-child {
      color: var(--system-erro, #df291d);
    }
  }
  .react-datepicker__day--outside-month {
    color: var(--text-text-300, #a1a1a1) !important;
  }
`;

export { CalendarWrapper };

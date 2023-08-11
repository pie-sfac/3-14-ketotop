import styled from 'styled-components';

export const TimePickerLayOut = styled.div`
  width: 37.2rem;
  height: 39.6rem;
  flex-shrink: 0;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
`;

export const Layout = styled.div`
  display: flex;
  flex: 1;
`;

export const Header = styled.div`
  font-size: 1.6rem;
  background: #fff;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  border-bottom: 0.1rem solid rgba(0, 0, 0, 0.3);
`;

export const Line = styled.hr`
  width: 37.4rem;
  height: 0.1rem;
  background: var(--Line_200);
`;

export const ActiveTimeBg = styled.div`
  height: 5.6rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const UnActiveTimeBg = styled.div`
  height: 5.6rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  background: #fff;
  gap: 0.8rem;
  margin: 1rem 3rem;
`;

export const TimePickerSelectContainer = styled.div`
  mask-image: linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0)),
    linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  mask-size: 100% 50%;
  mask-repeat: no-repeat;
  mask-position: top, bottom;
  -webkit-mask-image: linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%),
    linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
  -webkit-mask-size: 100% 50%;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: top, bottom;

  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #fff;
  position: relative;

  & > div {
    height: 28rem;
    font-size: 2.6rem;
    font-weight: 700;
    flex: 1;
  }
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 5.6rem;
    width: 100%;
    background: var(--Bgc_100);
  }

  & > p {
    flex: 1;
    font-size: 1.6rem;
    color: black;
    text-align: center;
    height: 5.6rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    z-index: 1;
    padding-left: 1.5rem;
  }
`;

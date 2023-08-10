import styled from "styled-components";

export const TimePickerLayOut = styled.div`
  width: 372px;
  height: 396px;
  flex-shrink: 0;
  border-radius: 10px;
  background: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`;

export const Line = styled.hr`
  width: 374px;
  height: 1px;
  background: var(--Line_200);
`;

export const ActiveTimeBg = styled.div`
  width: 172px;
  height: 56px;
  flex-shrink: 0;
  background: var(--Bgc_100);
`
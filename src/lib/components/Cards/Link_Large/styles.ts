import styled from "styled-components";

export const LinkLargeLayOut = styled.div`
  display: flex;
  width: 317px;
  height: 124px;
  padding: 12px 14px 12px 12px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  border-radius: 10px;
  border: 1px solid var(--Line_200);
  background: var(--Bg_Wh);

  & > img {
    width: 100px;
    height: 100px;
    border-radius: 4px;
    flex-shrink: 0;
    border: 1px solid var(--Line_200);
    background: url(<path-to-image>), lightgray 50% / cover no-repeat;
  }

  & > div {
    padding-left: 8px;
    margin-bottom: 48px;
  }
`;
import { styled, css } from "styled-components";
import Icon from "../../../foundation/Icon";

export const LinkMediumLayOut = styled.div`
  display: flex;
  width: 244px;
  height: 66px;
  padding: 12px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  border-radius: 10px;
  border: 1px solid var(--Line_300);
  background: var(--Bg_Wh);
  cursor: pointer;
  position: relative;

  &:hover{
    color: gray;
  
  & > img {
    filter: brightness(0.8);
  }
}

  & > img {
    width: 42px;
    height: 42px;
    flex-shrink: 0;
    border-radius: 4px;
    border: 0.42px solid var(--Line_300);
    background: url(<path-to-image>), lightgray 50% / cover no-repeat;
  }

  & > div {
    padding-left: 8px;
    margin-bottom: 48px;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%); 
  cursor: pointer;
`;
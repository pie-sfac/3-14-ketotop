import {styled, css} from "styled-components";
import { TypeName, CardsType } from "./type";
import { TypographyStyles as Typo } from "../../foundation";

export const CardsTypeSt = ({ $typename }:{ $typename: TypeName }) => {

  switch($typename) {
    case "Option_in":
      return`
        ${OptionLayOut}
        // display: flex;
        // width: 364px;
        // height: 63px;
        // padding: 12px 20px;
        // justify-content: center;
        // align-items: center;
        // flex-shrink: 0;

        border-radius: 10px;
        border: 1px solid var(--Line_300);
        background: #FFF;
      `;

    case "Option_ac":
      return`
        ${OptionLayOut}
        // display: flex;
        // width: 364px;
        // height: 63px;
        // padding: 12px 20px;
        // justify-content: center;
        // align-items: center;
        // flex-shrink: 0;

        border-radius: 10px;
        border: 1px solid var(--Pri_500);
        background: var(--Bgc_50);
      `;

    case "Calendar_data":
      return`
        display: inline-flex;
        height: 36px;
        padding: 4px 12px;
        align-items: center;
        gap: 8px;
        flex-shrink: 0;

        border-radius: 10px;
        border: 1px solid var(--Line_200);
        background: var(--Bg_Wh);
      `;

    case "Link_large":
      return`
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
      `;

    case "Link_medium":
      return`
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
      `;

    case "Link_medium_deldelt":
      return`
        display: flex;
        width: 244px;
        padding: 12px;
        justify-content: center;
        align-items: center;

        border-radius: 10px;
        border: 1px solid var(--Line_300);
        background: var(--Bg_Wh);
      `
  }
}

export const CardsWrapper = styled.div<{ 
  $typename: TypeName; 
  $title: CardsType; 
  $description: CardsType; 
  $thumbnail: CardsType;
  $isOpen: CardsType; }>`
  
  ${CardsTypeSt}
`

export const OptionLayOut = css`
  display: flex;
  width: 364px;
  height: 63px;
  padding: 12px 20px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

export const LinkImageThumbnail = css`
  display: flex;
  width: 100px;
  height: 100px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;
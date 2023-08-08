import styled from "styled-components";
import { TypeName } from "./type";
import { Fnd } from "../..";

export const ButtonFabType = ({ $typename }:{ $typename: TypeName }) => {
  switch($typename) {
    case 'Round':
      return`
        display: flex;
        white-space: nowrap;
        padding: 1.6rem 3.2rem;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        border-radius: 10rem;
        border: 0.1rem solid var(--Line_200);
        background: var(--Pri_300);
        box-shadow: var(--Shadow);
        color: var(--Text_Wh);
      `;

    case "Circle":
      return`
        display: flex;
        width: 4rem;
        height: 4rem;
        padding: 0.7rem 0.8rem 0.9rem 0.8rem;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        border-radius: 3.3rem;
        border: 1px solid var(--Line_200);
        background: var(--text_Wh);
        box-shadow: var(--Shadow);
      `;
  }
}

export const FabWrapper = styled.button<{ $typename: TypeName }>`
  position: absolute;
  bottom: 3.2rem;
  right: 3.2rem;
  cursor: pointer;

  ${ButtonFabType}
`
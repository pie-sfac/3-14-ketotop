import styled from "styled-components";

export const CircleLayOut = styled.button`
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
  cursor: pointer;
`;

export const FabWrapper = styled.div`
  position: absolute;
  bottom: 3.2rem;
  right: 3.2rem;
`;
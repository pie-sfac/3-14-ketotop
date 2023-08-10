import styled from 'styled-components';

const outlineStyles = ({ $isOutline }: { $isOutline: boolean }) => {
  if ($isOutline) {
    return `
      border: 0.1rem solid var(--Line_200);
      `;
  } else {
    return `
      border: none;
      `;
  }
};

export const ItemLayout = styled.section<{ $isOutline: boolean }>`
  display: flex;
  width: 92.8rem;
  height: 2.8rem;
  padding: 1rem 2.4rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  border-radius: 0.4rem;
  background-color: var(--Text_Wh);

  ${outlineStyles}
`;
export const ContentWrapperStyles = styled.div`
  display: flex;
  width: 92.8rem;
  align-items: center;
  gap: 20.9rem;
  flex-shrink: 0;
`;

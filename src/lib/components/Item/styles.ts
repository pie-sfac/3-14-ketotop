import styled from 'styled-components';

const outlineStyles = ({ $isOutline }: { $isOutline: boolean }) => {
  if ($isOutline) {
    return `
      border: 1px solid var(--Line_200);
      `;
  } else {
    return `
      border: none;
      `;
  }
};

export const ItemLayout = styled.section<{ $isOutline: boolean }>`
  display: flex;
  width: 928px;
  height: 28px;
  padding: 10px 24px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  border-radius: 4px;
  background-color: var(--Text_Wh);

  ${outlineStyles}
`;
export const ContentWrapperStyles = styled.div`
  display: flex;
  width: 928px;
  align-items: center;
  gap: 209px;
  flex-shrink: 0;
`;

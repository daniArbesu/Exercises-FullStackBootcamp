import styled from 'styled-components';

export const TTTBoardWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  min-height: 200px;
`;

export const TTTButton = styled.button`
  background: darkgrey;
  font-weight: bold;
`;

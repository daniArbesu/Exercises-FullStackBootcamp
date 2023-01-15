import styled from 'styled-components';
//import '../../index.css';

export const TTTBoardWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  padding: 0.5rem;
`;

export const TTTButton = styled.button`
  background: var(--light-color);
  font-weight: bold;
  color: var(--dark-color);
  padding: 1rem;
  text-align: center;
  font-size: 1.5rem;
  height: 70px;

  :disabled {
    background-color: darkgray;
  }
`;

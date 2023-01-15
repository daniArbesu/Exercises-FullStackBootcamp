import styled from 'styled-components';

export const SudokuWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(9, 1fr);
  grid-template-columns: repeat(9, 1fr);
  padding: 1rem;

  > input {
    font-size: 1.5rem;
    padding: 0.5rem;
    text-align: center;
    width: 40px;
    height: 40px;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
`;

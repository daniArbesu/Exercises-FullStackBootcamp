import styled from 'styled-components';

export const StyledSeriesButton = styled.button<{ completed: boolean }>`
  border-radius: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;

  ${({ completed }) => (completed ? 'background-color: #17bd17;' : '')}
`;

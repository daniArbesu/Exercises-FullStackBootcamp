import styled from 'styled-components';

export const Form = styled.form`
  color: #242424;

  > label {
    display: block;
    width: 100%;
    padding-bottom: 0.5rem;
    font-weight: bold;

    &:last-of-type {
      padding-bottom: 1rem;
    }

    > p {
      margin-bottom: 0.25rem;
    }

    > input {
      font-size: 1rem;
      width: 100%;
      padding: 0.5rem;
    }
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
`;

export const CancelButton = styled.button`
  background: #ce3838;
  color: white;
  font-weight: bold;
`;

export const SaveButton = styled.button`
  background: #17bd17;
  font-weight: bold;
`;

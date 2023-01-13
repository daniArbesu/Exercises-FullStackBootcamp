import styled from 'styled-components';

export const UserProfileWrapper = styled.div`
  border-radius: 4px;
  background-color: #494646;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const UserDataRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const EditButton = styled.button`
  color: white;
  max-width: 8rem;
  align-self: flex-end;
`;

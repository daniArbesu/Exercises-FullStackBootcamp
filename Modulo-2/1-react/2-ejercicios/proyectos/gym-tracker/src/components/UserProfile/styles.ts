import styled, { css } from 'styled-components';
import { ContentBlockCss } from '../../styles/Global';

export const UserProfileWrapper = styled.div`
  ${ContentBlockCss}
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

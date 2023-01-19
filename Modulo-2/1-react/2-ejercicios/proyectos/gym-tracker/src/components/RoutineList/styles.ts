import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ContentBlockCss } from '../../styles/Global';

export const AddButton = styled.button`
  align-items: center;
  border-radius: 100%;
  color: white;
  display: flex;
  font-size: 1.5rem;
  height: 3rem;
  justify-content: center;
  padding: 0.5rem;
  width: 3rem;
  margin: 0 auto;
`;

export const RoutineListWrapper = styled.div`
  > h3 {
    text-decoration: underline;
    padding-bottom: 1rem;
  }

  > div {
    padding-bottom: 1rem;
  }
`;

export const RoutineLink = styled(Link)`
  ${ContentBlockCss}
  display: flex;
  justify-content: space-between;
  color: white;
`;

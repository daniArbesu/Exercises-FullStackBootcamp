import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ContentBlockCss } from '../../styles/Global';

export const ExerciseListWrapper = styled.div`
  > h2 {
    padding-bottom: 2rem;
  }
`;

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

export const RoutinesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const RoutineLink = styled(Link)`
  ${ContentBlockCss}
  display: flex;
  justify-content: space-between;
  color: white;
`;

export const Exercises = styled.div`
  ${ContentBlockCss}
  margin-bottom: 1rem;

  > h3 {
    margin-bottom: 1rem;
  }
`;

export const Series = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

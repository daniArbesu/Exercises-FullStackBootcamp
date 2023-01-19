import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import ExerciseList from '../components/ExerciseList';
import { RoutineContext } from '../context/RoutineContext';

const Routine = (): React.ReactElement | null => {
  const { id } = useParams();
  const [routines, , addExercise] = useContext(RoutineContext);

  const routine = routines.find((routineElement) => routineElement.id === id);
  if (!routine) return null;

  return <ExerciseList routine={routine} addExercise={addExercise} />;
};

export default Routine;

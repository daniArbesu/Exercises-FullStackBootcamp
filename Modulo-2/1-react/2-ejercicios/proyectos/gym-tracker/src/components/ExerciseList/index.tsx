import { useState } from 'react';
import { AddExercise } from '../../context/RoutineContext';
import { Exercise, Routine } from '../../types/routine';
import ExerciseForm from '../ExerciseForm';
import Modal from '../Modal';
import SeriesButton from '../SeriesButton';
import { AddButton, ExerciseListWrapper, Exercises, Series } from './styles';

const ExerciseList = ({ routine, addExercise }: Props): React.ReactElement => {
  const [open, setOpen] = useState(false);

  const handleSaveExercise = (exercise: Exercise) => {
    addExercise(routine.id as string, exercise);
    setOpen(false);
  };

  return (
    <>
      <ExerciseListWrapper>
        <h2>{routine.title}</h2>

        {routine.exercises.map((exercise) => (
          <Exercises key={exercise.id}>
            <h3>{exercise.name}</h3>
            <Series>
              {Array.from({ length: exercise.series }).map((_, index) => (
                <SeriesButton key={index} repetitions={exercise.repetitions} />
              ))}
            </Series>
          </Exercises>
        ))}

        <AddButton onClick={() => setOpen(true)}>+</AddButton>
      </ExerciseListWrapper>

      <Modal open={open}>
        <ExerciseForm
          onCancel={() => setOpen(false)}
          onSave={handleSaveExercise}
        />
      </Modal>
    </>
  );
};

export type Props = {
  routine: Routine;
  addExercise: AddExercise;
};

export default ExerciseList;

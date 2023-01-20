import {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  useCallback,
  useEffect,
} from 'react';
import { v4 as uuidv4 } from 'uuid'; //generate random id
import { Exercise, Routine } from '../types/routine';

const initialRoutineState: Routine[] = [];

export type AddExercise = (routineId: string, exercise: Exercise) => void;

export const RoutineContext = createContext<
  [Routine[], (routine: Routine) => void, AddExercise]
>([initialRoutineState, () => null, () => null]);

export const RoutineContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => {
  const [routines, setRoutines] = useState<Routine[]>(() => {
    const localData = localStorage.getItem('gym-tracker-routines');
    return localData ? JSON.parse(localData) : initialRoutineState;
  });

  useEffect(() => {
    localStorage.setItem('gym-tracker-routines', JSON.stringify(routines));
  }, [routines]);

  const addRoutine = useCallback((routine: Routine) => {
    setRoutines((prevState) => [
      ...prevState,
      { ...routine, id: uuidv4(), exercises: [] },
    ]);
  }, []);

  const addExercise = useCallback((routineId: string, exercise: Exercise) => {
    setRoutines((prevState) => {
      const newRoutines = prevState.map((routine) => {
        if (routine.id !== routineId) {
          return routine;
        }

        return {
          ...routine,
          exercises: [...routine.exercises, { ...exercise, id: uuidv4() }],
        };
      });

      return newRoutines;
    });
  }, []);

  return (
    <RoutineContext.Provider value={[routines, addRoutine, addExercise]}>
      {children}
    </RoutineContext.Provider>
  );
};

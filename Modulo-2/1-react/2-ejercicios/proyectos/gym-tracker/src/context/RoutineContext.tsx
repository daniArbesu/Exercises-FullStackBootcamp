import {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  useCallback,
  useEffect,
} from 'react';
import { v4 as uuidv4 } from 'uuid'; //generate random id
import { Routine } from '../types/routine';

const initialRoutineState: Routine[] = [];

export const RoutineContext = createContext<
  [Routine[], (routine: Routine) => void]
>([initialRoutineState, () => null]);

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
    setRoutines((prevState) => [...prevState, { ...routine, id: uuidv4() }]);
  }, []);

  return (
    <RoutineContext.Provider value={[routines, addRoutine]}>
      {children}
    </RoutineContext.Provider>
  );
};

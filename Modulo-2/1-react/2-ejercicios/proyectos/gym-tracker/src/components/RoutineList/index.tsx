import { useState, useContext } from 'react';
import { RoutineContext } from '../../context/RoutineContext';
import { Routine } from '../../types/routine';
import Modal from '../Modal';
import { AddButton, RoutineListWrapper } from './styles';

const RoutineList = (): React.ReactElement => {
  const [open, setOpen] = useState(false);
  const [routines, addRoutine] = useContext(RoutineContext);

  const onAddRoutine = (routine: Routine) => {
    addRoutine(routine);
    setOpen(false);
  };

  return (
    <>
      <RoutineListWrapper>
        <h3>Your Programms</h3>

        <div>
          {routines.map(({ title, id }) => {
            <RoutineLink key={id} to={`/routine/${id}`}>
              <h3>{title}</h3>

              <span>▶️</span>
            </RoutineLink>;
          })}
        </div>

        <AddButton onClick={() => setOpen(true)}>+</AddButton>
      </RoutineListWrapper>

      <Modal open={open}>
        <UserProfileForm
          onCancel={() => setOpen(false)}
          onSave={onAddRoutine}
        />
      </Modal>
    </>
  );
};

export default RoutineList;

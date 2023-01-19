import { useForm } from 'react-hook-form';
import { Routine } from '../../types/routine';
import { ActionsWrapper, CancelButton, Form, SaveButton } from './styles';

const RoutineForm = ({ onCancel, onSave }: Props): React.ReactElement => {
  const { handleSubmit, register } = useForm<Routine>();

  const onSubmit = (values: Routine) => {
    onSave(values);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <p>Gym Programm name:</p>
        <input type="text" {...register('title', { required: true })} />
      </label>
      <label>

      <ActionsWrapper>
        <CancelButton type="button" onClick={onCancel}>
          Cancel
        </CancelButton>
        <SaveButton type="submit">Save</SaveButton>
      </ActionsWrapper>
    </Form>
  );
};

export type Props = {
  onCancel: () => void;
  onSave: (newRoutine: Routine) => void;
};

export default UserProfileForm;

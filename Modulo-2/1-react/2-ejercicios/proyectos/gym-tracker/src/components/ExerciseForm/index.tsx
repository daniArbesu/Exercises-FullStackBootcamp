import { useForm } from 'react-hook-form';
import { Exercise } from '../../types/routine';
import { ActionsWrapper, CancelButton, Form, SaveButton } from './styles';

const ExerciseForm = ({ onCancel, onSave }: Props): React.ReactElement => {
  const { handleSubmit, register } = useForm<Exercise>();

  const onSubmit = (values: Exercise) => {
    onSave(values);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <p>Exercise name:</p>
        <input type="text" {...register('name', { required: true })} />
      </label>
      <label>
        <p>Number of Sets:</p>
        <input type="number" {...register('series', { required: true })} />
      </label>
      <label>
        <p>Repetitions every Set:</p>
        <input type="number" {...register('repetitions', { required: true })} />
      </label>
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
  onSave: (newExercise: Exercise) => void;
};

export default ExerciseForm;

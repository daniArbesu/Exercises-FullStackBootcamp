import { useForm } from 'react-hook-form';
import { User } from '../../types/user';
import { ActionsWrapper, CancelButton, Form, SaveButton } from './styles';

const UserProfileForm = ({
  user,
  onCancel,
  onSave,
}: Props): React.ReactElement => {
  const { handleSubmit, register } = useForm({
    defaultValues: user,
  });

  const onSubmit = (values: User) => {
    onSave(values);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <p>Input name:</p>
        <input type="text" {...register('name', { required: true })} />
      </label>
      <label>
        <p>Input age:</p>
        <input type="number" {...register('age', { required: true })} />
      </label>
      <label>
        <p>Input height (cm):</p>
        <input type="number" {...register('height', { required: true })} />
      </label>
      <label>
        <p>Input weight (kg):</p>
        <input type="number" {...register('weight', { required: true })} />
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
  user: User;
  onCancel: () => void;
  onSave: (newUser: User) => void;
};

export default UserProfileForm;

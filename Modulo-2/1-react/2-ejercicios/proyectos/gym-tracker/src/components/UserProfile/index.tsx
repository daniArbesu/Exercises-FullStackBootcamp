import { EditButton, UserDataRow, UserProfileWrapper } from './styles';

const UserProfile = (): React.ReactElement => {
  return (
    <UserProfileWrapper>
      <h3>NOMBRE APELLIDO</h3>
      <UserDataRow>
        <p>30 años</p>
        <p>80 kg</p>
        <p>1.75 cm</p>
      </UserDataRow>

      <EditButton>Editar Perfil</EditButton>
    </UserProfileWrapper>
  );
};

export default UserProfile;

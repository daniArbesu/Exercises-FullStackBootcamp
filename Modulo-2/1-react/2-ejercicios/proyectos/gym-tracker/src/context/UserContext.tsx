import {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from 'react';
import { User } from '../types/user';

const initialUserState: User = {
  name: null,
  age: null,
  weight: null,
  height: null,
};
type SetUser = Dispatch<SetStateAction<User>>;
export const UserContext = createContext<[User, SetUser]>([
  initialUserState,
  () => null,
]);

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => {
  const [user, setUser] = useState<User>(() => {
    const localData = localStorage.getItem('gym-tracker-user');

    return localData ? JSON.parse(localData) : initialUserState;
  });

  useEffect(() => {
    localStorage.setItem('gym-tracker-user', JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};

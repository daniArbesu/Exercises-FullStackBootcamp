import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';
import { User } from '../types/user';

const initialUserState = {
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
  const [user, setUser] = useState<User>(initialUserState);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};

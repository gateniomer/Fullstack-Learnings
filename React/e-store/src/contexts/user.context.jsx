import {createCotnext} from 'react';

//as the actual value you want to access
export const UserContext = createCotnext({

});

export const UserProvider = ({children}) => {
  return <UserContext.Provider>{children}</UserContext.Provider>
}
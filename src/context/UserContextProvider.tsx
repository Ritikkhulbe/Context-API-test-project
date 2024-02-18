import React, { useState } from 'react'
import UserContext from './UserContext'

interface User {
  username: string;
  password: string;
}


const UserContextProvider = ({children} : {children : React.ReactNode}) => {
    const [user, setUser] = useState<User>(null);
  return (
    <>
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    </>
  )
}

export default UserContextProvider
import React from "react";

interface User {
    username: string;
    password: string;
}
  

type UserContextType = {
    user: {
        username: string;
        password: string;
    };
    setUser: React.Dispatch<React.SetStateAction<User>> | undefined;
};

const UserContext = React.createContext<UserContextType | undefined>(undefined);

export default UserContext;
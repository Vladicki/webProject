/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {useState, useContext, createContext, useEffect} from 'react';

const AuthContext = createContext(null);

export const AuthContextProvider = ({children})=>{
    const [user, setUser] = useState();
    useEffect(()=>{
        setUser({name:"Guest",loggedIn:false});
    },[]);
    return <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
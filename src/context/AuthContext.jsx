/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {useState, useContext, createContext, useEffect} from 'react';
import {jwtDecode} from "jwt-decode";

const AuthContext = createContext(null);

export const AuthContextProvider = ({children})=>{
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("token"));

  // Set user from token if available
    useEffect(() => {
        if (token) {
            try {
                const decodedUser = jwtDecode(token);
                console.log(decodedUser);
                setUser(decodedUser);
                console.log(user)
            } catch (error) {
                console.error("Invalid token");
                logout();
            }
        }
    }, [token]);

    const logout = () => {
        localStorage.removeItem("token"); // Remove token from storage
        setToken(null);
        setUser(null);
      };
    
    return (
    <AuthContext.Provider value={{ user, logout }}>
        {children}
    </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
import React, {createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const AuthContext = createContext();

const AuthProvider = (props) => {
    const {children}=props;
    const AllContext = useFirebase();
    return (
        <AuthContext.Provider value={AllContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
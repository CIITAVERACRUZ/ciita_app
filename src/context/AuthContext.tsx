import React, { createContext, useReducer } from 'react';
import { User } from '../interfaces/AppInterfaces';
import { authReducer, AuthState } from './AuthReducer';

type AuthContextProps = {
    errorMessage: string,
    token: string | null,
    user: User | null,
    status: 'checking' | 'authenticated' | 'not-authenticated',
    signUp: () => void,
    logIn: () => void,
    logOut: () => void,
    removeError: () => void,
}

const authInitialState: AuthState = {
    status: 'checking',
    token: null,
    user: null,
    errorMessage: ''
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: any) => {

    const [state, dispatch] = useReducer(authReducer, authInitialState )

    const signUp = () => {

        const dummy: User = {
            email: 'dummy@dummy.com',
            name: 'Demo C',
            status: true,
            type: 'business'
        }

        console.log(dummy);
        

        dispatch({
            type: 'signUp',
            payload: {
                token: 'ok',
                user: dummy
            }
        });
    }
    const logIn = () => {}
    const logOut = () => {
        dispatch({
            type: 'logout' 
        })
    }
    const removeError = () => {}

    return (
        <AuthContext.Provider value={{
            ...state,
            signUp,
            logIn,
            logOut,
            removeError,
        }}>
            {children}
        </AuthContext.Provider>
    )

}
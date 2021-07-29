import React, {useReducer} from 'react';

// I will be using ...... ---to be inserted here-----

const AuthContext = React.createContext({
    //proprietati
})

export const AuthContextProvider = props => <AuthContext.Provider value={
    //valorile proprietatilor -> dinamice
}>
    {props.children}
</AuthContext.Provider>

export default AuthContext;
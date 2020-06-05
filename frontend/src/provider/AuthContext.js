import React, { createContext, useState, useEffect } from 'react'
import firebase from '../firebase'
import { getfirebaseIdToken } from '../util/firebaseFunctions';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState(null);
    const [token, setToken] = useState(null);

    const updateUser = (user) => {
        if(user){
            const {email, userName} = user;
            const lastLogin = user.metadata.lastLogin
            setCurrentUser({email, lastLogin, username: userName});
            getfirebaseIdToken().then(token => {
                setToken(token);
                setLoading(false);
            })
        } else {
            setCurrentUser(null);
            setLoading(false);
        }
    }
    
    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(updateUser)
        return unsubscribe;
    }, [])

    if(loading) return <div>Loading...</div>
    return (
        <AuthContext.Provider value ={{currentUser, token}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
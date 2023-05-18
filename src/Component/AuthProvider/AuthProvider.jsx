import React from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext } from 'react';
import app from '../firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';


export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)


    const signUp = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignUp = (provider) =>{
        signInWithPopup(auth, provider)
    }

    useEffect(()=>{
        const unsubsribe = onAuthStateChanged(auth, usergot =>{
            setUser(usergot)
            console.log(usergot)
        })
        return ()=>{
            unsubsribe();
        }
    },[])

    const logOut = () =>{
        signOut(auth)
    }
    const userInfo = {
        signUp,
        logIn,
        googleSignUp,
        logOut,
        user,

    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
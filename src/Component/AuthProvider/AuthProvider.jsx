import React from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext } from 'react';
import app from '../firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';


export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const signUp = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignUp = (provider) =>{
        setLoading(true)
        signInWithPopup(auth, provider)
    }

    useEffect(()=>{
        const unsubsribe = onAuthStateChanged(auth, usergot =>{
            setUser(usergot)
            console.log(usergot)
            setLoading(false)
        })
        return ()=>{
            unsubsribe();
        }
    },[])

    const logOut = () =>{
        setLoading(true)
        signOut(auth)
    }
    const userInfo = {
        signUp,
        logIn,
        googleSignUp,
        logOut,
        user,
        loading,

    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

const googleProvider= new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null)
    const signUp=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login= (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // sign out
    const logOut=()=>{
        return signOut(auth)
    }

    const googleLogin=()=>{
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
        })
        return ()=>{
            unSubscribe();
        }
    },[])

    const authInfo={
        signUp,
        googleLogin,
        login,
        user, 
        setUser,
        logOut
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
}

    


export default AuthProvider;
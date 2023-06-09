import React, { createContext, useEffect } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import { useState } from 'react';
import app from '../firebase.confiq';
export const AuthContext=createContext(null);

const auth =getAuth(app);
const googleauthProvider=new GoogleAuthProvider();
const AuthProvider = ({children}) => {
 const [user,setuser]=useState(null)

 const createUser=(email,password) =>{
    return createUserWithEmailAndPassword(auth,email,password)
 }
 const signin=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
 }

 const SignInWithGoogle=()=>{
    return signInWithPopup(auth,googleauthProvider)
 }

 const logOut=()=>{
   return signOut(auth)
 }
 const updateUser=(user,name,photo)=>{
   updateProfile(user,{
      photoURL:photo,
      displayName:name,
   })
 }

 useEffect(()=>{
 const unsub = onAuthStateChanged(auth,Addeduser=>{
    console.log("auth State change",Addeduser);
    setuser(Addeduser);
  })
  return ()=>{
    unsub()
  }
 },[])
 
const authinfo={
     user,
     createUser,
     signin,
     logOut,
     SignInWithGoogle,
     updateUser
}
    
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
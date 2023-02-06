import { useState, useEffect, createContext } from "react";

import {auth, provider} from "../firebase/fireBaseConfig"
import {signInWithPopup} from "firebase/auth"

export const SignInContext = createContext()

export const SignInProvider = ({children})=>{
    const [currentUser, setUser] = useState('')
    const [userName, setUserName] = useState('')
 
    let handleClick = ()=> {
        signInWithPopup(auth, provider).then((data)=>{
            setUser(data.user.email)
            setUserName(data.user.displayName)
            localStorage.setItem('Email', data.user.email)
            localStorage.setItem('Name', data.user.displayName)
    
        })
    }

    useEffect(()=>{
        setUser(localStorage.getItem('Email'))
        setUserName(localStorage.getItem('Name'))
    
    }, [])

    return (
        <SignInContext.Provider value={{currentUser, handleClick, userName}}>
          {children}
        </SignInContext.Provider>
      );


};



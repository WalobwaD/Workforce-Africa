import { useState, useEffect, createContext } from "react";

import {auth, provider} from "../firebase/fireBaseConfig"
import {signInWithPopup} from "firebase/auth"

export const SignInContext = createContext()

export const SignInProvider = ({children})=>{
    const [currentUser, setUser] = useState('')

    let handleClick = ()=> {
        signInWithPopup(auth, provider).then((data)=>{
            setUser(data.user.email)
            localStorage.setItem('Email', data.user.email)
    
        })
    }

    useEffect(()=>{
        setUser(localStorage.getItem('Email'))
    
    }, [])

    return (
        <SignInContext.Provider value={{currentUser, handleClick}}>
          {children}
        </SignInContext.Provider>
      );


};



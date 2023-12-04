/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { createContext } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import useAxiosPublic from "../components/hookes/useAxiosPublic";




export const AuthContext = createContext()
const auth = getAuth(app);
const AuthProvider = ({children}) => {
 const [user , setUser] = useState(null);
 const [ loading , setLoading] = useState(true);
 const googleProvider =new GoogleAuthProvider()
 const axiosPublic = useAxiosPublic()

// crate user 
const creatuser = (email , password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword (auth, email , password);
}


// sigin 

const sigIn = (email, password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
}

// google login
const googleSignIn = ()=>{
    setLoading(true)
    return signInWithPopup(auth , googleProvider);
}

// logout
const logOut = () =>{
    setLoading(true);
    return signOut(auth);

}

// update profile
const updateUserProfile = (name, photo)=>{
    return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL:photo
    });
   
}
useEffect (() =>{
    const unsubcribe = onAuthStateChanged(auth , currentUser =>{
        setUser(currentUser);
        if (currentUser) {
            // get token and store client
            const userInfo = { email: currentUser.email };
            axiosPublic.post('/jwt', userInfo)
                .then(res => {
                    if (res.data.token) {
                        localStorage.setItem('access-token', res.data.token);
                        setLoading(false);
                    }
                })
        }
        else {
            localStorage.removeItem('access-token');
            setLoading(false);
        }
    });
    return () =>{
        return unsubcribe();
    }
},[axiosPublic])


const authInfo={

    user,
    loading,
    creatuser ,
    sigIn,
    googleSignIn,
    logOut,
    updateUserProfile
}



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
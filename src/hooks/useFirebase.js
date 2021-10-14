import initializeFirebaseConfig from "../Pages/Login/Firebase/firebase.initialize";
import { GoogleAuthProvider,getAuth,signInWithPopup,signOut,onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";


const useFirebase = () => {
    //useStates
    const [user,setUser]=useState({});
    const [error,setError]=useState("");

    //firebase initialize configaration
    initializeFirebaseConfig();
    // Providers 
    const googleProvider = new GoogleAuthProvider();
    //auth
    const auth = getAuth();


    //googleSignIn
    const googleSignIn = ()=>{
        signInWithPopup(auth, googleProvider)
        .then(result=>{
            const user = result.user;
            setUser(user);
        })
        .catch(error=>{
            setError(error.message)
        })
    }

    //sign Out 
   
    const logOut = ()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({});
          }).catch((error) => {
            // An error happened.
            setError(error);
          });
    }

    // onAuthStateChange for state change observer 
    useEffect(()=>{
      const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
              // ...
            } else {
                setUser({})
              // User is signed out
              // ...
            }
          });

          return ()=> unsubscribed;
    },[])

    return {
        user,
        googleSignIn,
        logOut,
        error
    }

}

export default useFirebase;
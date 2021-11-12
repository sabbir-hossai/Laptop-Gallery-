import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from '@firebase/auth';
import React, { useEffect, useState } from 'react';
import initializeAuthentication from "../../Login/Firebase/Firebase.init";


initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});




    const auth = getAuth();
    const userRegister = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    const userLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }
    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser()
            }).catch((error) => {
                setUser({})
            });
    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);

            } else {
                setUser({})
            }

        });
        return () => unsubscribed;
    }, [auth]);

    return {
        user,
        userRegister,
        userLogin,
        logout
    }
};

export default useFirebase;
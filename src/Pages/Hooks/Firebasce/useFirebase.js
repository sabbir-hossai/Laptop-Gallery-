import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from '@firebase/auth';
import React, { useEffect, useState } from 'react';
import initializeAuthentication from "../../Login/Firebase/Firebase.init";


initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false)




    const auth = getAuth();

    const userRegister = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user to the database
                saveUser(email, name, 'POST');
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }

    const userLogin = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);

            } else {
                setUser({})
            }
            setIsLoading(false)

        });
        return () => unsubscribed;
    }, [auth]);

    useEffect(() => {
        fetch(`http://localhost:5000/users/admin/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin)
            })
    }, [user.email])

    const logout = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser()
            }).catch((error) => {
                setUser({})
            })
            .finally(() => setIsLoading(false));
    }
    const saveUser = (email, displayName,) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }
    return {
        user,
        admin,
        authError,
        isLoading,
        userRegister,
        userLogin,

        logout
    }
};

export default useFirebase;
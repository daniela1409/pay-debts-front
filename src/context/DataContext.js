import React, { useEffect, useState, createContext } from "react";
import firebaseapp from "../firebase-config";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const DataContext = createContext();


const auth = getAuth(firebaseapp);

export const DataProvider = ({ children }) =>{
    
    const [users, setUsers] = useState(null);

    onAuthStateChanged(auth, (userFirebase) => {
        if (userFirebase) {
        const userData = {
            uid: userFirebase.uid,
            email: userFirebase.email
        };

        setUsers(userData);
        }
        else {
        setUsers(null);
        }
    });
    
    return(
        <DataContext.Provider value={{
            users, setUsers
        }}>
            {children}
        </DataContext.Provider>
    )
}
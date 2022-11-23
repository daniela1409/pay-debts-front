import React, { useEffect, useState, createContext } from "react";
import firebaseapp from "../firebase-config";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const DataContext = createContext();


const auth = getAuth(firebaseapp);

export const DataProvider = ({ children }) =>{
    
    const [users, setUsers] = useState(null);

    onAuthStateChanged(auth, (userFirebase) => {
         // <------ Check this line
        if(!users !== !userFirebase) {
            if(!userFirebase) {
                setUsers(null);
                return;    
            }
            const idToken = userFirebase.getIdToken().then(function(idToken) {
                const userData = {uid: userFirebase.uid, email: userFirebase.email, idToken: idToken};
                setUsers(userData);
            });
            
            }
            console.log(users);
        
        // if(!users !== !userFirebase) {
        //   if(!userFirebase) {
        //     setUsers(null);
        //     return;    
        //   }
        //   const userData = {uid: userFirebase.uid, email: userFirebase.email};
        //   setUsers(userData);
        // }
        // console.log(users);
    });
    
    return(
        <DataContext.Provider value={{
            users, setUsers
        }}>
            {children}
        </DataContext.Provider>
    )
}
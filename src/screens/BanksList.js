import React from 'react';

import firebaseapp from '../firebase-config';
import { getAuth, signOut} from "firebase/auth";

const auth = getAuth(firebaseapp);

function BanksList() {
  return (
    <div>
        <h1>BanksList</h1>
        <button onClick={() =>signOut(auth)}>Cerrar sesión</button>
    </div>
    
  )
}

export default BanksList
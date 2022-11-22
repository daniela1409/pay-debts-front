import React, { useState } from 'react';
import firebaseapp from '../firebase-config';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

const auth = getAuth(firebaseapp);

function Login() {

    function submitHandler(e){
        e.preventDefault();

        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;

        signInWithEmailAndPassword(auth, email, password);
        console.log(email, password);
    }
  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={submitHandler}>
            <div>
                <label>
                    Correo electrónico
                </label>
                <input type="email" id="email"></input>
            </div>
            <div>
                <label>
                    Contraseña:
                </label>
                <input type="password" id="password"></input>
            </div>
            <input type="submit" id="initSession" value = "Iniciar sesión"/>    
        </form>
    </div>
  )
}

export default Login
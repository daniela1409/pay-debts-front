import { initializeApp } from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyCq0pE_dw-MQcXYDPKt778YXXO8xH5aBwk",
    authDomain: "paydebts-406b0.firebaseapp.com",
    projectId: "paydebts-406b0",
    storageBucket: "paydebts-406b0.appspot.com",
    messagingSenderId: "196678735618",
    appId: "1:196678735618:web:75fe3849b3b3a1d1b3d41b"
}

const firebaseapp = initializeApp(firebaseConfig);

export default firebaseapp;
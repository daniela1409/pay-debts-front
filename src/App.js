import './App.css';
import { useState } from 'react';
import BanksList from './screens/BanksList';
import Login from './screens/Login';
import firebaseapp from './firebase-config';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(firebaseapp);

function App() {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (userFirebase) => {
    if(userFirebase){
      setUser(userFirebase);
    }
    else{
      setUser(null);
    }
  });

  return (
    <div className="App">
      { user ? <BanksList/> : <Login/>}
    </div>
  );
}

export default App;

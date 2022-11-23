import './App.css';
import { useState } from 'react';
import BanksList from './screens/BanksList';
import Login from './screens/Login';
import firebaseapp from './firebase-config';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DebtsList from './screens/DebtsList';
import DebtDetail from './screens/DebtsDetail';

const auth = getAuth(firebaseapp);

function App() {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (userFirebase) => {
    if (userFirebase) {
      const userData = {
        uid: userFirebase.uid,
        email: userFirebase.email
      };

      setUser(userData);
    }
    else {
      setUser(null);
    }
  });

  return (
    <div className="App">
      {/* { user ? <BanksList/> : <Login/>} */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={user ? <BanksList /> : <Login />} />
          <Route path="/debt/:id" element={<DebtsList />} />
          <Route path="/debt/detail/:id" element={<DebtDetail />} />
          {/* <Route path="/note/save" element={<FormNote/>}/>
          <Route path="/note/download" element={<DownloadJSON/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

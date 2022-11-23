import './App.css';
import { useState } from 'react';
import BanksList from './screens/BanksList';
import Login from './screens/Login';
import firebaseapp from './firebase-config';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DebtsList from './screens/DebtsList';
import DebtDetail from './screens/DebtsDetail';
import { DataProvider } from './context/DataContext';

const auth = getAuth(firebaseapp);

function App() {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (userFirebase) => {
    if (userFirebase) {
      const userData = {
        uid: userFirebase.uid,
        email: userFirebase.email,
        accessToken: userFirebase.accessToken
      };

      setUser(userData);
    }
    else {
      setUser(null);
    }
    console.log(user);
  });

  return (
    <DataProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={user ? <BanksList /> : <Login />} />
            <Route path="/debt/:id" element={user ? <DebtsList /> : <Login />} />
            <Route path="/debt/detail/:id" element={user ? <DebtDetail /> : <Login />} />
            {/* <Route path="/note/save" element={<FormNote/>}/>
            <Route path="/note/download" element={<DownloadJSON/>}/> */}
          </Routes>
        </BrowserRouter>
      </div>
    </DataProvider>
    
  );
}

export default App;

import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import CardDebts from '../components/cardDebts';
import firebaseapp from '../firebase-config';
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth(firebaseapp);

function DebtsList() {

  const location = useLocation();
  const bank = location.state.bank;
  //const debts = bank.debts;

  const [debts, setDebts] = useState([]);

  useEffect(() => {

    const getBanks = async () => {

      const url = 'http://localhost:8080/debt/' + 'psX5PbFyD2ecmchB2pbMnFIycHP2' + '/' + bank.id;
      const result = await axios.get(url);

      setDebts(result.data);

    }

    getBanks()

  }, []);

  return (
    <div>
      <h1>Listado de deudas</h1>

      <div className='text-center justify-content-center align-items-center'>
        {debts.length === 0 && <p>Cargando</p>}
        {
          debts.map((debt, i) => {
            return (
              <CardDebts
                debt={debt}
                key={i}
              />
            )
          })
        }
      </div>
      <div>
        <button onClick={() => signOut(auth)}>Cerrar sesión</button>
      </div>
    </div>
  )
}

export default DebtsList;
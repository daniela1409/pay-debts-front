import React from 'react';
import { useLocation } from 'react-router-dom';
import CardDebts from '../components/cardDebts';

function DebtsList() {

  const location = useLocation();
  const bank = location.state.bank;
  const debts = bank.debts;

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
    </div>
  )
}

export default DebtsList;
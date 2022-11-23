import React from 'react';
import { useLocation } from 'react-router-dom';
import CardDetail from '../components/cardDetail';

function DebtDetail() {

    const location = useLocation();
    const debt = location.state.debt;

    return (
        <div>
            <h1>Detalle de la deuda</h1>
            <CardDetail
                debt={debt}
            />
        </div>
    )
}

export default DebtDetail;
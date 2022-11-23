import React, { useEffect, useState } from "react";
import PayDebts from '../services/PayDebts';
import { useNavigate } from 'react-router-dom';

function CardDetail(props) {

    const debt = props.debt;
    const navigate = useNavigate();

    var flag = false;

    if (debt.quotasNumber === 0) {
        flag = true;
    }

    const [state, setState] = useState({
        quotasNumber: "",
        id: ""
    });

    const handleChange = (e) => {
        const value = e.target.value;

        setState({
            ...state,
            [e.target.name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const debtData = {
            quotasNumber: flag == true ? state.quotasNumber : debt.quotasNumber,
            id: debt.id
        };
        console.log(debtData);
        PayDebts.payDebts(debtData).then((response) => {
            alert(response.data);
            console.log(response);
            navigate('/');
        });
    };

    return (
        <div className="card container-fluid w-75 col-12 my-4" id="cardDevt">

            <div className="card-body w-100 row text-center justify-content-center align-items-center" id="body">

                <div className="col-8 row w-100 text-center justify-content-center align-items-center">
                    {debt.totalDebt === 0 ? <div className="alert alert-success" role="alert">
                        Deuda ya saldada
                    </div> : <div></div>}

                    <div className="col-12 ">
                        <label>Valor de la deuda : {debt.totalCount}</label>
                    </div>

                    <div className="col-12 ">
                        <label>Total de la deuda saldada : {debt.totalDebt}</label>
                    </div>

                    <div className="col-12">
                        <label>Valor por cuota : {debt.quotaValue}</label>
                    </div>

                    <form className='col-12 w-100 row text-center justify-content-center align-items-center' onSubmit={handleSubmit}>

                        <div className="row col-12">

                            <div>
                                <label htmlFor='quotasNumber'>Número de cuotas : {debt.quotasNumber}</label>
                            </div>
                            <div>
                                <input name='quotasNumber' id='quotasNumber' onChange={handleChange} disabled={debt.quotaValue === 0 ? false : true}></input>
                            </div>

                        </div>
                        <button className="mt-2" type="submit" disabled={debt.totalDebt !== 0 ? false : true}>Pagar</button>
                    </form>

                </div>

            </div>
        </div>
    )
}

export default CardDetail;




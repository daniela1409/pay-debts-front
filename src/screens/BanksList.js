import React, { Component, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/card';
import firebaseapp from '../firebase-config';
import { getAuth, signOut } from "firebase/auth";
import { DataContext } from '../context/DataContext';

const auth = getAuth(firebaseapp);

function BanksList() {

    const { users } = useContext (DataContext);

    //console.log(users);
    const [banks, setBanks] = useState([]);

    useEffect(() => {

        const getBanks = async () => {

            const url = 'http://localhost:8080/bank/' + users.uid;
            const result = await axios.get(url,);

            setBanks(result.data);

        }

        getBanks()

    }, []);

    return (
        <div className='row'>
            <h1>Listado de bancos</h1>

            <div className='text-center justify-content-center align-items-center'>
                {banks.length === 0 && <p>Cargando</p>}
                {
                    banks.map((bank, i) => {
                        return (
                            <Card
                                bank={bank}
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

export default BanksList
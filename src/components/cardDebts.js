import React from 'react'
import { Link } from 'react-router-dom'

class CardDebts extends React.Component {

    render() {

        const { debt } = this.props;

        return (

            <div className="card container-fluid w-75 col-12 my-4" id="cardDevt">

                <div className="card-body w-100 row" id="body">

                    <div className="col-8 row w-100">
                        <div className="col-8 ">
                            <label>Valor de la deuda : {debt.totalCount}</label>
                        </div>
                        <div className="col-4 ">
                            <Link to={`/debt/detail/${debt.id}`} state={{ debt: debt }}>
                                Ver
                            </Link>
                        </div>

                    </div>

                </div>
            </div>

        )
    }
}

export default CardDebts;
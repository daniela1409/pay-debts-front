import axios from 'axios';

const PAYDEVTS_PUT = 'http://localhost:8080/pay_debts/';

class PayDebts {
    payDebts(debtData) {
        return axios.put(PAYDEVTS_PUT, debtData);

    }
}

export default new PayDebts();
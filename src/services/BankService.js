import axios from 'axios';

const BANK_FINDALL_BY_USER = 'http://localhost:8080/bank/';

class BankService{
    getBanksByUser(userId){
        return axios.get(BANK_FINDALL_BY_USER + userId);
    }
}

export default BankService;
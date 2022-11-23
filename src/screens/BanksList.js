import React, { Component, useEffect, useState } from 'react';

import firebaseapp from '../firebase-config';
import { getAuth, signOut} from "firebase/auth";
import BankService from '../services/BankService';

const auth = getAuth(firebaseapp);

class BanksList extends Component{
  constructor(props){
      super(props)
      this.state = {
          banks:[]
      }
  }
  componentDidMount(){
      BankService.getBanksByUser('psX5PbFyD2ecmchB2pbMnFIycHP2')
      .then((response) => {
          //this.setState({banks: response.data})
          console.log(response.data)
      })
  }
}

// function BanksList() {

//   const [banks, setBanks] = useState([]);

//   useEffect(()=>{

//     const getBanks = async ()=>{
        
//     }

//   },[]);

//   return (
//     <div>
//         <h1>BanksList</h1>
//         <button onClick={() =>signOut(auth)}>Cerrar sesión</button>
//     </div>
    
//   )
// }

export default BanksList
import React from 'react';
import { cashDispenser } from '../services/cash-dispenser-service';
import './home.css';

//services
import { setLocalStorage, getLocalStorage, clearLocalStorage } from '../services/local-storage-service';

export const Withdrawal = (props) => {
    
    let amountToWithdraw=props.location.state.amount;
    let availableBalance=getLocalStorage('balance');

    if (availableBalance < amountToWithdraw) {
        props.history.push({
            pathname: '/overdraft',
            state: {amount:amountToWithdraw, balance: availableBalance}
            }
        );
        return null;
    }
    
    const answer = cashDispenser(amountToWithdraw);
    
    if (answer.length != 0) {        
        availableBalance=availableBalance - amountToWithdraw;
        setLocalStorage('balance', availableBalance);
    }

    const noHandler = ()=>{
        clearLocalStorage();
        props.history.push('/goodbye');
    }

    function yesHandler() { 
        props.history.push(
            {
                pathname:'/account',
                state: {balance: availableBalance}
            }
        );
    }

  return (
    <div >
    <h1>Available to withdraw : £{availableBalance}</h1>
     {  
         (answer.length === 0) ? <h3>Please enter amount in multiples of 5</h3> :
         
        <table > 
            <thead>
                <tr><th>Please take your cash</th></tr>
            </thead>
            <tbody>
                <tr>
                    {answer.sort((a,b)=>a-b).map((amount,index)=>
                        <tr   key={index}>£{amount}.00</tr>)}
                </tr>
            </tbody>
        </table>
    }
    <h5>Do you want to make another transaction?</h5>
    <button className='submitbutton' onClick={yesHandler}>Yes</button>
    <button className='submitbutton' onClick={noHandler}>No</button>
    
    </div>
  )
}
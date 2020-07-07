import React, {Component} from 'react';
import './home.css';
import  axios from 'axios';

//services
import { setLocalStorage, getLocalStorage } from '../services/local-storage-service';

export default class Home extends Component {    

   componentDidMount(){
    let fiver=[...Array(4)];
    fiver.fill(5);
    let tenner=[...Array(15)];
    tenner.fill(10);
    let twenty=[...Array(7)];
    twenty.fill(20);    
    //set the following in local storage.
    const cash= [fiver, tenner, twenty];   
    setLocalStorage('cash', cash);
    setLocalStorage('overdraft',100);
   }

   onSubmit = () => {

  const apiUrl = 'https://rh4ds.sse.codesandbox.io/deposit/';
  return axios.get(apiUrl)
    //.then(data => data.data.currentBalance)
    .then(data => {
      console.log("home: "+data.data[0].deposit)
      setLocalStorage('balance', data.data[0].deposit);
      this.props.history.push(
          {
              pathname:'/account'
          }
      );
    })
    .catch(err=> err.response.data.error); 

   }
      
    render() {
     
     
        return (
            <div >
            <h1>Automated Teller</h1>
            <button className='submitbutton' onClick={this.onSubmit}>Submit</button>  
          <br></br>
        
        </div>
    );
}
}
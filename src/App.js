import React from 'react';
import { BrowserRouter as Router,  Route } from 'react-router-dom';
import './App.css';

//components
import Home from './components/home';
import {Account} from './components/account';
import { Withdrawal } from './components/withdrawal';
import  {Goodbye} from './components/goodbye';
import  {Error} from './components/error';
import { Overdraft } from './components/overdraft';

const App = props => {
  return (  
    <Router>
      <Route path="/" exact component={Home}/>
      <Route path="/account" component={Account} />
      <Route path="/withdrawal" component={Withdrawal} />
      <Route path="/overdraft" component={Overdraft} />
      <Route path="/goodbye" component={Goodbye} />
      <Route path="/error" component={Error} />
  </Router>
);
}

export default App;

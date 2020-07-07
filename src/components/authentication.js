import React from 'react';
import { BrowserRouter as Router,
Route } from 'react-router-dom';

//components
import Home from './home';
import Account from './account';


export default function Authentication() {
    return (
        <Router>
            <Route path='/' component={Home}>Home</Route>
            <Route path='/account' component={Account}/>
        </Router>
    );
}
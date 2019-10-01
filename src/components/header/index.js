import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from '../../containers/login';



function Header () {
        return(
            <header className="App-header">
                Automated Demand Forecasting Tool
            </header>
        )
    }


export default Header;


/*
<Router>
<ul className="navbar-nav ml-auto">
    <li>
        <Link to={'/login'} className="nav-link">Login</Link>
    </li>
</ul>
<switch>
    <Route path='/login' component={Login} /> 
</switch>
</Router>
*/






import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from '../../containers/login';
import Home from '../../containers/home';
import Automated from '../../containers/automated';
import Customized from '../../containers/customized';
import Report from '../../containers/reports';
import Documentation from '../../containers/documentation';
import DpFeedback from '../../containers/dpfeedback'
import  CustomersList from '../../api/CustomersList';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PropTypes from 'prop-types';
import './index.css';



const styles = theme => ({
  navBar: {
    // Make the app bar z-index always one more than the drawer z-index
    zIndex: theme.zIndex.drawer + 1,
  },
}); 


function Navbar () {
    return (
    <Router>
          <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-dark">
          {/*<a class="navbar-brand"> Statistical Forecasting Tool</a>*/}
          <ul className="navbar-nav">
          
            <li><Link to={'/home'} className="nav-link">Home</Link></li>
            <li><Link to={'/automated'} className="nav-link">Automated</Link></li>
            <li><Link to={'/dpfeedback'} className="nav-link">DP Feedback</Link></li>
            <li><Link to={'/customized'} className="nav-link">Customized</Link></li>
            <li><Link to={'/reports'} className="nav-link">Reports</Link></li>
            <li><Link to={'/documentation'} className="nav-link">Knowledge Repository</Link></li>
            {/*<li><Link to={'/login'} className="nav-link">Login</Link></li>*/}
          </ul>
          <div className="logout_button">
          <IconButton>
          <AccountCircle/>
          </IconButton>
          </div>
          
          </nav>
          <switch>
              <Route exact path='/' component={Home} />
              <Route path='/home' component={Home} />
              <Route path='/automated' component={Automated} />
              <Route path='/dpfeedback' component={DpFeedback}/>
              <Route path='/customized' component={Customized} />
              <Route path='/reports' component={Report} />
              <Route path='/documentation' component={Documentation} />
              {/*<Route path='/login' component={Login} />*/}
          </switch>
      </Router>
    );
  }
  
  export default Navbar;
  
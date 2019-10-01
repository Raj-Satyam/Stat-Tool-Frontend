import React, { Component } from "react";
import PropTypes from 'prop-types';
import mdtpic from '../../components/pics/medtronicpic.jpg';
import user from '../../components/pics/man-user.png';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Bootstrap from "react-bootstrap";
//import './index.css';


export default class LoginForm extends React.Component {
  state = {
    username: '',
    password: ''
  };

  /*handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };*/


  handle_username = event => {
    this.setState(
      {username: event.target.value});
  };

  handle_password = event => {
    this.setState(
      {password: event.target.value});
  };

  render() {
    return (
      <div className="Logincomponents">
        <img src= {mdtpic} className="Loginimage"></img>
        <div className="Loginmodule">
          <div className="Loginicon">
            <img src= {user} ></img>
          </div>
          <form onSubmit={e => this.props.handle_login(e, this.state)}>
          <div class="form-group">
            <input 
            type="username" 
            class="form-control" 
            id="exampleInputEmail1" 
            placeholder="User Id"
            onChange={this.handle_username}/>
          </div>
          <div class="form-group">
            <input 
            type="password" 
            class="form-control" 
            id="exampleInputPassword1" 
            placeholder="Password"
            onChange={this.handle_password}/>
          </div>
             <button type="submit" class="btn btn-success btn-block">Login</button>
          </form>
        </div>
        <Footer/>
      </div>
          ) ;
  }
}



LoginForm.propTypes = {
  handle_login: PropTypes.func.isRequired
};


/*
<form onSubmit={e => this.props.handle_login(e, this.state)}>
             <input
             type="text"
             name="username"
             placeholder="User Id"
             value={this.state.username}  
             onChange={this.handle_change}
             />
             <input
             type="password"
             name="password"
             placeholder="Password"
             value={this.state.password}
             onChange={this.handle_change}
             />
             <input type="submit" value="Log in"/>
          </form>
*/


/*
<input
             type="password"
             name="password"
             placeholder="Password"
             value={this.state.password}
             
             />
*/
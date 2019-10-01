import React, { Component } from "react";
import mdtpic from '../../components/pics/medtronicpic.jpg';
import user from '../../components/pics/man-user.png';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Bootstrap from "react-bootstrap";
import './index.css';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      username: "",
      password: ""
    };
  }
  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });

    console.log(this.username);
  }
  handleSubmit = event => {
    event.preventDefault();
  }
  
  handleClick() {
    console.log(this.username);
  }

  render() {
    return (
      <div className="Logincomponents">
          <img src= {mdtpic} className="Loginimage"></img>
        <div className="Loginmodule">
          <div className="Loginicon">
          <img src= {user} ></img>
          </div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="username" bsSize="large">
            <Form.Control
              autoFocus
              value={this.state.username}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="password" bsSize="large">
            <Form.Control
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </Form.Group>
          <Button
            block
            bsSize="large"
            variant="success"
            onClick={this.handleClick}
          >
            Login
          </Button>
        </Form>
        </div>
      </div>
    );
  }
}
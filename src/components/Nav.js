import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../components/navbar';
import Button from 'react-bootstrap/Button';


function Nav(props) {
  // const logged_out_nav = (
  //   <ul>
  //     <li onClick={() => props.display_form('login')}>login</li>
  //     <li onClick={() => props.display_form('signup')}>signup</li>
  //   </ul>
  // );

  const logged_out_nav = (
    <div>
      You have been signed out. Please click below to login
      <Button
            block
            bsSize="lg"
            variant="success"
            onClick={() => props.display_form('login')}
          >
            Login
      </Button>      
    </div>
  )

   const logged_in_nav = (
     <div>
       {/* <ul>
         <li onClick={props.handle_logout}>logout</li>
       </ul> */}
      <Navbar/>
      </div>
   );

  return <div>{props.logged_in ? logged_in_nav : logged_out_nav}</div>;
}

export  {Nav};

Nav.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  display_form: PropTypes.func.isRequired,
  handle_logout: PropTypes.func.isRequired
};
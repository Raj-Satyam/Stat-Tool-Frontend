import React from "react";
import { slide as Menu } from "react-burger-menu";
import getStepContent from '../diabetesstepper';

export default SideBar => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/burgers">
        Burgers
      </a>

      <a className="menu-item" href="/pizzas">
        Pizzas
      </a>

      <a className="menu-item" href="/desserts">
        Desserts
      </a>
      <a><getStepContent/></a>
      
    </Menu>
  );
};
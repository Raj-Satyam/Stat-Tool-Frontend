import React from 'react';
import My_Jumbotron from '../../components/jumbotron';
import Modulecircle from '../../components/modulecircle';
import Header from '../../components/header';
import './index.css';
import Navbar from '../../components/navbar';
import { BrowserRouter } from 'react-router-dom';
//import Background from '../../components/pics/home_background1.jpg';

var sectionStyle = {
  width: "100%",
  height: "100%",
  //backgroundImage: `url(${Background})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundOpacity: 0.7
};


class Home extends React.Component {
    render() {
        return (    
                <div class="home">
                {/*<h2 className = "home2header">Demand Forecasting Made simple...</h2>*/}
                {/*<h3 className = "home3header">Please navigate to below modules to start exploring</h3>*/}
                
                <section style={ sectionStyle }>
                <h2 className = "home2header">Demand Forecasting Made simple...</h2>
                <h3 className = "home3header">Please navigate to below modules to start exploring</h3>
                <Modulecircle/>
                </section>
                </div>
        )
    }
}

export default Home;
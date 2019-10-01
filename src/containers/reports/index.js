import React, { Component } from "react";
import ReportModule from '../../components/reportmodule';
import './index.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import powerbi from '../../components/pics/medtronicpic.jpg';
import Slider from "react-slick";

export default class Report extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}



// class Report extends React.Component {
//     render() {
//         return (
//             <div className="containerreport">
//                 <ReportModule/>
//                 {/* <Card className= "col-sm-3 col-md-3 col-lg-3 card">
//                     <CardActionArea>
//                         <CardMedia
//                         component="img"
//                         alt="FCA"
//                         height="200"
//                         image= {powerbi}
//                         title="FCA"
//                         />
//                     <CardContent>
//                         <Typography gutterBottom variant="h5" component="h2">
//                             FCA
//                         </Typography>
//                         <Typography variant="body2" color="textSecondary" component="p">
//                             Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//                             across all continents except Antarctica
//                             Whether your focus is on facilitating internal operations, partner integrations, or public data access, APIs are the key to increasing business agility and unlocking the true innovation potential of your data. The API Server is the tool you need to publish enterprise-ready REST APIs in minutes - no custom development required.
//                         </Typography>
//                     </CardContent>
//                     </CardActionArea>
//                     <CardActions>
//                         <Button 
//                         size="small" 
//                         color="primary">
//                         Share
//                         </Button>
//                     </CardActions>
//                 </Card> */}
//             </div>
//         )
//     }
// }

// export default Report;





/*import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'

import  CustomersList from '../../api/CustomersList'
import  CustomerCreateUpdate  from '../../api/CustomerCreateUpdate'
//import './App.css';

const BaseLayout = () => (
  <div className="container-fluid">
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Django React Demo</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link" href="/">CUSTOMERS</a>
      <a className="nav-item nav-link" href="/customer">CREATE CUSTOMER</a>

    </div>
  </div>
</nav>  

    <div className="content">
      <Route path="/" exact component={CustomersList} />
      <Route path="/customer/:pk"  component={CustomerCreateUpdate} />
      <Route path="/customer/" exact component={CustomerCreateUpdate} />

    </div>

  </div>
)

class Report extends Component {
  render() {
    return (
      <BrowserRouter>
        <BaseLayout/>
      </BrowserRouter>
    );
  }
}

export default Report;*/
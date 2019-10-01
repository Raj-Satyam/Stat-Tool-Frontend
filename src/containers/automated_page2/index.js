// import React from "react";
// import Button from "react-bootstrap/Button";
// import Table from "react-bootstrap/Table";
// import PropTypes from "prop-types";
// import Divdropdown from "../../components/div_dropdown";
// import myInitObject from "../../components/variables";
// import ProgressBar from "react-bootstrap/ProgressBar";
// import { MyProgressBar } from "../../components/animatedprogressprovider";
// import "./index.css";
// import Rodal from "rodal";

// // include styles
// import "rodal/lib/rodal.css";

// var myvar = "";
// var vartype = "";
// var myprop = "";
// var divoutput = "";
// var url = "";
// const now = 60;
// const nowa = 40;

// class Automated_Page2 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//     this.state = {
//       selectedOption: "",
//       visible: false,
//       showComponent: false
//     };
//   }

//   show() {
//     this.setState({ visible: true });
//   }

//   hide() {
//     this.setState({ visible: false });
//   }

//   handleClick(val) {
//     this.setState({ visible: false });
//     this.setState({ showComponent: true });
//     this.refs.btn.setAttribute("disabled", "disabled");
//     fetch(url, { mode: "no-cors" })
//       .then(resp => resp.json())
//       .then(function(data) {
//         console.log(data);
//       })
//       .catch(function(error) {
//         console.log(error);
//       });
//     //this.refs.btn.removeAttribute("disabled");
//   }

//   dropDownselected = val => {
//     myvar = val;
//     var var1 = "";
//     var var2 = "";
//     var var3 = "";
//     var var4 = "";
//     var var5 = "";
//     var var6 = "";

//     switch (myvar.length) {
//       case 1:
//         var1 = myvar[0].value;
//         break;
//       case 2:
//         var1 = myvar[0].value;
//         var2 = myvar[1].value;
//         break;
//       case 3:
//         var1 = myvar[0].value;
//         var2 = myvar[1].value;
//         var3 = myvar[2].value;
//         break;
//       case 4:
//         var1 = myvar[0].value;
//         var2 = myvar[1].value;
//         var3 = myvar[2].value;
//         var4 = myvar[3].value;
//         break;
//       case 5:
//         var1 = myvar[0].value;
//         var2 = myvar[1].value;
//         var3 = myvar[2].value;
//         var4 = myvar[3].value;
//         var5 = myvar[4].value;
//         break;
//       case 6:
//         var1 = myvar[0].value;
//         var2 = myvar[1].value;
//         var3 = myvar[2].value;
//         var4 = myvar[3].value;
//         var5 = myvar[4].value;
//         var6 = myvar[5].value;
//         break;
//     }

//     if (
//       var1 == "01" ||
//       var2 == "01" ||
//       var3 == "01" ||
//       var4 == "01" ||
//       var5 == "01" ||
//       var6 == "01"
//     ) {
//       var Div01 = "TRUE";
//     } else {
//       Div01 = "FALSE";
//     }
//     if (
//       var1 == "04" ||
//       var2 == "04" ||
//       var3 == "04" ||
//       var4 == "04" ||
//       var5 == "04" ||
//       var6 == "04"
//     ) {
//       var Div04 = "TRUE";
//     } else {
//       Div04 = "FALSE";
//     }
//     if (
//       var1 == "05" ||
//       var2 == "05" ||
//       var3 == "05" ||
//       var4 == "05" ||
//       var5 == "05" ||
//       var6 == "05"
//     ) {
//       var Div05 = "TRUE";
//     } else {
//       Div05 = "FALSE";
//     }
//     if (
//       var1 == "06" ||
//       var2 == "06" ||
//       var3 == "06" ||
//       var4 == "06" ||
//       var5 == "06" ||
//       var6 == "06"
//     ) {
//       var Div06 = "TRUE";
//     } else {
//       Div06 = "FALSE";
//     }
//     if (
//       var1 == "07" ||
//       var2 == "07" ||
//       var3 == "07" ||
//       var4 == "07" ||
//       var5 == "07" ||
//       var6 == "07"
//     ) {
//       var Div07 = "TRUE";
//     } else {
//       Div07 = "FALSE";
//     }
//     if (
//       var1 == "10" ||
//       var2 == "10" ||
//       var3 == "10" ||
//       var4 == "10" ||
//       var5 == "10" ||
//       var6 == "10"
//     ) {
//       var Div10 = "TRUE";
//     } else {
//       Div10 = "FALSE";
//     }
//     url = `http://172.30.47.135:8000/createmodel?Div01=${Div01}&Div04=${Div04}&Div05=${Div05}&Div06=${Div06}&Div07=${Div07}&Div10=${Div10}`;
//     //return url
//     console.log(url);
//     this.refs.btn.removeAttribute("disabled");
//   };

//   render() {
//     return (
//     <container className="automatedcontainer">
//       <body>
//         <div className="row">
//           <div className="col-sm-6 col-md-6 col-lg-6 normal">
//             <p>Monthly Forecast Scheduler</p>
//             <div className="col-sm-8 col-md-8 col-lg-8 containernormal">
//               <div className="normaldropdown">
//                 Select divisons to Forecast
//                 <Divdropdown clicked={this.dropDownselected} />
//               </div>
//               <div className="normalbutton">
//                 <Button
//                   ref="btn"
//                   variant="success"
//                   size="lg"
//                   onClick={this.show.bind(this)}
//                 >
//                   Run Forecasts
//                 </Button>
//                 <Rodal
//                   visible={this.state.visible}
//                   onClose={this.hide.bind(this)}
//                 >
//                   <div>
//                     <div class="modalheader">
//                       <h2>Warning!</h2>
//                     </div>
//                     <div class="modalcontent">
//                       <p>
//                         Please be informed that this action will overwrite all
//                         the existing files. Press 'Okay' if you want to run
//                         forecasts for the selected divisons
//                       </p>
//                     </div>
//                     <Button
//                       className="modalokay"
//                       variant="warning"
//                       size="sg"
//                       onClick={this.handleClick}
//                       //onClick={this._onButtonClick}
//                     >
//                       Okay
//                     </Button>
//                     <Button
//                       className="modalcancel"
//                       variant="danger"
//                       size="sg"
//                       onClick={this.hide.bind(this)}
//                     >
//                       Cancel
//                     </Button>
//                   </div>
//                 </Rodal>
//               </div>
//               <div className="normalproressbar">
//                 {this.state.showComponent ? <MyProgressBar /> : null}
//               </div>
//               <div className="etadisplay">
//                 {/*<ul>ETA For respective divisions
//                                     <ul>Division 01 - 1 Hours</ul>
//                                     <ul>Division 04 - 1 Hours</ul>
//                                     <ul>Division 05 - 1 Hours</ul>
//                                     <ul>Division 06 - 1 Hours</ul>
//                                     <ul>Division 07 - 1 Hours</ul>
//                                     <ul>Division 10 - 1 Hours</ul>                                    
//                                 </ul>*/}
//                 <Table striped bordered hover size="sm">
//                   <thead>
//                     <tr>
//                       <th>Divison</th>
//                       <th>CFN-Consenus Count</th>
//                       <th>ETA</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <td>Divison 01-Cardio Rhythmic Heart Failure</td>
//                       <td>11,426</td>
//                       <td>4 Hours</td>
//                     </tr>
//                     <tr>
//                       <td>Divison 04-Neuromodulation</td>
//                       <td>3,261</td>
//                       <td>1.25 Hours</td>
//                     </tr>
//                     <tr>
//                       <td>Divison 5-Spine</td>
//                       <td>84,244</td>
//                       <td>10 Hours</td>
//                     </tr>
//                     <tr>
//                       <td>Divison 6-Diabetes</td>
//                       <td>4,647</td>
//                       <td>0.8 Hour</td>
//                     </tr>
//                     <tr>
//                       <td>Divison 7-Surgical Techologies</td>
//                       <td>42,318</td>
//                       <td>7 Hours</td>
//                     </tr>
//                     <tr>
//                       <td>Divison 10-Neuorovascular</td>
//                       <td>9,296</td>
//                       <td>2 Hours</td>
//                     </tr>
//                   </tbody>
//                 </Table>
//               </div>
//             </div>
//           </div>
//           {/* <div className="col-sm-6 col-md-6 col-lg-6 mixed">
//             <p>Mixed Modelling</p>
//             <Divdropdown />
//             <Button variant="success">Run Forecasts</Button>
//           </div> */}
//         </div>
//       </body>
//     </container>
//     );
//   }
// }

// export default Automated_Page2;




import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import { MyProgressBar } from "../../components/animatedprogressprovider";
import Divdropdown from "../../components/div_dropdown";
import Button from "react-bootstrap/Button";
import Divider from "@material-ui/core/Divider";
import rprogramming from "../../components/pics/r-programming.jpg";
import { grey } from "@material-ui/core/colors";
import Select from "react-select";

import "./index.css";


var myvar = "";
var vartype = "";
var myprop = "";
var divoutput = "";
var url = "";
const now = 60;
const nowa = 40;


class Automated_Page2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

   dropDownselected = val => {
     myvar = val;
     var var1 = "";
     var var2 = "";
     var var3 = "";
     var var4 = "";
     var var5 = "";
     var var6 = ""
     switch (myvar.length) {
       case 1:
         var1 = myvar[0].value;
         break;
       case 2:
         var1 = myvar[0].value;
         var2 = myvar[1].value;
         break;
       case 3:
         var1 = myvar[0].value;
         var2 = myvar[1].value;
         var3 = myvar[2].value;
         break;
       case 4:
         var1 = myvar[0].value;
         var2 = myvar[1].value;
         var3 = myvar[2].value;
         var4 = myvar[3].value;
         break;
       case 5:
         var1 = myvar[0].value;
         var2 = myvar[1].value;
         var3 = myvar[2].value;
         var4 = myvar[3].value;
         var5 = myvar[4].value;
         break;
       case 6:
         var1 = myvar[0].value;
         var2 = myvar[1].value;
         var3 = myvar[2].value;
         var4 = myvar[3].value;
         var5 = myvar[4].value;
         var6 = myvar[5].value;
         break;
     
     if (
       var1 == "01" ||
       var2 == "01" ||
       var3 == "01" ||
       var4 == "01" ||
       var5 == "01" ||
       var6 == "01"
     ) {
       var Div01 = "TRUE";
     } else {
       Div01 = "FALSE";
     }
     if (
       var1 == "04" ||
       var2 == "04" ||
       var3 == "04" ||
       var4 == "04" ||
       var5 == "04" ||
       var6 == "04"
     ) {
       var Div04 = "TRUE";
     } else {
       Div04 = "FALSE";
     }
     if (
       var1 == "05" ||
       var2 == "05" ||
       var3 == "05" ||
       var4 == "05" ||
       var5 == "05" ||
       var6 == "05"
     ) {
       var Div05 = "TRUE";
     } else {
       Div05 = "FALSE";
     }
     if (
       var1 == "06" ||
       var2 == "06" ||
       var3 == "06" ||
       var4 == "06" ||
       var5 == "06" ||
       var6 == "06"
     ) {
       var Div06 = "TRUE";
     } else {
       Div06 = "FALSE";
     }
     if (
       var1 == "07" ||
       var2 == "07" ||
       var3 == "07" ||
       var4 == "07" ||
       var5 == "07" ||
       var6 == "07"
     ) {
       var Div07 = "TRUE";
     } else {
       Div07 = "FALSE";
     }
     if (
       var1 == "10" ||
       var2 == "10" ||
       var3 == "10" ||
       var4 == "10" ||
       var5 == "10" ||
       var6 == "10"
     ) {
       var Div10 = "TRUE";
     } else {
       Div10 = "FALSE";
     }
     url = `http://172.30.47.135:8000/createmodel?Div01=${Div01}&Div04=${Div04}&Div05=${Div05}&Div06=${Div06}&Div07=${Div07}&Div10=${Div10}`;
     //return url
     console.log(url);
     //this.refs.btn.removeAttribute("disabled");
   }
  };

  render() {
    var carddescription = {
      display: "block",
      width: "30vw",
      transitionDuration: "0.3s",
      height: "20vw",
      margin: "1vw"
    };

    var cardlog = {
      display: "block",
      width: "30vw",
      transitionDuration: "0.3s",
      height: "41vw",
      margin: "1vw"
    };

    var media = {
      height: "38vw",
      opacity: "0.5"
    };

    var para = {
      paddingTop: "2%"
    };

    var header = {
      backgroundColor: grey[200]
    };

    return (
      <div className="row maincontainermixed">
        <div className="containera">
          <Card style={carddescription}>
            <CardContent>
              <Typography variant="h5" style={header}>
                Description
              </Typography>
              <Divider />
              <Typography paragraph style={para}>
                Achieving higher forecast accuracy (=+80%) for huge product
                portfolio is a challenge owing to the portfolio size and
                inehrent demand stream volatility. To solve this it becomes
                imperative to decide upon optimum modelling level for each
                product segmentation.
                <Typography paragraph style={para}>
                  Thus, Mixed Modelling intends to segregate products into
                  specific time series characteristic buckets and develop a
                  forecasting strategy for the individual buckets.
                </Typography>
              </Typography>
              <Divider />
              <Button size="small" color="#002f43">
                Learn More
              </Button>
            </CardContent>
          </Card>

          <Card style={carddescription}>
            <CardContent>
              <Typography variant="h5" style={header}>
                Query Run Time
              </Typography>
              <Divider />
              <Typography paragraph style={para}>
                Mixed Modelling usually takes slightly longer time than normal
                forecasting codes. Reason being the more number of permutations
                for which the query needs to run. In the test run it took
                somewhere near 2 days.
                <Typography paragraph style={para}>
                  For live update please refer to the log file on the right or
                  alternatively you may log in to R console, Here.
                </Typography>
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className="containerb">
          <Card style={carddescription}>
            <CardContent>
              <Typography variant="h5" style={header}>
                Schedule Job
              </Typography>
              <Divider />
              <div className="normaldropdown">
                Select divisons to Forecast
                <Divdropdown clicked={this.dropDownselected} />
              </div>
              <div className="normalbutton">
                 <Button
                   ref="btn"
                   variant="success"
                   size="lg"
                   //onClick={this.show.bind(this)}
                 >
                   Run Forecasts
                 </Button></div>


              
            </CardContent>
          </Card>

          <Card style={carddescription}>
            <CardContent>
              <Typography variant="h5" style={header}>
                Process Update
              </Typography>
              <Divider />
              <div className="normalproressbar">
                <MyProgressBar />
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card style={cardlog}>
            <CardContent>
              <Typography variant="h5" style={header}>
                Log File
              </Typography>
              <Divider />
              <CardMedia style={media} image={rprogramming} />
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}

export default Automated_Page2;

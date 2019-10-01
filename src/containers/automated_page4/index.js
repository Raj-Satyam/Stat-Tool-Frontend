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

class Automated_Page4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
      backgroundColor: '#FA9900',
      color: '#ffffff'
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
              <Select
                id="dropdown1"
                //value={selectedOption}
                onChange={this.handleChange}
                //options={options}
                isMulti={true}
                isSearchable={true}
              />
              <Button variant="success">Submit</Button>
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

export default Automated_Page4;

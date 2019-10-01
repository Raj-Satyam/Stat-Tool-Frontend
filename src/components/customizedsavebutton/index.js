import React, { useState } from "react";
import clsx from "clsx";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
//import DeleteIcon from '@material-ui/icons/Delete';
//import CloudUploadIcon from '@material-ui/icons/CloudUpload';
//import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
//import Icon from '@material-ui/core/Icon';
import SaveIcon from "@material-ui/icons/Save";
import { keys } from "@material-ui/core/styles/createBreakpoints";
import Axios from "axios";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    background: green[600]
  },
  leftIcon: {
    marginRight: theme.spacing(1)
  },
  rightIcon: {
    marginLeft: theme.spacing(1)
  },
  iconSmall: {
    fontSize: 20
  }
}));

var url = "http://172.30.47.135:8000/createmodel";
var graph_data = [];

export default function CustomizedSaveButton() {
  const classes = useStyles();
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // Axios.get(url, {
    //   crossdomain : true,
    //   headers: { 'Access-Control-Allow-Origin': '*' }
    // })
      fetch(url="http://172.30.47.135:8000/createmodel",{
        //mode : 'no-cors',
        method : "get" , 
        headers : {'Content-Type': 'application/json'}
      })
      .then(response => response.json())
      .then(data =>console.log(JSON.parse(data)))
      .catch(function(error) {
        console.log(error);
      });
  };


  /*customersService.getCustomized().then(function (result) {
      console.log(result)*/

  return (
    <div>
      <Button
        variant="contained"
        className={classes.button}
        onClick={handleClick}
      >
        <SaveIcon className={clsx(classes.leftIcon, classes.iconSmall)} />
        Save
      </Button>
    </div>
  );
}

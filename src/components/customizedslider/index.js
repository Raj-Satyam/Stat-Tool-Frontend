import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles(theme => ({
  root: {
    width: 300,
    marginLeft: 20,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: 201601,
    label: '2016-01',
  },
  {
    value: 201612,
    label: '2016-12',
  },
  {
    value: 201701,
    label: '2017-01',
  },
  {
    value: 201702,
    label: '2017-12',
  },
];

// function valuetext(value) {
//   return `${value}°C`;
// }

function valueLabelFormat(value) {
  return marks.findIndex(mark => mark.value === value) + 1;
}

export default function DiscreteSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.margin} />
      <Typography id="discrete-slider-always" gutterBottom>
        Select Period for Modelling
      </Typography>
      <Slider
        defaultValue={80}
        //getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        step={10}
        marks={marks}
        valueLabelDisplay="on"
      />
     <div className={classes.margin} />
     <Typography id="discrete-slider-always" gutterBottom>
       Period for Average Months
     </Typography>
     <Slider
       defaultValue={30}
       //getAriaValueText={valuetext}
       aria-labelledby="discrete-slider-always"
       step={10}
       marks={marks}
       valueLabelDisplay="on"
     />
   </div>
  );
}
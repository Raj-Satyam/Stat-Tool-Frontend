import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';



const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    //minWidth: 120,
    //maxWidth: 300,
    minWidth: 300,
    marginLeft: 20,
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};



const optioncountry = [
    'USA',
    'CHINA',
    'INDIA',
    'BANGLADESH',
    'PAKISTAN',
  ];

const optionmajorclass = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

const optioncfn = [
    'a',
    'b',
    'c',
    'd',
    'e',
  ];


const optiontimebucket = [
    'MONTHLY',
    'WEEKLY',
];


const optionmodel = [
    'ARIMA',
    'HOLTWINTERS',
    'TBATS',
    'ETS',
  ];



const GreenCheckbox = withStyles({
    root: {
      color: green,
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })(props => <Checkbox color="default" {...props} />);



export function CustomizedSelects() {
  const classes = useStyles();
  const theme = useTheme();
  const [selectedcountry, setselectedcountry] = React.useState([]);
  const [selectedmajorclass, setselectedmajorclass] = React.useState([]);
  const [selectedcfn, setselectedcfn] = React.useState([]);
  const [selectedtimebucket, setselectedtimebucket] = React.useState([]);
  const [selectedmodel, setselectedmodel] = React.useState([]);

  function handleCountry(event) {
    setselectedcountry(event.target.value);
  }

  function handleMajorClass(event) {
    setselectedmajorclass(event.target.value);
  }

  function handleCfn(event) {
    setselectedcfn(event.target.value);
  }

  function handleTimeBucket(event) {
    setselectedtimebucket(event.target.value);
  }

  function handleModel(event) {
    setselectedmodel(event.target.value);
  }

  

  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="select-multiple-checkbox">Select Country</InputLabel>
        <Select
          multiple
          value={selectedcountry}
          onChange={handleCountry}
          enableSearch = {true}
          input={<Input id="select-multiple-checkbox" />}
          renderValue={selected => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {optioncountry.map(optioncountry => (
            <MenuItem key={optioncountry} value={optioncountry}>
              <GreenCheckbox checked={selectedcountry.indexOf(optioncountry) > -1} />
              <ListItemText primary={optioncountry} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="select-multiple-checkbox">Select Major Class</InputLabel>
        <Select
          multiple
          value={selectedmajorclass}
          onChange={handleMajorClass}
          input={<Input id="select-multiple-checkbox" />}
          renderValue={selected => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {optionmajorclass.map(optionmajorclass=> (
            <MenuItem key={optionmajorclass} value={optionmajorclass}>
              <GreenCheckbox checked={selectedmajorclass.indexOf(optionmajorclass) > -1} />
              <ListItemText primary={optionmajorclass} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="select-multiple-checkbox">Select CFN</InputLabel>
        <Select
          multiple
          value={selectedcfn}
          onChange={handleCfn}
          input={<Input id="select-multiple-checkbox" />}
          renderValue={selected => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {optioncfn.map(optioncfn=> (
            <MenuItem key={optioncfn} value={optioncfn}>
              <GreenCheckbox checked={selectedcfn.indexOf(optioncfn) > -1} />
              <ListItemText primary={optioncfn} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="select-multiple-checkbox">Select Time Bucket</InputLabel>
        <Select
          multiple
          value={selectedtimebucket}
          onChange={handleTimeBucket}
          input={<Input id="select-multiple-checkbox" />}
          renderValue={selected => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {optiontimebucket.map(optiontimebucket=> (
            <MenuItem key={optiontimebucket} value={optiontimebucket}>
              <GreenCheckbox checked={selectedtimebucket.indexOf(optiontimebucket) > -1} />
              <ListItemText primary={optiontimebucket} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="select-multiple-checkbox">Select Models</InputLabel>
        <Select
          multiple
          value={selectedmodel}
          onChange={handleModel}
          input={<Input id="select-multiple-checkbox" />}
          renderValue={selected => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {optionmodel.map(optionmodel=> (
            <MenuItem key={optionmodel} value={optionmodel}>
              <GreenCheckbox checked={selectedmodel.indexOf(optionmodel) > -1} />
              <ListItemText primary={optionmodel} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      

    </div>
  );
}

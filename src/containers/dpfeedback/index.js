


/*import React, { Component } from 'react'
import List from 'material-ui/core/List'
import ListItem from 'material-ui/core/ListItem'
import ListItemText from 'material-ui/core/ListItemText'
import Collapse from 'material-ui/core/Collapse'
import ExpandLess from 'material-ui/icons/ExpandLess'
import ExpandMore from 'material-ui/icons/ExpandMore'
import Drawer from 'material-ui/core/Drawer'
import { withStyles } from 'material-ui/core/styles'
import { Link } from 'react-router-dom'
import menuItems from './menuItems'
const styles = {
  list: {
    width: 250,
  },
  links: {
    textDecoration:'none',
  }
  menuHeader: {
    paddingLeft: '30px'
  }
};
class MenuBar extends Component {
  constructor( props ) {
    super( props )
    this.state = {}
  }
// this method sets the current state of a menu item i.e whether it is in expanded or collapsed or a collapsed state
handleClick( item ) {
    this.setState( prevState => ( 
      { [ item ]: !prevState[ item ] } 
    ) )
  }
// if the menu item doesn't have any child, this method simply returns a clickable menu item that redirects to any location and if there is no child this method uses recursion to go until the last level of children and then returns the item by the first condition.
handler( children ) {
    const { classes } = this.props
    const { state } = this
return children.map( ( subOption ) => {
      if ( !subOption.children ) {
        return (
          <div key={ subOption.name }>
            <ListItem 
              button 
              key={ subOption.name }>
              <Link 
                to={ subOption.url }
                className={ classes.links }>
                <ListItemText 
                  inset 
                  primary={ subOption.name } 
                />
              </Link>
            </ListItem>
          </div>
        )
      }
      return (
        <div key={ subOption.name }>
          <ListItem 
            button 
            onClick={ () => this.handleClick( subOption.name ) }>
            <ListItemText 
              inset 
              primary={ subOption.name } />
            { state[ subOption.name ] ? 
              <ExpandLess /> :
              <ExpandMore />
            }
          </ListItem>
          <Collapse 
            in={ state[ subOption.name ] } 
            timeout="auto" 
            unmountOnExit
          >
            { this.handler( subOption.children ) }
          </Collapse>
        </div>
      )
    } )
  }
render() {
    const { classes, drawerOpen, menuOptions } = this.props
    return (
      <div className={classes.list}>
        <Drawer 
          variant="persistent" 
          anchor="left"
          open
          classes={ { paper: classes.list } }>
          <div>
            <List>
              <ListItem 
                key="menuHeading"
                divider
                disableGutters
              >
                <ListItemText
                className={ classes.menuHeader }
                  inset
                  primary="Nested Menu"
                />
              </ListItem>
            { this.handler( menuItems.data ) }
            </List>
          </div>
        </Drawer>
      </div>
    )
  }
}
export default withStyles(styles)(MenuBar)

*/

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import DbDpFeedbackStep1 from '../dbdpfeedbackstep1';
import DbDpFeedbackStep2 from '../dbdpfeedbackstep2';
import './index.css';
import Automated from '../automated_page2';
//import red from '@material-ui/core/colors/red';

const primary = {main:'#002f43'} // #F44336

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(2),
    color: primary,
    backgroundColor: primary,
  },
  instructions: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
}));

function getSteps() {
  return ['Update Feedback', 'Review Feedback', 'Run Updated Forecast'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <DbDpFeedbackStep1/>;
    case 1:
      return <DbDpFeedbackStep2/>;
    case 2:
      return 'Trigger updated forecast for the selected combinaton';
    default:
      return 'Unknown step';
  }
}

export default function DpFeedback() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  function isStepOptional(step) {
    return step === 1;
  }

  function isStepSkipped(step) {
    return skipped.has(step);
  }

  function handleNext() {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(newSkipped);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleSkip() {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  }

  function handleReset() {
    setActiveStep(0);
  }

  return (
      <Card className="dbstepper">
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = <Typography variant="caption"></Typography>;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
              {isStepOptional(activeStep) && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                  className={classes.button}
                >
                  Skip
                </Button>
              )}

              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
    </Card>
  );
}
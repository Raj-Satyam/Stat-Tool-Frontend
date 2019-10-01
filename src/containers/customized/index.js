// import React from "react";
// import { withStyles } from "@material-ui/core/styles";
// import { green } from "@material-ui/core/colors";
// import FormGroup from "@material-ui/core/FormGroup";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
// import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
// import CheckBoxIcon from "@material-ui/icons/CheckBox";
// import Favorite from "@material-ui/icons/Favorite";
// import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
// import "./index.css";
// import { CustomizedSelects } from "../../components/customizeddropdown";
// import CustomizedSwitches from "../../components/customizedswitch";
// import LineChart from "../../components/line_chart";
// import { ResponsiveBump } from "@nivo/bump";
// import DiscreteSlider from "../../components/customizedslider";
// import CustomizedSaveButton from "../../components/customizedsavebutton";


// const GreenCheckbox = withStyles({
//   root: {
//     color: green[400],
//     "&$checked": {
//       color: green[600]
//     }
//   },
//   checked: {}
// })(props => <Checkbox color="default" {...props} />);

// export default function Customized() {
//   const [state, setState] = React.useState({
//     checkedcfn: false,
//     checkedmajorclass: false,
//     checkedcountrygroup: false,
//   });

//   const handleChange = name => event => {
//     setState({ ...state, [name]: event.target.checked });
//     console.log(name)
//   };

//   const parameterselected =() =>{
    
//     const url = "http://172.30.47.135:8000/createmodel"
//     fetch(url, { mode: "no-cors" })
//       .then(resp => resp.json())
//       .then(function(data) {
//         console.log(data);
//       })
//       .catch(function(error) {
//         console.log(error);
//       });
//   }



//   return (
//     <div className="containerabc">
//       <div className="selectionBox">
//         <div className="checkboxesleft">
//           <div>
//             <FormControlLabel
//               control={
//                 <GreenCheckbox
//                   checked={state.checkedcfn}
//                   onChange={handleChange("checkedcfn")}
//                   value="checkedcfn"
//                 />
//               }
//               label="CFN"
//             />
//           </div>
//           <div>
//             <FormControlLabel
//               control={
//                 <GreenCheckbox
//                   checked={state.checkedmajorclass}
//                   onChange={handleChange("checkedmajorclass")}
//                   value="checkedmajorclass"
//                 />
//               }
//               label="Major Class"
//             />
//           </div>
//           <div>
//             <FormControlLabel
//               control={
//                 <GreenCheckbox
//                   checked={state.checkedcountrygroup}
//                   onChange={handleChange("checkedcountrygroup")}
//                   value="checkedcountrygroup"
//                 />
//               }
//               label="Country Group"
//             />
//           </div>


//         </div>
//         <div className="selectionbuttons">
//           <CustomizedSelects />
//         </div>
//         <div className="checkboxesright">
//           <CustomizedSwitches/>
//         </div>
//       </div>
//       <div className="selectionboxbottom">
//         <DiscreteSlider/>
//         <CustomizedSaveButton clicked={parameterselected}/>
//       </div>
//       <div>
//       <LineChart/>
//       </div>
//     </div>
//   );
//           };

import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import LineChart from "../../components/line_chart";
import { Card } from 'react-bootstrap';
import './index.css';
import { CustomizedSelects } from "../../components/customizeddropdown";
import DiscreteSlider from "../../components/customizedslider";
import { Button } from '@material-ui/core';

const drawerWidth = 360;


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  // appBar: {
  //   transition: theme.transitions.create(['margin', 'width'], {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.leavingScreen,
  //   }),
  // },
  // appBarShift: {
  //   width: `calc(100% - ${drawerWidth}px)`,
  //   marginLeft: drawerWidth,
  //   transition: theme.transitions.create(['margin', 'width'], {
  //     easing: theme.transitions.easing.easeOut,
  //     duration: theme.transitions.duration.enteringScreen,
  //   }),
  // },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    height: "100",
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 2,
  },
}));

export default function Customized() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return (
    <div className="containerabc">
    <div className={classes.root}>
      <CssBaseline />
      {/* <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      > */}
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <ChevronRightIcon/>
          </IconButton>
          {/* <Typography variant="h6" noWrap>
            Persistent drawer
          </Typography> */}
        </Toolbar>
      {/* </AppBar> */}
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>Filters
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <CustomizedSelects className="customdropdowns"/>
          {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))} */}
        </List>
        <Divider />
        <List>
          {/* {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))} */}
          <DiscreteSlider/>
        </List>
        <Divider/>
        <Button variant ="primary"></Button>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {/* <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a. */}
          <Card className="customlinechart">
          <LineChart/>
          </Card>
        {/* </Typography> */}
      </main>
    </div>
    </div>
  );
}

// class Customized extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       open: true

//     }
//   }
//   render(){
//     return(
//       <Drawer
//       className = "customdrawer"
//       variant="persistent"
//       anchor="left">
//       </Drawer>
//     )
//   }
// }

// export default Customized;
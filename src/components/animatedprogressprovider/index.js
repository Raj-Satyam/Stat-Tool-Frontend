import React from "react";
import { Animate } from "react-move";
// Import react-circular-progressbar module and styles
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";

// Animation
import { easeQuadInOut } from "d3-ease";

//import css
import 'react-circular-progressbar/dist/styles.css';


class AnimatedProgressProvider extends React.Component {
  interval = undefined;

  state = {
    isAnimated: false
  };

  static defaultProps = {
    valueStart: 0
  };

  componentDidMount() {
    if (this.props.repeat) {
      this.interval = window.setInterval(() => {
        this.setState({
          isAnimated: !this.state.isAnimated
        });
      }, this.props.duration * 1000);
    } else {
      this.setState({
        isAnimated: !this.state.isAnimated
      });
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return (
      <Animate
        start={() => ({
          value: this.props.valueStart
        })}
        update={() => ({
          value: [
            this.state.isAnimated ? this.props.valueEnd : this.props.valueStart
          ],
          timing: {
            duration: this.props.duration * 1000,
            ease: this.props.easingFunction
          }
        })}
      >
        {({ value }) => this.props.children(value)}
      </Animate>
    );
  }
}

export {AnimatedProgressProvider};



class MyProgressBar extends React.Component {
  render(){
      return(
          <div>
              <AnimatedProgressProvider
              valueStart={0}
              valueEnd={100}
              duration={3000}
              easingFunction={easeQuadInOut}
              //repeat
              >
              {value => {const roundedValue = value.toFixed(2);
              return (
              <CircularProgressbar
              value={value}
              text={`${roundedValue}%`}
              /* This is important to include, because if you're fully managing the
              animation yourself, you'll want to disable the CSS animation. */
              styles={buildStyles({ pathTransition: "none" })}
              />
              );
              }}
              </AnimatedProgressProvider> 
          </div>
      )
  }
}

export {MyProgressBar};
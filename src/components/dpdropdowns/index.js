import React from 'react';
import Select from 'react-select';
import PropTypes from  'prop-types';
import './index.css';

var output = {}

const country = [
  { value: 'USA', label: 'USA' },
  { value: 'CANADA', label: 'CANADA' },
  { value: 'AUSTRALIA', label: 'AUSTRALIA' },
  { value: 'FRANCE', label: 'FRANCE' },
  { value: 'GERMANY', label: 'GERMANY' },
  { value: 'INDIA', label: 'INDIA' },
];

const cfn = [
    { value: 'MMT-332A', label: 'MMT-332A' },
    { value: 'MMT-332B', label: 'MMT-332B' },
    { value: 'MMT-332C', label: 'MMT-332C' },
    { value: 'MMT-332D', label: 'MMT-332D' },
    { value: 'MMT-332E', label: 'MMT-332E' },
    { value: 'MMT-332F', label: 'MMT-332F' },
  ];

const feedback = [
    { value: 'Phase In', label: 'Phase In' },
    { value: 'Phase Out', label: 'Phase Out' },
]


const timeperiod = [
    { value: '2019-09-25T10:58:49.542519Z', label: '2019-09-25' },
    { value: '2019-09-26', label: '2019-09-26' },
    { value: '2019-09-27', label: '2019-09-27' },
    { value: '2019-09-28', label: '2019-09-28' },
]

class DiabetesSelects extends React.Component {
  state = {
    selectedCountry: null,
    selectedCfn: null,
    selectedFeedback: null,
    selectedTimeperiod: null,
    disabled: true,
  };
  constructor(props){
    super();
    console.log(props);
    
  }
  handleCountry = COUNTRY => {
    this.setState({ selectedCountry : COUNTRY },
    this.props.handleCountryProps(COUNTRY)
    //   ,()=>{
    //   // console.log(this.state);
    //   this.props.clicked(this.state.selectedCountry)
    // }
    );
    //console.log(this.props);
    
    // this.props.clicked(selectedOption);
    
    //console.log(`Option selected:`, selectedOption);
  };

  handleCfn = CFN => {
    var self = this
    this.setState({ selectedCfn : CFN },
    this.props.handleCFNProps(CFN)
      // ,
      // ()=>{this.props.clicked(this.state.selectedCfn)
      // }
      );
  };

  handleFeedback = FEEDBACK => {
    this.setState({ selectedFeedback : FEEDBACK},
      this.props.handleFeedbackProps(FEEDBACK)
      // ,
      // ()=>{this.props.clicked(this.state.selectedFeedback)}
      );
  };

  handleTimeperiod = TIMEPERIOD => {
    this.setState({ selectedTimeperiod :TIMEPERIOD },
      this.props.handleTimePeriodProps(TIMEPERIOD)
      // ,
      // ()=>(this.props.clicked(this.state.selectedCountry),
      //      this.props.clicked(this.state.selectedCfn),
      //      this.props.clicked(this.state.selectedFeedbackk),
      //      this.props.clicked(this.state.selectedTimeperiod))
           );
    // output = this.state.selectedCfn
    // //console.log(output)
    // return output
  };

  render() {
    const { selectedCountry } = this.state;
    const { selectedCfn } = this.state;
    const { selectedFeedback} = this.state;
    const { selectedTimeperiod } = this.state;

    return (
        <div className="dropdowns">
            <div className="dropdown1">
                <Select
                id='dropdown1'
                value={selectedCountry}
                onChange={this.handleCountry}
                options={country}
                isSearchable = {true}
                placeholder="Select Country"
                />
            </div>

            <div className="dropdown2">        
                <Select
                id='dropdown2'
                value={selectedCfn}
                onChange={this.handleCfn}
                options={cfn}
                isSearchable = {true}
                placeholder="Select CFN"
                isDisabled={this.props.disabled}
                />
            </div>
            
            <div className="dropdown3">
                <Select
                 id='dropdown3'
                 value={selectedFeedback}
                 onChange={this.handleFeedback}
                 options={feedback}
                 isSearchable = {true}
                 placeholder="Select Feedback"
                />
            </div>
            
            <div className="dropdown4">
                <Select
                 id='dropdown4'
                 value={selectedTimeperiod}
                 onChange={this.handleTimeperiod}
                 options={timeperiod}
                 isSearchable = {true}
                 placeholder="Select Timeperiod"
                 />
             </div>

      </div>
    );
  }
}

DiabetesSelects.propTypes ={
  handleCountryProps: PropTypes.func,
  handleCFNProps: PropTypes.func,
  handleFeedbackProps: PropTypes.func,
  handleTimePeriodProps: PropTypes.func  
}

export default DiabetesSelects;
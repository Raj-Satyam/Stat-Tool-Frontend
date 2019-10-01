import React from 'react';
import Select from 'react-select';


const options = [
  { value: '01', label: 'Div-01' },
  { value: '04', label: 'Div-04' },
  { value: '05', label: 'Div-05' },
  { value: '06', label: 'Div-06' },
  { value: '07', label: 'Div-07' },
  { value: '10', label: 'Div-10' },
];



class Divdropdown extends React.Component {
  state = {
    selectedOption: null,
  };
  constructor(props){
    super();
    console.log(props);
    
  }
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    this.props.clicked(selectedOption);
    
    //console.log(`Option selected:`, selectedOption);
  };

  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        id='dropdown1'
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        isMulti = {true}
        isSearchable = {true}
      />
    );
  }
}

export default Divdropdown;
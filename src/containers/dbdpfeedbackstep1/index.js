import React from 'react';
import Report from 'powerbi-report-component';
import './index.css';
import Card from '@material-ui/core/Card';
import DiabetesSelects from '../../components/dpdropdowns';
import Button from 'react-bootstrap/Button';
import Typography from '@material-ui/core/Typography';
import { useAlert } from "react-alert";
import { object } from 'prop-types';
import BackendService from '../../API/service_api';
import swal from 'sweetalert';
import Select from 'react-select';


const  backendService  =  new  BackendService();
const diabetesselects = new DiabetesSelects;
// const alert = useAlert();

var selections = {PRODUCT:"",GEOGRAPHY:"",PRODUCT_LEVEL:"",GEO_LEVEL:"",FEEDBACK_CATEGORY:"",REPLACED_PRODUCT:"",REPLACEMENT_DATE:""};


var product = [
    { value: 'MMT-332A', label: 'MMT-332A' },
    { value: 'MMT-332B', label: 'MMT-332B' },
    { value: 'MMT-332C', label: 'MMT-332C' },
    { value: 'MMT-332D', label: 'MMT-332D' },
    { value: 'MMT-332E', label: 'MMT-332E' },
    { value: 'MMT-332F', label: 'MMT-332F' },
  ];

var geo = [
    { value: 'USA', label: 'USA' },
    { value: 'CANADA', label: 'CANADA' },
    { value: 'AUSTRALIA', label: 'AUSTRALIA' },
    { value: 'FRANCE', label: 'FRANCE' },
    { value: 'GERMANY', label: 'GERMANY' },
    { value: 'INDIA', label: 'INDIA' },
  ];

var pro_level = [
    {value: 'ATTRIBUTE',label: 'ATTRIBUTE'},
    {value: 'BRAND',label: 'BRAND'},
    {value: 'CFN',label: 'CFN'}
]

var geo_level = [
    {value: 'CCG',label: 'CCG'},
    {value: 'S & OP GROUP',label: 'S & OP GROUP'},
]

var feedback_category = [
    {value: 'OBSOLETE',label: 'OBSOLETE'},
    {value: 'PHASE IN',label: 'PHASE IN'},
    {value: 'PHASE OUT',label: 'PHASE OUT'},
    {value: 'REPLACEMENT',label: 'REPLACEMENT'},
    {value: 'TREND',label: 'TREND'},
    {value: 'STAT TOO LOW',label: 'STAT TOO LOW'},
    {value: 'STAT TOO HIGH',label: 'STAT TOO HIGH'},
]

var replaced_product = [
    { value: 'MMT-332A', label: 'MMT-332A' },
    { value: 'MMT-332B', label: 'MMT-332B' },
    { value: 'MMT-332C', label: 'MMT-332C' },
    { value: 'MMT-332D', label: 'MMT-332D' },
    { value: 'MMT-332E', label: 'MMT-332E' },
    { value: 'MMT-332F', label: 'MMT-332F' },
  ];

var replacement_date = [
    { value: '2019-09-25', label: '2019-09-25' },
    { value: '2019-09-26', label: '2019-09-26' },
    { value: '2019-09-27', label: '2019-09-27' },
    { value: '2019-09-28', label: '2019-09-28' },
]


class DbDpFeedbackStep1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedProduct: '',
            selectedGeo: null,
            selectedProLevel: null,
            selectedGeoLevel: null,
            selectedFeedbackCategory: null,
            selectedReplacedProduct: null,
            selectedReplacementDate: null
        };
        this.handleProduct = this.handleProduct.bind(this);
    }

    handleProduct(val){
        this.setState({selectedProduct:val})
        selections.PRODUCT = val.value
        console.log(val)
    }

    handleGeo = GEO => {
        this.setState({selectedGeo:GEO})
        selections.GEOGRAPHY = GEO.value
        console.log(GEO)
    }

    handleProLevel = PRO => {
        this.setState({selectedProLevel: PRO})
        selections.PRODUCT_LEVEL = PRO.value
        console.log(PRO)
    }

    handleGeoLevel = GEO => {
        this.setState({selectedGeoLevel:GEO})
        selections.GEO_LEVEL = GEO.value
        console.log(GEO)
    }

    handleFeedbackCategory = FEEDBACK => {
        this.setState({selectedFeedbackCategory:FEEDBACK})
        selections.FEEDBACK_CATEGORY = FEEDBACK.value
        console.log(FEEDBACK)
    }

    handleReplacedProduct = ReplacedProduct => {
        this.setState({selectedReplacedProduct:ReplacedProduct})
        selections.REPLACED_PRODUCT = ReplacedProduct.value
        console.log(ReplacedProduct)
    }

    handleReplacementDate = ReplacementDate => {
        this.setState({selectedReplacementDate:ReplacementDate})
        selections.REPLACEMENT_DATE = ReplacementDate.value
        console.log(ReplacementDate)
    }

     handleSubmit(){
        //  selections = JSON.stringify(selections)
         console.log(selections)
         backendService.createDiabetes_Feedback(selections
         ).then((result)=>{
            // alert("Feedback has been Submitted. Please review it on next page.");
            swal("Feedback Successful!", "Please review it on the next page.", "success");
          }).catch(()=>{
            // alert("There was an error! Please re-check your form.")
            swal("Feedback Unsuccessful","Please re-check your form.","error")
          });
     }
    


render() {
    return (<div>
        {/* <div>
        <SideBar pageWrapId={"page-wrap"} outerContainerId={"DpFeedback"} />
        </div> */}
        <div className="row" id="page-wrap">


            <div className="col-sm-8 col-md-8 col-lg-8">
                <Card className="pbireport">
                    <iframe width="100%"
                     height="600" 
                     src="https://app.powerbi.com/reportEmbed?reportId=83e5bdf6-d6b4-459e-8c46-a45c4f09e536&groupId=b251fe48-552d-47d1-be1e-6437c513cbb6&autoAuth=true&ctid=d73a39db-6eda-495d-8000-7579f56d68b7&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXVzLW5vcnRoLWNlbnRyYWwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQifQ%3D%3D" 
                     frameBorder="10"
                     allowFullScreen={true}
                     position="absolute">
                     </iframe>
                </Card>
            </div>


            {/* <div className="col-sm-4 col-md-4 col-lg-4 feedbacksection">
                <Card classname="dpdropdowns">
                    <Typography variant="h5">Update Feedback</Typography>
                    <DiabetesSelects 
                    handleCountryProps={this.handleClickCountry}
                    handleCFNProps={this.handleClickCFN}
                    handleFeedbackProps={this.handleClickFeedback}
                    handleTimePeriodProps={this.handleClickTimeriod}                    
                    />
                    <Button 
                    className="dpbutton"
                    ref="btn" 
                    variant="success"  
                    size="lg"
                    onClick={this.handleSubmit}
                    >Submit</Button>
                </Card>
            </div> */}
            
            <div className="col-sm-4 col-md-4 col-lg-4 feedbacksection">
                <Card classname="dpdropdowns">
                    <Typography variant="h5">Update Feedback</Typography>
                    <div>
                    <div className="dropdown1">
                      <Select
                      id='dropdown1'
                      value={this.selectedProduct}
                      onChange={this.handleProduct}
                      options={product}
                      isSearchable = {true}
                      placeholder="PRODUCT"
                      />
                    </div>

                    <div className="dropdown2">
                      <Select
                      id='dropdown2'
                      value={this.selectedGeo}
                      onChange={this.handleGeo}
                      options={geo}
                      isSearchable = {true}
                      placeholder="Geography"
                      />
                    </div>

                    <div className="dropdown3">
                      <Select
                      id='dropdown3'
                      value={this.selectedProLevel}
                      onChange={this.handleProLevel}
                      options={pro_level}
                      isSearchable = {true}
                      placeholder="Pro Level"
                      />
                    </div>

                    <div className="dropdown4">
                      <Select
                      id='dropdown4'
                      value={this.selectedGeoLevel}
                      onChange={this.handleGeoLevel}
                      options={geo_level}
                      isSearchable = {true}
                      placeholder="Geo Level"
                      />
                    </div>

                    <div className="dropdown5">
                      <Select
                      id='dropdown5'
                      value={this.selectedFeedbackCategory}
                      onChange={this.handleFeedbackCategory}
                      options={feedback_category}
                      isSearchable = {true}
                      placeholder="Feedback Category"
                      />
                    </div>

                    <div className="dropdown6">
                      <Select
                      id='dropdown6'
                      value={this.selectedReplacedProduct}
                      onChange={this.handleReplacedProduct}
                      options={replaced_product}
                      isSearchable = {true}
                      placeholder="Replaced Product"
                      />
                    </div>

                    <div className="dropdown7">
                      <Select
                      id='dropdown7'
                      value={this.selectedReplacementDate}
                      onChange={this.handleReplacementDate}
                      options={replacement_date}
                      isSearchable = {true}
                      placeholder="Replacement Date"
                      />
                    </div>
                    </div>





                    <Button 
                    className="dpbutton"
                    ref="btn" 
                    variant="success"  
                    size="lg"
                    onClick={this.handleSubmit}
                    >Submit</Button>
                </Card>
            </div>
        
        </div>
        </div>
   
   )
}
}

export default DbDpFeedbackStep1;










/*
handleClickCountry(data) {
        selections.COUNTRY = data.value
        console.log(selections.COUNTRY)
    }

    handleClickCFN(data) {
        selections.CFN = data.value
        console.log(selections.CFN)
    }

    handleClickFeedback(data) {
        selections.FEEDBACK = data.value
        console.log(selections.FEEDBACK)
    }

     handleClickTimeriod(data) {
        selections.FISCAL_DATE = data.value
        console.log(selections.FISCAL_DATE)
        // var self = this
        // var a = diabetesselects.handleTimeperiod().then(function(result){
        //     self.setState({input:result.output})
        // })
        // console.log(a)
     }
*/
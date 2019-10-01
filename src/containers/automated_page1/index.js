import React from 'react';
// import Report from 'powerbi-report-component';
// import './index.css';
import Card from '@material-ui/core/Card';
// import DiabetesSelects from '../../components/dpdropdowns';
// import Button from 'react-bootstrap/Button';
// import Typography from '@material-ui/core/Typography';
// import { useAlert } from "react-alert";



class Automated_Page1 extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }


render() {
    return (
        <div className="row" id="page-wrap">
            {/* <div className="col-sm-12 col-md-12 col-lg-12"> */}
                     {/* <iframe width="100%"
                     height="700" 
                     src="https://app.powerbi.com/reportEmbed?reportId=83e5bdf6-d6b4-459e-8c46-a45c4f09e536&groupId=b251fe48-552d-47d1-be1e-6437c513cbb6&autoAuth=true&ctid=d73a39db-6eda-495d-8000-7579f56d68b7&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXVzLW5vcnRoLWNlbnRyYWwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQifQ%3D%3D" 
                     frameborder="10"
                     allowFullScreen={true}
                     position="absolute">
                     </iframe> */}
                     <iframe
                     width="100%"
                     height="950"
                     src="https://app.powerbi.com/reportEmbed?reportId=3f7c2455-cfc5-4b2e-95ca-382341765c78&groupId=59e9f9f1-a9bc-4410-96b8-fcfce96b143d&autoAuth=true&ctid=d73a39db-6eda-495d-8000-7579f56d68b7&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXVzLW5vcnRoLWNlbnRyYWwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQifQ%3D%3D"
                     frameborder="0"
                     marginHeight="0"
                     //allowFullScreen="true"
                     > 
                     </iframe>
            {/* </div> */}
        </div>   
   )
}
}

export default Automated_Page1;
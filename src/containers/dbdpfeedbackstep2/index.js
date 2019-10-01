import React from 'react';
import MaterialTable from 'material-table';
import BackendService from '../../API/service_api';

const  backendService  =  new  BackendService();


class DbDpFeedbackStep2 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data : [],
      columns:[
        { title: 'PRODUCT', field: 'PRODUCT' },
        { title: 'GEOGRAPHY', field: 'GEOGRAPHY' },
        { title: 'PRODUCT_LEVEL', field: 'PRODUCT_LEVEL'},
        { title: 'GEO_LEVEL',field: 'GEO_LEVEL'},
        { title: 'FEEDBACK_CATEGORY',field: 'FEEDBACK_CATEGORY'},
        { title: 'REPLACED_PRODUCTL',field: 'REPLACED_PRODUCT'},
        { title: 'REPLACEMENT_DATE',field: 'REPLACEMENT_DATE'},
    ],
      nextPageURL: []
    }
    this.handleDelete  =  this.handleDelete.bind(this);
  }

  handleDelete(e,pk){
    var  self  =  this;
    backendService.deleteDiabetes_Feedback({pk :  pk}).then(()=>{
        var  newArr  =  self.state.customers.filter(function(obj) {
            return  obj.pk  !==  pk;
        });

        self.setState({data:  newArr})
    });
}


   componentDidMount() {
     var self = this
      backendService.getDiabetes_Feedback().then(function (result) {
           // console.log(result.data);
           self.setState({ data:  result.data, nextPageURL:  result.nextlink})
           console.log(self.state.data)       
       })
     }


    render() {
      return (
        <div style={{ maxWidth: "100%",paddingLeft : "5%",paddingRight : "5%",textcolor: "blue"}}>
          <MaterialTable
          title="Diabetes Feedback"
          columns={this.state.columns}
            // data={this.state.diabetesfeedback.data}
            data = {this.state.data}
            options={{
              exportButton: true
            }}
            




            editable={{
              // onRowUpdate: (newData, oldData) =>
              //   new Promise((resolve, reject) => {
              //     setTimeout(() => {
              //       {
              //         const data = this.state.data;
              //         const index = data.indexOf(oldData);
              //         data[index] = newData;
              //         this.setState({ data }, () => resolve());
              //       }
              //       resolve()
              //     }, 1000)
              //   }),
              onRowDelete: e => this.handleDelete(e,this.state.data.pk)
                // new Promise((resolve, reject) => {
                //   setTimeout(() => {
                //     {
                //       let data = this.state.data;
                //       const index = data.indexOf(oldData);
                //       data.splice(index, 1);
                //       this.setState({ data }, () => resolve());
                //     }
                //     resolve()
                //   }, 1000)
                // }),
            }}






    
          />
        </div>
      );
    }
  }

export default DbDpFeedbackStep2;





// Previous codes below this line

// export default function DbDpFeedbackStep2() {
  //   const [state, setState] = React.useState({
  //     columns: [
  //       { title: 'Country', field: 'country' },
  //       { title: 'CFN', field: 'cfn' },
  //       { title: 'Feedback', field: 'feedback'},
  //       { title: 'Timeperiod',field: 'timeperiod'},
  //     //   {
  //     //     title: 'Birth Place',
  //     //     field: 'birthCity',
  //     //     lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
  //     //   },
  //     ],
  //     data: [
  //       { country: 'USA', cfn: 'MMT-332A', feedback: 'Phase In', timeperiod: 'AUG-2019'},
  //       { country: 'USA',cfn: 'MMT-332A',feedback: 'Phase Out',timeperiod: 'JAN-2020'},
  //       { country: 'INDIA',cfn: 'MMT-333A',feedback: 'Phase In',timeperiod: 'SEP-2019'},
  //       { country: 'INDIA',cfn: 'MMT-333A',feedback: 'Phase Out',timeperiod: 'JAN-2020'},
  //       { country: 'RUSSIA',cfn: 'MMT-334A',feedback: 'Phase Out',timeperiod: 'JAN-2020'},
  //       { country: 'CHINA',cfn: 'MMT-335A',feedback: 'Phase Out',timeperiod: 'JAN-2020'},
  //       { country: 'CANADA',cfn: 'MMT-336A',feedback: 'Phase In',timeperiod: 'OCT-2019'},
  //       { country: 'SWITZERLAND',cfn: 'MMT-337A',feedback: 'Phase Out',timeperiod: 'JAN-2020'},
  //       { country: 'FRANCE',cfn: 'MMT-332B',feedback: 'Phase In',timeperiod: 'NOV-2019'},
  //       { country: 'GERMANY',cfn: 'MMT-332B',feedback: 'Phase Out',timeperiod: 'JAN-2020'},
        
  //     ],
  //   });
  
  //   return (
  //     <MaterialTable
  //       title="Diabetes Feedback"
  //       columns={state.columns}
  //       data={state.data}
  //       editable={{
  //         onRowAdd: newData =>
  //           new Promise(resolve => {
  //             setTimeout(() => {
  //               resolve();
  //               const data = [...state.data];
  //               data.push(newData);
  //               setState({ ...state, data });
  //             }, 600);
  //           }),
  //         onRowUpdate: (newData, oldData) =>
  //           new Promise(resolve => {
  //             setTimeout(() => {
  //               resolve();
  //               const data = [...state.data];
  //               data[data.indexOf(oldData)] = newData;
  //               setState({ ...state, data });
  //             }, 600);
  //           }),
  //         onRowDelete: oldData =>
  //           new Promise(resolve => {
  //             setTimeout(() => {
  //               resolve();
  //               const data = [...state.data];
  //               data.splice(data.indexOf(oldData), 1);
  //               setState({ ...state, data });
  //             }, 600);
  //           }),
  //       }}
  //     />
  //   );
  // }
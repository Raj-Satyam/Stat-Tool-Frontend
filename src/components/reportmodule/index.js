import React from 'react';
import powerbi from '../pics/powerbi.png';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';



class ReportModule extends React.Component {
    render() {
        return (<div className = "row moduleRow">
                    <div className = "col-xs-4 moduleIconDiv">
                        <Link to={'/automated'}>
                            <div className = "moduleCircle">
                                <img src = {powerbi} className="Automated-logo"/>
                                <div className = "moduleHeading">
                                    FCA
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className = "col-xs-4 moduleIconDiv">
                     <a href= "https://app.powerbi.com/reportEmbed?reportId=93906be2-a6d2-4ee5-84b4-d620d0cd6961&groupId=b251fe48-552d-47d1-be1e-6437c513cbb6&autoAuth=true&ctid=d73a39db-6eda-495d-8000-7579f56d68b7&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXVzLW5vcnRoLWNlbnRyYWwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQifQ%3D%3D"> 
                            <div className = "moduleCircle">
                                <img src = {powerbi} className="Automated-logo"/>
                                <div className = "moduleHeading">
                                    Disaggregation Tool
                                </div>
                            </div>
                    </a>
                    </div>

                    <div className = "col-xs-4 moduleIconDiv">
                        <Link to={'/reports'}>
                            <div className = "moduleCircle">
                                <img src = {powerbi} className="Automated-logo"/>
                                <div className = "moduleHeading">
                                    Net Tool
                                </div>
                            </div>
                        </Link>
                    </div>

                </div>
        )
    }
}

export default ReportModule;
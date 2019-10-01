import React from 'react';
import './index.css';
import powerbi from '../pics/automated.png';
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
                        <Link to={'/customized'}>
                            <div className = "moduleCircle">
                                <img src = {powerbi} className="Automated-logo"/>
                                <div className = "moduleHeading">
                                    Gating Tool
                                </div>
                            </div>
                        </Link>
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
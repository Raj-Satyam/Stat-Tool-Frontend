import React from 'react';
import './index.css';
import automated from '../pics/automated.png';
import customized from '../pics/customized.png';
import report from '../pics/report.png';
import Automated from '../../containers/automated_page2';
import Customized from '../../containers/customized';
import Report from '../../containers/reports';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';



class Modulecircle extends React.Component {
    render() {
        return (<div className = "row moduleRow">
                    <div className = "col-xs-4 moduleIconDiv">
                        <Link to={'/automated'}>
                            <div className = "moduleCircle">
                                <img src = {automated} className="Automated-logo"/>
                                <div className = "moduleHeading">
                                    Automated
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className = "col-xs-4 moduleIconDiv">
                        <Link to={'/customized'}>
                            <div className = "moduleCircle">
                                <img src = {customized} className="Automated-logo"/>
                                <div className = "moduleHeading">
                                    Customized
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className = "col-xs-4 moduleIconDiv">
                        <Link to={'/reports'}>
                            <div className = "moduleCircle">
                                <img src = {report} className="Automated-logo"/>
                                <div className = "moduleHeading">
                                    Reports
                                </div>
                            </div>
                        </Link>
                    </div>

                </div>
        )
    }
}

export default Modulecircle;
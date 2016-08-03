import './index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Router, Route, IndexRoute, Link ,hashHistory } from 'react-router';
import PlateOrder from '../../components/OrderCount/PlateOrder/View/View'
import OutputMonitor from '../../components/OrderCount/OutputMonitor/View/View'
import ChanceView from '../../components/OrderCount/ChanceCount/ChanceView/View/View'
// import SendReport from '../../components/OrderCount/SendReport/View/View'


ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="PlateOrder" component={PlateOrder}></Route>
        <Route path="OutputMonitor" component={OutputMonitor}></Route>
        <Route path="ChanceCount">
          <Route path="ChanceView" component={ChanceView}/>
        </Route>
        {/*<Route path="SendReport" component={SendReport}></Route>*/}
    </Router>
), document.getElementById('root'));

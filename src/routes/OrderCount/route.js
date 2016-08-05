import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link ,hashHistory } from 'react-router';

import PlateOrder from '../../components/OrderCount/PlateOrder/View/View'
import OutputMonitor from '../../components/OrderCount/OutputMonitor/View/View'
import ChanceView from '../../components/OrderCount/ChanceCount/ChanceView/View/View'

module.exports = (
  <Router history={hashHistory}>
      <Route path="PlateOrder" component={PlateOrder}></Route>
      <Route path="OutputMonitor" component={OutputMonitor}></Route>
      <Route path="ChanceCount">
        <Route path="ChanceView" component={ChanceView}/>
      </Route>
      {/*<Route path="SendReport" component={SendReport}></Route>*/}
  </Router>
);

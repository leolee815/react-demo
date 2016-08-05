import './index.less';
import 'antd/dist/antd.css';

//依赖
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link ,hashHistory } from 'react-router';
import { Provider } from 'react-redux';

import routes from '../../routes/OrderCount/route'

// import store from '../../redux/stores/OrderCount/route'


ReactDOM.render(
  <Provider>
      <Router routes={routes}/>
  </Provider>,
  document.getElementById('root'));

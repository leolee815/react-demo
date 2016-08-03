import { Router, Route, hashHistory } from 'react-router';
import { Plateorder } from '../../components/OrderCount/PlateOrder/PlateOrder'
const Routes = ({} ) =>
  <Router history={hashHistory}>
    <Route path="/plateorder" component={Plateorder}>
    </Route>
  </Router>;

export default Routes;

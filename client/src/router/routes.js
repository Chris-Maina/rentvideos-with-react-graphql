import { BrowserRouter, Route, Switch } from 'react-router';
// components
import HomePage from '../containers/HomePage';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      {
        /**
         * Register all your routes in this file. e.g
         * <Route path='/home' component={Home} />
         */
      }
      <Route path='/home' component={HomePage} />
    </Switch>
  </BrowserRouter>
);
export default Routes;

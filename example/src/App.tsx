import React from 'react';

import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { PTZProvider } from 'scorer-ui-kit';
//pages
import FormPage from './pages/FormPage';
import LinePage from './pages/LinePage';
import LineRTCPage from './pages/LineRTCPage';
import LinksPage from './pages/LinksPage';
import PTZPage  from './pages/PTZPage';
import LoginPage from './pages/Login';
import TablePage from './pages/TablePage';

const App: React.FC<{}> = () => {
  return (

      <Router>
        <Switch>
          <Route path={`/`} exact={true}  component={LinksPage}/>
          <Route path={`/line`} exact={true} component={LinePage}/>
          <Route path={`/linertc`} exact={true} component={LineRTCPage}/>
          <Route path={`/login`} exact={true} component={LoginPage}/>
          <Route path={`/forms`} exact={true} component={FormPage}/>
          <Route path={`/table`} exact={true} component={TablePage}/>
          <Route path={`/ptz`} exact={true}>
            <PTZProvider socketUrl='ws://localhost/wsapp/' imageRefresh={2000}>
              <PTZPage/>
            </PTZProvider>
          </Route>
        </Switch>
      </Router>
  )
}

export default App;

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
import LineVideoPage from './pages/LineVideoPage';
import LinksPage from './pages/LinksPage';
import PTZPage from './pages/PTZPage';
import LoginPage from './pages/Login';
import TablePage from './pages/TablePage';
import CustomUserDrawerPage from './pages/CustomUserDrawerPage';
import TabsPage from './pages/TabsPage';
import FilterTablePage from './pages/FilterTablePage';
import GlobalUIPage from './pages/GlobalUIPage';

const App: React.FC<{}> = () => {
  return (

    <Router>
      <Switch>
        <Route path={`/`} exact={true} component={LinksPage} />
        <Route path={`/line`} exact={true} component={LinePage} />
        <Route path={`/linevideo`} exact={true} component={LineVideoPage} />
        <Route path={`/linertc`} exact={true} component={LineRTCPage} />
        <Route path={`/login`} exact={true} component={LoginPage} />
        <Route path={`/forms`} exact={true} component={FormPage} />
        <Route path={`/table`} exact={true} component={TablePage} />
        <Route path={`/filtertable`} exact={true} component={FilterTablePage} />
        <Route path={`/customdrawer`} exact={true} component={CustomUserDrawerPage} />
        <Route path={`/ptz`} exact={true}>
          <PTZProvider socketUrl='ws://localhost/wsapp/' imageRefresh={2000}>
            <PTZPage />
          </PTZProvider>
        </Route>
        <Route path={`/tabs`} exact={true} component={TabsPage} />
        <Route path='/globalUI' exact component={GlobalUIPage} />
      </Switch>
    </Router>
  )
}

export default App;

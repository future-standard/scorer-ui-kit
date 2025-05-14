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
import LinksPage from './pages/Index';
import PTZPage from './pages/PTZPage';
import LoginPage from './pages/Login';
import TablePage from './pages/TablePage';
import CustomUserDrawerPage from './pages/CustomUserDrawerPage';
import TabsPage from './pages/TabsPage';
import GlobalUIPage from './pages/GlobalUIPage';
import CustomAlertsPage from './pages/CustomAlertsPage';
import Layouts from './pages/Layouts';
import SplitLayouts from './pages/SplitLayout';
import SwitchWithAPI from './pages/SwitchTest';

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
        <Route path={`/customdrawer`} exact={true} component={CustomUserDrawerPage} />
        <Route path={`/ptz`} exact={true}>
          <PTZProvider socketUrl='ws://localhost/wsapp/' imageRefresh={2000}>
            <PTZPage />
          </PTZProvider>
        </Route>
        <Route path={`/tabs`} exact={true} component={TabsPage} />
        <Route path={`/customalert`} exact={true} component={CustomAlertsPage} />
        <Route path='/globalUI' exact component={GlobalUIPage} />
        <Route path='/layouts' exact component={Layouts} />
        <Route path='/split-layouts' exact component={SplitLayouts} />
        <Route path='/switch-test' exact component={SwitchWithAPI} />
      </Switch>
    </Router>
  )
}

export default App;

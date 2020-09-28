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
import LinksPage from './pages/LinksPage';
import PTZPage  from './pages/PTZPage';

const App: React.FC<{}> = () => {
  return (

      <Router>
        <Switch>
          <Route path={`/`} exact={true}  component={LinksPage}/>
          <Route path={`/line`} exact={true} component={LinePage}/>
          <Route path={`/forms`} exact={true} component={FormPage}/>
          <Route path={`/ptz`} exact={true}>
            <PTZProvider socketUrl='ws://localhost/wsapp/' imageRefresh={500}>
              <PTZPage/>
            </PTZProvider>
          </Route>
        </Switch>
      </Router>
  )
}

export default App;

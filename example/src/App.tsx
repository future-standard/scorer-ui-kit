import React from 'react';

import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
//pages
import FormPage from './pages/FormPage';
import LinePage from './pages/LinePage';
import LinksPage from './pages/LinksPage';

const App: React.FC<{}> = () => {
  return (

      <Router>
        <Switch>
          <Route path={`/`} exact={true}  component={LinksPage}/>
          <Route path={`/line`} exact={true} component={LinePage}/>
          <Route path={`/forms`} exact={true} component={FormPage}/>
        </Switch>
      </Router>
  )
}

export default App;

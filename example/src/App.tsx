import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
//pages
import FormPage from './pages/FormPage';
import LinePage from './pages/LinePage'


const App: React.FC<{}> = () => {
  return (

      <Router>
        <Switch>
          <Route path="/" component={LinePage}/>
          <Route path="/forms" exact={true} component={FormPage}/>
        </Switch>
      </Router>
  )
}

export default App;

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
          <Route path="/" component={FormPage}/>
          <Route path="/forms" exact={true} component={LinePage}/>
        </Switch>
      </Router>
  )
}

export default App;

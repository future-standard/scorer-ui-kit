import React from 'react';

import {
  HashRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
//pages
import FormPage from './pages/FormPage';
import LinePage from './pages/LinePage';
import LineHLSPage from './pages/LineHLSPage';
import LineRTCPage from './pages/LineRTCPage';
import LineVideoPage from './pages/LineVideoPage';
import LinksPage from './pages/Index';
import LoginPage from './pages/Login';
import TablePage from './pages/TablePage';
import CustomUserDrawerPage from './pages/CustomUserDrawerPage';
import TabsPage from './pages/TabsPage';
import GlobalUIPage from './pages/GlobalUIPage';
import CustomAlertsPage from './pages/CustomAlertsPage';
import Layouts from './pages/Layouts';
import SplitLayouts from './pages/SplitLayout';
import SwitchWithAPI from './pages/SwitchTest';
import UsePollTestPage from './pages/UsePollTestPage';

const App: React.FC<{}> = () => {
  return (

    <Router>
      <Routes>
        <Route path='/' element={<LinksPage />} />
        <Route path='/line' element={<LinePage />} />
        <Route path='/linevideo' element={<LineVideoPage />} />
        <Route path='/linehls' element={<LineHLSPage />} />
        <Route path='/linertc' element={<LineRTCPage />} />
        <Route path='/login' element={<LoginPage onLogin={() =>{}} />} />
        <Route path='/forms' element={<FormPage />} />
        <Route path='/table' element={<TablePage />} />
        <Route path='/customdrawer' element={<CustomUserDrawerPage />} />
        <Route path='/tabs' element={<TabsPage />} />
        <Route path='/customalert' element={<CustomAlertsPage />} />
        <Route path='/globalUI' element={<GlobalUIPage />} />
        <Route path='/layouts' element={<Layouts />} />
        <Route path='/split-layouts' element={<SplitLayouts />} />
        <Route path='/switch-test' element={<SwitchWithAPI />} />
        <Route path='/usepoll-test' element={<UsePollTestPage />} />
      </Routes>
    </Router>
  )
}

export default App;

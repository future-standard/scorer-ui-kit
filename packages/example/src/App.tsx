import React from 'react';

import {
  HashRouter as Router,
  Routes,
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

    <Router future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true
    }}>
      <Routes>
        <Route path='/' element={<LinksPage />} />
        <Route path='/line' element={<LinePage />} />
        <Route path='/linevideo' element={<LineVideoPage />} />
        <Route path='/linertc' element={<LineRTCPage />} />
        <Route path='/login' element={<LoginPage onLogin={() =>{}} />} />
        <Route path='/forms' element={<FormPage />} />
        <Route path='/table' element={<TablePage />} />
        <Route path='/customdrawer' element={<CustomUserDrawerPage />} />
        <Route path='/ptz' element={
          <PTZProvider socketUrl='ws://localhost/wsapp/' imageRefresh={2000}>
            <PTZPage />
          </PTZProvider>
        } />
        <Route path='/tabs' element={<TabsPage />} />
        <Route path='/customalert' element={<CustomAlertsPage />} />
        <Route path='/globalUI' element={<GlobalUIPage />} />
        <Route path='/layouts' element={<Layouts />} />
        <Route path='/split-layouts' element={<SplitLayouts />} />
        <Route path='/switch-test' element={<SwitchWithAPI />} />
      </Routes>
    </Router>
  )
}

export default App;

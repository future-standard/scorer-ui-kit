import type React from 'react';

import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import CustomAlertsPage from './pages/CustomAlertsPage';
import CustomUserDrawerPage from './pages/CustomUserDrawerPage';
//pages
import FormPage from './pages/FormPage';
import GlobalUIPage from './pages/GlobalUIPage';
import LinksPage from './pages/Index';
import Layouts from './pages/Layouts';
import LinePage from './pages/LinePage';
import LineRTCPage from './pages/LineRTCPage';
import LineVideoPage from './pages/LineVideoPage';
import LoginPage from './pages/Login';
import SplitLayouts from './pages/SplitLayout';
import SwitchWithAPI from './pages/SwitchTest';
import TablePage from './pages/TablePage';
import TabsPage from './pages/TabsPage';
import UsePollTestPage from './pages/UsePollTestPage';
import WebRTCStrictModeTestPage from './pages/WebRTCStrictModeTestPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LinksPage />} />
        <Route path='/line' element={<LinePage />} />
        <Route path='/linevideo' element={<LineVideoPage />} />
        <Route path='/linertc' element={<LineRTCPage />} />
        <Route path='/login' element={<LoginPage onLogin={() => {}} />} />
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
        <Route path='/webrtc-strictmode-test' element={<WebRTCStrictModeTestPage />} />
      </Routes>
    </Router>
  );
};

export default App;

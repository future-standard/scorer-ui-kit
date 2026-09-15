import type { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalUI, useThemeToggle } from 'scorer-ui-kit';
import Home from './pages/Home';

const App: FC = () => {
  const { onThemeToggle, isLightMode } = useThemeToggle();

  return (
    <GlobalUI
      content={{ items: [{ icon: 'Home', title: 'Home', href: '/' }] }}
      home='/'
      loggedInUser='developer@example.com'
      hasSwitchTheme
      isLightMode={isLightMode}
      onThemeToggle={onThemeToggle}
      switchThemeText='Switch Theme'
      selectedThemeText={isLightMode ? 'Light Mode' : 'Dark Mode'}
    >
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </GlobalUI>
  );
};

export default App;

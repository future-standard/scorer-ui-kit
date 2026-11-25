import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { defaultTheme, ModalProvider, NotificationProvider, ThemeVariables } from 'scorer-ui-kit';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import Fonts from './fonts';
import Style from './style';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element #root not found');
}

createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <ThemeVariables />
      <NotificationProvider>
        <ModalProvider>
          <Router>
            <App />
            <Fonts />
            <Style />
          </Router>
        </ModalProvider>
      </NotificationProvider>
    </ThemeProvider>
  </StrictMode>
);

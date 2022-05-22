import React from 'react';
import { createRoot } from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './index.css';
import { store } from './store';
import { Provider } from 'react-redux';
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import { msalConfig } from './authConfig';
import App from 'App';

const msalInstance = new PublicClientApplication(msalConfig);
const theme = createTheme({
  palette: {
    primary: {
      main: '#b7d8d6',
      dark: '#789e9e',
    },
    secondary: {
      main: '#d9894c',
    },
    background: {
      default: '#1b5e20',
    },
    text: {
      primary: '#000',
    },
  },
});
const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </MsalProvider>
  </React.StrictMode>,
);

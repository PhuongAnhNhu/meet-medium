import React from 'react';
import ReactDOM from 'react-dom';
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
      main: '#4c7d7d',
    },
    background: {
      default: '#1b5e20',
    },
  },
});
ReactDOM.render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </MsalProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

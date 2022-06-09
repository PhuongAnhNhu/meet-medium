import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { useEffect } from 'react';
import { useAppDispatch } from 'store';
import { fetchUserProfile, setAccessToken } from 'store/features/userSlice';
import { loginRequest } from './authConfig';
import './App.css';
import AppRoutes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import { Box } from '@mui/material';

function App() {
  const { instance, accounts } = useMsal();
  const dispatch = useAppDispatch();
  const isAuthenticated = useIsAuthenticated();

  useEffect(() => {
    if (isAuthenticated) {
      const request = {
        ...loginRequest,
        account: accounts[0],
      };
      instance.acquireTokenSilent(request).then(({ accessToken }) => {
        dispatch(setAccessToken(accessToken));
        dispatch(fetchUserProfile(accessToken));
        window.localStorage.setItem('meetmediumToken', accessToken);
      });
    }
  }, [accounts, dispatch, instance, isAuthenticated]);

  return (
    <Box className="App">
      <BrowserRouter>
        <AppRoutes></AppRoutes>
      </BrowserRouter>
    </Box>
  );
}

export default App;

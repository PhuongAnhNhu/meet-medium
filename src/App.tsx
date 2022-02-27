import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { useEffect } from 'react';
import { useAppDispatch } from 'store';
import { fetchUserProfile, setAccessToken, setIsLoggedIn } from 'store/features/userSlice';
import { loginRequest } from './authConfig';
import './App.css';
import AppRoutes from './Routes';

function App() {
  const { instance, accounts } = useMsal();
  const dispatch = useAppDispatch();
  const isAuthenticated = useIsAuthenticated();

  useEffect(() => {
    dispatch(setIsLoggedIn(isAuthenticated));

    if (isAuthenticated) {
      const request = {
        ...loginRequest,
        account: accounts[0],
      };
      instance.acquireTokenSilent(request).then(({ accessToken }) => {
        dispatch(setAccessToken(accessToken));
        dispatch(fetchUserProfile(accessToken));
      });
    }
  }, [accounts, dispatch, instance, isAuthenticated]);

  return (
    <div className="App">
      <AppRoutes></AppRoutes>
    </div>
  );
}

export default App;

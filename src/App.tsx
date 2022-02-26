import { useIsAuthenticated } from '@azure/msal-react';
import { useEffect } from 'react';
import { useAppDispatch } from 'store';
import { setIsLoggedIn } from 'store/features/userSlice';
import './App.css';
import AppRoutes from './Routes';

function App() {
  const dispatch = useAppDispatch();
  const isAuthenticated = useIsAuthenticated();

  useEffect(() => {
    dispatch(setIsLoggedIn(isAuthenticated));
  }, [dispatch, isAuthenticated]);

  return (
    <div className="App">
      <AppRoutes></AppRoutes>
    </div>
  );
}

export default App;

import React from 'react';
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

const routes: (isLoggedIn: boolean) => RouteObject[] = (isLoggedIn) => [
  {
    path: '/home',
    element: isLoggedIn ? <HomePage /> : <Navigate to="/login" />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
];

const AppRoutes = () => {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const routing = useRoutes(routes(isLoggedIn));

  return routing;
};

export default AppRoutes;

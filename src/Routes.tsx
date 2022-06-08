import React from 'react';
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import CreateMeeting from './pages/CreateMeeting';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import HomeLayout from 'layout/HomeLayout';
import { useIsAuthenticated } from '@azure/msal-react';

const routes: (isLoggedIn: boolean) => RouteObject[] = (isLoggedIn) => [
  {
    element: <HomeLayout />,
    children: [
      {
        path: '/',
        element: isLoggedIn ? <HomePage /> : <Navigate to="/login" />,
      },
      {
        path: 'createMeeting',
        element: <CreateMeeting />,
      },
    ],
  },
  {
    path: 'login',
    element: !isLoggedIn ? <LoginPage /> : <Navigate to="/" />,
  },
];

const AppRoutes = () => {
  const isAuthenticated = useIsAuthenticated();

  const routing = useRoutes(routes(isAuthenticated));

  return routing;
};

export default AppRoutes;

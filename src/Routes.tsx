import React from 'react';
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import CreateMeeting from './pages/CreateMeeting';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import HomeLayout from 'layout/HomeLayout';

const routes: (isLoggedIn: boolean) => RouteObject[] = (isLoggedIn) => [
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: '/createMeeting',
        element: <CreateMeeting />,
      },
      {
        path: '/home',
        element: isLoggedIn ? <HomePage /> : <Navigate to="/login" />,
      },
    ],
  },
  {
    path: '/login',
    element: !isLoggedIn ? <LoginPage /> : <Navigate to="/home" />,
  },
];

const AppRoutes = () => {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

  const routing = useRoutes(routes(isLoggedIn));

  return routing;
};

export default AppRoutes;

import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';

export const wrapWithStore = (component: React.ReactNode) => {
  return <Provider store={store}>{component}</Provider>;
};

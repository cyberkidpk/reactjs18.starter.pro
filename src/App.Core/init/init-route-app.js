import React from 'react';
import {
  BrowserRouter,
} from 'react-router-dom';
import { APPStateProvider } from '../parent-context';
import { appStore } from '../../App.Store';
import { MTControllerComponent } from '../controllers';
import { AppRoutes } from '../routes';
import AppOKTAAuthRoutes from '../routes/app-routes-okta-auth';

const InitRouteApp = () => {
  const isOKTAEnabled = process.env.REACT_APP_OKTA_ENABLED;
  return (
    <BrowserRouter>
      <APPStateProvider store={appStore.store} initialState={appStore.initialState}>
        <MTControllerComponent>Just check</MTControllerComponent>
        { isOKTAEnabled === 'true' ? <AppOKTAAuthRoutes /> : <AppRoutes /> }
      </APPStateProvider>
    </BrowserRouter>
  );
};
export default InitRouteApp;

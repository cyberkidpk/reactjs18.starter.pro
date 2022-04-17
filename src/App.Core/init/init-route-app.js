import React from 'react';
import {
  BrowserRouter,
} from 'react-router-dom';
import { APPStateProvider } from '../parent-context';
import { appStore } from '../../App.Store';
import APILoadingStatusComponent from '../../App.Shared.Components/App.Loading.Status.Component';
import { MTControllerComponent } from '../controllers';
import { AppRoutes } from '../routes';

const InitRouteApp = () => {
  return (
    <BrowserRouter>
      <APPStateProvider store={appStore.store} initialState={appStore.initialState}>
        <APILoadingStatusComponent />
        <MTControllerComponent>Just check</MTControllerComponent>
        <AppRoutes />
      </APPStateProvider>
    </BrowserRouter>
  );
};
export default InitRouteApp;

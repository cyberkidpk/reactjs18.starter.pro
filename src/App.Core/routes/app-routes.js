import React, { Suspense } from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';
import AppSpinnerComponent from '../../App.Shared.Components/App.Spinner.Component';
import { LayoutWrapperController } from '../layouts';

const SplashLayout = React.lazy(() => import('../layouts/splash/SplashLayout'));
const PrimaryLayout = React.lazy(() => import('../layouts/primary/primary.layout'));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Suspense fallback={<AppSpinnerComponent />}><SplashLayout /></Suspense>} />
      <Route
        path="/rpro2022"
        element={
          (
            <Suspense fallback={
              <AppSpinnerComponent />
              }
            >
              <LayoutWrapperController pageApi={true}> 
                <PrimaryLayout />
              </LayoutWrapperController>
            </Suspense>
          )
        }
      />
    </Routes>
  );
};

export default AppRoutes;

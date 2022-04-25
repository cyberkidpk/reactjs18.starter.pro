import React, { Suspense } from 'react';
import {
  Route,
  Routes,
  useNavigate
} from 'react-router-dom';
import { toRelativeUrl } from '@okta/okta-auth-js';
import {
  LoginCallback,
  Security,
  SecureRoute,
  withOktaAuth
} from '@okta/okta-react';
import SecureRouteCustom from './app-okta-secure-route';
import AppSpinnerComponent from '../../App.Shared.Components/App.Spinner.Component';
import { LayoutWrapperController } from '../layouts';
import oktaAuthObj from '../../App.Configs/OKTA.Auth.Config';

const SplashLayout = React.lazy(() => import('../layouts/splash/SplashLayout'));
const PrimaryLayout = React.lazy(() => import('../layouts/primary/primary.layout'));
const AppOKTAAuthRoutes = () => {
  const navigate = useNavigate();
  const passOktaConfig = oktaAuthObj;
  console.log(passOktaConfig);
  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    console.log(originalUri);
    navigate(toRelativeUrl(originalUri || '/', window.location.origin), { replace: true });
  };
  return (
    <Security oktaAuth={passOktaConfig} restoreOriginalUri={restoreOriginalUri}>
      <Routes>
        <Route path="/implicit/callback" element={<LoginCallback loadingElement={<div>Loading...</div>} />} />
        <Route path="/rspro2022/" element={<SecureRouteCustom />}>
          <Route
            path="dash"
            element={
              (
                <Suspense fallback={
                  <AppSpinnerComponent />
                }
              >
                  <LayoutWrapperController pageApi>
                    <PrimaryLayout />
                  </LayoutWrapperController>
                </Suspense>
              )
            }
          />
        </Route>
        <Route
          path="/"
          element={
            (
              <Suspense fallback={
                <AppSpinnerComponent />
                }>
                <SplashLayout />
              </Suspense>
            )
          }
        />
      </Routes>
    </Security>
  );
};

export default AppOKTAAuthRoutes;

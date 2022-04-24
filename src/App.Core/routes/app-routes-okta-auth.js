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
import AppSpinnerComponent from '../../App.Shared.Components/App.Spinner.Component';
import { LayoutWrapperController } from '../layouts';
import oktaAuth from '../../App.Configs/OKTA.Auth.Config';

const SplashLayout = React.lazy(() => import('../layouts/splash/SplashLayout'));
const PrimaryLayout = React.lazy(() => import('../layouts/primary/primary.layout'));
const AppOKTAAuthRoutes = () => {
  const navigate = useNavigate();
  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    navigate(toRelativeUrl(originalUri || '/', window.location.origin), { replace: true });
  };
  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <Routes>
        <Route path="/login/callback" element={LoginCallback} />
        <SecureRoute
          path="/"
          element={
            (
              <Suspense fallback={
                <AppSpinnerComponent />
                }>
                {
                  withOktaAuth(
                    <SplashLayout />
                  )
                }
              </Suspense>
            )
          }
        />
        <SecureRoute
          path="/rpro2022"
          element={
            (
              <Suspense fallback={
                <AppSpinnerComponent />
                }
              >
                {
                  withOktaAuth(
                    <LayoutWrapperController pageApi>
                      <PrimaryLayout />
                    </LayoutWrapperController>
                  )
                }
              </Suspense>
            )
          }
        />
      </Routes>
    </Security>
  );
};

export default AppOKTAAuthRoutes;

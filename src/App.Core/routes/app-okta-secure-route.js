import { useOktaAuth } from '@okta/okta-react';
import { Spin } from 'antd';
import React from 'react';
import { Outlet } from 'react-router-dom';

const login = async (oktaAuth) => {
  await oktaAuth.signInWithRedirect({ originalUri: '/' });
};
const ErrorDisplay = (err) => {
  alert(err);
};
const SecureRouteCustom = () => {
  const { oktaAuth, authState } = useOktaAuth();
  if (!authState) {
    return <Spin />;
  }
  if (authState.isAuthenticated) {
    return (<Outlet />);
  }
  login(oktaAuth).catch(
    (err) => ErrorDisplay(err, 'login with OKTA', 'secureRoute')
  );
  return null;
};
export default SecureRouteCustom;

import { OktaAuth } from '@okta/okta-auth-js';

const oktaAuthObj = new OktaAuth({
  issuer: process.env.REACT_APP_OKTA_ISSUER,
  clientId: process.env.REACT_APP_OKTA_CLIENT_ID,
  redirectUri: process.env.REACT_APP_OKTA_REDIRECT_URI,
});

export default oktaAuthObj;

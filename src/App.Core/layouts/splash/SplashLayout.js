import { useOktaAuth } from '@okta/okta-react';
import { Navigate } from 'react-router-dom';
import { Spin } from 'antd';
import logo from '../../../App.Assets/images/Starter.Pro.Logo.png';

function SplashLayout() {
  const { oktaAuth, authState } = useOktaAuth();
  const isOKTAEnabled = process.env.REACT_APP_isOKTAEnabled;

  if (isOKTAEnabled && !authState) {
    return <Spin />;
  }
  if (isOKTAEnabled && authState.isAuthenticated) {
    return (<Navigate to="rspro2022/dash" />);
  }
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>
        REACT JS STARTER PRO 2022
      </h2>
      {
      isOKTAEnabled
        ? <Navigate to="rspro2022" className="App-link"> Home </Navigate>
        : <Navigate to="rspro2022/dash" className="App-link"> Home </Navigate>
      }
    </header>
  );
}

export default SplashLayout;

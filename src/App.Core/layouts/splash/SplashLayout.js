import logo from '../../../App.Assets/images/Starter.Pro.Logo.png';

function SplashLayout() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>
        REACT JS STARTER PRO 2022
      </h2>
      <a
        className="App-link"
        href="rpro2022"
        rel="noopener noreferrer"
      >
        Anchor
      </a>
    </header>
  );
}

export default SplashLayout;

// Layout.js
import React from 'react';
import Logo from './cEx.png';
import Buttons from './utils/buttons';

const Layout = (props) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand h1" href="/"><img src={Logo} width="30" height="30" alt="Logo" /> Currency Converter</a>
        <a className="navbar-brand mr-auto h1" href="/histChart"> Chart</a>
      </nav>
      <div className="container py-3">
        {props.children}
      </div>
      <footer className="p-3 bg-dark">
        <Buttons />
      </footer>
    </React.Fragment>
  );
}

export default Layout;

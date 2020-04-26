import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBIcon, MDBContainer } from 'mdbreact';

const SocialButtonsPage = () => {
  return (
    <MDBContainer align="center">
      <a href="https://github.com/zheng1073" className="git-ic mr-3 white-text">
        <MDBIcon fab icon="github" />
      </a>
      <a href="mailto: jason1996zheng@gmail.com" className="gplus-ic mr-3 white-text">
        <MDBIcon fab icon="google-plus-g" />
      </a>
      <a href="https://www.linkedin.com/in/jasonzheng1/" className="li-ic mr-3 white-text">
        <MDBIcon fab icon="linkedin-in" />
      </a>
    </MDBContainer>
  )
}

export default SocialButtonsPage;

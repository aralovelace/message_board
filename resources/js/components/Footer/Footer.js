import React from 'react';
import {MDBContainer, MDBFooter} from "mdbreact";
const Footer = () => {
  return (
      <MDBFooter color="blue" className="font-small mt-lg-5">
          <MDBContainer fluid className="footer-copyright text-center py-3">
              &copy; {new Date().getFullYear()} Copyright: <a href="https://aralovelace.dev"> aralovelace.dev </a>
          </MDBContainer>
      </MDBFooter>
  )
};

export default Footer;
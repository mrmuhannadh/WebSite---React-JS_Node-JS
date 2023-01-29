import React from 'react';
import './style.css';
const Footer = () => {
  return (
    <>
      <div className="theFooterSec  d-none d-sm-none d-md-block d-lg-block ">
        <footer className="footerOne">
          <div className="row myRow">
            <div className="col-sm-4 d-flex flex-column justify-content-center align-items-start ">
              <span>COIVD-19 UPDATE</span>
            </div>
            <div className="col-sm-4 d-flex justify-content-center">
              <button className="btn myBtnBook rounded-0">BOOK NOW</button>
            </div>
            <div className="col-sm-4 d-flex flex-row-reverse cod">
              Contact Us
            </div>
          </div>
        </footer>
      </div>
    </>
    
  )
}

export default Footer

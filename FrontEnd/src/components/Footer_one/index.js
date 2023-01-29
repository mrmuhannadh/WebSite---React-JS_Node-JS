import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import './style.css';
import headerlogo from '../../images/Header/logo.png';
import * as Icon from 'react-bootstrap-icons';

const FooterOne = () => {
  return (
    <div className="theFooterRow my-5">
      <div className="">
        <div className="row">
          <div className="col-md-2 d-flex justify-content-center align-items-start">
            <img
              src={headerlogo}
              className="footerLogo"
              alt="footerLogo"
            />
          </div>
          <div className="col-md-4 my-4">
            <div className="row text-left">
              <p><Icon.Map size={25} /> &nbsp;Kalundewa Retreat, Kalundewa Road,
                Dambulu Oya, Dambulla, Sri Lanka</p>
            </div>
            <div className="row text-left">
              <p><Icon.Telephone size={25} />&nbsp;+94 775 205 475</p>
            </div>
            <div className="row text-left">
              <p><Icon.Voicemail size={25} />&nbsp;reservations@kalundewaretreat.com</p>
            </div>
          </div>
          <div className="col-md-3 px-3">
            <div className="row"><a href="/" className="linkFooter">HOME</a></div>
            <div className="row"><a href="/accomandation" className="linkFooter">ACCOMANDATION</a></div>
            <div className="row"><a href="/dinning" className="linkFooter">DINNING</a></div>
            <div className="row"><a href="/experiences" className="linkFooter">EXPERIENCES</a></div>
            <div className="row"><a href="/offer" className="linkFooter">OFFERS</a></div>
            <div className="row"><a href="/blog" className="linkFooter">BLOG</a></div>
            <div className="row"><a href="/contact" className="linkFooter">CONTACT US</a></div>
          </div>
          <div className="col-md-3 my-2 px-3">
            <div className="row theFirstRow">
              <b>SUBSCRIBE</b>
            </div>
            <div className="row theSecoundRow">
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Email"
                  aria-label=""
                  aria-describedby=""
                  className="form-control emailBox"
                />
                <InputGroup.Text id="basic-addon2"><Icon.ArrowRight /></InputGroup.Text>
              </InputGroup>
            </div>
            <div className="row theThirdRow px-3">
              <div className="col SocialIcon">
                <Icon.Whatsapp size={35} className="theIcon whatIcon" />
              </div>
              <div className="col SocialIcon g-0">
                <Icon.Instagram size={35} className="theIcon instaIcon" />
              </div>
              <div className="col SocialIcon g-0">
                <Icon.Youtube size={35} className="theIcon youIcon" />
              </div>
              <div className="col SocialIcon g-0">
                <Icon.Tiktok size={35} className="theIcon tikIcon" />
              </div>
              <div className="col SocialIcon g-0">
                <Icon.Facebook size={35} className="theIcon fbIcon" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row theLastRow">
        <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">Terms and Condtions | Privacy Policy | Sitemap</div>
        <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">All copyrights reserved by Kalundewa Retreat - &copy; 2022</div>
        <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">Designed Developed by GrayHouse Media </div>
      </div>
    </div>
  )
}

export default FooterOne

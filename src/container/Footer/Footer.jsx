import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h2 className="app__footer-headtext">Contact Us</h2>
        <p className="p__opensans">16 Wood Street, Opposite Brigade Tower Ashok Nagar, Bengaluru 560025 India</p>
        <p className="p__opensans">+91 123456780</p>
        <p className="p__opensans">+91 1234567890</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.olivebeach} alt="footer_logo" />
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h2 className="app__footer-headtext">Working Hours</h2>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 olivebeach. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;

import React from 'react'
import "./Footer.css"
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-header">
          <h2>Homepage</h2>
        </div>
        <div className="footer-content-links">
          <div className="footer-link">
            <div className="footer-links-header">
              <h1>Send money online</h1>
            </div>
            <hr />
            <ul className="links">
              <li>
                <a href="">Send money to Nigeria</a>
              </li>
              <li>
                <a href="">Send money to Philippines</a>
              </li>
              <li>
                <a href="">Send money to India</a>
              </li>
              <li>
                <a href="">Send money to Zimbabwe</a>
              </li>
              <li>
                <a href="">Send money to Ghana</a>
              </li>
              <li>
                <a href="">Send money to Colombia</a>
              </li>
              <li>
                <a href="">Send money to Morocco</a>
              </li>
              <li>
                <a href="">Send money to Ethiopia</a>
              </li>
              <li>
                <a href="">Send money to Kenya</a>
              </li>
            </ul>
          </div>
          <div className="footer-link">
            <div className="footer-links-header">
              <h1>Company</h1>
            </div>
            <hr />
            <ul className="links">
              <li>
                <a href="">How it works</a>
              </li>
              <li>
                <a href="">Mobile apps</a>
              </li>
              <li>
                <a href="">About us</a>
              </li>
              <li>
                <a href="">Careers - We're hiring</a>
              </li>
              <li>
                <a href="">News</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Review</a>
              </li>
              <li>
                <a href="">Partners & affiliates</a>
              </li>
            </ul>
          </div>
          <div className="footer-link">
            <div className="footer-links-header">
              <h1>Help & Resources</h1>
            </div>
            <hr />
            <ul className="links">
              <li>
                <a href="">FAQ</a>
              </li>
              <li>
                <a href="">Cash pickup</a>
              </li>
              <li>
                <a href="">Bank transfer</a>
              </li>
              <li>
                <a href="">Mobile money</a>
              </li>
              <li>
                <a href="">Airtime top up</a>
              </li>
              <li>
                <a href="">Contact us</a>
              </li>
              <li>
                <a href="">Security</a>
              </li>
            </ul>
          </div>
          <div className="footer-link">
            <div className="footer-links-header">
              <h1>Legals</h1>
            </div>
            <hr />
            <ul className="links">
              <li>
                <a href="">Terms and condition</a>
              </li>
              <li>
                <a href="">Privacy policy</a>
              </li>
              <li>
                <a href="">Cookies policy</a>
              </li>
              <li>
                <a href="">Customer acceptance</a>
              </li>
              <li>
                <a href="">Modern slavery statement</a>
              </li>
              <li>
                <a href="">Financial statements</a>
              </li>
              <li>
                <a href="">Gender pay gap</a>
              </li>
              <li>
                <a href="">Keeping your money safe</a>
              </li>
              <li>
                <a href="">Site map</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="footer-down-content">
          <h2>Choose your Region</h2>
          <div className="footer-social-icon">
            <FacebookIcon className="social-icon" />
            <TwitterIcon className="social-icon" />
            <InstagramIcon className="social-icon" />
            <LinkedInIcon className="social-icon" />
            <YouTubeIcon className="social-icon" />
          </div>
          <div className="footer-down-content-text">
            <p>
              First-Transfer Enhanced FX Rate: Select country corridors and
              delivery methods only. This promotion is for new customers only
              and can only be used once per person. Fees and charges will still
              apply. FX rates subject to change. This promotion cannot be
              abused. We reserve the right to alter, suspend or cancel this
              promotion at any time. You are liable for any personal tax
              consequences and compliance with relevant law in relation to this
              promotion. Our website and app terms and conditions, found below,
              apply alongside these specific Terms and Conditions. 51 Eastcheap,
              London, EC3M 1DT, United Kingdom. Company registration number:
              07110878 WorldRemit Ltd is Authorised and Regulated by the
              Financial Conduct Authority (FCA) under the Payment Service
              Regulations 2017 and Electronic Money Regulations 2011.
              Registration number: 900891
            </p>
            <div className="image-text">
              <img src={assets.worldRemit_logo} alt="" />
              <span>© WorldRemit 2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer
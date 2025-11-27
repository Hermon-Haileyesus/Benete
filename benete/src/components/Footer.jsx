import '../css/Footer.css';
import Fb from '../assets/images/fb.svg';
import Ins from '../assets/images/ins-white.svg';
import Linkedin from '../assets/images/linkedin.svg';
import Tw from '../assets/images/tw.svg';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from "react-router-dom";

function Footer() {
  const {t} = useLanguage()
  return (
    <section className="footer">
      <div className='footer-b1'>
        {/* Company Info */}
       <div>
        <h5 className="footer-title">{t("contact.company")}</h5>
        <a
          className="footer-link"
          href="https://goo.gl/maps/aG2SfvwMmmHQTetq8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="footer-text">{t("contact.address1")}</p>
          <p className="footer-text">{t("contact.address2")}</p>
          <p className="footer-text">{t("contact.floor")}</p>
         
        </a>
       </div>

       <div>
        <h5 className="footer-title">{t("nav.contact")}</h5>
        <p className="footer-text">{t("contact.ceo")}</p>
        <p className="footer-text">{t("contact.phone")}</p>
        <p className="footer-text">
          <a className='footer-link' href={`mailto:${t("contact.email")}`}> {t("contact.email")}</a>
        </p>
       </div>
       <div>
        <h5 className="footer-title">{t("footer.followUs")}</h5>
        <p className="social-link">
          <a href="https://www.linkedin.com/company/benete" target="_blank" rel="noopener noreferrer">
            <img className="social-icon" src={Linkedin} alt="LinkedIn" />
            <span>LinkedIn</span>
          </a>
        </p>
        <p className="social-link">
          <a href="https://www.instagram.com/benete_com/" target="_blank" rel="noopener noreferrer">
            <img className="social-icon" src={Ins} alt="Instagram" />
            <span>Instagram</span>
          </a>
        </p>
        <p className="social-link">
          <a href="https://www.facebook.com/benete.company" target="_blank" rel="noopener noreferrer">
            <img className="social-icon" src={Fb} alt="Facebook" />
            <span>Facebook</span>
          </a>
        </p>
        <p className="social-link">
          <a href="https://twitter.com/BeneteCom" target="_blank" rel="noopener noreferrer">
            <img className="social-icon" src={Tw} alt="Twitter" />
            <span>Twitter</span>
          </a>
        </p>
       </div>
     </div>
    <div className="footer-b2">
      <div>
        <h5>
          <Link to="/privacy-policy" className="footerB2-link">{t("footer.privacy")}</Link>
          &nbsp;&amp;&nbsp;
          <Link to="/terms" className="footerB2-link">{t("footer.terms")}</Link>
        </h5>
      </div>
    </div>


    </section>
  );
}

export default Footer;
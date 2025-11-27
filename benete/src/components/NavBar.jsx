import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import "../css/NavBar.css";
import Logo from '../assets/Benete_whitetransparent.png'
import LanguageBar from "./LanguageBar";
import {FaTimes, FaBars} from "react-icons/fa"
import { useLocation } from "react-router-dom";
function NavBar() {
  const { t, language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isSpecialStylePage = ["/ideology", "/privateustomers"].includes(location.pathname);



  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <nav className={`nav ${isScrolled ? "scrolled" : ""}  ${isSpecialStylePage ? "ideology-style" : ""}`}>
        <div className="nav-content">
          <div className="nav-logo">
                <Link to="/">
                   <img src={Logo} alt="Benete logo" className="logo-image" />
                </Link>
          </div>
          <div className="nav-links">
            <Link to="/" className="nav-link">
              {t("nav.home")}
            </Link>
            <Link to="/ideology" className="nav-link">
              {t("nav.ideology")}
            </Link>
            <Link to="/services" className="nav-link">
              {t("nav.service")}
            </Link>
            <Link to="/contact" className="nav-link">
              {t("nav.contact")}
            </Link>
            <LanguageBar className="language-bar-desktop" isScrolled={isScrolled} isSpecialStylePage={isSpecialStylePage} />
          </div>
            <button
              className="menu-icon"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
               <FaBars/>
            </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <div className="close">
              <button
              className="close-button"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu">
                 <FaTimes/>
              </button>
            </div>
            <Link to="/" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              {t("nav.home")}
            </Link>
            <Link to="/ideology" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              {t("nav.ideology")}
            </Link>
            <Link to="/services" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              {t("nav.service")}
            </Link>
            <Link to="/contact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              {t("nav.contact")}
            </Link>
            <LanguageBar className="language-bar-mobile"/>
          </div>
        )}
     </nav>
  );
}

export default NavBar;
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import "../css/NavBar.css";
import Logo from '../assets/Benete_logo.png'

function NavBar() {
  const { t, language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <nav className={`nav ${isScrolled ? "scrolled" : ""}`}>
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
            <Link to="/team" className="nav-link">
              {t("nav.team")}
            </Link>
            <Link to="/contact" className="nav-link">
              {t("nav.contact")}
            </Link>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="language-select desktop-only"
            >
              <option value="fi">Suomi</option>
              <option value="en">English</option>
              <option value="sv">Svenska</option>
            </select>
          </div>
            <button
              className="menu-icon"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              ☰
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
                 ✕
              </button>
            </div>
            <Link to="/" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              {t("nav.home")}
            </Link>
            <Link to="/ideology" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              {t("nav.ideology")}
            </Link>
            <Link to="/service" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              {t("nav.service")}
            </Link>
            <Link to="/team" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              {t("nav.team")}
            </Link>
            <Link to="/contact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              {t("nav.contact")}
            </Link>
            <select
              value={language}
              onChange={(e) => {setLanguage(e.target.value);
                setIsMobileMenuOpen(false)
              }}
              className="language-select mobile-only"
            >
              <option value="fi" >Suomi</option>
              <option value="en" >English</option>
              <option value="sv" >Svenska</option>
            </select>
          </div>
        )}
     </nav>
  );
}

export default NavBar;
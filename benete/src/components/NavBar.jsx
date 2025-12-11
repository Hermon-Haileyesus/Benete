import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import "../css/NavBar.css";
import Logo from "../assets/Benete_whitetransparent.png";
import LanguageBar from "./LanguageBar";
import { FaTimes, FaBars } from "react-icons/fa";
import NavItem from "../components/NavItems";

function NavBar() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const mobileMenuRef = useRef(null);

  const isSpecialStylePage = ["/ideology"].includes(location.pathname);

 
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  // Helper to close menu on link click
  const handleCloseMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav
      className={`nav ${isScrolled ? "scrolled" : ""} ${
        isSpecialStylePage ? "ideology-style" : ""
      }`}
    >
      <div className="nav-content">
        {/* Logo */}
        <div className="nav-logo">
          <Link to="/">
            <img src={Logo} alt="Benete logo" className="logo-image" />
          </Link>
        </div>

        {/* Desktop links */}
        <div className="nav-links">
          <NavItem to="/" label={t("navHome")} exact />
          <NavItem to="/ideology" label={t("navIdeology")} />
          <NavItem to="/services" label={t("navService")} />
          <NavItem to="/contact" label={t("navContact")} />
          <NavItem to="/support" label={"Support"} />

          <LanguageBar
            className="language-bar-desktop"
            isScrolled={isScrolled}
            isSpecialStylePage={isSpecialStylePage}
          />
        </div>

        {/* Mobile menu icon */}
        <button
          className="menu-icon"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu" ref={mobileMenuRef}>
          <div className="close">
            <button
              className="close-button"
              onClick={handleCloseMenu}
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
          </div>

          <NavItem to="/" label={t("navHome")} exact onClick={handleCloseMenu} />
          <NavItem to="/ideology" label={t("navIdeology")} onClick={handleCloseMenu} />
          <NavItem to="/services" label={t("navService")} onClick={handleCloseMenu} />
          <NavItem to="/contact" label={t("navContact")} onClick={handleCloseMenu} />
          <NavItem to="/support" label={"Support"} />
          <LanguageBar className="language-bar-mobile" />
        </div>
      )}
    </nav>
  );
}

export default NavBar;
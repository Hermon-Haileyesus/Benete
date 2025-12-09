import { useEffect, useState, useRef } from "react";
import "../css/NavBar.css";
import Logo from "../assets/Benete_whitetransparent.png";
import { FaTimes, FaBars } from "react-icons/fa";
import NavItem from "./NavItems";
import { Link } from "react-router-dom";

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const mobileMenuRef = useRef(null);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
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
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className={`nav ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-content">
        {/* Logo */}
        <div className="nav-logo">
          <Link to="/">
            <img src={Logo} alt="Benete logo" className="logo-image" />
          </Link>
        </div>

        {/* Desktop links */}
        <div className="nav-links">
          <NavItem to="/contact-list" label="Contacts"  />
          <NavItem to="/content-manager" label="Content Manager" />
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
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
          </div>
          <NavItem
            to="/contact-list"
            label="Contacts"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <NavItem
            to="/content-manager"
            label="Content Manager"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        </div>
      )}
    </nav>
  );
}

export default NavBar;
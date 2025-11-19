import { useLanguage } from "../contexts/LanguageContext";
import { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import '../css/LanguageBar.css'

function LanguageBar({ className,isIdologyPage, isScrolled }) {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  const options = [
    { value: "fi", label: "FIN" },
    { value: "en", label: "ENG" },
    { value: "sv", label: "SV" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`language-select-wrapper ${className || ""} ${isScrolled ? "scrolled" : ""} ${isIdologyPage ? "ideology-style" : ""}`} ref={wrapperRef}>
      <button
        className="language-select-button"
        onClick={() => setIsOpen(prev => !prev)}
      >
        {options.find(o => o.value === language)?.label}
        <FaChevronDown className={`language-select-arrow ${isOpen ? 'open' : ''}`} />
      </button>

      {isOpen && (
        <ul className="language-select-menu">
          {options.map(option => (
            <li
              key={option.value}
              className="language-select-item"
              onClick={() => { setLanguage(option.value); setIsOpen(false); }}
            >
              <span className="language-label">{option.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LanguageBar;

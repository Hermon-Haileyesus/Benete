import '../css/Header.css';
import { useLocation } from "react-router-dom";

function Header({ image, title, subtitle, isWhite,isYellow, isCentered }) {
  const location = useLocation();
  const isSpecialStylePage = ["/businesscustomers", "/privatecustomers"].includes(location.pathname);
  return (
    <section className="header">
      <img src={image} alt="header background" className="header-image" />
      <div className={`header-overlay ${isSpecialStylePage ? "visible" : "hidden"}`}></div>
      <div className={`header-content ${isWhite ? "white" : "black"} ${isCentered ? "centered" : ""} ${isYellow ? "yellow" : "white"}`}>
        <p>{subtitle}</p>
        <h1>{title}</h1>
        
      </div>
    </section>
  );
}


export default Header

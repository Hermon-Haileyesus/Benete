import '../css/Header.css';

function Header({ image, title, subtitle, isWhite, isCentered }) {
  return (
    <section className="header">
      <img src={image} alt="header background" className="header-image" />
      <div className="header-overlay"></div>
      <div className={`header-content ${isWhite ? "white" : "black"} ${isCentered ? "centered" : ""}`}>
        <p>{subtitle}</p>
        <h1>{title}</h1>
        
      </div>
    </section>
  );
}


export default Header

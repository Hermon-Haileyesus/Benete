import '../css/Header.css';

function Header({ image, title, subtitle, isWhite }) {
  return (
    <section className="header">
      <img src={image} alt="header background" className="header-image" />
      <div className="header-overlay"></div>
      <div className={`header-content ${isWhite ? "white" : "black"}`}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
}


export default Header

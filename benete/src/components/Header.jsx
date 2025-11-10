import '../css/Header.css';

function Header({ image, title, subtitle }) {
  return (
    <section className="header">
      {/* Background Image */}
      <img src={image} alt="header background" className="header-image" />

      <div className="header-overlay"></div>

      <div className="header-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
}
export default Header

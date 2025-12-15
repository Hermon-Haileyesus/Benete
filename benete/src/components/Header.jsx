import '../css/Header.css';
import { useLocation } from "react-router-dom";

function Header({ image, title, titleColor = "white", subtitle, subtitleLines = [], isCentered }) {
  const location = useLocation();
  const isSpecialStylePage = ["/companycustomers", "/privatecustomers","/ideology"].includes(location.pathname);

  const linesToRender = subtitleLines.length > 0
    ? subtitleLines
    : subtitle
      ? [[{ text: subtitle, color: "white" }]]
      : [];

  const alignmentClass = isCentered ? "centered" : "left";

  return (
    <section className="header">
      <img src={image} alt="header background" className="header-image" />
      <div className={`header-overlay ${isSpecialStylePage ? "visible" : "hidden"}`}></div>
      <div className={`header-content ${alignmentClass}`}>
        <p className={`header-title ${titleColor}`}>{title}</p>
        <div className="header-subtitle">
          {linesToRender.map((line, lineIndex) => (
            <p key={lineIndex} className="subtitle-line">
              {line.map((segment, segmentIndex) => (
                <span key={segmentIndex} className={`subtitle-word ${segment.color}`}>
                  {segment.text}&nbsp;
                </span>
              ))}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Header;
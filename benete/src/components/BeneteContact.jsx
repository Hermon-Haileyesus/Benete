import "../css/BeneteContact.css";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";


export default function BeneteContact() {
  const { t } = useLanguage();
  return (
    <section className="benete-contact">
      <div className="contact-info">
        <h2>Benete Oy</h2>
        <p>
            <a href="https://goo.gl/maps/aG2SfvwMmmHQTetq8" target="_blank">Tykistökatu 4b<br/>20520 Turku, Suomi</a><br/> (5th kerros)
        </p>
        <p className="contact-page-text">Kari Bäckman, Toimitusjohtaja</p>
        <div className="info-pack"> 
            <div className="icon-box icon">
                <FaPhoneAlt />
            </div> 
            <div>
                <p className="phone"> +358 50 052 4514</p>
            </div>
            
        </div>
        <div className="info-pack"> 
            <div className="icon-box icon">
                <FaEnvelope/>
            </div> 
            
            <div>
                <p><a href="mailto:kari.backman@benete.com"> kari.backman@benete.com</a></p>
            </div>
        </div>    
      </div>

      <div className="map-container">
        <iframe  id="gmap_canvas" 
        src="https://maps.google.com/maps?q=Tykist%C3%B6katu%204b%2020520%20Turku,%20Finland&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" 
        frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
        
      </div>
    </section>
  );
}
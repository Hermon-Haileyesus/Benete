import "../css/BeneteContact.css";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";


export default function BeneteContact() {
  const { t } = useLanguage();
  return (
    <section className="benete-contact">
      <div className="contact-info">
        <h2>{t("contact.company")}</h2>
        <p>
            <a href="https://goo.gl/maps/aG2SfvwMmmHQTetq8" target="_blank">{t("contact.address1")}<br/>{t("contact.address2")}</a><br/> {t("contact.floor")}
        </p>
        <p className="contact-page-text">{t("contact.ceo")}</p>
        <div className="info-pack"> 
            <div className="icon-box icon">
                <FaPhoneAlt />
            </div> 
            <div>
                <p className="phone"> {t("contact.phone")}</p>
            </div>
            
        </div>
        <div className="info-pack"> 
            <div className="icon-box icon">
                <FaEnvelope/>
            </div> 
            
            <div>
                <p><a href={`mailto:${t("contact.email")}`}> {t("contact.email")}</a></p>
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
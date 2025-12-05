import "../css/BeneteContact.css";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";

export default function BeneteContact() {
  const { t } = useLanguage();
  return (
    <section className="benete-contact">
      <div className="contact-info">
        <h2>{t("contactCompany")}</h2>
        <p>
          <a
            href="https://goo.gl/maps/aG2SfvwMmmHQTetq8"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("contactAddress1")}<br />{t("contactAddress2")}
          </a>
          <br /> {t("contactFloor")}
        </p>
        <p className="contact-page-text">{t("contactCeo")}</p>
        <div className="info-pack">
          <div className="icon-box icon">
            <FaPhoneAlt />
          </div>
          <div>
            <p className="phone">{t("contactPhone")}</p>
          </div>
        </div>
        <div className="info-pack">
          <div className="icon-box icon">
            <FaEnvelope />
          </div>
          <div>
            <p>
              <a href={`mailto:${t("contactEmail")}`}>{t("contactEmail")}</a>
            </p>
          </div>
        </div>
      </div>

      <div className="map-container">
        <iframe
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=Tykist%C3%B6katu%204b%2020520%20Turku,%20Finland&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          title="Benete Location"
        ></iframe>
      </div>
    </section>
  );
}
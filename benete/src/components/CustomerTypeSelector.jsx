import { useLanguage } from "../contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import { Users, Building2, ArrowRight } from "lucide-react";
import "../css/CustomerTypeSelector.css";
import '@fontsource/rubik';

function CustomerTypeSelector() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <section className="selector-section">
      <div className="selector-container">
        <div className="selector-header">
          <h2 className="selector-title">{t("selectorTitle")}</h2>
          <p className="selector-subtitle">
            {t("selectorSubtitle")}
          </p>
        </div>

        <div className="selector-grid">
          <div
            className="selector-card private"
            onClick={() => navigate("/privatecustomers")}
          >
            <div className="selector-card-content">
              <div className="selector-icon">
                <Users size={40} />
              </div>
              <h3 className="selector-card-title">{t("selectorPrivateTitle")}</h3>
              <p className="selector-card-description">
                {t("selectorPrivateDescription")}
              </p>
              <p className="selector-readmore">
                {t("commonReadMore")}
                <span className="arrow">
                  <ArrowRight size={16} strokeWidth={2} />
                </span>
              </p>
            </div>
          </div>

          <div
            className="selector-card company"
            onClick={() => navigate("/companycustomers")}
          >
            <div className="selector-card-content">
              <div className="selector-icon">
                <Building2 size={40} />
              </div>
              <h3 className="selector-card-title">{t("selectorCompanyTitle")}</h3>
              <p className="selector-card-description">
                {t("selectorCompanyDescription")}
              </p>
              <p className="selector-readmore">
                {t("commonReadMore")}
                <span className="arrow">
                  <ArrowRight size={16} strokeWidth={2} />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomerTypeSelector;
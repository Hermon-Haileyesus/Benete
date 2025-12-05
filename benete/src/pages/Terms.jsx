import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import "../css/LegalPages.css";

const Terms = () => {
  const { t } = useLanguage();

  return (
    <div className="legal-page">
      <div className="legal-header">
        <div className="legal-header-content">
            <h2>{t("termsTitle")}</h2>
        </div>
      </div>
      <main className="legal-main">
        <div className="legal-container">
          <div className="legal-grid">
            
            <aside className="legal-sidebar">
              <div className="sidebar-links">
                <Link to="/privacy-policy" className="sidebar-link">
                  {t("privacyTitle")}
                </Link>
                <Link to="/terms" className="sidebar-link active">
                  {t("termsTitle")}
                </Link>
              </div>
            </aside>

            <div className="legal-content">
              <section>
                <h2>{t("termsIntroductionTitle")}</h2>
                <h5>{t("termsIntroductionContent")}</h5>
              </section>

              <section>
                <h2>{t("termsIntellectualTitle")}</h2>
                <h5>{t("termsIntellectualContent")}</h5>
              </section>

              <section>
                <h2>{t("termsWarrantiesTitle")}</h2>
                <h5>{t("termsWarrantiesContent1")}</h5>
                <h5>{t("termsWarrantiesContent2")}</h5>
              </section>

              <section>
                <h2>{t("termsLawTitle")}</h2>
                <h5>{t("termsLawContent")}</h5>
              </section>

              <section className="legal-footer">
                <h3>Benete Ltd</h3>
                <p>
                  Post Box 135<br />
                  20521 Turku<br />
                  Finland<br />
                  hi@benete.com
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Terms;
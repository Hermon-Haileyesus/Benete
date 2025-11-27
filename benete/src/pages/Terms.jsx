import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import "../css/LegalPages.css";

const Terms = () => {
  const { t } = useLanguage();

  return (
    <div className="legal-page">
      <div className="legal-header">
        <div className="legal-header-content">
            <h2>{t("terms.title")}</h2>
        </div>
      </div>
      <main className="legal-main">
        <div className="legal-container">
          <div className="legal-grid">
            
            <aside className="legal-sidebar">
              <div className="sidebar-links">
                <Link to="/privacy-policy" className="sidebar-link">
                  {t("privacy.title")}
                </Link>
                <Link to="/terms" className="sidebar-link active">
                  {t("terms.title")}
                </Link>
              </div>
            </aside>

            
            <div className="legal-content">
              <section>
                <h2>{t("terms.introduction.title")}</h2>
                <h5>{t("terms.introduction.content")}</h5>
              </section>

              <section>
                <h2>{t("terms.intellectual.title")}</h2>
                <h5>{t("terms.intellectual.content")}</h5>
              </section>

              <section>
                <h2>{t("terms.warranties.title")}</h2>
                <h5>{t("terms.warranties.content1")}</h5>
                <h5>{t("terms.warranties.content2")}</h5>
              </section>

              <section>
                <h2>{t("terms.law.title")}</h2>
                <h5>{t("terms.law.content")}</h5>
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
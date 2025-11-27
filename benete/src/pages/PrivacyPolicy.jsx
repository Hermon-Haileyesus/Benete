import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import "../css/LegalPages.css";

const PrivacyPolicy = () => {
  const { t } = useLanguage();

  return (
    <div className="legal-page">
      <div className="legal-header">
        <div className="legal-header-content">
            <h2>{t("privacy.title")}</h2>
        </div>
      </div>
      <main className="legal-main">
        <div className="legal-container">
          <div className="legal-grid">
            {/* Sidebar */}
            <aside className="legal-sidebar">
              <div className="sidebar-links">
                <Link to="/privacy-policy" className="sidebar-link active">
                  {t("privacy.title")}
                </Link>
                <Link to="/terms" className="sidebar-link">
                  {t("terms.title")}
                </Link>
              </div>
            </aside>

            {/* Content */}
            <div className="legal-content">
              <section>
                <h2>{t("privacy.customerInfo.title")}</h2>
                <h5>{t("privacy.customerInfo.content")}</h5>
              </section>

              <section>
                <h2>{t("privacy.analytics.title")}</h2>
                <h5>{t("privacy.analytics.content")}</h5>
              </section>

              <section>
                <h2>{t("privacy.dataSecurity.title")}</h2>
                <h5>{t("privacy.dataSecurity.content")}</h5>
              </section>

              <section>
                <h2>{t("privacy.access.title")}</h2>
                <h5>{t("privacy.access.content1")}</h5>
                <h5>{t("privacy.access.content2")}</h5>
              </section>

              <section>
                <h2>{t("privacy.updates.title")}</h2>
                <h5>{t("privacy.updates.content")}</h5>
              </section>

              <section>
                <h2>{t("privacy.contact.title")}</h2>
                <h5>{t("privacy.contact.content")}</h5>
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

export default PrivacyPolicy;


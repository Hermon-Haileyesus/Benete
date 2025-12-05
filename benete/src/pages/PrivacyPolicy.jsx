import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import "../css/LegalPages.css";

const PrivacyPolicy = () => {
  const { t } = useLanguage();

  return (
    <div className="legal-page">
      <div className="legal-header">
        <div className="legal-header-content">
            <h2>{t("privacyTitle")}</h2>
        </div>
      </div>
      <main className="legal-main">
        <div className="legal-container">
          <div className="legal-grid">
            {/* Sidebar */}
            <aside className="legal-sidebar">
              <div className="sidebar-links">
                <Link to="/privacy-policy" className="sidebar-link active">
                  {t("privacyTitle")}
                </Link>
                <Link to="/terms" className="sidebar-link">
                  {t("termsTitle")}
                </Link>
              </div>
            </aside>

            {/* Content */}
            <div className="legal-content">
              <section>
                <h2>{t("privacyCustomerInfoTitle")}</h2>
                <h5>{t("privacyCustomerInfoContent")}</h5>
              </section>

              <section>
                <h2>{t("privacyAnalyticsTitle")}</h2>
                <h5>{t("privacyAnalyticsContent")}</h5>
              </section>

              <section>
                <h2>{t("privacyDataSecurityTitle")}</h2>
                <h5>{t("privacyDataSecurityContent")}</h5>
              </section>

              <section>
                <h2>{t("privacyAccessTitle")}</h2>
                <h5>{t("privacyAccessContent1")}</h5>
                <h5>{t("privacyAccessContent2")}</h5>
              </section>

              <section>
                <h2>{t("privacyUpdatesTitle")}</h2>
                <h5>{t("privacyUpdatesContent")}</h5>
              </section>

              <section>
                <h2>{t("privacyContactTitle")}</h2>
                <h5>{t("privacyContactContent")}</h5>
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
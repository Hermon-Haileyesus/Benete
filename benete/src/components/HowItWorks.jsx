import { useLanguage } from "../contexts/LanguageContext";
import "../css/HowItWorks.css"; // Link to your CSS file

function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    { number: "01", titleKey: "howStep1Title", descKey: "howStep1Desc" },
    { number: "02", titleKey: "howStep2Title", descKey: "howStep2Desc" },
    { number: "03", titleKey: "howStep3Title", descKey: "howStep3Desc" },
    { number: "04", titleKey: "howStep4Title", descKey: "howStep4Desc" },
  ];

  return (
    <section className="how-section">
      <div className="how-container">
        <div className="how-header">
          <h2 className="how-title">{t("howTitle")}</h2>
          <p className="how-subtitle">{t("howSubtitle")}</p>
        </div>

        <div className="how-grid">
          {steps.map((step, index) => (
            <div key={index} className="how-step">
              <div className="how-number">{step.number}</div>
              <h3 className="how-step-title">{t(step.titleKey)}</h3>
              <p className="how-step-desc">{t(step.descKey)}</p>
              {index < steps.length - 1 && (
                <div className="how-connector" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
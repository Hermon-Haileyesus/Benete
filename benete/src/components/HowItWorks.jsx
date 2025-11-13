import { useLanguage } from "../contexts/LanguageContext";
import "../css/HowItWorks.css"; // Link to your CSS file

function HowItWorks  ()  {
  const { t } = useLanguage();

  const steps = [
    { number: "01", titleKey: "how.step1.title", descKey: "how.step1.desc" },
    { number: "02", titleKey: "how.step2.title", descKey: "how.step2.desc" },
    { number: "03", titleKey: "how.step3.title", descKey: "how.step3.desc" },
    { number: "04", titleKey: "how.step4.title", descKey: "how.step4.desc" },
  ];

  return (
    <section className="how-section">
      <div className="how-container">
        <div className="how-header">
          <h2 className="how-title">{t("how.title")}</h2>
          <p className="how-subtitle">{t("how.subtitle")}</p>
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
};

export default HowItWorks
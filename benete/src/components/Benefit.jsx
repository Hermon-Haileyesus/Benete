import { useLanguage } from "../contexts/LanguageContext";
import "../css/Benefit.css"; // Import the CSS file
import { Users, Heart, Brain } from "lucide-react";

function Benefits  () {
  const { t } = useLanguage();

  const benefits = [
    { icon: Users, titleKey: "benefits.caregivers", p1: "benefits.caregivers.1",p2: "benefits.caregivers.2",p3: "benefits.caregivers.3",p4: "benefits.caregivers.4" },
    { icon: Heart, titleKey: "benefits.elderly", p1: "benefits.elderly.1",p2: "benefits.elderly.2",p3: "benefits.elderly.3",p4: "benefits.elderly.4"},
    { icon: Brain,titleKey: "benefits.family", p1: "benefits.family.1",p2: "benefits.family.2",p3: "benefits.family.3",p4: "benefits.family.4"  },
  ];

  return (
    <section id="ominaisuudet" className="benefits-section">
      <div className="benefits-container">
        <div className="benefits-header">
          <h2 className="benefits-title">{t("benefits.title")}</h2>
          <p className="benefits-subtitle">{t("benefits.subtitle")}</p>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="benefit-card">
                <div className="benefit-icon-wrapper">
                  <Icon className="benefit-icon" size={28} />
                </div>
                <h3 className="benefit-title">{t(benefit.titleKey)}</h3>
                <p className="benefit-description">{t(benefit.p1)}</p>
                <p className="benefit-description">{t(benefit.p2)}</p>
                <p className="benefit-description">{t(benefit.p3)}</p>
                <p className="benefit-description">{t(benefit.p4)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Benefits
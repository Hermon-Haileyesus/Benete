import { useLanguage } from "../contexts/LanguageContext";
import "../css/Benefit.css"; // Import the CSS file
import nurseImage from "../assets/images/carousel-nurse.jpg";
import elderlyImage from "../assets/images/k3.jpg";
import familyImage from "../assets/images/grandParents.jpg";

function Benefits() {
  const { t } = useLanguage();

  const benefits = [
    {
      pic: nurseImage,
      titleKey: "benefitsCaregivers",
      p1: "benefitsCaregivers1",
      p2: "benefitsCaregivers2",
      p3: "benefitsCaregivers3",
      p4: "benefitsCaregivers4",
    },
    {
      pic: elderlyImage,
      titleKey: "benefitsElderly",
      p1: "benefitsElderly1",
      p2: "benefitsElderly2",
      p3: "benefitsElderly3",
      p4: "benefitsElderly4",
    },
    {
      pic: familyImage,
      titleKey: "benefitsFamily",
      p1: "benefitsFamily1",
      p2: "benefitsFamily2",
      p3: "benefitsFamily3",
      p4: "benefitsFamily4",
    },
  ];

  return (
    <section id="ominaisuudet" className="benefits-section">
      <div className="benefits-container">
        <div className="benefits-header">
          <h2 className="benefits-title">{t("benefitsTitle")}</h2>
          <p className="benefits-subtitle">{t("benefitsSubtitle")}</p>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => {
            const picture = benefit.pic;
            return (
              <div key={index} className="benefit-card">
                <div className="benefit-pic-wrapper">
                  <img src={picture} className="benefit-pic" alt="benefit" />
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
}

export default Benefits;
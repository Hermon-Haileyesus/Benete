import { useLanguage } from "../contexts/LanguageContext";
import "../css/Benefit.css"; // Import the CSS file
import nurseImage from "../assets/images/carousel-nurse.jpg";
import elderlyImage from "../assets/images/k3.jpg";
import familyImage from "../assets/images/grandParents.jpg";

function Benefits  () {
  const { t } = useLanguage();

  const benefits = [
    { pic: nurseImage, titleKey: "benefits.caregivers", p1: "benefits.caregivers.1",p2: "benefits.caregivers.2",p3: "benefits.caregivers.3",p4: "benefits.caregivers.4" },
    { pic: elderlyImage, titleKey: "benefits.elderly", p1: "benefits.elderly.1",p2: "benefits.elderly.2",p3: "benefits.elderly.3",p4: "benefits.elderly.4"},
    { pic: familyImage,titleKey: "benefits.family", p1: "benefits.family.1",p2: "benefits.family.2",p3: "benefits.family.3",p4: "benefits.family.4"  },
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
            const picture = benefit.pic;
            return (
              <div key={index} className="benefit-card">
                <div className="benefit-pic-wrapper">
                  <img src={picture} className="benefit-pic" />
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
import { Activity, Moon, Droplets, Clock, TrendingUp, Shield } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import "../css/Features.css"; // Import the CSS file

function Features() {
  const { t } = useLanguage();

  const features = [
    { icon: Activity, titleKey: "featuresActivityTitle", descKey: "featuresActivityDesc" },
    { icon: Moon, titleKey: "featuresSleepTitle", descKey: "featuresSleepDesc" },
    { icon: Droplets, titleKey: "featuresHygieneTitle", descKey: "featuresHygieneDesc" },
    { icon: Clock, titleKey: "featuresWcTitle", descKey: "featuresWcDesc" },
    { icon: TrendingUp, titleKey: "featuresHealthTitle", descKey: "featuresHealthDesc" },
    { icon: Shield, titleKey: "featuresAlertsTitle", descKey: "featuresAlertsDesc" },
  ];

  return (
    <section id="ominaisuudet" className="features-section">
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">{t("featuresTitle")}</h2>
          <p className="features-subtitle">{t("featuresSubtitle")}</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="feature-card">
                <div className="feature-icon-wrapper">
                  <Icon className="feature-icon" size={28} />
                </div>
                <h3 className="feature-title">{t(feature.titleKey)}</h3>
                <p className="feature-description">{t(feature.descKey)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
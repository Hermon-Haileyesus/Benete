
import { Activity, Moon, Droplets, Clock, TrendingUp, Shield } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import "../css/Features.css"; // Import the CSS file

function Features  () {
  const { t } = useLanguage();

  const features = [
    { icon: Activity, titleKey: "features.activity.title", descKey: "features.activity.desc" },
    { icon: Moon, titleKey: "features.sleep.title", descKey: "features.sleep.desc" },
    { icon: Droplets, titleKey: "features.hygiene.title", descKey: "features.hygiene.desc" },
    { icon: Clock, titleKey: "features.wc.title", descKey: "features.wc.desc" },
    { icon: TrendingUp, titleKey: "features.health.title", descKey: "features.health.desc" },
    { icon: Shield, titleKey: "features.alerts.title", descKey: "features.alerts.desc" },
  ];

  return (
    <section id="ominaisuudet" className="features-section">
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">{t("features.title")}</h2>
          <p className="features-subtitle">{t("features.subtitle")}</p>
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
};
export default Features
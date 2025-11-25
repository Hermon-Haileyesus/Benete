import { useLanguage } from "../contexts/LanguageContext";
import "../css/FundingBlock.css"; // Create this CSS file
import Eu from "../assets/images/EU.svg";
import Ely from "../assets/images/ELY.svg";

function FundingBlock() {
  const { t } = useLanguage();

  return (
    <section className="funding-section">
      <div className="funding-row">
        {/* Horizon 2020 Block */}
        <div className="funding-block">
          <div className="funding-content">
            <h2>{t("funding.horizon.title")}</h2>
            <p>{t("funding.horizon.text")}</p>
            <div className="funding-logos">
              <img src={Eu} alt="European Regional Development Fund" className="eu-logo"/>
              <img src={Ely} alt="Leverage EU" className="ely-logo" />
            </div>
          </div>
        </div>

        {/* ELY Block */}
        <div className="funding-block">
          <div className="funding-content">
            <h2>{t("funding.ely.title")}</h2>
            <p>{t("funding.ely.text")}</p>
            <div className="funding-logos">
              <img src={Eu} alt="European Regional Development Fund" className="eu-logo" />
              <img src={Ely} alt="Leverage EU" className="ely-logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FundingBlock;
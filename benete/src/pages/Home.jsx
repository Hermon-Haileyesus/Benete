import { useLanguage } from "../contexts/LanguageContext";
import '@fontsource/rubik';
import '../css/Home.css'
import CustomerTypeSelector from "../components/CustomerTypeSelector";
import Carousel from "../components/Carousel";
import Benefits from "../components/Benefit";
import FundingBlock from "../components/FundingBlock";



function Home() {
  const { t } = useLanguage();

  return (
    <>
      <Carousel/>
      <div className="main-content">
        <div className="introduction-container">
          <div className="introduction-content">
            <h4>{t("homepage.introduction_title")}</h4>
            <h5>{t("homepage.introduction_p1")}</h5>
            <h5>{t("homepage.introduction_p2")}{t("homepage.introduction_p3")}</h5>
            <h5></h5>
          </div>
        </div>
        <CustomerTypeSelector/>
        <Benefits/>
        <FundingBlock/>
        
      </div>
      
      
    </>
  );
}

export default Home;
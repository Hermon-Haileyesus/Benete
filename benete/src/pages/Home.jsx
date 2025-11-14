import headerImg from "../assets/header_img/homepage_header.jpg";
import { useLanguage } from "../contexts/LanguageContext";
import Header from "../components/Header";
import '@fontsource/rubik';
import '../css/Home.css'
import sensorImage from "../assets/images/sensor.jpg"
import CustomerTypeSelector from "../components/CustomerTypeSelector";
import Carousel from "../components/Carousel";




function Home() {
  const { t } = useLanguage();

  return (
    <>
      <Header
        image={headerImg}
        title={t("header.title")}
        subtitle={t("header.subtitle")}
      />
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
        <Carousel/>
      </div>
      
      
    </>
  );
}

export default Home;
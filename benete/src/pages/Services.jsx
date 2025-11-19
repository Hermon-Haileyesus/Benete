import '../css/Services.css';
import headerImg from "../assets/header_img/servicepage_header.jpg";
import { useLanguage } from "../contexts/LanguageContext";
import Header from "../components/Header";
import '@fontsource/rubik';
import Features from "../components/Features";
import HowItWorks from '../components/HowItWorks';
import Security from '../components/Security';
import ContactFormServices from '../components/ContactFormServices';
function Services () {
    const { t } = useLanguage();
    return(
        <>
        <Header
        image={headerImg}
        title={t("header.title")}
        subtitle={t("header.subtitle")}
        isWhite={false}
      />
      <Features/>
      <HowItWorks/>
      <Security/>
      <ContactFormServices/>
      </>
    )
}
export default Services



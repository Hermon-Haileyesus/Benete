import '../css/Contact.css';
import Header from "../components/Header";
import headerImg from "../assets/header_img/Phone1.jpg";
import { useLanguage } from "../contexts/LanguageContext";
import BeneteContact from '../components/BeneteContact';
import ContactForm from '../components/ContactForm';


function Contact () {
    const { t } = useLanguage();
    return(
        <>
        <Header
        image={headerImg}
        title={t("header.title")}
        subtitle={t("header.subtitle")}
        isWhite={true}
      />
      <ContactForm/>
      <BeneteContact/>
      </>
    )
}
export default Contact
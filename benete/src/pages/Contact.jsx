import '../css/Contact.css';
import Header from "../components/Header";
import headerImg from "../assets/header_img/Contact_banner.jpg";
import { useLanguage } from "../contexts/LanguageContext";
import BeneteContact from '../components/BeneteContact';
import ContactForm from '../components/ContactForm';


function Contact () {
    const { t } = useLanguage();
    return(
        <>
        <Header
        image={headerImg}
        title={t("contact.heading.title")}
        titleColor="white"
        subtitle={t("contact.heading.intro")}
        isWhite={true}
        isCentered={true} 
      />
      <ContactForm/>
      <BeneteContact/>
      </>
    )
}
export default Contact
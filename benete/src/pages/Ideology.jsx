import '../css/Ideology.css';
import headerImg from "../assets/header_img/ideology.jpg";
import Header from "../components/Header";
import { useLanguage } from "../contexts/LanguageContext";
function Ideology () {
    const { t } = useLanguage();
    return(
        <>
        <Header
        image={headerImg}
        title={t("header.title")}
        subtitle={t("header.subtitle")}
        isWhite={false}
        isCentered={false} 
      />

        </>
    )
}
export default Ideology
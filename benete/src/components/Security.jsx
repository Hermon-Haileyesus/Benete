import '../css/Security.css';
import { useLanguage } from '../contexts/LanguageContext';
import Securityimg from '../assets/images/Security.jpg';

function Security() {
    const {t} = useLanguage();
    return(
        <section className="security-section">
            <div className="security-content">
                 <img src={Securityimg} alt="Laptop-picture" className="security-image" />
                 <div className="security-text">
                        <h4>{t("service.privacyTitle")}</h4>
                        <h5>{t("service.privacyText")}</h5>
                 </div>
            </div>
        </section>
    )
}
export default Security
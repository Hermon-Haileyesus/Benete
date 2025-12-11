import '../css/Customers.css';
import { useLanguage } from "../contexts/LanguageContext";
import Card from '../components/ui/Card';
import { Heart, Shield, Clock, Users } from "lucide-react";
import Header from '../components/Header';
import headerImg from '../assets/header_img/privateCustomer_header.jpg';
import ContactFormServices from '../components/ContactFormServices';
import ReadMoreButton from '../components/ReadMore';

function CustomerSection() {
  const { t } = useLanguage();

  return (
    <section className="customer-customers">
      <Header
        image={headerImg}
        title={t("privateHeroTitle")}
        subtitle={t("headerTitle")}
        isWhite={true}
        isCentered={false} 
        isYellow={false}
      />
      <div className='customer-container'>
        <h2>{t("privateBenefitsTitle")}</h2>
        <h5>{t("privateHeroSubtitle")}</h5>
        <div className="customer-wrap">
          <Card>
            <div className="customer-content">
              <div className="customer-icon">
                <Heart size={32} />
              </div>
              <h3 className="customer-title">{t("privateBenefitsPeaceTitle")}</h3>
              <p className="customer-description">{t("privateBenefitsPeaceText")}</p>
            </div>
          </Card>
          <Card>
            <div className="customer-content">
              <div className="customer-icon">
                <Shield size={32} />
              </div>
              <h3 className="customer-title">{t("privateBenefitsSafetyTitle")}</h3>
              <p className="customer-description">{t("privateBenefitsSafetyText")}</p>
            </div>
          </Card>
          <Card>
            <div className="customer-content">
              <div className="customer-icon">
                <Clock size={32} />
              </div>
              <h3 className="customer-title">{t("privateBenefitsResponseTitle")}</h3>
              <p className="customer-description">{t("privateBenefitsResponseText")}</p>
            </div>
          </Card>
          <Card>
            <div className="customer-content">
              <div className="customer-icon">
                <Users size={32} />
              </div>
              <h3 className="customer-title">{t("privateBenefitsFamilyTitle")}</h3>
              <p className="customer-description">{t("privateBenefitsFamilyText")}</p>
            </div>
          </Card>
        </div>
      </div>
      <ContactFormServices/>
      <div className='readMore'>
        <div className='readMore-content'>
          <h2>{t("readMoreDescription")}</h2>
          <ReadMoreButton to="/services" />
        </div>  
      </div>
    </section>
  );
}

export default CustomerSection;
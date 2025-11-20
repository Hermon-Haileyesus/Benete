import '../css/PrivateCustomers.css';
import { useLanguage } from "../contexts/LanguageContext";
import Card from '../components/ui/Card';
import { Heart, Shield, Clock, Users } from "lucide-react";
import Header from '../components/Header';
import headerImg from '../assets/header_img/privateCustomer_header.jpg'
import ContactFormServices from '../components/ContactFormServices';

function PrivateCustomers() {
  const { t } = useLanguage();

  return (
    <section className="private-customers">
      <Header
        image={headerImg}
        title={t("private.hero.title")}
        subtitle={t("header.title")}
        isWhite={true}
        isCentered={false} 
        isYellow={false}
      />
      <div className='private-container'>
        <h2>{t("private.benefits.title")}</h2>
        <h5>{t("private.hero.subtitle")}</h5>
        <div className="private-wrap">
        <Card>
          <div className="private-content">
            <div className="private-icon">
              <Heart size={32} />
            </div>
            <h3 className="private-title">{t("private.benefits.peace.title")}</h3>
            <p className="private-description">{t("private.benefits.peace.text")}</p>
          </div>
        </Card>
        <Card>
          <div className="private-content">
            <div className="private-icon">
              <Shield size={32} />
            </div>
            <h3 className="private-title">{t("private.benefits.safety.title")}</h3>
            <p className="private-description">{t("private.benefits.safety.text")}</p>
          </div>
        </Card>
        <Card>
          <div className="private-content">
            <div className="private-icon">
              <Clock size={32} />
            </div>
            <h3 className="private-title">{t("private.benefits.response.title")}</h3>
            <p className="private-description">{t("private.benefits.response.text")}</p>
          </div>
        </Card>
        <Card>
          <div className="private-content">
            <div className="private-icon">
              <Users size={32} />
            </div>
            <h3 className="private-title">{t("private.benefits.family.title")}</h3>
            <p className="private-description">{t("private.benefits.family.text")}</p>
          </div>
        </Card>
      </div>
      </div>
      <ContactFormServices/>
      
    </section>
  );
}

export default PrivateCustomers;
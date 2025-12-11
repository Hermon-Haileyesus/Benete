import '../css/Customers.css';
import { TrendingUp, DollarSign, Award, BarChart } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import Card from '../components/ui/Card';
import Header from '../components/Header';
import headerImg from '../assets/images/carousel-nurse.jpg';
import ReadMoreButton from '../components/ReadMore';
import ContactFormServices from '../components/ContactFormServices';

function CompanyCustomers () {
    const { t } = useLanguage();

  return (
    <section className="customer-customers">
      <Header
        image={headerImg}
        title={t("companyHeroTitle")}
        subtitle={t("headerTitle")}
        isWhite={true}
        isCentered={false} 
        isYellow={false}
      />
      <div className='customer-container'>
        <h2>{t("companyBenefitsTitle")}</h2>
        <h5>{t("companyHeroSubtitle")}</h5>
        <div className="customer-wrap">
          <Card>
            <div className="customer-content">
              <div className="customer-icon">
                <TrendingUp size={32} />
              </div>
              <h3 className="customer-title">{t("companyBenefitsEfficiencyTitle")}</h3>
              <p className="customer-description">{t("companyBenefitsEfficiencyText")}</p>
            </div>
          </Card>
          <Card>
            <div className="customer-content">
              <div className="customer-icon">
                <DollarSign size={32} />
              </div>
              <h3 className="customer-title">{t("companyBenefitsCostTitle")}</h3>
              <p className="customer-description">{t("companyBenefitsCostText")}</p>
            </div>
          </Card>
          <Card>
            <div className="customer-content">
              <div className="customer-icon">
                <Award size={32} />
              </div>
              <h3 className="customer-title">{t("companyBenefitsQualityTitle")}</h3>
              <p className="customer-description">{t("companyBenefitsQualityText")}</p>
            </div>
          </Card>
          <Card>
            <div className="customer-content">
              <div className="customer-icon">
                <BarChart size={32} />
              </div>
              <h3 className="customer-title">{t("companyBenefitsDataTitle")}</h3>
              <p className="customer-description">{t("companyBenefitsDataText")}</p>
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

export default CompanyCustomers;
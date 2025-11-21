import '../css/Customers.css';
import { TrendingUp, DollarSign, Award, BarChart } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import Card from '../components/ui/Card';
import Header from '../components/Header';
import headerImg from '../assets/images/carousel-nurse.jpg'
import ContactFormServices from '../components/ContactFormServices';


function CompanyCustomers () {
    const { t } = useLanguage();

  return (
    <section className="customer-customers">
      <Header
        image={headerImg}
        title={t("company.hero.title")}
        subtitle={t("header.title")}
        isWhite={true}
        isCentered={false} 
        isYellow={false}
      />
      <div className='customer-container'>
        <h2>{t("company.benefits.title")}</h2>
        <h5>{t("company.hero.subtitle")}</h5>
        <div className="customer-wrap">
        <Card>
          <div className="customer-content">
            <div className="customer-icon">
              <TrendingUp size={32} />
            </div>
            <h3 className="customer-title">{t("company.benefits.efficiency.title")}</h3>
            <p className="customer-description">{t("company.benefits.efficiency.text")}</p>
          </div>
        </Card>
        <Card>
          <div className="customer-content">
            <div className="customer-icon">
              <DollarSign size={32} />
            </div>
            <h3 className="customer-title">{t("company.benefits.cost.title")}</h3>
            <p className="customer-description">{t("company.benefits.cost.text")}</p>
          </div>
        </Card>
        <Card>
          <div className="customer-content">
            <div className="customer-icon">
              <Award size={32} />
            </div>
            <h3 className="customer-title">{t("company.benefits.quality.title")}</h3>
            <p className="customer-description">{t("company.benefits.quality.text")}</p>
          </div>
        </Card>
        <Card>
          <div className="customer-content">
            <div className="customer-icon">
              <BarChart size={32} />
            </div>
            <h3 className="customer-title">{t("company.benefits.data.title")}</h3>
            <p className="customer-description">{t("company.benefits.data.text")}</p>
          </div>
        </Card>
      </div>
      </div>
      <ContactFormServices/>
      
    </section>
  );
}
export default CompanyCustomers
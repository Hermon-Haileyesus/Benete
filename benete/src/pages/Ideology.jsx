import '../css/Ideology.css';
import headerImg from "../assets/header_img/old_woman.jpg";
import Header from "../components/Header";
import { useLanguage } from "../contexts/LanguageContext";
import cooking from '../assets/images/old_man.jpg';
import door from '../assets/images/door.jpg';
import couple from '../assets/images/couple.jpg';
import hand_shake from '../assets/images/hand_shake.jpg';
import ReadMoreButton from '../components/ReadMore';
function Ideology () {
    const { t } = useLanguage();
    return(
        <section>
        <Header
        image={headerImg}
        title={t("ideology.title")}
        titleColor='blue'
        subtitleLines={t("hero.subtitleLines", { returnObjects: true })}
        isWhite={false}
        isCentered={false} 
        isBlack={true}
      />
      <div className='ideology-container'>
        <div className='ideology-content'>
          <div className='ideology-text'>
            <h2>{t("ideology.section1.title")}</h2>
            <h5>{t("ideology.section1.p1")}</h5>
            <h5>{t("ideology.section1.p2")}</h5>
          </div>
         
          <img src={cooking} alt='Coffee-picture'/>
      
        </div>   
        <div className='ideology-content'>
          <img src={door} alt='door-picture'/>
      
          <div className='ideology-text'>
            <h2>{t("ideology.section2.title")}</h2>
            <h5>{t("ideology.section2.p1")}</h5>
            <h5>{t("ideology.section2.p2")}</h5>
          </div>
        </div> 
        <div className='ideology-content'>
          <div className='ideology-text'>
            <h2>{t("ideology.section3.title")}</h2>
            <h5>{t("ideology.section3.p1")}</h5>
            <h5>{t("ideology.section3.p2")}</h5>
          </div>
          <img src={couple} alt='Couple-picture'/>
          
        </div> 
        <div className='ideology-content'>
          <img src={hand_shake} alt='hand_shake-picture'/>
          
          <div className='ideology-text'>
            <h2>{t("ideology.section4.title")}</h2>
            <h5>{t("ideology.section4.p1")}</h5>
            
          </div>
        </div>  
      </div>
      <div className='ideology-container2'>
        <div className='ideology-content2'>
          <div className='ideology-title'>
            <h2>{t("ideology.section5.title")}</h2>
          </div>
          <div className='ideology-discription'>
            <h5>{t("ideology.section5.p1")}</h5>
            <h5>{t("ideology.section5.p2")}</h5>
          </div>
        </div>
      </div>
      <div className='readMore'>
        <div className='readMore-content'>
          <h2>{t("readMore.description")}</h2>
          <ReadMoreButton to="/services" />
        </div>  
      </div>
        </section>
    )
}
export default Ideology
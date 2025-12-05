import '../css/Ideology.css';
import headerImg from '../assets/header_img/oldWoman.jpg';
import Header from "../components/Header";
import { useLanguage } from "../contexts/LanguageContext";
import cooking from '../assets/images/k1.jpg';
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
          title={t("ideologyTitle")}
          titleColor='blue'
          subtitleLines={t("heroSubtitleLines")}
          isWhite={false}
          isCentered={false} 
          isBlack={true}
        />
        <div className='ideology-container'>
          <div className='ideology-content'>
            <div className='ideology-text'>
              <h2>{t("ideologySection1Title")}</h2>
              <h5>{t("ideologySection1P1")}</h5>
              <h5>{t("ideologySection1P2")}</h5>
            </div>
            <img src={cooking} alt='Cooking-picture'/>
          </div>   
          <div className='ideology-content'>
            <img src={door} alt='door-picture'/>
            <div className='ideology-text'>
              <h2>{t("ideologySection2Title")}</h2>
              <h5>{t("ideologySection2P1")}</h5>
              <h5>{t("ideologySection2P2")}</h5>
            </div>
          </div> 
          <div className='ideology-content'>
            <div className='ideology-text'>
              <h2>{t("ideologySection3Title")}</h2>
              <h5>{t("ideologySection3P1")}</h5>
              <h5>{t("ideologySection3P2")}</h5>
            </div>
            <img src={couple} alt='Couple-picture'/>
          </div> 
          <div className='ideology-content'>
            <img src={hand_shake} alt='hand_shake-picture'/>
            <div className='ideology-text'>
              <h2>{t("ideologySection4Title")}</h2>
              <h5>{t("ideologySection4P1")}</h5>
            </div>
          </div>  
        </div>
        <div className='ideology-container2'>
          <div className='ideology-content2'>
            <div className='ideology-title'>
              <h2>{t("ideologySection5Title")}</h2>
            </div>
            <div className='ideology-discription'>
              <h5>{t("ideologySection5P1")}</h5>
              <h5>{t("ideologySection5P2")}</h5>
            </div>
          </div>
        </div>
        <div className='readMore'>
          <div className='readMore-content'>
            <h2>{t("readMoreDescription")}</h2>
            <ReadMoreButton to="/services" />
          </div>  
        </div>
        </section>
    )
}
export default Ideology;
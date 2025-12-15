
import { useLanguage } from "../contexts/LanguageContext";
import { Play } from "lucide-react"; 
import "../css/Support.css";
import { useRef, useState, useEffect } from "react";
import Header from "../components/Header";
import headerImg from '../assets/header_img/support.jpg';







function SupportVideoCard({ video, activeVideoId, setActiveVideoId }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current) return;
    if (activeVideoId !== video.id) {
      videoRef.current.pause();
    }
  }, [activeVideoId, video.id]);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setActiveVideoId(video.id); 
    }
  };

  return (
    <div className={`support-card ${activeVideoId === video.id ? "active" : ""}`}>
      <div className="support-video">
        <video
          ref={videoRef}
          src={video.src}
          controls
          className="support-player"
          onEnded={() => {
            if (activeVideoId === video.id) {
              setActiveVideoId(null);
            }
          }}


        />
        {activeVideoId !== video.id && (
          <div className="support-play-overlay" onClick={handlePlayClick}>
            <div className="support-play-button">
              <Play className="play-icon" />
            </div>
            <span className="support-duration">{video.duration}</span>
          </div>
        )}
      </div>
      <div className="support-text">
        <h3>{video.titleKey}</h3>
        <p>{video.descriptionKey}</p>
      </div>
    </div>
  );
}



function Support() {
  const { t } = useLanguage();
  const [activeVideoId, setActiveVideoId] = useState(null);
  const supportVideos = [
  { 
    id: 1, 
    titleKey: t("SafetyBraceletTitle"), 
    descriptionKey: t("SafetyBraceletIntro"), 
    duration: "0:33", 
    src: "/videos/Benete_Turvaranneke.mp4" 
  },
  { 
    id: 2, 
    titleKey: t("PIR1Title"), 
    descriptionKey: t("PIR1Intro"), 
    duration: "0:22", 
    src: "/videos/Benete_PIR_1.mp4" 
  },
  { 
    id: 3, 
    titleKey: t("RouterTitle"), 
    descriptionKey: t("RouterIntro"), 
    duration: "1:03", 
    src: "/videos/Benete_Reititin.mp4" 
  },
  { 
    id: 4, 
    titleKey: t("AM6Title"), 
    descriptionKey: t("AM6Intro"), 
    duration: "0:33", 
    src: "/videos/Benete_sensori_Am-6.mp4" 
  },
  { 
    id: 5, 
    titleKey: t("AR1Title"), 
    descriptionKey: t("AR1Intro"), 
    duration: "0:33", 
    src: "/videos/Benete_sensori_AR-1.mp4" 
  },
  { 
    id: 6, 
    titleKey: t("PIR2Title"), 
    descriptionKey: t("PIR2Intro"), 
    duration: "0:33", 
    src: "/videos/Benete_sensori_Pir2.mp4" 
  },
  { 
    id: 7, 
    titleKey: t("TP10Title"), 
    descriptionKey: t("TP10Intro"), 
    duration: "0:18", 
    src: "/videos/Benete_sensori_TP-10.mp4" 
  },
  { 
    id: 8, 
    titleKey: t("SleepMonitorTitle"), 
    descriptionKey: t("SleepMonitorIntro"), 
    duration: "0:33", 
    src: "/videos/Benete_unimittari.mp4" 
  },
  { 
    id: 9, 
    titleKey: t("SmartScaleTitle"), 
    descriptionKey: t("SmartScaleIntro"), 
    duration: "0:26", 
    src: "/videos/Benete_Vaaka.mp4" 
  },
];


  return (
    <section className="support-container">
      <Header
          image={headerImg}
          title={t("supportHeader")}
          titleColor='white'
          subtitle={t("supportIntro")}
          isWhite={true}
         
        />
      <div className="support-hero">
        <h1>{t("supportTitle")}</h1>
        <p>{t("supportSubtitle")}</p>
      </div>

      <div className="support-grid">
        {supportVideos.map((video) => (
          <SupportVideoCard
            key={video.id}
            video={video}
            activeVideoId={activeVideoId}
            setActiveVideoId={setActiveVideoId}
          />
        ))}
      </div>

      <div className="support-contact">
        <h2>{t("supportHelp")}</h2>
        <p>{t("supportHelpDescription")}</p>
        <a href="mailto:support@benecare.fi" className="support-button">
          {t("supportContact")}
        </a>
      </div>
    </section>
  );
}

export default Support;


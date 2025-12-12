
import { useLanguage } from "../contexts/LanguageContext";
import { Play } from "lucide-react"; 
import Turvaranneke from "../assets/videos/Benete Turvaranneke.mp4";
import Benete_PIR_1 from "../assets/videos/Benete_PIR_1.mp4";
import Benete_Reititin from "../assets/videos/Benete_Reititin.mp4";
import Benete_sensori_Am6 from "../assets/videos/Benete_sensori_Am-6.mp4";
import Benete_sensori_AR1 from "../assets/videos/Benete_sensori_AR-1.mp4";
import Benete_sensori_Pir2 from "../assets/videos/Benete_sensori_Pir2.mp4";
import Benete_sensori_TP10 from "../assets/videos/Benete_sensori_TP-10.mp4";
import Benete_unimittari from "../assets/videos/Benete_unimittari.mp4";
import Benete_Vaaka from "../assets/videos/Benete_Vaaka.mp4";
import "../css/Support.css";
import { useRef, useState, useEffect } from "react";
import Header from "../components/Header";
import headerImg from '../assets/header_img/support.jpg';




const supportVideos = [
  { id: 1, titleKey: "Getting Started", descriptionKey: "Learn how to set up your BeneCare device...", duration: "0:33", src: Turvaranneke },
  { id: 2, titleKey: "Dashboard Overview", descriptionKey: "Walkthrough of the BeneCare dashboard...", duration: "0:22", src: Benete_PIR_1 },
  { id: 3, titleKey: "Setting Up Alerts", descriptionKey: "Configure custom alerts and notifications...", duration: "1:03", src: Benete_Reititin },
  { id: 4, titleKey: "Adding Family Members", descriptionKey: "Invite family members and caregivers...", duration: "0:33", src: Benete_sensori_Am6 },
  { id: 5, titleKey: "Understanding Activity Data", descriptionKey: "Interpret activity patterns and health metrics...", duration: "0:33", src: Benete_sensori_AR1 },
  { id: 6, titleKey: "Mobile App Setup", descriptionKey: "Download and configure the BeneCare mobile app...", duration: "0:33", src: Benete_sensori_Pir2 },
  { id: 7, titleKey: "Emergency Features", descriptionKey: "Overview of emergency alert features...", duration: "0:18", src: Benete_sensori_TP10 },
  { id: 8, titleKey: "Troubleshooting", descriptionKey: "Common issues and solutions...", duration: "0:33", src: Benete_unimittari },
  { id: 9, titleKey: "Privacy & Security", descriptionKey: "How BeneCare protects your data...", duration: "0:26", src: Benete_Vaaka },
];

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

  return (
    <section className="support-container">
      <Header
          image={headerImg}
          title={t("supportTitle")}
          titleColor='white'
          subtitle={t("supportSutitle")}
          isWhite={true}
         
        />
      <div className="support-hero">
        <h1>{t("support.title")}</h1>
        <p>{t("support.subtitle")}</p>
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
        <h2>{t("support.needHelp")}</h2>
        <p>{t("support.helpDescription")}</p>
        <a href="mailto:support@benecare.fi" className="support-button">
          {t("support.contactSupport")}
        </a>
      </div>
    </section>
  );
}

export default Support;


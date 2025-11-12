import { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import elderlyImage from "../assets/images/carousel-elderly.jpg";
import familyImage from "../assets/images/carousel-family.jpg";
import nurseImage from "../assets/images/carousel-nurse.jpg";
import assistantImage from "../assets/images/carousel-assistant.jpg";
import "../css/Carousel.css";
import '@fontsource/rubik';

function Carousel  ()  {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage();

  const slides = [
    {
      image: elderlyImage,
      title: t("carousel.elderly.title"),
      description: t("carousel.elderly.desc"),
    },
    {
      image: familyImage,
      title: t("carousel.family.title"),
      description: t("carousel.family.desc"),
    },
    {
      image: nurseImage,
      title: t("carousel.nurse.title"),
      description: t("carousel.nurse.desc"),
    },
    {
      image: assistantImage,
      title: t("carousel.assistant.title"),
      description: t("carousel.assistant.desc"),
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="carousel-section">
      <div className="carousel-container">
        <div className="carousel-wrapper">
          <div className="carousel-slides">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`carousel-slide ${
                  index === currentSlide ? "active" : ""
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="carousel-image"
                />
                <div className="carousel-overlay" />
                <div className="carousel-content">
                  <h3 className="carousel-title">{slide.title}</h3>
                  <p className="carousel-description">{slide.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="carousel-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`carousel-dot ${
                  index === currentSlide ? "active" : ""
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Carousel
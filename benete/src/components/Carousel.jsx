import { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import elderlyImage from "../assets/images/carousel-elderly.jpg";
import familyImage from "../assets/images/carousel-family.jpg";
import nurseImage from "../assets/images/carousel-nurse.jpg";
import assistantImage from "../assets/images/dataAnlz.jpg";
import "../css/Carousel.css";
import '@fontsource/rubik';

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage();

  const slides = [
    {
      image: elderlyImage,
      title: t("carouselElderlyTitle"),
      description: t("carouselElderlyDesc"),
    },
    {
      image: familyImage,
      title: t("carouselFamilyTitle"),
      description: t("carouselFamilyDesc"),
    },
    {
      image: nurseImage,
      title: t("carouselNurseTitle"),
      description: t("carouselNurseDesc"),
    },
    {
      image: assistantImage,
      title: t("carouselAssistantTitle"),
      description: t("carouselAssistantDesc"),
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000); // shortened to 10s for smoother rotation

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="carousel-wrapper">
      <div className="carousel-slides">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentSlide ? "active" : ""}`}
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
            {index === currentSlide && (
              <div className="carousel-dots">
                {slides.map((_, dotIndex) => (
                  <button
                    key={dotIndex}
                    onClick={() => setCurrentSlide(dotIndex)}
                    className={`carousel-dot ${dotIndex === currentSlide ? "active" : ""}`}
                    aria-label={`Go to slide ${dotIndex + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
import { ChevronRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import "../css/ReadMore.css";
import { useNavigate } from "react-router-dom";

function ReadMoreButton({ to }) {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <button
      className="readMore-button"
      onClick={() => navigate(to)}
    >
      {t("common.readMore")}
      <span className="arrow">
        <ChevronRight size={21} strokeWidth={3} />
      </span>
    </button>
  );
}

export default ReadMoreButton;


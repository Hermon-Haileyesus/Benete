import { createContext, useContext, useState, useEffect } from "react";
import fi from "../texts/fi";
import en from "../texts/en";
import sv from "../texts/sv";

const LanguageContext = createContext(undefined);

const localTranslations = { fi, en, sv };

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("fi");
  const [translations, setTranslations] = useState(localTranslations[language]); // start with local
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const res = await fetch(`/api/translations?lang=${language}`);
        const data = await res.json();

        // If MongoDB returns something, use it
        if (data && Object.keys(data).length > 0) {
          setTranslations(data);
        } else {
          // fallback to local static files
          setTranslations(localTranslations[language]);
        }
      } catch (error) {
        console.error("Failed to load translations:", error);
        // fallback to local static files
        setTranslations(localTranslations[language]);
      } finally {
        setLoading(false);
      }
    };
    fetchTranslations();
  }, [language]);

  const t = (key) => {
    if (!translations) return "";

    if (translations[key]) {
      return translations[key];
    }

    // Nested lookup with dot notation
    const keys = key.split(".");
    let value = translations;

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        return ""; 
      }
    }

    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, loading }}>
      {children}
    </LanguageContext.Provider>
  );
};




  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, loading }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

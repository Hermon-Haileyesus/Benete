import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext(undefined);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const [translations, setTranslations] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const res = await fetch(`/api/translations?lang=${language}`);
        const data = await res.json();
        setTranslations(data);
      } catch (error) {
        console.error("Failed to load translations:", error);
        setTranslations({});
      } finally {
        setLoading(false);
      }
    };
    fetchTranslations();
  }, [language]);

  const t = (key) => {
    if (!translations) return ""; // or show spinner
    const keys = key.split(".");
    let value = translations;
    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        return key; // fallback to key
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

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

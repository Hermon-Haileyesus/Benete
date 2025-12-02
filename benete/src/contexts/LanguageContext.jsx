import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext(undefined);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("fi");
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

  // ✅ Flat key lookup
  const t = (key) => {
    if (!translations) return "";
    return translations[key] || key;
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

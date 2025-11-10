import { createContext, useContext, useState } from "react";
import fi from "../texts/fi";
import en from "../texts/en";
import sv from "../texts/sv";



const LanguageContext = createContext(undefined);

const translations = {fi, en, sv};


export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("fi");

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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
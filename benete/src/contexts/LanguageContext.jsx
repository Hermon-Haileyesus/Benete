import { createContext, useContext, useState } from "react";
import fi from "../texts/fi";
import en from "../texts/en";
import sv from "../texts/sv";



const LanguageContext = createContext(undefined);

const translations = {fi, en, sv};


export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("fi");

  const t = (key) => {
  if (translations[language][key]) {
    return translations[language][key];
  }

  const keys = key.split(".");
  let value = translations[language];

  for (const k of keys) {
    if (value && typeof value === "object" && k in value) {
      value = value[k];
    } else {
      return key; // fallback: return the key itself
    }
  }

  return value;
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
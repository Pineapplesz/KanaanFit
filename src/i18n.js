import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationRU from "./Loacales/ru/translation.json"; // Русский язык
import translationUA from "./Loacales/ua/translation.json"; // Украинский язык

// Отримати мову з браузера
const getBrowserLanguage = () => {
  const lang = navigator.language || navigator.userLanguage; // Отримати мову з браузера
  if (lang.startsWith("uk")) {
    return "ua"; // Якщо мова українська
  }
  if (lang.startsWith("ru")) {
    return "ru"; // Якщо мова російська
  }
  return "ru"; // За замовчуванням російська
};

i18n.use(initReactI18next).init({
  resources: {
    ru: { translation: translationRU },
    ua: { translation: translationUA },
  },
  lng: localStorage.getItem("selectedLanguage") || getBrowserLanguage(), // Язык по умолчанию из localStorage или браузера
  fallbackLng: "ru", // Запасной язык
  interpolation: {
    escapeValue: false, // React уже экранирует
  },
});

export default i18n;

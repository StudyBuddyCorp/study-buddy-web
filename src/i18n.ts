import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import ru from "./locales/ru/translation.json";
import en from "./locales/en/translation.json";

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "ru",
        debug: true,
        resources: {
            en: {
                translation: en,
            },
            ru: {
                translation: ru,
            },
        },

        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;

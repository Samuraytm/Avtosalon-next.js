'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ru: {
    translation: {
      "models": "Модели",
      "blog": "Блог",
      "about_us": "О нас",
      "news": "Новости",
      "contact_us": "Связаться с нами",
      "learn_more": "Узнать больше"
    }
  },
  en: {
    translation: {
      "models": "Models",
      "blog": "Blog",
      "about_us": "About us",
      "news": "News",
      "contact_us": "Contact us",
      "learn_more": "Learn more"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ru', // язык по умолчанию
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // react уже защищает от xss
    }
  });

export default i18n;
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "home": {
        "title": "Welcome to Our React SPA!",
        "description": "This is a modern single page application built with React, featuring dark/light themes, multilingual support, and API integration."
      },
      "about": {
        "title": "About Us",
        "description": "We are passionate about building modern web apps with great UX and clean code.",
        "visits": "You have visited this page {{count}} times in this session."
      },
      "users": {
        "title": "User Directory",
        "loading": "Loading users...",
        "error": "Failed to load users."
      }
    },
  },
  ka: {
    translation: {
      "home": {
        "title": "მოგესალმებით ჩვენს React SPA-ს!",
        "description": "ეს არის თანამედროვე ერთგვერდიანი ვებაპლიკაცია, რომელიც შექმნილია React-ით და მოიცავს თემებს, მრავალენოვნობასა და API-ს ინტეგრაციას."
      },
      "about": {
        "title": "ჩვენს შესახებ",
        "description": "ჩვენ ვქმნით თანამედროვე ვებ აპლიკაციებს ხარისხიანი კოდით და შესანიშნავი UX-ით.",
        "visits": "ამ გვერდს ეწვვი {{count}} ჯერ ამ სესიაში."
      },
      "users": {
        "title": "მომხმარებლების დირექტორია",
        "loading": "მომხმარებლების ჩატვირთვა...",
        "error": "მოხდა შეცდომა მომხმარებლების ჩატვირთვისას."
      }
    }
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

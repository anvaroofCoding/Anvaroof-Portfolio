import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import ar from './locales/ar/translation.json'
import en from './locales/en/translation.json'
import kz from './locales/kz/translation.json'
import ru from './locales/ru/translation.json'
import uz from './locales/uz/translation.json'

const savedLang = localStorage.getItem('lang') || 'uz'
i18n.use(initReactI18next).init({
	resources: {
		uz: { translation: uz },
		en: { translation: en },
		ru: { translation: ru },
		kz: { translation: kz },
		ar: { translation: ar },
	},
	lng: savedLang,
	fallbackLng: 'en',
	interpolation: {
		escapeValue: false,
	},
})

export default i18n

import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import moment from 'moment';

i18n.use(XHR).use(LanguageDetector).init({
    fallbackLng: 'en',
    backend: { loadPath: './locales/{{lng}}/{{ns}}.json' },
    // have a common namespace used around the full app
    ns: ['common', 'errors'],
    defaultNS: 'common',
    whitelist: ['en', 'fr'],
    debug: false,
    interpolation: {
        escapeValue: false, // not needed for react!!
        formatSeparator: ',',
        format(value, format) {
            if (format === 'uppercase') {
                return value.toUpperCase();
            }
            return value;
        },
    },
});

// catch the event and make changes accordingly
i18n.on('languageChanged', (lng) => {
    moment.locale(lng);
});

export default i18n;

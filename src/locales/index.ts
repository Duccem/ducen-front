import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

function loadLocaleMessages() {
    const locales = require.context("./", true, /[A-Za-z0-9-_,\s]+\.json$/i);
    const messages: any = {};
    locales.keys().forEach(key => {
        const matched = key.match(/([A-Za-z0-9-_]+)\./i);
        if (matched && matched.length > 1) {
            const locale = matched[1];
            messages[locale] = locales(key);
        }
    });
    return messages;
}

export default new VueI18n({
    locale: process.env.LOCALE || "en",
    fallbackLocale: process.env.FALLBACK_LOCALE || "en",
    messages: loadLocaleMessages()
});

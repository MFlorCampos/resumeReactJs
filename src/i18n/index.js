import ES from './ES.json';
import US from './US.json';

const lang = {
  es: {...ES},
  us: {...US},
}

const i18n = (locale, key) => {
  if (lang[locale] === undefined || lang[locale][key] === undefined) {
    console.error(`I18N ERROR: Couldnt get : ${locale}, ${key}`)

    if (!lang.us[key]) {
      return '';
    }

    return lang.us[key];
  }
  return { __html: lang[locale][key] };
};

export default i18n;

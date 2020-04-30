import geoip from 'geoip-lite';
import fs from 'fs';

export function i18n(locale) {
  const data = fs.readFileSync(`./locales/${locale}.json`);
  return JSON.parse(data);
}

export function currentLocale(req) {
  return localeByIp(req.ip);
}

function localeByIp(ip) {
  const rusCountries = ['RU', 'KZ', 'BY', 'UA'];

  const geo = geoip.lookup(ip);

  if(geo === null) return 'en';

  if(rusCountries.includes(geo.country)) {
    return 'ru';
  } else {
    return 'en';
  }
}
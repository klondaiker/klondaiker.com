import geoip from 'geoip-lite';
import fs from 'fs';

export function i18n(req, res, next){
  const locale = currentLocale(req);
  const data = fs.readFileSync(`./locales/${locale}.json`);
  res.locals.i18n = JSON.parse(data);

  next();
}

function currentLocale(req) {
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
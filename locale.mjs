import geoip from 'geoip-lite';

export default function locale(req, res, next) {
  const lang = req.acceptsLanguages('ru','en');

  if(lang) {
    res.locals.locale = lang;
  } else {
    res.locals.locale = localeByIp(req.ip);
  }

  next();
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
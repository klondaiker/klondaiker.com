import fs from 'fs';

export default function i18n(req, res, next){
  const locale = res.locals.locale;
  const data = fs.readFileSync(`./locales/${locale}.json`);
  res.locals.i18n = JSON.parse(data);

  next();
}

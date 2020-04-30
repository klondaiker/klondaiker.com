import express from 'express';
import { i18n, currentLocale } from './helpers.mjs'

var app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function (req, res) {
  const locale = currentLocale(req);

  res.render('index', { i18n: i18n(locale) });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

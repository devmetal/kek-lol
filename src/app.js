const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const upload = require('./upload');
const cv = require('./cv');

const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname);

app.use(session({
  saveUninitialized: true,
  resave: false,
  secret: 'foo',
  cookie: {
    maxAge: 60000
  }
}));
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.all('/', (req, res) => {
  res.redirect('/upload');
});

app.use('/upload', upload);
app.use('/cv', cv);

// Error handler middleware
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  // eslint-disable-next-line no-console
  console.log(err.stack);
  res.status(500).send(err.stack);
});

module.exports = app;
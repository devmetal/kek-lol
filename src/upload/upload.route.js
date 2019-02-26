const { Router } = require('express');

const route = new Router();

route.get('/', (req, res) => {
  req.session.user = null;
  res.render('upload/upload.view.pug');
});

route.post('/', (req, res) => {
  req.session.user = { ...req.body };
  res.redirect('/cv');
});

module.exports = route;

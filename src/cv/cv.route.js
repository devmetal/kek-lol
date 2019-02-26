const { Router } = require('express');

const route = new Router();

route.get('/', (req, res) => {
  const { user } = req.session; 

  if (!user) {
    return res.redirect('/upload');
  }

  res.render('cv/cv.view.pug', { ...user });
});

module.exports = route;

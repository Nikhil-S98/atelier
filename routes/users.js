const express = require('express');
const router = express.Router();
const User = require('../models/user');
const helpers = require('./helpers');

router.get('/login', async (req, res) => {
  if (helpers.isLoggedIn(req, res)) {
    return;
  }
  res.render('users/login', { title: 'Atelier || Admin Login' });
});

router.post('/login', async (req, res) => {
  if (helpers.isLoggedIn(req, res)) {
    return;
  }
  
  const user = await User.login(req.body);
  
  if (user) {
    req.session.currentUser = user;
    req.session.flash = {
      type: 'success',
      intro: 'Success!',
      message: 'You are now logged in as admin',
    };
    res.redirect(303, '/products');
  } else {
    res.render('users/login', {
      title: 'Atelier || Admin Login',
      flash: {
        type: 'danger',
        intro: 'Error!',
        message: 'Invalid username or password'
      }
    });
  }
});

router.post('/logout', async (req, res) => {
  delete req.session.currentUser;
  req.session.flash = {
    type: 'info',
    intro: 'Logged out!',
    message: 'You have been successfully logged out',
  };
  res.redirect(303, '/');
});

module.exports = router;
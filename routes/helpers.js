exports.isLoggedIn = (req, res) => {
  if (req.session.currentUser) {
    req.session.flash = {
      type: 'info',
      intro: 'Error!',
      message: 'You are already logged in',
    };
    res.redirect(303, '/');
    return true;
  }
  return false;
}

exports.isNotLoggedIn = (req, res) => {
  if (! req.session.currentUser) {
    req.session.flash = {
      type: 'info',
      intro: 'Error!',
      message: 'You are not logged in yet',
    };
    res.redirect(303, '/');
    return true;
  }
  return false;
}

// add requireAuth for protected routes
exports.requireAuth = (req, res, next) => {
  if (req.session && req.session.currentUser) {
    return next();
  } else {
    req.session.flash = {
      type: 'danger',
      intro: 'Access Denied!',
      message: 'Admin access required',
    };
    res.redirect(303, '/users/login');
  }
}
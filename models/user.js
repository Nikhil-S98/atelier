const db = require('../db');

// hardcoded admin credentials
const ADMIN_USER = 'atelier_admin';
const ADMIN_PASSWORD = 'atelier';

exports.login = async (login) => {
  if (login.email === ADMIN_USER && login.password === ADMIN_PASSWORD) {
    return {
      id: 1, 
      email: ADMIN_USER,
      name: 'Admin',
      isAdmin: true
    };
  }
  return null;
}
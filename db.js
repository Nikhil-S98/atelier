const _ = require('lodash')
const { credentials } = require('./config')

const pg = require('pg');
const connectionString = credentials.postgres.connectionString;
var pool;

module.exports = {
    getPool: () => {
      if (pool) return pool; // if it is already there, grab it here
      pool = new pg.Pool({connectionString});
      return pool;
    }
};

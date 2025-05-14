const _ = require('lodash')
const { credentials } = require('./config')

const pg = require('pg');
let connectionString;

if (process.env.DATABASE_URL) {
  connectionString = process.env.DATABASE_URL;
} else {
  connectionString = credentials.postgres.connectionString;
}

var pool;

module.exports = {
    getPool: () => {
      if (pool) return pool;
      
      const poolConfig = {
        connectionString: connectionString
      };
      
      if (process.env.NODE_ENV === 'production') {
        poolConfig.ssl = { rejectUnauthorized: false };
      }
      
      pool = new pg.Pool(poolConfig);
      return pool;
    }
};
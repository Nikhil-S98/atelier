module.exports = {
  "cookieSecret": process.env.COOKIE_SECRET || process.env.COOKIESECRET,
  "postgres": {
    "connectionString": process.env.DATABASE_URL || process.env.DBCONNECTIONSTRING
  }
}
module.exports = {
    "cookieSecret": process.env.COOKIESECRET || "MysuperSecretCookieSecret",
    "postgres": {
      "connectionString": process.env.DBCONNECTIONSTRING || "postgresql://postgres:mypostgresql@localhost:5432/atelier_db"
    }
  }
require("dotenv").config();

module.exports = {
  development: {
    name: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,  
    host: process.env.DB_HOST,
    dialect: "mysql"
  },
  test: {
    name: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "mysql"
  },
  production: {
    name: process.env.DB_USER,    
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "mysql"
  }
}

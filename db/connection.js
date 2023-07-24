const { Sequelize } = require('sequelize');
const isProduction = process.env.PORT;
let sequelize;

if (isProduction) {
  sequelize = new Sequelize(process.env.JAWSDB_URL, {
    dialect: 'mysql'
  });
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
  });
}


module.exports = sequelize;

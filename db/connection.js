const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mvc_tech_blog', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
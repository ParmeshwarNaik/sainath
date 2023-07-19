const env = process.env.NODE_ENV || 'development'
const config = require('../configs/db.config')
const Sequelize = require('sequelize')

/**
 * Creating the db connection
 */

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: 'mysql',
 
})
const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize
db.user = require('./user.model')(sequelize, Sequelize)

db.role = ['user', 'admin']

module.exports = db

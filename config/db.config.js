const env = require('./env.js')
const Sequelize = require ('sequelize')

const connection = new Sequelize(env.database, env.username, env.password, {
    host: env.host,
    dialect: env.dialect,
    operatorsAliases: false,
    pool: {
        max: env.max,
        min: env.pool.min,
        acquire: env.pool.acquire,
        idle: env.pool.idle
      }
})

//uses the env.js imported file to make connection


connection.sync()
.then(()=>console.log('database has been synced'))
.catch((err)=>console.log('error creating database'))

//creates the connection to the database

const db = {}
// stores all the db.objects in one object and export it

db.Sequelize = Sequelize
db.connection = connection

db.event = require ('../models/event.model.js')(connection, Sequelize);
db.product = require ('../models/product.model.js')(connection, Sequelize);
db.user = require ('../models/user.model.js')(connection,Sequelize);
db.order = require ('../models/order.model.js')(connection, Sequelize);
db.sponsor = require ('../models/sponsor.model.js')(connection, Sequelize);
// import project models here

db.event.belongsToMany(db.user, { as: 'Participant', through: 'event_participants', foreignKey: 'eventId', otherKey: 'userId'});
db.user.belongsToMany(db.event, { as: 'Event', through: 'event_participants', foreignKey: 'userId', otherKey: 'eventId'});
// Event Participant table for events and users

db.product.belongsToMany(db.order, { as: 'Customer Order', through: 'order_items', foreignKey: 'productId', otherKey: 'orderId'});
db.order.belongsToMany(db.product, { as: 'Item', through: 'order_items', foreignKey: 'orderId', otherKey: 'productId'});
// Order Contents table for products and orders

db.event.belongsToMany(db.sponsor, { as: 'Event Sponsor', through: 'event_sponsor', foreignKey: 'eventId', otherKey: 'sponsorId'});
db.sponsor.belongsToMany(db.event, { as: 'Sponsored Event', through: 'event_sponsor', foreignKey: 'sponsorId', otherKey: 'orderId'});
//
db.event.hasMany(db.sponsor, {foreignKey: 'event_id', sourceKey: 'id'});
db.sponsor.belongsTo(db.event, {foreignKey: 'event_id', targetKey: 'id'});
// Add event_id column for sponsors many to many

db.event.hasMany(db.product, {foreignKey: 'event_id', sourceKey: 'id'});
db.product.belongsTo(db.event, {foreignKey: 'event_id', targetKey: 'id'});
// Add event_id column for products

db.user.hasMany(db.order, {foreignKey: 'user_id', sourceKey: 'id'});
db.order.belongsTo(db.user, {foreignKey: 'user_id', targetKey: 'id'});
// Add user_id column for orders

db.user.hasMany(db.event, {foreignKey: 'host_id', sourceKey: 'id'});
db.event.belongsTo(db.user, {foreignKey: 'host_id', targetKey: 'id'});
// Add host_id column for products

// Set the relationship between the models here

module.exports = db;
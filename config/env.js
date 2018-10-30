const env = {
    database: 'hooked_db',
    username: 'root',
    password: 'root',
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    secret: 'Hooked_Team2018'
}
module.exports = env;
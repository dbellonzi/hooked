module.exports = (connection, Sequelize) =>{
    const Events = connection.define('event', {
        title: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        description:{
            type: Sequelize.STRING
        },
        event_photo:{
            type: Sequelize.BLOB,
        },
        location:{
            type: Sequelize.STRING,
        },
        time:{
            type: Sequelize.TIME
        },
        date:{
            type: Sequelize.DATE
        },
        details:{
            type: Sequelize.STRING
        },
        map_photo:{
            type: Sequelize.BLOB
        }
    })
    return Events;
}
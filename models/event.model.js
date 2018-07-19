module.exports = (connection, Sequelize) =>{
    const Events = connection.define('event', {
        title: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        date:{
            type: Sequelize.DATE
        },
        time:{
            type: Sequelize.TIME
        },
        location:{
            type: Sequelize.STRING,
        },
        description:{
            type: Sequelize.STRING
        },
        event_photo:{
            type: Sequelize.BLOB,
        },
        map_photo:{
            type: Sequelize.BLOB
        }
    })
    return Events;
}
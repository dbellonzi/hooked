module.exports = (connection, Sequelize) =>{
    const Events = connection.define('event', {
        title: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
            validate:{
                len:[6]
            }
        },
        date:{
            type: Sequelize.DATE,
            // validate:{
            //     isAfter: Date.now().toString()
            // }
        },
        time:{
            type: Sequelize.TIME
        },
        // end time
        location:{
            type: Sequelize.STRING,
            // validate:{
            //     len:[15]
            // }
        },
        description:{
            type: Sequelize.TEXT,
            // validate:{
            //     len:[50,1000]
            // }
        },
        event_photo:{
            type: Sequelize.BLOB,
            validate:{
                //find type of file to validate. Nothing but jpeg
            }
        },
        map_photo:{
            type: Sequelize.BLOB
        }
    })
    return Events;
}
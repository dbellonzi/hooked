
module.exports = (connection, Sequelize) =>{
    const Order = connection.define('order', {
        total: {
            type: Sequelize.DECIMAL(10,2),
            validate:{
                min:0
            }
        },
        sub_total:{
            type: Sequelize.DECIMAL(10,2),
            validate:{
                min:0
            }
        },
        sales_tax:{
            type: Sequelize.DECIMAL(10,2),
            validate:{
                min:0
            }
            // check in with paypal/ square space.
        },
        status:{
            type: Sequelize.ENUM('Submitted','In Progress', 'Complete'),
        },
    })
    return Order;
}
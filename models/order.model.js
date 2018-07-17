
module.exports = (connection, Sequelize) =>{
    const Order = connection.define('order', {
        total: {
            type: Sequelize.DECIMAL(10,2),
        },
        sub_total:{
            type: Sequelize.DECIMAL(10,2)
        },
        sales_tax:{
            type: Sequelize.DECIMAL(10,2),
            allowNull: true,
        },
        status:{
            type: Sequelize.STRING,
        },
    })
    return Order;
}
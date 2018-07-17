module.exports =(connection, Sequelize) =>{
    const Product = connection.define('products',{
        product_name: {
            type: Sequelize.STRING
        },
        product_description: {
            type: Sequelize.STRING
        },
        price:{
            type:Sequelize.DECIMAL(10,2)    
        },
        size:{
            type: Sequelize.ENUM('X-Small','Small','Medium','Large','X-Large','2X-Large')
        },
        productimage: {
            type:Sequelize.BLOB
        }
    })
    return Product;
}
module.exports =(connection, Sequelize) =>{
    const Product = connection.define('products',{
        product_name: {
            type: Sequelize.STRING,
            validate:{
                len:[3,45]
            }
        },
        product_description: {
            type: Sequelize.STRING,
            validate:{
                len:[3,255]
            }
        },
        price:{
            type:Sequelize.DECIMAL(10,2),
            validate:{
                min:0
            }   
        },
        size:{
            type: Sequelize.ENUM('X-Small','Small','Medium','Large','X-Large','2X-Large')
        },
        product_image: {
            type:Sequelize.BLOB,
            validate:{
                // validate the type of file to be entered
            }
        }
    })
    return Product;
}
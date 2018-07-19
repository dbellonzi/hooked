
module.exports = (connection, Sequelize) =>{
    const User = connection.define('user', {
        first_name: {
            type: Sequelize.STRING,
            validate:{
                len:[2]
            }
        },
        last_name:{
            type: Sequelize.STRING,
            validate:{
                len:[2]
            }
        },
        email:{
            type: Sequelize.STRING,
            unique: true,
        },
        phone_number:{
            type: Sequelize.INTEGER,
            validate:{
                len:[10]
            }
        },
        user_name:{
            type: Sequelize.STRING,
            unique:true
        },
        password:{
            type: Sequelize.STRING
        },
    })
    return User;
}
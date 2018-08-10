
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
            type: Sequelize.STRING,
        },
        user_name:{
            type: Sequelize.STRING,
            unique:true
        },
        password:{
            type: Sequelize.STRING
        },
        isAdmin:{
            type: Sequelize.BOOLEAN,
            default: false,
        }
    })
    return User;
}
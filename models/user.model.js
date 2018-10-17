
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
        resetPasswordToken:{
            type: Sequelize.STRING
        },
        resetPasswordExpires:{
            type: Sequelize.DATE
        },
        isAdmin:{
            type: Sequelize.BOOLEAN,
            defaultValue: false,
        },
        isActive:{
            type: Sequelize.BOOLEAN,
            defaultValue: true
        }
        // make sure to add this field to user creation. SuperAdmin my toggle boolean so user is Active or not Active
    })
    return User;
}
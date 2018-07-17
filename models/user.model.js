
module.exports = (connection, Sequelize) =>{
    const User = connection.define('user', {
        first_tname: {
            type: Sequelize.STRING
        },
        last_name:{
            type: Sequelize.STRING
        },
        email:{
            type: Sequelize.STRING,
            unique: true,
        },
        phone_number:{
            type: Sequelize.INTEGER
        },
        username:{
            type: Sequelize.STRING
        },
        password:{
            type: Sequelize.STRING
        },
    })
    return User;
}
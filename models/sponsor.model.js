module.exports =(connection, Sequelize)=>{
    const Sponsor = connection.define('sponsor',{
            sponsor_Name:{
                type: Sequelize.CHAR(255),
            },
            sponsor_Level:{
                type: Sequelize.ENUM('featured','sponsor'),
            },
            sponsor_Link:{
                type: Sequelize.STRING,
            },
            img_Link:{
                type:Sequelize.STRING,
            },
            photo:{
                type:Sequelize.BLOB,
            }
    })
    return Sponsor;
}
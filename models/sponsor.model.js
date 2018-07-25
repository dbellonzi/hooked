module.exports =(connection, Sequelize)=>{
    const Sponsor = connection.define('sponsor',{
            sponsor_Name:{
                type: Sequelize.CHAR(255),
                validate:{
                    len:[3,255]
                }
            },
            sponsor_Level:{
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            sponsor_Link:{
                type: Sequelize.STRING,
            },
            Logo:{
                type:Sequelize.BLOB,
            }
    })
    return Sponsor;
}
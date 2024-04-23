
module.exports = (sequelize,DataTypes) =>{
    const Tels = sequelize.define("Tels",{
        telefone:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    })
    return Tels
}
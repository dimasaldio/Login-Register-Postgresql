module.exports = (sequelize, Sequelize) =>{
    const User = sequelize.define('users', {
        id : {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            foreignKey: true,
            autoIncrement: true
        },
        googleID : {
            type: Sequelize.STRING,
            allowNull: true,
        },
        name : {
            type: Sequelize.STRING,
            allowNull: false
        },
        username : {
            type: Sequelize.STRING,
            unique:true,
            allowNull: false
        },
        email : {
            type: Sequelize.STRING,
            unique:true,
            isEmail:true,
            allowNull: false
        },
        password : {
            type: Sequelize.STRING,
            allowNull: true
        }
    })
    return User
}
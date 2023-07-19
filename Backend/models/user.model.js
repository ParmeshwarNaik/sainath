
module.exports=(sequelize,Sequelize)=>{
    const User=sequelize.define("user",{
        username:{
            type:Sequelize.STRING
        },
        email:{
            type:Sequelize.STRING
        },
        name:{
            type:Sequelize.STRING
        },
        lastname:{
            type:Sequelize.STRING
        },
        address:{
            type:Sequelize.STRING
        },
        phonenumber:{
            type:Sequelize.INTEGER

        }
    })
    return User
}
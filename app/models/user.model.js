module.exports = (sequelize, Sequelize) =>{
    const User = sequelize.define("user",{
        id:{
            type: Sequelize.INTEGER,
            allowNull:false,
            unique:true,
            primaryKey:true,
            autoIncrement:true
         },
         user_name:{
             type:Sequelize.STRING,
             allowNull:false,
             unique:true,

         },
          password:{
             type:Sequelize.STRING(30),
             allowNull:false,
             unique:true,

         },
         status:{
            type: Sequelize.ENUM,
            values: ['active', 'pending', 'deleted'],
            allowNull:false,

         }
         

    })
    return User;
}
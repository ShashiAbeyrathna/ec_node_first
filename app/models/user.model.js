module.exports = (sequelize, Sequelize) =>{
    const User = sequelize.define("user",{
        id:{
            type: Sequelize.INTEGER,
            unique:true,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false,

         },
         user_name:{
             type:Sequelize.STRING,
             allowNull:false,
         },
          password:{
             type:Sequelize.STRING(255),
             allowNull:false,
         },
         status:{
            type: Sequelize.ENUM,
            values: ['active', 'inactive'],
            defaultValue: 'inactive',
            allowNull:false,

         }
         

    })
    return User;
}
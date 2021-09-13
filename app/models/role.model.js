module.exports = (sequelize, Sequelize) =>{
    const Role = sequelize.define("role",{
        id:{
            type: Sequelize.INTEGER,
            allowNull:false,
            unique:true,
            primaryKey:true,
            autoIncrement:true
         },
         role_name:{
             type:Sequelize.STRING,
             allowNull:false,
             unique:true,

         },
         status:{
            type: Sequelize.ENUM,
            values: ['active', 'pending', 'deleted']

         }
         

    })
    return Role;
}
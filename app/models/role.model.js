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
            
         },
         status:{
            type: Sequelize.ENUM,
            values: ['active', 'pending', 'deleted'],
            allowNull:false,

         }
         

    })
    return Role;
}
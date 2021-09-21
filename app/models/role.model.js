module.exports = (sequelize, Sequelize) =>{
    const Role = sequelize.define("role",{
        id:{
            type: Sequelize.INTEGER,
            unique:true,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false,
         },
         role_name:{
             type:Sequelize.STRING,
             allowNull:false,
            
         },
         status:{
            type: Sequelize.ENUM,
            values: ['active', 'inactive'],
            defaultValue: 'inactive',
            allowNull:false,
         }
         

    })
    return Role;
}
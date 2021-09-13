module.exports = (sequelize, Sequelize) =>{
    const Vehicle = sequelize.define("vehicle",{
        id:{
            type: Sequelize.INTEGER,
            allowNull:false,
            unique:true,
            primaryKey:true,
            autoIncrement:true
         },
        vehicle_type:{
             type:Sequelize.STRING,
             allowNull:false,
             

         },
         status:{
            type: Sequelize.ENUM,
            values: ['active', 'pending', 'deleted'],
            allowNull:false,

         }
         

    })
    return Vehicle;
}
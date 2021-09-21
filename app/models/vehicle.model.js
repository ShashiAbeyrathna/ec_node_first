module.exports = (sequelize, Sequelize) =>{
    const Vehicle = sequelize.define("vehicle",{
        id:{
            type: Sequelize.INTEGER,
            unique:true,
            primaryKey:true,
            autoIncrement:true.valueOf,
            allowNull:false,
         },

        vehicle_type:{
             type:Sequelize.ENUM,
             values:['Car','Van','Bus'],
             defaultValue:'Car',
             allowNull:false,              
         },
         status:{
            type: Sequelize.ENUM,
            values: ['active', 'inactive'],
            defaultValue: 'inactive',
            allowNull:false,
        }
         

    })
    return Vehicle;
}
module.exports = (sequelize, Sequelize) =>{
    const Userdetails = sequelize.define("userdetails",{
        id:{
            type: Sequelize.INTEGER,
            allowNull:false,
            unique:true,
            primaryKey:true,
            autoIncrement:true
         },
         name_en:{
             type:Sequelize.STRING,
             allowNull:false,
             unique:true,

         },
         name_si:{
            type:Sequelize.STRING,
            allowNull:false,
            unique:true,

        },
        name_ta:{
            type:Sequelize.STRING,
            allowNull:false,
            unique:true,

        },
         dob:{
            type: Sequelize.DATE,
         },
         salary:{
            type: Sequelize.DECIMAL(0,2),
         },
         special_req:{
            type: Sequelize.TEXT,
         }

         

    })
    return Userdetails;
}
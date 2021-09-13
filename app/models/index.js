const dbConfig =require("../config/db.config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER,dbConfig.PASSWORD, {
    host:dbConfig.HOST,
    dialect:dbConfig.dialect,
    operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
        
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

sequelize 
    .authenticate()
    .then(()=>{
        console.log('Connection Success');
    })

    .catch(err=>{
        console.error('Connection Success',err);
    })

    db.user = require("./user.model")(sequelize,Sequelize);
    db.role = require("./role.model")(sequelize,Sequelize);
    db.userdetails = require("./userdetails.model")(sequelize,Sequelize);
    db.vehicle = require("./vehicle.model")(sequelize,Sequelize);
    

    module.exports=db;




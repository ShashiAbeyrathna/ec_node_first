const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const db = require('./app/models');
const userRoute = require('./app/routes/user.route');
const roleRoute = require('./app/routes/role.route');
const vehicleRoute = require('./app/routes/vehicle.route');
const userdetailsRoute = require('./app/routes/userdetails.route');
const authRoute = require('./app/routes/auth.route');

app.use(cors());
app.use(express.json());
app.use(cookieParser());

db.sequelize.sync({force: false})
.then(()=> {
    console.log('Database and table creates');
});

//middleware 
const { veryfyToken } = require ('./app/middlewares/auth.middleware')

// app.get('/',(req,res)=>{
//     res.send("Welcome to my Server");
// });

app.use('/user',userRoute);
app.use('/role',roleRoute);
app.use('/userdetails',userdetailsRoute);
app.use('/vehicle',veryfyToken,vehicleRoute);
app.use('/auth',authRoute);




const PORT = 3003;

app.listen(PORT, () =>{
    console.log ('server is running on :',PORT);
});
const express = require ('express');
const cors = require ('cors');
const cookie_parser = require ('cookie-parser');
const db = require("./app/models");

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookie_parser());

db.sequelize.sync ({force:false})

.then(()=>{
    console.log('DB and table created');
})

app.get ('/',(req,res)=>{
    res.send("Welcome to my EC");

});

const PORT = 3003;

app.listen(PORT,()=>{
    console.log('server is running on $ {PORT}');
});
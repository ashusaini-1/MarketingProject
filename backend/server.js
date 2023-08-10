const app=require('./app');
const dotenv=require('dotenv');
const cors = require('cors');
const connectDatabase=require("./config/db")


app.use(cors());

///config
dotenv.config({path:"backend/config/config.env"});

connectDatabase();


app.listen(process.env.PORT,()=>{
console.log(`Server is running on this Port: ${process.env.PORT}`)


});



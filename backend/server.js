
const dotenv=require('dotenv');
const app=require('./app');
// const cors = require('cors');
const connectDatabase=require("./config/db")


// app.use(cors({
//     origin: 'http://localhost:3000', // Specify your frontend domain
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
//   }));
  

///config
dotenv.config({path:"backend/config/config.env"});

connectDatabase();


app.listen(process.env.PORT,()=>{
console.log(`Server is running on this Port: ${process.env.PORT}`)


});





const mongoose= require('mongoose');
const mongoURL='mongodb://127.0.0.1:27017/hotels'
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
const db=mongoose.connection;
// define event listners for database connections
db.on('connected',()=> {
    console.log('connected to moongodb server');
})

db.on('error',(err)=>{
    console.error('mongoDB connection error',err);
})
db.on('disconnected',()=>{
    console.log('mongodb server disconnected');
})
//export the db connection to server.js
module.exports=db;
const mongoose= require('mongoose');

mongoose.connect(process.env.MONGO_URI,{
    dbName:'ShoppingApp',
    useNewUrlParser:true,
    useUnifiedTopology:true,
  
}).then((obj)=>{
    console.log("Mongdb connected")
}).catch((err)=>{
    console.log("mongo db error", err);
})
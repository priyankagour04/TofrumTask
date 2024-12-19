// connecting mongodb database with node

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/curd-api")
.then(()=>{
    console.log('MongoDB Connected...');
})
.catch((err)=>{
console.log("MongoDB Connection error :" , err)
})
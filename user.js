const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
   name: String,
   idade:Number,
   trabalho:String,
   salario:Number 
})

module.exports=mongoose.model("User",userSchema)
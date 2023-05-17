const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
   name: String,
   idade:
   {type:Number,
    min:1
    },
   trabalho:String,
   email:{
    type:String,
    require:true,
    lowcase:true
   },
   salario:Number 
})

module.exports=mongoose.model("User",userSchema)
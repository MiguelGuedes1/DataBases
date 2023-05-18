require('dotenv').config()     // requerer o npm dotenv para acessar aos ficheiros que estao no .env

const express=require("express")
const app=express()
const mongoose=require("mongoose")

mongoose.connect(process.env.DATABASE_URL)    // conexao ao mongoose usando o URL guardado no ficheiro .env

.then(()=>console.log("Mongo db conectado correctamente"))
.catch(err=>console.error("Connection failed"))


app.listen(3009,() => console.log("Servidor iniciado na porta 3009"))  // iniciar servidor na porta 3009




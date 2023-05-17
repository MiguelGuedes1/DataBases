const mongoose = require('mongoose')
const user=require("./user")

mongoose.connect('mongodb://127.0.0.1:27017/funcionariosdb')

.then(()=>console.log("Mongo db conectado correctamente"))
.catch(err=>console.error("Connection failed"))

// metodo 1 para criar uma user para o banco de dados
funcionario1()
async function funcionario1(){
    const funcionario_1=new user({
        name: "Miguel",
        idade:32,
        trabalho:"Developer",
        salario:1500
    })
    await funcionario_1.save()
    console.log(funcionario_1)
}

funcionario2()
async function funcionario2(){
    const funcionario_2=new user({
        name: "Maria",
        idade:52,
        trabalho:"Directora",
        salario:3900
    })
    await funcionario_2.save()
    console.log(funcionario_2)
}







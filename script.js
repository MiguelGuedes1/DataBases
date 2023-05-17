const mongoose = require('mongoose')
const user=require("./user")

mongoose.connect('mongodb://127.0.0.1:27017/funcionariosdb')

.then(()=>console.log("Mongo db conectado correctamente"))
.catch(err=>console.error("Connection failed"))

// metodo 1 para criar uma user para o banco de dados

funcionario1()
async function funcionario1(){
    const funcionario1=await user.create({
        name: "Mike Guedes",
        idade:33,
        trabalho:"FullStack Dev",
        email:"teste@hotmail.com",
        salario:1300 
    })
    //funcionario1.salario=2000   // para dar update a um dado previamente criado
    //await funcionario1.save()   // para para gravar a alteraçao do update
    console.log(funcionario1)
}


// para encontrar um dado na sua base de dados
async function encontrarFuncionario() {
    const funcionario = await user.find({ name: "Mikeeee Guedes" });
    if (funcionario.length === 0) {          // Se nenhum documento for encontrado, o array será vazio, ou seja, terá um comprimento de zero
      console.log("Não existe esse dado no seu banco de dados.");
    } else {
      console.log(funcionario);
    }
  }
  
  encontrarFuncionario();
  
  






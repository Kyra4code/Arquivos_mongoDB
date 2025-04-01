const database = "BD3-AULA";

use(database);

//Fazer um GET geral em um mongoDB

// db["Livraria"].find();


//Fazer um GET com filtro em um mongoDB

// db["Livraria"].find({
//     "categoria": "Ficção Científica"    
// });

//Fazer um GET com filtro em um mongoDB com elementos que não desejo que apareçam
db["Livraria"].find({
    "categoria": "Ficção Científica"
},{
    "_id": 0,
    "codigo": 0,
    "valor": 0
});
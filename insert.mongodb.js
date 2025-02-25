const fs = require('fs');

const database = "BD3-AULA";

use(database);

const json = JSON.parse(fs.readFileSync('dados.json'));

//Exemplo de inserção de um documento na coleção Livraria
// db["Livraria"].insertOne({
//         "codigo":"1",
//         "titulo": "As Cavernas de Aço",
//         "autor": "Isaac Asimov",
//         "descricao": "As Cavernas de Aço, de Isaac Asimov, é o primeiro romance da consagrada Série dos Robôs, uma das mais populares da ficção científica. A história nasceu de um desafio: Asimov queria provar para seu editor que a ficção científica não era limitada e poderia ser incorporada a qualquer gênero literário, inclusive nos dramas policiais.",
//         "imagem":"/livros/cavernas_aco.jpg",
//         "valor": 120,
//         "categoria":"Ficção Científica"
// });

//Exemplo de inserção de vários documentos na coleção Livraria utilizando o método insertMany

db["Livraria"].insertMany([
]);
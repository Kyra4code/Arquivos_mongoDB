const database = "BD3-AULA"

use(database);

//Find com parametros 
/*$gte significa se maior que valor x e $lte significa se menor que valor y*/

// db["Livraria"].find({
//     valor: {$gte:100, $lte: 150}
// });

/* eq significa se for igual, lte significa se for menor e and já é auto explicativo*/

// db["Livraria"].find({
//     $and: [
//         {categoria: "Fantasia Heroica"},
//         {valor: {$lte: 100}}
//     ]
// })

/*Nesse caso o or tambéé auto explicativo. */

// db["Livraria"].find({
//     $or:[
//         {categoria: "Fantasia Heroica"},
//         {valor: {$lte: 100}}
//     ]
// })

/* gte significa se maior*/

// db["Livraria"].find({
//     $or:[
//         {valor:{$gt:150}},
//         {autor: /tolkien/i}
//     ]
// });


/* sort organiza os valores do find de forma crescente (1) ou de forma decrescente (-1)*/

// db["Livraria"].find({
//     autor: /tolkien/i
// }).sort({valor: -1});

/*in esolhe o objeto*/
db["Livraria"].find(
{
    autor: {$in: ["Isaac Asimov"]}
}, 
{
    _id: false,
    codigo: false,
}).sort({valor: 1})
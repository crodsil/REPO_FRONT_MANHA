const fs=require('fs');

// let texto1='abcde';
// fs.writeFileSync('./textao.txt',texto1);

// let texto2='12345';
// fs.appendFileSync('./textao.txt',texto2);

//leitura textao.txt
// let textao=fs.readFileSync('./textao.txt', 'utf-8');
// console.log(textao);

//leitura dados.json
let dadosJson=fs.readFileSync('./dados.json','utf-8');

//console.log(typeof dadosJson);

//convertendo dados.json para dadostexto
let dadosTexto= JSON.parse(dadosJson);
//console.log(dadosTexto);
//console.log(dadosTexto[1]);
//console.log(dadosTexto[1].funcionario);
console.log(dadosTexto[1].funcionario.toUpperCase());







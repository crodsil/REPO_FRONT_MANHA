//JSON - Javascript Object Notation
//padrão web
//aceito por várias linguagens
//formato: json    {"campo" : "valor"}
//objetos literais {campo: "valor" }
//json => não posso ter comentários
//json => suporta: string, num (int,flut), arrays, objetos, bool

let dadosJson='{"funcionario" : "Cristina Maçã","idade": 20, "salario" : 5850.90, "valeTransporte" : true, "filiacao" : ["Walter","Ilda"]}';
console.log(dadosJson.funcionario);


let dadosObjeto={funcionario : "Cristina Maçã",idade: 20, salario : 5850.90, valeTransporte : true, filiacao: ["Walter","Ilda"]};

console.log(dadosObjeto.funcionario);
//console.table(dadosJson);
//console.table(dadosObjeto);
// console.log(typeof dadosJson);
// console.log(typeof dadosObjeto);

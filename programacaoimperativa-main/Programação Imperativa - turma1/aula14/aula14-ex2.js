// let dadosJson='{"funcionario" : "Cristina Maçã","idade": 20, "salario" : 5850.90, "valeTransporte" : true, "filiacao" : ["Walter","Ilda"]}';
//console.log(dadosJson.funcionario);  //não funciona

//desserializar // parsing = transformar JSON em OBJETO
// let dadosConvertidos= JSON.parse(dadosJson);
// console.log(typeof dadosConvertidos);
// console.log(dadosConvertidos.funcionario.toUpperCase());


let dadosObjeto={funcionario : "Joaquim Moreira",idade: 50, salario : 5850.90, valeTransporte : false, filiacao: ["Miguel","Rosa"]};
let dadosObjeto1={funcionario : "Miguel Pereira",idade: 40, salario : 15850.90, valeTransporte : false, filiacao: ["Maria","Jose"]};

let dadosJuntos=[dadosObjeto,dadosObjeto1];
console.log(dadosJuntos)

// //serializar transformar um objeto em JSON
let objetoConvertidoJson=JSON.stringify(dadosJuntos);
console.log(objetoConvertidoJson);

//gravar o Json em um arquivo
//file system = fs
const fs=require('fs');
//síncrono - se arq. existir ele será SOBRESCRITO
fs.writeFileSync('./dados.json',objetoConvertidoJson);

// //para acrescentar ao arquivo existente
// fs.appendFileSync('./aula9/dados.json',objetoConvertidoJson)
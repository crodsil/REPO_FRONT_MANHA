//promises = promessa
//síncrona
const fs=require('fs');
// ...sync =síncrono
//let arquivo=fs.readFileSync('./letras.txt','utf-8');
// console.log(arquivo);
// console.log(1);
// console.log(2);
// console.log(3);


//assíncrono = lembrar exemplo das panelas
// console.log(1);           //..callback..
// fs.readFile('./letras.txt',(err,contents)=>{
//     console.log(4);
//     console.log(String(contents));
//     console.log(err);
// })
// console.log(2);
// console.log(3);

//exemplo de código Hadouken
console.log(1);
fs.readFile('./letras.txt',(err,contents)=>{
    fs.readFile('./nomes.txt',(err1,contents1)=>{
        fs.readFile('./salarios.txt',(err2,contents2)=>{
            console.log(4)
            console.log('Letras:',String(contents));
            console.log('Erro letras:' ,err);
            console.log('Nomes:',String(contents1));
            console.log('Erro nomes:' ,err1);
            console.log('Salários:',String(contents2));
            console.log('Erro salários:' ,err2);
        })
    })
})
console.log(2);
console.log(3);
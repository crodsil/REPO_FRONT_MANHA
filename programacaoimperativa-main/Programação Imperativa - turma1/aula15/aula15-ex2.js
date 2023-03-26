//promises é um OBJETO (método CONSTRUTOR-new )que representa o sucesso ou a falha de uma operação ASSÍNCRONA
//estados das promises:  
// pending: Estado inicial (pendente), ainda não foi realizada, nem rejeitada.
// fulfilled: Houve sucesso na operação, a Promise está realizada.
// rejected: Houve rejeição na operação da Promise.
// settled: A Promise foi realizada ou rejeitada. (finalizada)
//promise é uma função

//sintaxe
//declarando
const fs=require('fs');
console.log(1);
const lerArquivo= file => new Promise((resolve,reject)=>{
     fs.readFile(file,(err,contents)=>{
         if (err){
             reject(err);
         }
         else {
             resolve(contents);
         }
     })
})

//leitura assíncrona
//consumindo a promise          ..argumento
lerArquivo('./letras.txt').then(contents=>{
    console.log(String(contents));
    lerArquivo('./nomes.txt').then(contents=>{
        console.log(String(contents));
        lerArquivo('./salarios.txt').then(contents=>
            {
                console.log(String(contents));
            })
    })
})

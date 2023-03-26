//promise 1
//frete Jadlog
let p1 = new Promise(function(resolve,reject){
    setTimeout(resolve,500,'um');
})

//promise 2
//frete Sedex
let p2= new Promise (function(resolve,reject){
    setTimeout(resolve,2000,'dois');
})

//consumindo as promises
//Promise.all retorna SOMENTE QUANDO OS DOIS TERMINAREM
Promise.all([p1,p2]).then (function(value){
    console.log("Executando juntos: ",value)
})

Promise.race([p1,p2]).then (function(value){
    console.log("O mais rápido foi: ",value)
})

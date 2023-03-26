//promise 1
//variável para forçar o erro em f1
let falhou=false;
function f1(x) {
    return new Promise((resolve,reject)=>
        {
            if (!falhou) {
            setTimeout(_=> resolve(77+x),1000);
        }
        else {
            reject ('f1 deu erro!');
        }
        })
}

//promise 2
function f2(x) {
    return new Promise(resolve=>
        {
            setTimeout(_=> resolve(22+x),1000);
        })
}

//promise 3
function f3(x) {
    return new Promise(resolve=>
        {
            setTimeout(_=> resolve(14*x),1000);
        })
}

//consumir utilizando async e await => estrutura vai ficar mais simples
//async =função assíncrona
//await = esperar
//não podemos utilizar .then (try) .catch (catch)

async function executar(num) {
    try {
        let numero = await f1(num);
        console.log(numero);
        console.log('Olá');
        numero = await f2(numero)
        console.log(numero);
        console.log('Javascript');
        numero = await f3(numero);
        console.log('Resultado: ',numero);
        console.log('Variável num não sofreu alteração: ',num);
    }
    catch(err) {
        console.log(err);
    }
}


executar(10);
console.log("bla bla bla");
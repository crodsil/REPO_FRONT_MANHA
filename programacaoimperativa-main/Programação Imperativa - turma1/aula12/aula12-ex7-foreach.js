let cores = ['azul','vermelho','verde','lilás'];
console.log(cores);  //imprime como array

let teste=cores.forEach(el=> {
    console.log(el);
    return el;
}
)
console.log(teste); //undefined pois não retorna nada
console.log(cores)
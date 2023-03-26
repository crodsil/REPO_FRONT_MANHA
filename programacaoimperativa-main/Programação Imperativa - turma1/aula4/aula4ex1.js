
function somar(a, b) {
    return a+b;
}
function subtrair(a,b) {
    return a-b;
}
function dividir (a,b){
    let resposta = b==0 ? 'Impossível dividir por zero'  : a/b;
    return resposta;
    // if (b==0) {
    //     return 'Impossível dividir por zero!';
    // }
    // else {
    // return a/b;}
}
function multiplicar (a,b){
    return a*b;
}

console.log(dividir(2,0));
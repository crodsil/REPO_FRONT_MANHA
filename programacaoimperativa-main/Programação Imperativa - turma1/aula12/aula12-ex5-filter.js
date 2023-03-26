const numeros= [1,2,3,4,5,6,7,8,9,19];
let murilo=[1,2,3,4,5,6,7,8,9,19];
const numerosPares=murilo.filter(el=>el%2==0);

const numerosImpares=numeros.filter(el=>el%2!=0);
//múltiplos de 3
const mult3=numeros.filter(murilo=>murilo%3==0);

console.log(numerosPares);
console.log(numerosImpares);
console.log(mult3);
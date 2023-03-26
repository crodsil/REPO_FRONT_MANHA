let frutasVermelhas=['Morango','Cereja','Melancia'];
let frutasAmarelas=['Melão','Damasco','Pêssego'];
let frutasVerdes=['Limão','Abacate'];

// ... spread operator - operador de propagação, de espalhamento com arrays
let frutas=[...frutasVermelhas,...frutasAmarelas,...frutasVerdes];

console.log(frutas);
let frutas1=[frutasVermelhas,frutasAmarelas,frutasVerdes];
console.log(frutas1);
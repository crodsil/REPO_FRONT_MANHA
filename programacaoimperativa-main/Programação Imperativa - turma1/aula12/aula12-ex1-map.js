let letras = ['a','b','c','d'];

//função declarativa
// let letrasMai= letras.map(function maiuscula(el){
//     return el.toUpperCase();
// });


//arrow function
let letrasMai=letras.map(maiuscula=el=>el.toUpperCase());

console.log(letras);
console.log(letrasMai);


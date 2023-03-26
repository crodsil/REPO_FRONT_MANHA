/*1) Criar a função calcularIndiceDeMassaCorporal que receba a altura em centímetros e o peso em quilogramas e calcule o IMC do usuário (peso / altura2).
Em seguida, execute a função testando diferentes valores. */

function calcularIndiceDeMassaCorporal(peso, altura) 
{
    //altura deve ser em m - converter
    let alturaEmMetros= altura/100;
    return (peso/Math.pow(alturaEmMetros,2)).toFixed(2);
    //return peso/alturaEmMetros*alturaEmMetros;
    //return peso/alturaEmMetros**2;
}

//invocando a função
console.log('IMC= '+calcularIndiceDeMassaCorporal(55,168));
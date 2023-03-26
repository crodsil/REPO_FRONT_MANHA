/*9)	Elabore um programa que armazene dois números e a operação que ele deseja executar (Operações: soma, subtração, divisão, multiplicação). Execute a operação desejada e imprima na tela.  */
let num1=5;
let num2=2;
let operacao='divisão';
let resultado;

switch (operacao) {
    case 'soma' : resultado=num1+num2;
    break;
    case 'subtração' : resultado=num1-num2;
    break;
    case 'multiplicação' : resultado=num1*num2;
    break;
    case 'divisão' : 
        if (num2!=0)
            { resultado=num1/num2;}
        else
            { resultado='Impossível dividir por zero!';}
    break;
    default: resultado='Operação inválida!';
}
console.log('Resultado = ',resultado);
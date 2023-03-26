let soma;
let resultado;
//function expression
let total = function (n1,n2)  //função anônima - function e arg.
{
    soma= n1*n2;
    soma=Math.sqrt(soma);
    return soma;
}

resultado=total(100,8);
console.log(resultado);

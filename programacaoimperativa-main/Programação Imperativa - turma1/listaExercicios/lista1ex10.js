/* 10)	Uma loja fornece 10% de desconto para funcionários e 5% de desconto para clientes vips. Faça um programa que calcule o valor total a ser pago por uma pessoa. O programa deverá armazenar o valor total da compra efetuada e um código que identifique se o comprador é um cliente comum (c), funcionário (f) ou vip (v). */
let valorTotal=550;
let codigo='v';
let desconto;

switch (codigo){
    case 'v': desconto=5/100;
    break;
    case 'f': desconto=10/100;
    break;
    default: desconto=0;
}

let totalComDesconto= valorTotal - valorTotal*desconto;
console.log('Valor total R$',valorTotal.toFixed(2),'\n','Valor com desconto R$',totalComDesconto.toFixed(2));
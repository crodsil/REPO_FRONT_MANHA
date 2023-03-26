/*3)	As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem compradas pelo menos 12. Escreva um programa que, de acordo com o número de maçãs compradas, calcule e escreva o custo total da compra.  */
let quantidade = 100;
let preco;
let total;
if (quantidade<12)
    {
        preco=1.3;
    }
else 
    {  
        preco =1; 
    }
total = preco * quantidade;
//método toFixed(2) serve para formatar com 2 casas decimais
console.log("Total gasto com as maçãs R$",total.toFixed(2));

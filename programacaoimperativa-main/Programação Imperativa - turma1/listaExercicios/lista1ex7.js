/* 7)	Faça um programa onde deverão ser armazenados em variáveis as seguintes informações: número da conta do cliente, saldo, débito e crédito. Após, calcular e mostrar o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'. */
let numConta='1234';
let saldo=100;
let debito=2000;
let credito=500;
let saldoAtual = saldo - debito + credito;

let resposta= saldoAtual>=0 ? "Saldo Positivo" : "Saldo Negativo";
console.log(resposta," --> saldo = R$",saldoAtual.toFixed(2));
/*4)	Armazenar em variáveis de memória as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética e mostrar uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o aluno é aprovado). Mostrar também a média calculada.   */
let nota1=3;
let nota2=1;
let media=(nota1+nota2)/2;

if (media>=6)
    {console.log("Aluno aprovado com média ",media.toFixed(1)); }
else
    {console.log("Aluno reprovado com média ",media.toFixed(1)); }
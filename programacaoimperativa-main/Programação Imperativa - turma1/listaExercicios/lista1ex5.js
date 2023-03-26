/* 5)	Armazenar o ano de nascimento de uma pessoa.  Mostrar uma mensagem que diga se ela poderá ou não votar no ano 2022 (não é necessário considerar o mês em que a pessoa nasceu). Lembre-se que para votar a pessoa deve ter 16 anos ou mais. */
let nascimento= 2010;
let idade=2022-nascimento;
let resposta= idade>=16 ? "Pode votar" : "Não pode votar";
console.log(resposta);
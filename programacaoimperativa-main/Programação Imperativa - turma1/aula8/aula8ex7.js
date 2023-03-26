//objeto cachorro
let cachorro={nome: 'Mackenzie',
    idade: 6,
    sexo: 'fêmea',
    cor: 'cinza',
    comportamento: function() {return 'A '+this.nome+' é muito brincalhona'}};

let pessoa= {
        nomeCompleto: 'José Henrique dos Santos',
        sexo: 'm',
        cpf: '047.333.777-99',   
        nascimento: '16/08/1963',
        cachorro: {...cachorro},
        renda: 4000.00}
 
    //console.log(cachorro);

console.log(pessoa)
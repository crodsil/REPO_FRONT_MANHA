//desestruturando um objeto
let pessoa= {
    nomeCompleto: 'José Henrique dos Santos',
    sexo: 'm',
    cpf: '047.333.777-99',   
    nascimento: '16/08/1963',
    renda: 4000.00}
    
    let {nomeCompleto:nome,renda}=pessoa;

    console.log(nome);
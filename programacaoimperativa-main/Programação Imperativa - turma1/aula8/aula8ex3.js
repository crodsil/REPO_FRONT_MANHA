//função construtora - faz a planta do objeto
function Pessoa(nomeCompleto, sexo, cpf, nascimento, renda, hobbies) 
{
    this.nomeCompleto=nomeCompleto;
    this.sexo=sexo;
    this.cpf=cpf;
    this.nascimento=nascimento;
    this.renda=renda;
    this.hobbies=hobbies;
    this.verificarTipoConta= function() {
        if (this.renda>=5000.00) 
        {
            return 'O cliente '+ this.nomeCompleto+', cuja renda é '+this.renda+', terá uma conta especial';            
        }
        else
        {
            return 'O cliente '+ this.nomeCompleto+', cuja renda é '+this.renda+', terá uma conta comum'; 
        }
    }
}

//utilizando a planta, a fôrma
//new
let pessoa=new Pessoa('Chris','m','001.111.222-33','21/09/80',20000,['Ler','Nadar','Anime']);
let pessoa1=new Pessoa('Maria','f','991.111.222-33','30/09/80',20000,['Correr','Ler']);

// console.log(pessoa.nomeCompleto);
// console.log(pessoa1.nomeCompleto);
// console.log(pessoa1.verificarTipoConta());
console.log(pessoa);

   
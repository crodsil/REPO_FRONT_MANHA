//construtor = molde 
function Conta(conta, saldo, nome)
{
    //propriedades
    this.conta=conta;  //   Conta.conta=conta
    this.saldo=saldo;
    this.nome=nome;
    //métodos
    this.deposito= function(valorDeposito){
        //calcular o novo saldo
        this.saldo=this.saldo+valorDeposito;
        console.log(this.nome," foi efetuado um DEPÓSITO e o novo saldo é",this.saldo);
    }
    this.saque= function(valorSaque){
        //verificar se eu tenho dinheiro suficiente para o saque
        if (valorSaque<=Conta.saldo) {
         
            this.saldo=this.saldo-valorSaque;
            console.log(this.nome," foi efetuado um SAQUE e o novo saldo é",this.saldo);
        }
        else{
            console.log('Saldo insuficiente!! Vc pode sacar até',this.saldo);
        }
    }
}

//----INSTANCIAR = CRIAR CÓPIAS DO OBJETO NA MEMÓRIA
let contaChris= new Conta('111',5000,'Chris');
console.log(contaChris.saldo);
contaChris.deposito(7000);
contaChris.saque(200);

let contaMurilo= new Conta('123',7800,'Murilo');
contaMurilo.saque(1000);
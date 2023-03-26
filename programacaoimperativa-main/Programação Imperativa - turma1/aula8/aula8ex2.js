//pensando em um sistema bancário
let pessoa= {
    nomeCompleto: 'José Henrique dos Santos',
    sexo: 'm',
    cpf: '047.333.777-99',   
    nascimento: '16/08/1963',
    renda: 4000.00,
    verificarTipoConta: function() {
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
//----------------------------------------------------------
  let pessoa1= {
    nomeCompleto: 'Maria dos Santos',
    sexo: 'f',
    cpf: '666.333.123-99',   
    nascimento: '17/10/1960',
    renda: 14000.00,
    verificarTipoConta: function() {
        if (this.renda>=5000.00) 
        {
            return 'O cliente '+ this.nomeCompleto+', cuja renda é R$'+this.renda.toFixed(2)+', terá uma conta especial';            
        }
        else
        {
            return 'O cliente '+ this.nomeCompleto+', cuja renda é R$'+this.renda.toFixed(2)+', terá uma conta comum'; 
        }
    }
  }

  console.log(pessoa.nomeCompleto,', renda: R$',pessoa.renda.toFixed(2),'\n',pessoa1.nomeCompleto,', renda: R$',pessoa1.renda.toFixed(2));



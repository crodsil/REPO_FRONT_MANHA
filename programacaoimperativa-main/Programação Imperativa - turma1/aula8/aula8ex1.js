//aula8 - objetos literais
//observação do mundo real 
//características / ações
//carro - cor, placa, largura, altura, movimentar(ação - métodos),
//ano, modelo
let carro={ 
    cor: 'preta', //cor=propriedade o caract preta=valor da propr
    placa: 'DRU2258',
    largura: 2,
    altura: 1.5,
    flex: true,
    movimentar: function() {
        return 'O carro está andando!';
    }
}
console.log(carro);
console.log(carro.cor);
console.log(carro.movimentar());
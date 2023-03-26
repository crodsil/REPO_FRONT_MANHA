//juntando tudo 
const tabuada = require('./aula10-tabuada');
const operacao = require('./aula10-operacoes');


function calcula(a, b, acao) {
    if (typeof a == ' number' && typeof b == 'number') {
        switch (acao) {
            case '+': console.log(operacao.soma(a, b));
                break;
            case '-': console.log(operacao.subtracao(a, b));
                break;
            case '/': console.log(operacao.divisao(a, b));
                break;
            case '*': console.log(operacao.multiplicacao(a, b));
                break;
            case 't': tabuada(a);
                break;
            default: console.log('Operação inválida!');
                break;
        }
    }
    else { console.log('Digite números válidos!!!!!'); }
}

//calcula(9, '5', '+');    //deu 95????
//calcula(9,5,'+');
 //calcula('9','5','+');
// calcula('9',null,'+');
// calcula(undefined,null,'+');
// calcula(9,'5','-');
// calcula('9','5','-');
// calcula('9',null,'-');
// calcula(undefined,null,'-');
// calcula(9,'5','*');
// calcula('9','5','*');
calcula(1,3,'//');
//calcula(undefined,null,'*');
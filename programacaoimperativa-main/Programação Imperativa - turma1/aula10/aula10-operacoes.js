module.exports = {
    //propriedade : valor,
    //arrow function =>
    soma: (a, b) =>a + b,
    subtracao: (a, b) => a - b,
    multiplicacao: (a, b) => a * b,
    divisao: (a, b) => {
        if (b != 0) {
            return a / b;
        }
        return 'Impossível dividir por 0!';
    }
}
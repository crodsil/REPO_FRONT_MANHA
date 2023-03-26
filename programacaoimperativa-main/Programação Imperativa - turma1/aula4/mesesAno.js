let mes=5
//respostas possíveis: 13 - 1 = nº ifs= 12
let mesExtenso;
if (mes == 1) {
    mesExtenso = 'Janeiro';
}else if (mes == 2) {
    mesExtenso = 'Fevereiro';
}else if (mes == 3) {
    mesExtenso = 'Março';
} else if (mes == 4) {
    mesExtenso = 'Abril';
} else if (mes == 5) {
    mesExtenso = 'Maio';
} else if (mes == 6) {
    mesExtenso = 'Junho';
} else if (mes == 7) {
    mesExtenso = 'Julho';
} else if (mes == 8) {
    mesExtenso = 'Agosto';
} else if (mes == 9) {
    mesExtenso = 'Setembro';
} else if (mes == 10) {
    mesExtenso = 'Outubro';
} else if (mes == 11) {
    mesExtenso = 'Novembro';
}else if (mes==12) {
    mesExtenso = 'Dezembro';}
else {
    mesExtenso="Mês inválido";
}

console.log(mesExtenso);
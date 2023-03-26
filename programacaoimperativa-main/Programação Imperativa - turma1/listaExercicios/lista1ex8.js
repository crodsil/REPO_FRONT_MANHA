/*8)	Armazenar o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE.  */

let time1='São Paulo';
let golsTime1= 3;
let time2='Flamengo';
let golsTime2= 3;

if (golsTime1>golsTime2) 
    {
        console.log("Time vencedor: ",time1);
    }
else if (golsTime1<golsTime2) 
    {
        console.log("Time vencedor: ",time2);
    }
else
    {
        console.log("Empate");
    }
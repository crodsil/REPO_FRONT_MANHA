let alunos=['Juan', 'Alexandre', 'Alan','Juan'];
 //           0         1          2       3

//vamos procurar o Alan
//console.log(alunos.indexOf('Alan'));
//console.log(alunos.indexOf('Silvano'));  //-1 não encontrado

console.log(alunos.lastIndexOf('Juan'));
if (alunos.lastIndexOf('Juan')!=-1) 
{
    console.log('Encontrado na posição',alunos.lastIndexOf('Juan'));
}
else
{ 
    console.log("Não encontrado");
}


if(tipo=='/') {
    if (n2==0) {
        return 'impossível'
    }
    else 
    {
    return n1/n2  
   }
   //continua o restante do programa.
}
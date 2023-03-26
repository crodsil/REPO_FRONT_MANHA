//conceito de callback = função é passada como parâmetro para outra função
let texto='William';
let funcao=_=>console.log(texto, 'Olá mundo!!!!!');

//esta função será passada como parâmetro para outra função
//milissegundos 1seg=1000 milissegundos

    setTimeout(funcao,5000);   //não colocar ()
    //setInterval(funcao,3000);




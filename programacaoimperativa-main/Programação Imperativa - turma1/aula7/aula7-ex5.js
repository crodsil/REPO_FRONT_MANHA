//callback
const bomDia=()=>console.log('Bom dia');
const bomTarde=()=>console.log('Boa tarde');


const executaFuncao=(algumaFuncao)=>algumaFuncao();  //bomDia()
                  //      bomTarde=>  bomTarde()
executaFuncao(bomDia);
executaFuncao(bomTarde);

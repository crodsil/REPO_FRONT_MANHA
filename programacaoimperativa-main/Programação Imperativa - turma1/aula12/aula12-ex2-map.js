let salarios = [1050.00, 2000.00, 5000.00,1000.00];
//reajustar sal. em 40%

function ajusta(sal) {
    return   sal<2000 ?  sal*1.4 : sal;
    // if (sal<2000) 
    //     {return sal*1.4;}
    // else 
    //     {return sal;}  
}
let salAtualizados=salarios.map(ajusta);
//                              callback

console.log(salarios);
console.log(salAtualizados);
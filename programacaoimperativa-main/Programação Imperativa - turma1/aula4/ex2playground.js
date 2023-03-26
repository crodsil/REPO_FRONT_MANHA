
function estacao(est){
switch(est){
    case "verão": console.log("Que calor em?!");
    break;
    case "inverno": console.log("Frio dms!");
    break;
    case "outono": console.log("É a estação em que as folhas caem");
    break;
    case "primavera": console.log("O momento em que as flores nascem");
    break;
    default:console.log("Entre com uma estação válida");
}
}
estacao("primavera")
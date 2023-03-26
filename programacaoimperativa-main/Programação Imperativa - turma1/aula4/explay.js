function podeSubir(altura, acompanhado) {
    if (altura<1.20 && altura>2){
        return false;}
    else if(altura>1.40){
        return true;}
    else {if (acompanhado == true) {return true;}
        else { return false;}}
    }
    console.log(podeSubir(1.18,true));


    
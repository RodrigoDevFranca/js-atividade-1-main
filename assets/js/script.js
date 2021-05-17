alert('Olá!');

function cont_texto(valor) {
    quant = 244;
    total = valor.length;
    if(total <= quant) {
        resto = quant - total;
        document.getElementById('cont').innerHTML = resto;
    } else {
        document.getElementById('texto').value = valor.substr(0,quant);
    }
   
}

function selector(string){
    res = string.value.toUpperCase();
    string.value = res;

    
}


 



   
   
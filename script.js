
function convertirAsciiBinario() {
    let caracter = document.getElementById("entradaCaracter").value;
    caracter = caracter.charCodeAt(0);
    let binario = "";
    document.getElementById("salidaAscii").innerText = `Código ASCII: ${caracter}`;
    for (let bit = 128; bit >= 1 ; bit /= 2) {
        if (caracter >= bit) {
            caracter -= bit;
            binario += "1";
        } else {
            binario += "0";
        }
    }

    document.getElementById("salidaBinario").innerText = `Código Binario: ${binario}`;
}

function convertirBinarioCaracter() {
    let binario = document.getElementById("entradaBinaria").value;
    let suma = 0;
    let caracter = "";
    
    if (binario.length==8){
        for (let vc = 0;vc<binario.length;vc++){
            if (binario[7-vc]=="1"){
                suma +=2**vc;
            }
        }
        caracter = String.fromCharCode(suma);
        document.getElementById("salidacaracter").innerText = "El caracter es " + caracter;
    }else {
        alert("Debe ingresar los 8 bits");
    }
}
    

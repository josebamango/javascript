addEventListener('load', inicio, false);


function inicio() {
    let entrada;
    do {
        entrada = prompt("Introduca una cadena de texto");
    } while (typeof(entrada) == undefined || entrada == "")
    if (typeof(entrada) == "object") {} else {
        let cajaResultado;
        cajaResultado = document.getElementById("resultado");
        cajaResultado.innerHTML = letras(entrada);
    }
}

var letras = (texto) => {
    let cadena = "";
    let textoMayus = texto.toUpperCase();
    let textoMinus = texto.toLowerCase();

    if (texto == textoMayus) {
        cadena = "La cadena está escrita en mayúsculas";
    } else {
        if (texto == textoMinus) {
            cadena = "La cadena está escrita en minúsculas";
        } else {
            cadena = "La cadena está variadita";
        }
    }
    return cadena;
}
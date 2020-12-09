addEventListener('load', inicio, false);

function inicio() {
    inputNumeros = document.getElementById("numeros");
    botonCargar = document.getElementById("cargar");
    botonCargar.addEventListener("click", cargarArray, false);
    botonCalcular = document.getElementById("calcular");
    botonCalcular.addEventListener("click", function() {
        let suma, media, mayor, menor;
        [suma, media, mayor, menor] = calculos(cargarArray());
        inputSuma.value = "La suma es: " + suma + "😊";
        inputMedia.value = "La media es: " + media + "😁";
        inputMayor.value = "El mayor es: " + mayor + "👍";
        inputMenor.value = "El menos es: " + menor + "👎";
    })
    inputSuma = document.getElementById("suma");
    inputMedia = document.getElementById("media");
    inputMayor = document.getElementById("mayor");
    inputMenor = document.getElementById("menor");

}



function cargarArray() {
    return inputNumeros.value.split(",");
}

function calculos(arrayNumeros) {

    let arrayAux = Array();
    arrayNumeros.forEach((element, key) => {
        arrayAux[key] = parseInt(element);
    });
    arrayAux.sort(function(a, b) { return b - a });
    let suma = 0;
    let media = 0;
    let mayor = 0;
    let menor = 0;
    arrayAux.forEach(element => {
        suma += element;
    });
    media = suma / arrayAux.length;
    mayor = arrayAux[0];
    menor = arrayAux[arrayNumeros.length - 1];
    return [suma, media, mayor, menor];
}
addEventListener('load', inicio, false);

function inicio() {
    let arrayOriginal = CrearArrayAleatorio();
    document.write(arrayOriginal.join("-"));
    /*let boton1 = document.getElementById('original');
    boton1.addEventListener('click', arrayAleatorio, false);
    let boton2 = document.getElementById('limpieza');
    boton2.addEventListener('click', visualizar, false);
    let boton3 = document.getElementById('nueva');
    boton3.addEventListener('click', nuevo, false);*/




}
/*
function visualizar(aleatorio) {

    return aleatorio.join("-");
}
*/
function CrearArrayAleatorio() {
    let aleatorio = new Array(15);
    for (i = 0; i < aleatorio.length; i++) {
        aleatorio.push(parseInt(Math.random() * 20) + 1)

    };
    return aleatorio;
}
/*
function limpiar() {


}*/
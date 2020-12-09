addEventListener('load', inicio, false);

function inicio() {
    var boton1 = document.getElementById('a');
    boton1.addEventListener('click', pintaA, false);
    var boton2 = document.getElementById("b");
    boton2.addEventListener('click', pintaB, false);
    /*var boton3 = document.getElementById('orden');
    boton3.addEventListener('click', ordenar, false);
    var boton4 = document.getElementById('borrar');
    boton4.addEventListener('click', borrarAnadir, false);*/
}
/*
var alumnos = ["Juan López", "Luis Guerra", "María de la Hoz", "Elena Gómez Julia Caba"];
var erasmus = ["John Smith", "Lia  Warner", "Oscar Klein", "Edward Crow"];
var todosAlumnos = alumnos.concat(erasmus);
todosAlumnos.unshift("Joseba Mantecón");
var yo = todosAlumnos.shift();
var claseA = todosAlumnos.slice(0, 4).join("-");
var claseB = todosAlumnos.slice(4, 9).join("-");
var orde = todosAlumnos.sort().join('-');
var borrado = claseB.splice(2, 0, "Luis Alberto Peres", "Diana Pierce");
*/


function pintaA() {
    var myArray = [" Sara Ferdiand", " Joseba Colmillo Blanco", " Laza", " Tetona"];
    var cuatroRandom = [];
    var posicionesElegibles = [];
    var i, r;
    for (i = 0; i < myArray.length; i++) posicionesElegibles[i] = i;
    for (i = 0; i < 2; i++) {
        r = Math.floor(Math.random() * posicionesElegibles.length);
        cuatroRandom.push(myArray[posicionesElegibles[r]]);
        posicionesElegibles.splice(r, 1);
    }
    var divA = document.getElementById('cajaA');
    divA.innerHTML = cuatroRandom.toString() + "👉🤏";


}

function pintaB() {
    var aleatorio = Math.round(Math.random() * 4);
    switch (aleatorio) {

        case 1:
            var divB = document.getElementById('cajaB');
            divB.innerHTML = '¡¡¡JOSEBA!!!';
            break;
        case 2:
            var divB = document.getElementById('cajaB');
            divB.innerHTML = '¡¡¡SARA!!!';
            break;
        case 3:
            var divB = document.getElementById('cajaB');
            divB.innerHTML = '¡¡¡EMI!!!';
            break;
        case 4:
            var divB = document.getElementById('cajaB');
            divB.innerHTML = '¡¡¡LAZA!!!';
        default:
            break;
    }
    /*
    var divB = document.getElementById('cajaB');
    divB.innerHTML = claseB.toString();*/
}
/*
function ordenar() {
    var div3 = document.getElementById('ordenado');
    div3.innerHTML = orde.toString();

}

function borrarAnadir() {
    var div4 = document.getElementById('borrado');
    div4.innerHTML = borrado.toString();
}*/
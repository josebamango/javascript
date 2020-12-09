addEventListener('load', inicio, false);
var ocupada = false;
var arrayImagenes = document.images;
var dni = document.getElementById('dni');
var resultado = document.getElementById('resultado');
var dadoAlta = document.getElementById('dadoAlta');

function inicio() {
    let alta = document.getElementById('alta');
    let addTratamientos = document.getElementById('addTratamientos');
    let liberar = document.getElementById('liberar');
    let mostrar = document.getElementById('mostrar');
    let clinica = crearClinica();
    alta.addEventListener('click', crearClinica(), false);
}


function crearClinica(array) {
    let clinica = Array();
    for (i = 0; i < 10; i++) {
        let habitacion = new Habitacion(i + 1, dni, "libre.png", Array());
        habitacion.codPaciente = 0;
        clinica.push(habitacion);
        arrayImagenes[i].src = "libre.png";
    };
}

function selectHabitacion(clinica) {
    let numHabitacion = parseInt(prompt("Nº habitación a tratar")) - 1;


}
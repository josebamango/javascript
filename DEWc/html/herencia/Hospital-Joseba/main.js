addEventListener("load", inicio, false);

function inicio() {
    let asignar = document.getElementById("addHabitacion");
    let liberar = document.getElementById("liberar");
    let aplicar = document.getElementById("aplicar");
    let mostrar = document.getElementById("mostrarInfo");
    let numHabitacion = document.getElementById("numeroHabitacion");
    let resultado = document.getElementById("resultado");
    let hab = addHab();
    asignar.addEventListener("click", function() {
        asignarHabitacion(hab);
    }, false);
    liberar.addEventListener("click", function() {
        liberarHabitacion(hab);
    }, false);
    aplicar.addEventListener("click", function() {
        aplicarTratamiento(hab);
    }, false);
    mostrar.addEventListener("click", function() {
        resultado.value = mostrarDatos(hab, numHabitacion.value);
        document.images[10].src = `img/${hab[numHabitacion.value-1].foto}`;
    })
}

function addHab() {
    let hab = Array();
    for (let i = 0; i < 10; i++) {
        let habitacion = new Habitacion(i, "", Array());
        habitacion.codPaciente = 0;
        hab.push(habitacion);
        document.images[i].src = "libre.png";
    }
    return hab;
}

function asignarHabitacion(hab) {
    for (let i = 0; i < 10; i++) {
        if (hab[i].codPaciente === 0) {
            hab[i] = new Habitacion(i, `${i+1}.jpg`, Array());
            document.images[i].src = "ocupado.png";
            hab[i].codPaciente = hab[i].crearCodigo();
            break;
        }
    }
}

function liberarHabitacion(hab) {
    let nHabitacion = parseInt(prompt("¿Qué habitación quieres dar de alta?")) - 1;
    hab[nHabitacion] = new Habitacion(nHabitacion, "", Array());
    document.images[nHabitacion].src = "libre.png";
}

function aplicarTratamiento(hab) {
    let arrayTratamientos = document.getElementsByName("tratamientos");
    let nHabitacion = parseInt(prompt("¿A qué habitación quieres dar los tratamientos?")) - 1;
    let tratamientoArray = tratamientosElegidos(arrayTratamientos);
    hab[nHabitacion].asignTratamiento(tratamientoArray);
    abrir(arrayTratamientos);
}

function mostrarDatos(hab, numHabitacion) {
    return `Datos: ${hab[numHabitacion-1].infoTotal()}\n
    Tratamientos: ${hab[numHabitacion-1].info()}`;
}

function tratamientosElegidos(arrayTratamientos) {
    let array = Array();
    for (let i = 0; i < arrayTratamientos.length; i++) {
        if (arrayTratamientos[i].checked) {
            array.push(arrayTratamientos[i].value);
        }
    }
    return array;
}

function abrir(arrayTratamientos) {
    for (let i = 0; i < arrayTratamientos.length; i++) {
        arrayTratamientos[i].checked = false;
    }
}
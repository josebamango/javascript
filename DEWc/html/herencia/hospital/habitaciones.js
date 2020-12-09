function Habitacion(numHabitacion, dni, foto, tratamientos) {
    this.numHabitacion = numHabitacion;
    this.codPaciente = addCod();
    this.foto = foto;
    this.tratamientos = tratamientos;
}

function info() {
    return "El paciente número: " + this.codPaciente + " se encuentra en la habitación " + this.numHabitacion;
}

function infoTratamiento() {
    return tratamientos.join(" - ");
}

function addTratamientos(tratamiento) {
    this.tratamientos.push(tratamiento);
}

function addCod(dni) {
    let cadena = "";
    cadena = dni.substr(2, 3);
    cadena += dni.substr(dni.lenght - 1, 1);
    cadena += this.numHabitacion;
    return cadena;
}
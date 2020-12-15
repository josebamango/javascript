function Habitacion(nHabitacion, foto, tratamientos) {
    this.nHabitacion = nHabitacion;
    this.codPaciente = 0;
    this.foto = foto;
    this.tratamientos = tratamientos;
    this.info = info;
    this.asignTratamiento = asignTratamiento;
    this.crearCodigo = crearCodigo;
    this.infoTotal = infoTotal;
}




function asignTratamiento(tratamiento) {
    for (const elemento of tratamiento) {
        if (this.tratamientos.includes(elemento) === false) {
            this.tratamientos.push(elemento);
        }
    }

}

function crearCodigo() {
    let texto = "";
    let dni = prompt("Introduce el DNI");
    console.log(dni);
    texto += dni.substring(3, 6);
    texto += dni.substring(dni.length - 1, dni.length);
    texto += this.nHabitacion + 1;
    return texto;
}

function infoTotal() {
    return `N.Habitacion: ${this.nHabitacion+1}, codPaciente: ${this.codPaciente}`;
}
class datosP {

    constructor(nombre, dni, direccion, telefono) {
        this.nombre = nombre;
        this.dni = dni;
        this.direccion = direccion;
        this.telefono = telefono;
    }

    mostrarDatosP() {
        var cadena = "";
        return cadena = this.nombre + ", con DNI:  " +
            this.dni;
    }
}
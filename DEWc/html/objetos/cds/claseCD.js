class CD {

    constructor(titulo, grupo, fecha) {
        this.titulo = titulo;
        this.grupo = grupo;
        this.fecha = fecha;
    }

    mostrarDisco() {
        var cadena = "";
        return cadena = "El cd: " + this.titulo + " es del grupo=>  " +
            this.grupo + ", salió el " + this.fecha;
    }
}
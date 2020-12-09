class cuentaCorriente {

    constructor(datos_personales, numero_cuenta, saldo) {
        this.datos_personales = datos_personales;
        this.numero_cuenta = numero_cuenta;
        this.saldo = saldo;
    }
    abono(dato) {
        this.saldo += dato;
    }

    cargo(dato) {
        this.saldo -= dato;
    }
    mostrarCliente() {
        var cadena = "";
        return cadena = "El cliente: " + this.datos_personales.mostrarDatosP() + ", con numero de cuenta:  " +
            this.numero_cuenta + " tiene un saldo de: " + this.saldo + "\n";
    }

}
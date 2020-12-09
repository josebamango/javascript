function padreTaxi() {
    this.fabricante = 'Renault, S.A.';
    this.direccionFabricante = 'c/R, Paris';
    this.getCapacidad = function() {
        if (tipoMotor == 'Diesel') {
            return 40;
        } else {
            return 35;
        }
    }
    this.variarCarga = function(variacion) {
        this.carga = this.carga + variacion;
    }
    this.variarVelocidad = function(variacion) {
        this.velocidad = this.velocidad + variacion;
    }
}

function hijoTaxi(tipoMotor, numeroPasajeros, carga, velocidad) {
    this.tipoMotor = tipoMotor;
    this.numeroPasajeros = numeroPasajeros;
    this.carga = carga;
    this.velocidad = velocidad;
}
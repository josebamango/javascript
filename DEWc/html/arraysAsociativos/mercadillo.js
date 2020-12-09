addEventListener('load', inicio, false);

function inicio() {
    //creo las variables
    var productos = new Array();
    //inicio botones
    let boton = document.getElementById('add');
    boton.addEventListener('click', function() {
        //cojo los elementos del formulario
        let producto = document.getElementById('producto').value;
        let cantidad = document.getElementById('cantidad').value;

        //introduzco la informacion en el array
        introduce(productos, producto, cantidad);
    }, false);

    //boton para vender
    let bVender = document.getElementById('vender');
    bVender.addEventListener('click', function() {
        //cojo los elementos del formulario
        let producto = document.getElementById('productoVenta').value;
        let cantidad = document.getElementById('cantidadVenta').value;
        //llamo a la funcion
        let mensaje = vender(productos, producto, cantidad);
        document.getElementById('total').value = mensaje;

    }, false);

    //boton para ver
    let bVer = document.getElementById('mostrar');
    bVer.addEventListener('click', function() {
        //llamo a la funcion
        let mensaje = ver(productos);
        //imprimo el mensaje en el textare
        document.getElementById('total').value = mensaje;
    }, false);

}

//FUNCION PARA IR ALMACENANDO ELEMENTOS EN EL ARRAY ASOCIATIVO
function introduce(productos, producto, cantidad) {
    productos[producto] = cantidad;
}

//FUNCION PARA VENDER UN PRODUCTO
function vender(productos, producto, cantidad) {
    let cant = parseInt(productos[producto]);
    let mensaje = `Se ha realizado la venta correctamente de ${cantidad} ${producto}s`;

    if (productos[producto] != undefined) {
        if (cant >= cantidad) {
            productos[producto] = cant - cantidad;
        } else {
            mensaje = "No se puede realizar la compra porque no hay suficiente stock";
        }
    } else {
        mensaje = "No se encuentra ninguna coincidencia en los productos";
    }
    return mensaje;

}

//FUNCION PARA VER TODO EL ARRAY
function ver(productos) {
    let fin = `TOTAL DE CADA PRODUCTO:
`;
    for (var producto in productos) {
        fin += `${producto}s:   ${productos[producto]}
`;
    }
    return fin;
}
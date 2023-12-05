//CotizacionValidaciones


function validarNoCotizacion() {
    var inputNoCotizacion = document.getElementById('noCotizacion');
    var mensajeErrorNoCotizacion = document.getElementById('mensajeErrorNoCotizacion');

    // Expresión regular para validar que solo contiene letras (sin espacios)
    var regex = /^[0-9]+$/;

    if (regex.test(inputNoCotizacion.value)) {
        inputNoCotizacion.classList.remove('invalido');
        inputNoCotizacion.classList.add('valido');
        mensajeErrorNoCotizacion.textContent = '';
    } else {
        inputNoCotizacion.classList.remove('valido');
        inputNoCotizacion.classList.add('invalido');
        mensajeErrorNoCotizacion.textContent = 'Ingrese un número de cotización válido (solo números).';
    }
}


function validarFormaPago() {
    var inputFormaPago = document.getElementById('formaPago');
    var mensajeErrorFormaPago = document.getElementById('mensajeErrorFormaPago');

    var regex = /^[A-Za-z\s]+$/; // Solo letras, sin espacios


    if (regex.test(inputFormaPago.value)) {
        inputFormaPago.classList.remove('invalido');
        inputFormaPago.classList.add('valido');
        mensajeErrorFormaPago.textContent = '';
    } else {
        inputFormaPago.classList.remove('valido');
        inputFormaPago.classList.add('invalido');
        mensajeErrorFormaPago.textContent = 'Ingrese una forma de pago válida (solo letras).';
    }
}

function validarOrdenPedido() {
    var inputOrdenPedido = document.getElementById('ordenPedido');
    var mensajeErrorOrdenPedido = document.getElementById('mensajeErrorOrdenPedido');

    var regex = /^[0-9]+$/;  // La expresión regular ahora acepta uno o más dígitos
    var ordenPedido= inputOrdenPedido.value;  // Obtén el valor del input

    if (regex.test(ordenPedido)) {
        inputOrdenPedido.classList.remove('invalido');
        inputOrdenPedido.classList.add('valido');
        mensajeErrorOrdenPedido.textContent = '';
    
    } else {
        inputOrdenPedido.classList.remove('valido');
        inputOrdenPedido.classList.add('invalido');
        mensajeErrorOrdenPedido.textContent = 'Ingrese la orden en números.';
    }
}

function validarRazonSocial() {
    var inputNombreRazonSocial = document.getElementById('nombreRazonSocial');
    var mensajeErrorRazonSocial = document.getElementById('mensajeErrorRazonSocial');

    // La expresión regular ahora permite solo letras y espacios
    var regex = /^[A-Za-z\s]+$/;
    var nombreRazonSocial = inputNombreRazonSocial.value;  // Obtén el valor del input

    if (regex.test(nombreRazonSocial)) {
        inputNombreRazonSocial.classList.remove('invalido');
        inputNombreRazonSocial.classList.add('valido');
        mensajeErrorRazonSocial.textContent = '';
    } else {
        inputNombreRazonSocial.classList.remove('valido');
        inputNombreRazonSocial.classList.add('invalido');
        mensajeErrorRazonSocial.textContent = 'Ingrese un nombre válido(solo letras y espacios)';
    }
}


function validarNIT() {
    var inputNitDocumento = document.getElementById('nitDocumento');
    var mensajeErrorNitDocumento= document.getElementById('mensajeErrorNitDocumento');

    // La expresión regular ahora permite solo numeros y maximo 10
    var regex = /^\d{1,10}$/;
    var nitDocumento = inputNitDocumento.value;  // Obtén el valor del input

    if (regex.test(nitDocumento)) {
        inputNitDocumento.classList.remove('invalido');
        inputNitDocumento.classList.add('valido');
        mensajeErrorNitDocumento.textContent = '';
    } else {
        inputNitDocumento.classList.remove('valido');
        inputNitDocumento.classList.add('invalido');
        mensajeErrorNitDocumento.textContent = 'Ingrese un NIT/documento válido.';
    }
}

function validarTelefono() {
    var inputTelefono = document.getElementById('telefono');
    var mensajeErrorTelefono= document.getElementById('mensajeErrorTelefono');

    // La expresión regular ahora permite solo numeros y maximo 10
    var regex = /^\d{1,10}$/;
    var telefono = inputTelefono.value;  // Obtén el valor del input

    if (regex.test(telefono)) {
        inputTelefono.classList.remove('invalido');
        inputTelefono.classList.add('valido');
        mensajeErrorTelefono.textContent = '';
    } else {
        inputTelefono.classList.remove('valido');
        inputTelefono.classList.add('invalido');
        mensajeErrorTelefono.textContent = 'Ingrese un telefono/cel válido.';
    }
}

function validarDireccion() {
    var inputDireccion = document.getElementById('direccion');
    var mensajeErrorDireccion= document.getElementById('mensajeErrorDireccion');

    // La expresión regular ahora permite numeros, letras y caracteres pero con limite de 40.
    var regex =/^[A-Za-z0-9!@#$%^&*(),.?":{}|<>]{1,40}$/;
    var Direccion = inputDireccion.value;  // Obtén el valor del input

    if (regex.test(Direccion)) {
        inputDireccion.classList.remove('invalido');
        inputDireccion.classList.add('valido');
        mensajeErrorDireccion.textContent = '';
    } else {
        inputDireccion.classList.remove('valido');
        inputDireccion.classList.add('invalido');
        mensajeErrorDireccion.textContent = 'Ingrese una direccion válida.';
    }
}


function validarCorreo() {
    var inputCorreo = document.getElementById('correo');
    var mensajeErrorCorreo= document.getElementById('mensajeErrorCorreo');

    
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    var correo = inputCorreo.value;  // Obtén el valor del input

    if (regex.test(correo)) {
        inputCorreo.classList.remove('invalido');
        inputCorreo.classList.add('valido');
        mensajeErrorCorreo.textContent = '';
    } else {
        inputCorreo.classList.remove('valido');
        inputCorreo.classList.add('invalido');
        mensajeErrorCorreo.textContent = 'Ingrese un correo válido(por favor asegurese de incluir el @).';
    }
}

function validarProductoCot() {
    var inputProductoCot = document.getElementById('nombreProductoCot');
    var mensajeErrorProductoCot = document.getElementById('mensajeErrorProductoCot');

    // La expresión regular ahora permite solo letras y espacios
    var regex = /^[A-Za-z\s]+$/;
    var nombreProductoCot = inputProductoCot.value;  // Obtén el valor del input

    if (regex.test(nombreProductoCot)) {
        inputProductoCot.classList.remove('invalido');
        inputProductoCot.classList.add('valido');
        mensajeErrorProductoCot.textContent = '';
    } else {
        inputProductoCot.classList.remove('valido');
        inputProductoCot.classList.add('invalido');
        mensajeErrorProductoCot.textContent = 'Ingrese un nombre válido(solo letras y espacios)';
    }
}



function validarValorUnitario() {
    var inputValorUnitario = document.getElementById('valorUnitario');
    var mensajeErrorValorUnitario= document.getElementById('mensajeErrorValorUnitario');

    // La expresión regular ahora permite solo numeros y maximo 10
    var regex = /^[+-]?\d+(\.\d+)?$/;
    var valorUnitario = inputValorUnitario.value;  // Obtén el valor del input

    if (regex.test(valorUnitario)) {
        inputValorUnitario.classList.remove('invalido');
        inputValorUnitario.classList.add('valido');
        mensajeErrorValorUnitario.textContent = '';
    } else {
        inputValorUnitario.classList.remove('valido');
        inputValorUnitario.classList.add('invalido');
        mensajeErrorValorUnitario.textContent = 'Ingrese un valor válido.';
    }
}

function validarValorTotal() {
    var inputValorTotal = document.getElementById('valorTotal');
    var mensajeErrorValorTotal= document.getElementById('mensajeErrorValorTotal');

    // La expresión regular ahora permite solo numeros y maximo 10
    var regex = /^[+-]?\d+(\.\d+)?$/;
    var valorTotal = inputValorTotal.value;  // Obtén el valor del input

    if (regex.test(valorTotal)) {
        inputValorTotal.classList.remove('invalido');
        inputValorTotal.classList.add('valido');
        mensajeErrorValorTotal.textContent = '';
    } else {
        inputValorTotal.classList.remove('valido');
        inputValorTotal.classList.add('invalido');
        mensajeErrorValorTotal.textContent = 'Ingrese un valor válido.';
    }
}

function validarSubTotal() {
    var inputSubTotal = document.getElementById('subTotal');
    var mensajeErrorSubTotal= document.getElementById('mensajeErrorSubTotal');

    // La expresión regular ahora permite solo numeros y maximo 10
    var regex = /^[+-]?\d+(\.\d+)?$/;
    var subTotal = inputSubTotal.value;  // Obtén el valor del input

    if (regex.test(subTotal)) {
        inputSubTotal.classList.remove('invalido');
        inputSubTotal.classList.add('valido');
        mensajeErrorSubTotal.textContent = '';
    } else {
        inputSubTotal.classList.remove('valido');
        inputSubTotal.classList.add('invalido');
        mensajeErrorSubTotal.textContent = 'Ingrese un valor válido.';
    }


}

function validarIva() {
    var inputIva = document.getElementById('iva');
    var mensajeErrorIva= document.getElementById('mensajeErrorIva');

    // La expresión regular ahora permite solo numeros y maximo 10
    var regex = /^[+-]?\d+(\.\d+)?$/;
    var iva = inputIva.value;  // Obtén el valor del input

    if (regex.test(iva)) {
        inputIva.classList.remove('invalido');
        inputIva.classList.add('valido');
        mensajeErrorIva.textContent = '';
    } else {
        inputIva.classList.remove('valido');
        inputIva.classList.add('invalido');
        mensajeErrorIva.textContent = 'Ingrese un valor válido.';
    }

    
}

function validarTotal() {
    var inputTotal = document.getElementById('total');
    var mensajeErrorTotal= document.getElementById('mensajeErrorTotal');

    // La expresión regular ahora permite solo numeros y maximo 10
    var regex = /^[+-]?\d+(\.\d+)?$/;
    var total = inputTotal.value;  // Obtén el valor del input

    if (regex.test(total)) {
        inputTotal.classList.remove('invalido');
        inputTotal.classList.add('valido');
        mensajeErrorTotal.textContent = '';
    } else {
        inputTotal.classList.remove('valido');
        inputTotal.classList.add('invalido');
        mensajeErrorTotal.textContent = 'Ingrese un valor válido.';
    }

}

function validarReteIva() {
    var inputReteIva = document.getElementById('reteIva');
    var mensajeErrorReteIva= document.getElementById('mensajeErrorReteIva');

    // La expresión regular ahora permite solo numeros y maximo 10
    var regex = /^[+-]?\d+(\.\d+)?$/;
    var reteIva = inputReteIva.value;  // Obtén el valor del input

    if (regex.test(reteIva)) {
        inputReteIva.classList.remove('invalido');
        inputReteIva.classList.add('valido');
        mensajeErrorReteIva.textContent = '';
    } else {
        inputReteIva.classList.remove('valido');
        inputReteIva.classList.add('invalido');
        mensajeErrorReteIva.textContent = 'Ingrese un valor válido.';
    }

}

function validarRetencion() {
    var inputRetencion = document.getElementById('retencion');
    var mensajeErrorRetencion= document.getElementById('mensajeErrorRetencion');

    // La expresión regular ahora permite solo numeros y maximo 10
    var regex = /^[+-]?\d+(\.\d+)?$/;
    var retencion = inputRetencion.value;  // Obtén el valor del input

    if (regex.test(retencion)) {
        inputRetencion.classList.remove('invalido');
        inputRetencion.classList.add('valido');
        mensajeErrorRetencion.textContent = '';
    } else {
        inputRetencion.classList.remove('valido');
        inputRetencion.classList.add('invalido');
        mensajeErrorRetencion.textContent = 'Ingrese un valor válido.';
    }

}

function validarValorPagar() {
    var inputValorPagar = document.getElementById('valorPagar');
    var mensajeErrorValorPagar= document.getElementById('mensajeErrorValorPagar');

    // La expresión regular ahora permite solo numeros y maximo 10
    var regex = /^[+-]?\d+(\.\d+)?$/;
    var valorPagar = inputValorPagar.value;  // Obtén el valor del input

    if (regex.test(valorPagar)) {
        inputValorPagar.classList.remove('invalido');
        inputValorPagar.classList.add('valido');
        mensajeErrorValorPagar.textContent = '';
    } else {
        inputValorPagar.classList.remove('valido');
        inputValorPagar.classList.add('invalido');
        mensajeErrorValorPagar.textContent = 'Ingrese un valor válido.';
    }

}



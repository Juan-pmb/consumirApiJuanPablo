
function validarNombre() {
    var inputNombre = document.getElementById('nombreCliente');
    var mensajeError = document.getElementById('mensajeError');

    // Expresión regular para validar que solo contiene letras y espacios
    var regex = /^[A-Z][a-zA-Z\s]{10,49}$/


    if (regex.test(inputNombre.value)) {
        inputNombre.classList.remove('invalido');
        inputNombre.classList.add('valido');
        mensajeError.textContent = '';
    } else {
        inputNombre.classList.remove('valido');
        inputNombre.classList.add('invalido');
        mensajeError.style.color = 'red';
        mensajeError.textContent = '1ra letra en mayúscula. Sólo letras y espacios.';
    }
}


function validarCorreo() {
  var correoInput = document.getElementById('email');
  var mensajeErrorCorreo = document.getElementById('mensajeErrorCorreo');
  
  // Expresión regular para validar el formato de correo electrónico
  var regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (correoInput.value.trim() === '') {
    // El campo está vacío, muestra un mensaje de error
    mensajeErrorCorreo.innerHTML = 'Por favor, ingrese su correo electrónico.';
    mensajeErrorCorreo.style.color = 'red';

    
  } else if (!regexCorreo.test(correoInput.value)) {
    // El formato del correo electrónico no es válido, muestra un mensaje de error
    correoInput.classList.remove('valido');
    correoInput.classList.add('invalido');
    mensajeErrorCorreo.style.color = 'red';
    mensajeErrorCorreo.innerHTML = 'Por favor, ingrese un correo electrónico válido.';
   
  } else {
    // La entrada es válida, borra el mensaje de error
    mensajeErrorCorreo.innerHTML = '';
     mensajeErrorCorreo.style.color = 'green';
     correoInput.classList.add('valido');
     correoInput.classList.remove('invalido');
  }
}


function validarCelular() {
  // Expresión regular para aceptar solo números
  var inputCelular = document.getElementById('Celular');
  var mensajeErrorCelular = document.getElementById('mensajeErrorCelular');

  var regex = /^[0-9]{10}$/;

  if (regex.test(inputCelular.value)) {
      inputCelular.classList.remove('invalido');
      inputCelular.classList.add('valido');
      mensajeErrorCelular.textContent = '';
  } else {
      inputCelular.classList.remove('valido');
      inputCelular.classList.add('invalido');
      mensajeErrorCelular.style.color = 'red';
      mensajeErrorCelular.textContent = 'Ingrese un número válido (solo números).';
  }
}


function validarDireccionResid() {
  var inputDireccionResid = document.getElementById('direccionResid');
  var mensajeErrorDireccionResid = document.getElementById('mensajeErrorDireccionResid');

  var regex = /^(?!\s*$)[a-zA-Z0-9\s\-\/#]{11,}$/;

  if (regex.test(inputDireccionResid.value)) {
    inputDireccionResid.classList.remove('invalido');
    inputDireccionResid.classList.add('valido');
    mensajeErrorDireccionResid.textContent = '';
  } else {
    inputDireccionResid.classList.remove('valido');
    inputDireccionResid.classList.add('invalido');
    mensajeErrorDireccionResid.style.color = 'red';
    mensajeErrorDireccionResid.textContent = 'Ingrese una dirección con al menos 11 caracteres.';
  }
}

function validarApto() {
  var inputApto = document.getElementById('apto');
  var mensajeErrorApto = document.getElementById('mensajeErrorApto');

  var regex = /^[a-zA-Z0-9\s]{6,}$/;

  if (regex.test(inputApto.value)) {
    inputApto.classList.remove('invalido');
    inputApto.classList.add('valido');
    mensajeErrorApto.textContent = '';
  } else {
    inputApto.classList.remove('valido');
    inputApto.classList.add('invalido');
    mensajeErrorApto.style.color = 'red';
    mensajeErrorApto.textContent = 'Ingrese un apto válido(solo letras y números).';
  }
}


//Info pedido

function validarNumPedido() {
  var inputNumPedido = document.getElementById('numPedido');
  var mensajeErrorNumPedido = document.getElementById('mensajeErrorNumPedido');

  var regex = /^[1-9]\d{3}$/;

  if (regex.test(inputNumPedido.value)) {
    inputNumPedido.classList.remove('invalido');
    inputNumPedido.classList.add('valido');
    mensajeErrorNumPedido.textContent = '';
  } else {
    inputNumPedido.classList.remove('valido');
    inputNumPedido.classList.add('invalido');
    mensajeErrorNumPedido.style.color = 'red';
    mensajeErrorNumPedido.textContent = 'Solo 4 números.';
  }
}


function validarTotalPago() {
  var inputTotalPago = document.getElementById('totalPago');
  var mensajeErrorTotalPago = document.getElementById('mensajeErrorTotalPago');

  var regex = /^[1-9]\d{3,10}$/;

  if (regex.test(inputTotalPago.value)) {
    inputTotalPago.classList.remove('invalido');
    inputTotalPago.classList.add('valido');
    mensajeErrorTotalPago.textContent = '';
  } else {
    inputTotalPago.classList.add('invalido');
    inputTotalPago.classList.remove('valido');
    mensajeErrorTotalPago.style.color = 'red';
    mensajeErrorTotalPago.textContent = 'Mínimo 4 números.';
  }
}





function validarDireccionEnvio() {
  var inputDireccionEnvio = document.getElementById('direccionEnvio');
  var mensajeErrorDireccionEnvio= document.getElementById('mensajeErrorDireccionEnvio');

  var regex = /^(?!\s*$)[a-zA-Z0-9\s\-\/#]{11,}$/;

  if (regex.test(inputDireccionEnvio.value)) {
    inputDireccionEnvio.classList.remove('invalido');
    inputDireccionEnvio.classList.add('valido');
    mensajeErrorDireccionEnvio.textContent = '';
  } else {
    inputDireccionEnvio.classList.remove('valido');
    inputDireccionEnvio.classList.add('invalido');
    mensajeErrorDireccionEnvio.style.color = 'red';
    mensajeErrorDireccionEnvio.textContent = 'Ingrese una dirección con al menos 11 caracteres.';
  }
}





//GESTIÓN INSUMO:

function validarIdInsumo() {
  var inputIdInsumo = document.getElementById('id');
  var mensajeErrorId = document.getElementById('mensajeErrorId');

  var regex = /^[1-9]\d{3}$/;

  if (regex.test(inputIdInsumo.value)) {
    inputIdInsumo.classList.remove('invalido');
    inputIdInsumo.classList.add('valido');
    mensajeErrorId.textContent = '';
  } else {
    inputIdInsumo.classList.remove('valido');
    inputIdInsumo.classList.add('invalido');
    mensajeErrorId.style.color = 'red';
    mensajeErrorId.textContent = 'Solo 4 números.';
  }
}


function validarNombreInsumo() {
  var inputNombre = document.getElementById('nombreInsumo');
  var mensajeError = document.getElementById('mensajeError');

  // Expresión regular para validar que solo contiene letras y espacios
  var regex = /^[a-zA-Z\s]+$/;


  if (regex.test(inputNombre.value) && inputNombre.value.length > 2) {
      inputNombre.classList.remove('invalido');
      inputNombre.classList.add('valido');
      mensajeError.textContent = '';
  } else {
      inputNombre.classList.remove('valido');
      inputNombre.classList.add('invalido');
      mensajeError.style.color = 'red';
      mensajeError.textContent = 'Sólo letras y espacios.';
  }
}

function validarMedidaInsumo() {
  var inputMedInsumo = document.getElementById('medidaInsumo');
  var mensajeErrorMedInsumo = document.getElementById('mensajeErrorMedInsumo');

  // Expresión regular para validar que solo contiene letras y espacios
  var regex = /^.+$/;


  if (regex.test(inputNombre.value)) {
    inputMedInsumo.classList.remove('invalido');
    inputMedInsumo.classList.add('valido');
    mensajeErrorMedInsumo.textContent = '';
  } else {
      inputMedInsumo.classList.remove('valido');
      inputMedInsumo.classList.add('invalido');
      mensajeErrorMedInsumo.style.color = 'red';
      mensajeErrorMedInsumo.textContent = 'Sólo números.';
  }
}


//CATEGORIA DE INSUMO 

function validarNombreCatInsumo() {
  var inputNombre = document.getElementById('nomCatInsumo');
  var mensajeError = document.getElementById('mensajeError');

  // Expresión regular para validar que solo contiene letras y espacios
  var regex = /^[a-zA-Z0-9ñÑ\s]{6,}$/;


  if (regex.test(inputNombre.value)) {
      inputNombre.classList.remove('invalido');
      inputNombre.classList.add('valido');
      mensajeError.textContent = '';
  } else {
      inputNombre.classList.remove('valido');
      inputNombre.classList.add('invalido');
      mensajeError.style.color = 'red';
      mensajeError.textContent = 'Sólo letras y espacios.';
  }
}


function validarDetalleCatInsumo() {
  var inputDetalleCatInsumo = document.getElementById('detalleCatInsumo');
  var mensajeErrorDetalle = document.getElementById('mensajeErrorDetalle');

  // Expresión regular para validar que solo contiene letras y espacios
  var regex = /^[a-zA-Z0-9ñÑ\s]{6,}$/;


  if (regex.test(inputDetalleCatInsumo.value)) {
    inputDetalleCatInsumo.classList.remove('invalido');
    inputDetalleCatInsumo.classList.add('valido');
    mensajeErrorDetalle.textContent = '';
  } else {
    inputDetalleCatInsumo.classList.remove('valido');
    inputDetalleCatInsumo.classList.add('invalido');
    mensajeErrorDetalle.style.color = 'red';
    mensajeErrorDetalle.textContent = 'Sólo letras y espacios.';
  }
}

let estampadosArray = [
  {
    id: "1",
    tamaño: "50",
    precioTamaño: "5000",
    tipo: "Vinilo",
    precioTipo: "7000",
    total: "12000",
  },
];

calcularTotal();

function calcularTotal() {
  var precioTamaño =
    parseFloat(document.getElementById("imputPrecioTamañoEstampado").value) ||
    0;
  var precioTipo =
    parseFloat(document.getElementById("inputPrecioTipo").value) || 0;

  var total = precioTamaño + precioTipo;

  document.getElementById("inputTotal").value = total;
}
function cambiarEstado(estampadoId) {
  var switchElement = document.getElementById(`switch-${estampadoId}`);

  if (!switchElement.checked) {
    $("#confirmarCambioEstadoModal").modal("show");
  } else {
    $("#confirmarCambioEstadoModal").modal("show");
  }
}

function eliminarEstampado(id) {
  estampadoIdToDelete = id;
  $("#confirmarEliminarModal").modal("show");
}

function confirmarEliminarEstampado() {
  const index = estampadosArray.findIndex(
    (estampado) => estampado.id === estampadoIdToDelete
  );
  estampadosArray.splice(index, 1);
  llenarTabla();
  $("#confirmarEliminarModal").modal("hide");
  $("#eliminadoExitosamenteModal").modal("show");
}

let estampadoIdToEdit = null;

function editarEstampado(id) {
  const estampadoToEdit = estampadosArray.find(
    (estampado) => estampado.id == id
  );
  estampadoIdToEdit = id;

  document.getElementById("nombreAccion").textContent =
    "Editar tamaño y tipo de estampado";

  document.getElementById("imputTamañoEstampado").value =
    estampadoToEdit.tamaño;
  document.getElementById("imputPrecioTamañoEstampado").value =
    estampadoToEdit.precioTamaño;
  document.getElementById("inputTipoEstampado").value = estampadoToEdit.tipo;
  document.getElementById("inputPrecioTipo").value = estampadoToEdit.precioTipo;
  document.getElementById("inputTotal").value = estampadoToEdit.total;

  $("#registroEstampadoModal").modal("show");
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

var tabla = document.getElementById("tablaEstampados");

function llenarTabla() {
  var tbody = tabla.querySelector("tbody");
  tbody.innerHTML = "";

  for (var i = 0; i < estampadosArray.length; i++) {
    var estampado = estampadosArray[i];

    var fila = document.createElement("tr");

    var idCell = document.createElement("td");
    var tamañoCell = document.createElement("td");
    var tipoCell = document.createElement("td");
    var precioTamañoCell = document.createElement("td");
    var precioTipoCell = document.createElement("td");
    var totalCell = document.createElement("td");
    var accionesCell = document.createElement("td");

    idCell.textContent = estampado.id;
    tamañoCell.textContent = estampado.tamaño;
    tipoCell.textContent = estampado.tipo;
    precioTamañoCell.textContent = estampado.precioTamaño;
    precioTipoCell.textContent = estampado.precioTipo;
    totalCell.textContent = estampado.total;

    var editarBtn = document.createElement("button");
    editarBtn.type = "button";
    editarBtn.classList.add("btn");
    editarBtn.innerHTML = `<img src="img/pencil.ico" alt="Editar" class="iconos-listar">`;
    editarBtn.addEventListener("click", function () {
      editarEstampado(estampado.id);
    });

    var eliminarBtn = document.createElement("button");
    eliminarBtn.type = "button";
    eliminarBtn.classList.add("btn");
    eliminarBtn.innerHTML = `<img src="img/delete.ico" alt="Borrar" class="iconos-listar">`;
    eliminarBtn.addEventListener("click", function () {
      eliminarEstampado(estampado.id);
    });

    accionesCell.appendChild(editarBtn);
    accionesCell.appendChild(eliminarBtn);

    fila.appendChild(idCell);
    fila.appendChild(tamañoCell);
    fila.appendChild(tipoCell);
    fila.appendChild(precioTamañoCell);
    fila.appendChild(precioTipoCell);
    fila.appendChild(totalCell);
    fila.appendChild(accionesCell);

    tbody.appendChild(fila);
  }
}

function guardarCambiosEstampado() {
  // Validar tamaño de estampado
  validarTamañoEstampado();
  if (
    !document
      .getElementById("imputTamañoEstampado")
      .classList.contains("valido")
  ) {
    return;
  }

  // Validar precio de tamaño de estampado
  validarPrecioTamañoEstampado();
  if (
    !document
      .getElementById("imputPrecioTamañoEstampado")
      .classList.contains("valido")
  ) {
    return;
  }

  // Validar tipo de estampado
  validarTipoEstampado();
  if (
    !document.getElementById("inputTipoEstampado").classList.contains("valido")
  ) {
    return;
  }

  // Validar precio de tipo de estampado
  validarPrecioTipo();
  if (
    !document.getElementById("inputPrecioTipo").classList.contains("valido")
  ) {
    return;
  }

  // Validar total si es necesario

  var tamaño = document.getElementById("imputTamañoEstampado").value;
  var precioTamaño = document.getElementById(
    "imputPrecioTamañoEstampado"
  ).value;
  var tipo = document.getElementById("inputTipoEstampado").value;
  var precioTipo = document.getElementById("inputPrecioTipo").value;
  var total = document.getElementById("inputTotal").value;

  if (estampadoIdToEdit !== null) {
    const indexToEdit = estampadosArray.findIndex(
      (estampado) => estampado.id == estampadoIdToEdit
    );

    estampadosArray[indexToEdit].tamaño = tamaño;
    estampadosArray[indexToEdit].precioTamaño = precioTamaño;
    estampadosArray[indexToEdit].tipo = tipo;
    estampadosArray[indexToEdit].precioTipo = precioTipo;
    estampadosArray[indexToEdit].total = total;

    estampadoIdToEdit = null;

    $("#exitoModalEstampadoEdit").modal("show");
    document.getElementById("nombreAccion").textContent =
      "Registrar tamaño y tipo de estampado";
  } else {
    const nuevoEstampado = {
      id: estampadosArray.length + 1,
      tamaño: tamaño,
      precioTamaño: precioTamaño,
      tipo: tipo,
      precioTipo: precioTipo,
      total: total,
    };

    estampadosArray.push(nuevoEstampado);

    $("#exitoModalEstampado").modal("show");
  }

  // Limpiar campos del formulario
  document.getElementById("imputTamañoEstampado").value = "";
  document.getElementById("imputPrecioTamañoEstampado").value = "";
  document.getElementById("inputTipoEstampado").value = "";
  document.getElementById("inputPrecioTipo").value = "";
  document.getElementById("inputTotal").value = "";

  llenarTabla();
}

document.addEventListener("DOMContentLoaded", function () {
  llenarTabla();
});

function validarTamañoEstampado() {
  var inputTamaño = document.getElementById("imputTamañoEstampado");
  var mensajeError = document.getElementById("mensajeErrorTamaño");

  var tamaño = inputTamaño.value.trim();

  if (tamaño === "") {
    inputTamaño.classList.remove("valido");
    inputTamaño.classList.add("invalido");
    mensajeError.textContent = "Este campo no puede estar vacío.";
  } else if (isNaN(tamaño) || parseFloat(tamaño) <= 0) {
    inputTamaño.classList.remove("valido");
    inputTamaño.classList.add("invalido");
    mensajeError.textContent = "Ingrese un tamaño válido (número mayor que 0).";
  } else {
    inputTamaño.classList.remove("invalido");
    inputTamaño.classList.add("valido");
    mensajeError.textContent = "";
  }
}

function validarPrecioTamañoEstampado() {
  var inputPrecioTamaño = document.getElementById("imputPrecioTamañoEstampado");
  var mensajeError = document.getElementById("mensajeErrorPrecioTamaño");

  var precioTamaño = inputPrecioTamaño.value.trim();

  if (precioTamaño === "") {
    inputPrecioTamaño.classList.remove("valido");
    inputPrecioTamaño.classList.add("invalido");
    mensajeError.textContent = "Este campo no puede estar vacío.";
  } else if (isNaN(precioTamaño) || parseFloat(precioTamaño) <= 0) {
    inputPrecioTamaño.classList.remove("valido");
    inputPrecioTamaño.classList.add("invalido");
    mensajeError.textContent = "Ingrese un precio válido (número mayor que 0).";
  } else {
    inputPrecioTamaño.classList.remove("invalido");
    inputPrecioTamaño.classList.add("valido");
    mensajeError.textContent = "";
  }
}

function validarTipoEstampado() {
  var inputTipo = document.getElementById("inputTipoEstampado");
  var mensajeError = document.getElementById("mensajeErrorTipoEstampado");

  var tipo = inputTipo.value.trim();

  if (tipo === "" || tipo === "Seleccione una opción") {
    inputTipo.classList.remove("valido");
    inputTipo.classList.add("invalido");
    mensajeError.textContent = "Seleccione un tipo de estampado válido.";
  } else {
    inputTipo.classList.remove("invalido");
    inputTipo.classList.add("valido");
    mensajeError.textContent = "";
  }
}

function validarPrecioTipo() {
  var inputPrecioTipo = document.getElementById("inputPrecioTipo");
  var mensajeError = document.getElementById("mensajeErrorPrecioTipo");

  var precioTipo = inputPrecioTipo.value.trim();

  if (precioTipo === "") {
    inputPrecioTipo.classList.remove("valido");
    inputPrecioTipo.classList.add("invalido");
    mensajeError.textContent = "Este campo no puede estar vacío.";
  } else if (isNaN(precioTipo) || parseFloat(precioTipo) <= 0) {
    inputPrecioTipo.classList.remove("valido");
    inputPrecioTipo.classList.add("invalido");
    mensajeError.textContent = "Ingrese un precio válido (número mayor que 0).";
  } else {
    inputPrecioTipo.classList.remove("invalido");
    inputPrecioTipo.classList.add("valido");
    mensajeError.textContent = "";
  }
}

document
  .getElementById("imputTamañoEstampado")
  .addEventListener("input", validarTamañoEstampado);
document
  .getElementById("imputPrecioTamañoEstampado")
  .addEventListener("input", validarPrecioTamañoEstampado);
document
  .getElementById("inputTipoEstampado")
  .addEventListener("input", validarTipoEstampado);
document
  .getElementById("inputPrecioTipo")
  .addEventListener("input", validarPrecioTipo);

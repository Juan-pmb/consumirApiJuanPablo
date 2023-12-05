  // Abre la modal al hacer clic en el enlace
  $("#abrirModal").click(function() {
    $("#modalAnulacion").modal("show");
});

// Puedes agregar lógica adicional aquí al confirmar la anulación
$("#confirmarAnulacion").click(function() {
    // Aquí puedes agregar la lógica para anular la compra
    // Por ejemplo, puedes realizar una solicitud AJAX al servidor
    // y luego cerrar la modal si la anulación fue exitosa
    $("#modalAnulacion").modal("hide");
});
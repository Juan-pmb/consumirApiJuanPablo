function modalClose() {
    alert('Cambios guardados con exito');
    console.log('Cambios guardados con exito');
    // Cierra la modal
    var miModal = new bootstrap.Modal(document.getElementById('miModal'));
    miModal.hide();
  }

  // script.js modal

$(document).ready(function () {
  $('#abrirModal').click(function () {
      $('#confirmarEliminacionModal').modal('show');
  });

  // Puedes agregar lógica de eliminación aquí cuando se hace clic en el botón "Eliminar"
  $('#eliminarBtn').click(function () {
      // Lógica para eliminar el elemento
      // ...

      // Cierra la modal después de eliminar
      $('#confirmarEliminacionModal').modal('hide');
  });
});


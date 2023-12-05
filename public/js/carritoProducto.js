// Funciones JavaScript para manejar el cambio de cantidad
function increaseQuantity() {
    var quantityInput = document.getElementById('quantity');
    quantityInput.value = parseInt(quantityInput.value) + 1;
  }
  
  function decreaseQuantity() {
    var quantityInput = document.getElementById('quantity');
    var currentQuantity = parseInt(quantityInput.value);
  
    // Validar que la cantidad no disminuya a 0
    if (currentQuantity > 1) {
      quantityInput.value = currentQuantity - 1;
    }
  }
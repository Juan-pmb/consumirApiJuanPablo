function validarProducto() {
    var inputNombreProducto = document.getElementById('nombreProducto');
    var mensajeErrorProducto = document.getElementById('mensajeErrorProducto');

    // Expresión regular para validar que solo contiene letras (sin espacios)
    var regex = /^[A-Za-z\s]+$/;

    if (regex.test(inputNombreProducto.value)) {
        inputNombreProducto.classList.remove('invalido');
        inputNombreProducto.classList.add('valido');
        mensajeErrorProducto.textContent = '';
    } else {
        inputNombreProducto.classList.remove('valido');
        inputNombreProducto.classList.add('invalido');
        mensajeErrorProducto.textContent = 'Ingrese un nombre válido (solo letras).';
    }
}



//Lista para almacenar las fichas técnicas agregadas
let fichasTecnicas = [];
    
function buscarFichaTecnica() {
    // Lógica de búsqueda de la ficha técnica
    // Puedes implementar tu propia lógica aquí
    let nombreFichaTecnica = document.getElementById('fichaTecnica').value;

    // Simulación de búsqueda
    if (nombreFichaTecnica === 'Ficha1' || nombreFichaTecnica === 'Ficha2') {
        alert('Ficha técnica encontrada: ' + nombreFichaTecnica);
    } else {
        alert('Ficha técnica no encontrada');
    }
}

function agregarFichaTecnica() {
    // Lógica para agregar la ficha técnica
    // Puedes implementar tu propia lógica aquí
    let nombreFichaTecnica = document.getElementById('fichaTecnica').value;

    // Simulación de agregar a la lista
    fichasTecnicas.push(nombreFichaTecnica);

    // Actualización visual o lógica adicional según tus necesidades
    alert('Ficha técnica agregada: ' + nombreFichaTecnica);
    console.log('Lista de fichas técnicas:', fichasTecnicas);
}



//Agregar / quitar colores
document.addEventListener('DOMContentLoaded', function () {
    const selectColores = document.getElementById('select-colores');
    const btnAgregar = document.getElementById('btn-agregar');
    const listaColoresSeleccionados = document.getElementById('colores-seleccionados');
  
    btnAgregar.addEventListener('click', function () {
        const selectedColor = selectColores.value;
  
        if (selectedColor) {
            agregarColor(selectedColor);
        } else {
            alert('Por favor, seleccione un color.');
        }
    });
  
    function agregarColor(color) {
        const listItem = document.createElement('li');
        listItem.className = 'color-item';
  
        const colorCell = document.createElement('div');
        colorCell.className = 'color-cell';
        colorCell.style.backgroundColor = color;
  
        const textoColor = document.createTextNode(color);
  
        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.addEventListener('click', function () {
            listaColoresSeleccionados.removeChild(listItem);
        });
  
        listItem.appendChild(colorCell);
        listItem.appendChild(textoColor);
        listItem.appendChild(btnEliminar);
  
        listaColoresSeleccionados.appendChild(listItem);
  
        // Limpiar el valor seleccionado en el select
        selectColores.value = '';
    }
  });


//Subir varias imagenes 
const inputImagen = document.getElementById('imagenInsumo');
const previewImagen = document.getElementById('previewImagen');

inputImagen.addEventListener('change', function () {
    const file = inputImagen.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
            previewImagen.src = event.target.result;
            previewImagen.style.display = 'block';
        }
        reader.readAsDataURL(file);
    } else {
        previewImagen.src = '#';
        previewImagen.style.display = 'none';
    }
});
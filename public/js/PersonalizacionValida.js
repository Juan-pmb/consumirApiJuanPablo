    // Función para agregar una nueva fila a la tabla
    function agregarFila() {
        var tablaCuerpo = document.getElementById('tablaCuerpo');
        var fila = tablaCuerpo.insertRow();

        // Celda para la imagen
        var celdaImagen = fila.insertCell(0);
        var inputImagen = document.createElement('input');
        inputImagen.type = 'file';
        celdaImagen.appendChild(inputImagen);

        // Celda para la ubicación del estampado
        var celdaUbicacion = fila.insertCell(1);
        var selectUbicacion = crearSelect(['Anterior', 'Posterior', 'Lateral', 'Dorsal calcetin', 'lateral calcetin', 'plantar calcetin']);
        celdaUbicacion.appendChild(selectUbicacion);

        // Celda para la posición
        var celdaPosicion = fila.insertCell(2);
        var selectPosicion = crearSelect(['centrado', 'superior', 'inferior', 'derecha', 'izquierda', 'dorsal', 'En manga']);
        celdaPosicion.appendChild(selectPosicion);

        // Celda para el tamaño
        var celdaTamaño = fila.insertCell(3);
        var selectTamaño = crearSelect(['5x15', '10x10', '20x30']);
        celdaTamaño.appendChild(selectTamaño);
    }

    // Función para crear un elemento select con opciones
    function crearSelect(opciones) {
        var select = document.createElement('select');
        for (var i = 0; i < opciones.length; i++) {
            var opcion = document.createElement('option');
            opcion.value = opciones[i];
            opcion.text = opciones[i];
            select.appendChild(opcion);
        }
        return select;
    }

    // Agregar una fila inicial
    agregarFila();
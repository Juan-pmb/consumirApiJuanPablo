const url = 'http://localhost:8282/insumos';
let currentPage = 1; // Página actual
const itemsPerPage = 5;

const listarInsumos = async () => {
    // Objeto del html donde se desplegará la información
    let objectId = document.getElementById('contenido');
    let contenido = ''; // Contiene filas y celdas que se desplegarán en el tbody

    // Fetch permite realizar peticiones http a una url
    fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
    .then((res) => res.json()) // Obtener respuesta de la petición
    .then(function (data) { // Se manipulan los datos obtenidos de la url
        let listaInsumos = data.msg; // msg es el nombre de la lista retorna con json
        console.log(listaInsumos);

        listaInsumos.forEach(function (insumo) {
            // Se agrego esta línea para que los valores carguen en el formulario y se puedan editar para enviarlo por la url
            objetoInsumos = Object.keys(insumo).map(key => key + '=' + encodeURIComponent(insumo[key])).join('&');
            console.log(insumo);

            contenido += `<tr>` +
                `<td>${insumo.id}</td>` +
                `<td>${insumo.nombreInsumo}</td>` +
                `<td>${insumo.stockInsumo}</td>` +
                `<td>${insumo.stockMinimo}</td>` +
                `<td>${insumo.stockMaximo}</td>` +
                `<td>${insumo.estado}</td>` +

                `<td class="icons">` +
                    `<div>` +
                        `<button type="button" class="btn" onclick="redireccionarEditar('${objetoInsumos}')">` +
                            `<img src="../img/pencil.ico" alt="" class="iconos-listar">` +
                        `</button>` +
                    `</div>` +
                    `<div>` +
                        
                            `<button type="button" class="btn" onclick="visualizar('${objetoInsumos}')">` +
                                `<img src="../img/show.ico" alt="" class="iconos-listar">` +
                            `</button>` +
                    `</div>` +
                    `<div>` +
                        `<button type="button" class="btn" >` +
                            `<img src="../img/delete.ico" alt="" class="iconos-listar" onclick="confirmarEliminar('${insumo.id}')">` +
                        `</button>` +
                    `</div>` +
                    `<div class="form-check form-switch checkeo">` +
                        `<input class="form-check-input btn-switch" type="checkbox" role="switch" id="flexSwitchCheckDefault">` +
                    `</div>` +
                `</td>` +
                `</tr>`;
        });

        objectId.innerHTML = contenido;
    });
}


// Función para agregar un nuevo proveedor
const agregarInsumo = async (datosInsumo) => {
    // Hacer la solicitud para agregar el nuevo proveedor
    await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(datosInsumo)
    });

    // Después de agregar el proveedor, actualizar la tabla
    listarInsumos();
}

// Llamar a la función cuando se carga la página
listarInsumos();



//REGISTRAR INSUMOS
const registrarInsumo= () => {
    const id = document.getElementById('id').value
    const nombreInsumo = document.getElementById('nombreInsumo').value
    const medidaInsumo = document.getElementById('medidaInsumo').value
    const cantidad = document.getElementById('cantidad').value
    const valorInsumo = document.getElementById('valorInsumo').value
    const categoriaInsumo = document.getElementById('categoriaInsumo').value
    const stockMaximo = document.getElementById('stockMaximo').value
    const stockMinimo = document.getElementById('stockMinimo').value
    const stockInsumo = document.getElementById('stockInsumo').value
    const iva = document.getElementById('iva').value

    
  
   if(id.length == 0){
        document.getElementById('idHelp').value= 'Dato requerido'
    }
    else if(nombreInsumo.length == 0){
        document.getElementById('nombreInsumoHelp').value= 'Dato requerido'
    }
    else if(medidaInsumo.length == 0){
        document.getElementById('medidaInsumoHelp').value= 'Dato requerido'
    }
    else if(cantidad.length == 0){
        document.getElementById('cantidadHelp').value = 'Dato requerido'
    }
    else if(valorInsumo.length == 0){
        document.getElementById('valorInsumoHelp').value = 'Dato requerido'
    }
    else if(categoriaInsumo.length == 0){
        document.getElementById('categoriaInsumoHelp').value = 'Dato requerido'
    }
    else if(stockMaximo.length == 0){
        document.getElementById('stockMaximoHelp').value = 'Dato requerido'
    }
    else if(stockMinimo.length == 0){
        document.getElementById('stockMinimoHelp').value = 'Dato requerido'
    }
    else if(stockInsumo.length == 0){
        document.getElementById('stockInsumoHelp').value = 'Dato requerido'
    }
    else if(iva.length == 0){
        document.getElementById('ivaHelp').value = 'Dato requerido'
    }
    else{
        let insumo ={//variables de clave deben ser las mismas de la api
          //lo primero es la clave, lo segundo es lo que se va a enviar.
            id:id,
            nombreInsumo: nombreInsumo,
            medidaInsumo:medidaInsumo,
            cantidad: cantidad,
            valorInsumo:valorInsumo,
            categoriaInsumo:categoriaInsumo,
            stockMaximo:stockMaximo,
            stockMinimo:stockMinimo,
            stockInsumo:stockInsumo,
            iva:iva
        }
        //body= JSON.stringify(proveedor)
        //alert(body)
        //Fecth permite reaizar peticiones http a una url
        fetch(url, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(insumo), //Convertir el objeto a JSON
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then((res) => res.json())//Obtener respuesta de la petición
        .then(json => {
            alert(json.msg)//Imprimir el mensaje de la transacción
           
        })
    }

}

const actualizarInsumo= () => {
    const id = document.getElementById('id').value
    const nombreInsumo = document.getElementById('nombreInsumo').value
    const medidaInsumo = document.getElementById('medidaInsumo').value
    const cantidad = document.getElementById('cantidad').value
    const valorInsumo = document.getElementById('valorInsumo').value
    const categoriaInsumo = document.getElementById('categoriaInsumo').value
    const stockMaximo = document.getElementById('stockMaximo').value
    const stockMinimo = document.getElementById('stockMinimo').value
    const stockInsumo = document.getElementById('stockInsumo').value
    const iva = document.getElementById('iva').value


    if(id.length == 0){
        document.getElementById('idHelp').innerHTML = 'Dato requerido'
    }
    else if(nombreInsumo.length == ''){
        document.getElementById('nombreInsumoHelp').innerHTML = 'Dato requerido'
    }
    else if(medidaInsumo.length == 0){
        document.getElementById('medidaInsumoHelp').innerHTML = 'Dato requerido'
    }
    else if(cantidad.length == 0){
        document.getElementById('cantidadHelp').innerHTML = 'Dato requerido'
    }
    else if(valorInsumo.length == 0){
        document.getElementById('valorInsumoHelp').innerHTML = 'Dato requerido'
    }
    else if(categoriaInsumo.length == 0){
        document.getElementById('categoriaInsumoHelp').innerHTML = 'Dato requerido'
    }
    else if(stockMaximo.length == 0){
        document.getElementById('stockMaximoHelp').innerHTML = 'Dato requerido'
    }
    else if(stockMinimo.length == 0){
        document.getElementById('stockMinimoHelp').innerHTML = 'Dato requerido'
    }
    else if(stockInsumo.length == 0){
        document.getElementById('stockInsumoHelp').innerHTML = 'Dato requerido'
    }
    else if(iva.length == 0){
        document.getElementById('ivaHelp').innerHTML = 'Dato requerido'
    }
    else{
        let insumo ={
            // _id:document.getElementById('idProveedor').value,
            id:id,
            nombreInsumo: nombreInsumo, //lo primero es la clave, lo segundo es lo que se va a enviar.
            medidaInsumo:medidaInsumo,
            cantidad:cantidad,
            valorInsumo:valorInsumo,
            categoriaInsumo:categoriaInsumo,
            stockMaximo:stockMaximo,
            stockMinimo:stockMinimo,
            stockInsumo:stockInsumo,
            iva:iva,


        }
        //Fecth permite reaizar peticiones http a una url
        fetch(url, {
            method: 'PUT',
            mode: 'cors',
            body: JSON.stringify(insumo), //Convertir el objeto a JSON
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then((res) => res.json())//Obtener respuesta de la petición
        .then(json => {
            console.log(json); 
            alert(json.msg)//Imprimir el mensaje de la transacción
            listarInsumos();
        })
    }

}


const redireccionarEditar=(objetoInsumos) =>{
    document.location.href='/insumos?insumo='+objetoInsumos
}


const editarInsumo=() =>{ 
    console.log('Entré a editarInsumo');
    var urlParams = new URLSearchParams(window.location.search);
    document.getElementById('id').value =urlParams.get('id')
    document.getElementById('nombreInsumo').value =urlParams.get('nombreInsumo')
    document.getElementById('medidaInsumo').value =urlParams.get('medidaInsumo')
    document.getElementById('cantidad').value =urlParams.get('cantidad')
    document.getElementById('valorInsumo').value =urlParams.get('valorInsumo')
    document.getElementById('categoriaInsumo').value =urlParams.get('categoriaInsumo')
    document.getElementById('stockMaximo').value =urlParams.get('stockMaximo')
    document.getElementById('stockMinimo').value =urlParams.get('stockMinimo')
    document.getElementById('stockInsumo').value =urlParams.get('stockInsumo')
    document.getElementById('iva').value =urlParams.get('iva')
    document.getElementById('btnRegistrar').style.display = 'block';
   
    verificarEditar();
    
function verificarEditar() {
    var urlParams = new URLSearchParams(window.location.search);
    var insumo = urlParams.get('insumo');
    var idElement = document.getElementById('id');

    if (insumo) {
      // Estás en la página de edición
      idElement.disabled = true;
      document.getElementById('btnActualizar').style.display = 'block';
      document.getElementById('btnRegistrar').style.display = 'none';
      document.getElementById('btnLimpiar').style.display = 'block';
      document.getElementById('btnCancelar').style.display = 'block';
    } else {
      // No estás en la página de edición
      document.getElementById('btnActualizar').style.display = 'none';
      document.getElementById('btnLimpiar').style.display = 'none';
      document.getElementById('btnCancelar').style.display = 'block';
      document.getElementById('btnRegistrar').style.display = 'block';

    } 
}
}


const visualizar=(objetoInsumos) =>{
    document.location.href='/visualizarInsumo?insumo='+objetoInsumos
}


const visualizarInsumo=() =>{ 
    console.log('Entré a visualizarInsumo');
    var urlParams = new URLSearchParams(window.location.search);
    document.getElementById('id').value =urlParams.get('id')
    document.getElementById('nombreInsumo').value =urlParams.get('nombreInsumo')
    document.getElementById('medidaInsumo').value =urlParams.get('medidaInsumo')
    document.getElementById('cantidad').value =urlParams.get('cantidad')
    document.getElementById('valorInsumo').value =urlParams.get('valorInsumo')
    document.getElementById('categoriaInsumo').value =urlParams.get('categoriaInsumo')
    document.getElementById('stockMaximo').value =urlParams.get('stockMaximo')
    document.getElementById('stockMinimo').value =urlParams.get('stockMinimo')
    document.getElementById('stockInsumo').value =urlParams.get('stockInsumo')
    document.getElementById('iva').value =urlParams.get('iva')


    verificarVisualizar();
    
function verificarVisualizar() {
    var urlParams = new URLSearchParams(window.location.search);
    var insumo = urlParams.get('insumo');
    var id = document.getElementById('id');
    var nombreInsumo = document.getElementById('nombreInsumo');
    var medidaInsumo = document.getElementById('medidaInsumo');
    var cantidad = document.getElementById('cantidad');
    var valorInsumo = document.getElementById('valorInsumo');
    var categoriaInsumo = document.getElementById('categoriaInsumo');
    var stockMaximo = document.getElementById('stockMaximo');
    var stockMinimo = document.getElementById('stockMinimo');
    var stockInsumo = document.getElementById('stockInsumo');
    var iva = document.getElementById('iva');




    if (insumo) {
      // Estás en la página de edición
      id.disabled = true;
      nombreInsumo.disabled= true;
      medidaInsumo.disabled = true;
      cantidad.disabled = true;
      valorInsumo.disabled = true;
      categoriaInsumo.disabled= true;
      stockMaximo.disabled= true;
      stockMinimo.disabled= true;
      stockInsumo.disabled= true;
      iva.disabled= true;
      document.getElementById('btnRegistrar').style.display = 'none';
      document.getElementById('btnLimpiar').style.display = 'none';
      document.getElementById('btnCancelar').style.display = 'block';
    } else {
      // No estás en la página de edición
      document.getElementById('btnLimpiar').style.display = 'block';
      document.getElementById('btnCancelar').style.display = 'block';
      document.getElementById('btnRegistrar').style.display = 'block';

    } 
}

}

// Función para eliminar un insumo por su id
async function eliminarInsumo(id) {
    try {
        const response = await fetch(`http://localhost:8282/insumos?id=${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                // Puedes incluir otros encabezados si es necesario
            },

        });
        if (!response.ok) {
            throw new Error(`Error al eliminar insumo: ${response.status} - ${response.statusText}`);
        console.log(insumos);

        }

        const data = await response.json();
        console.log('Insumo eliminado:', data.msg);

        // Puedes mostrar un mensaje de éxito al usuario si es necesario
        alert('Insumo eliminado exitosamente');

        // Puedes realizar otras acciones aquí si es necesario
    } catch (error) {
        console.error('Error al eliminar insumo:', error.message);
        // Puedes mostrar un mensaje de error al usuario si es necesario
        alert('Error al eliminar insumo');
        // Puedes manejar errores aquí según tus necesidades
    }
}

function confirmarEliminar(id) {
    const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar este insumo?');

    if (confirmacion) {
        // Llamar a la función eliminarInsumo con el id del insumo
        eliminarInsumo(id);
    } else {
        console.log('Eliminación cancelada por el usuario.');
    }
}

// Ejemplo de uso:
// const proveedorNit = '	233456786-9';
// confirmarEliminar(proveedorNit);


if (document.querySelector('#btnRegistrar')){ //Si objeto existe
    document.querySelector('#btnRegistrar')
.addEventListener('click', registrarInsumo)
}

if (document.querySelector('#btnActualizar')){
    document.querySelector('#btnActualizar')
.addEventListener('click', actualizarInsumo)

}
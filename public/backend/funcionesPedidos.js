// const url = 'http://localhost:8282/pedidos';
const url = 'https://apimodulosjuan.onrender.com/pedidos';


const obtenerDatoEspecifico = async () => {
    const apiUrl = 'https://www.datos.gov.co/resource/mcec-87by.json';
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      // Supongamos que quieres obtener el primer dato de la respuesta
      const valor = data[0];
  
      // Ahora puedes usar datoEspecifico como necesites
      console.log('Dato específico:', valor);
  
      // Si necesitas realizar alguna acción con este dato, puedes hacerlo aquí
    } catch (error) {
      console.error('Error al obtener dato específico de la API:', error);
    }
  };
  
  // Llama a la función para obtener el dato específico
  obtenerDatoEspecifico();

  // ...

// Función para obtener y cargar los datos de la API en el campo precioDolar
const cargarDatosDeAPI = async () => {
    const apiUrl = 'https://www.datos.gov.co/resource/mcec-87by.json';

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Supongamos que precioDolar es el campo que quieres cargar
        const precioDolarInput = document.getElementById('precioDolar');

        // Aquí decides cómo quieres seleccionar el valor de la API, por ejemplo, usando el primer elemento
        const primerElementoDeLaApi = data[0];
        const valor = primerElementoDeLaApi && primerElementoDeLaApi.valor;

        // Verificamos si el valor de la API es válido antes de asignarlo al campo
        if (valor !== undefined) {
            precioDolarInput.value = valor;
        }

    } catch (error) {
        console.error('Error al cargar datos de la API:', error);
    }
};

// Llamamos a la función para cargar los datos cuando la página se carga
window.onload = () => {
    cargarDatosDeAPI();
    editarPedido(); // También llamamos a editarCompra, según tu implementación actual
};






const regresarListar = () => {
    window.location.href = '/pedidos';
}

const listarPedidos = async () => {
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
        let listaPedidos = data.msg; // msg es el nombre de la lista retorna con json
        console.log(listaPedidos);

        listaPedidos.forEach(function (pedido) {
            // Se agrego esta línea para que los valores carguen en el formulario y se puedan editar para enviarlo por la url
            objetoPedidos = Object.keys(pedido).map(key => key + '=' + encodeURIComponent(pedido[key])).join('&');
            // console.log(pedido);

            contenido += `<tr>` +
                `<td>${pedido.numPedido}</td>` +
                `<td>${pedido.nombreCliente}</td>` +
                `<td>${pedido.direccionEnvio}</td>` +
                `<td>${pedido.totalPago}</td>` +
                `<td>${pedido.precioDolar}</td>` +
                `<td>${pedido.estado}</td>` +

                `<td class="icons">` +
                    `<div >` +
                        `<button type="button" class="btn" onclick="redireccionarEditar('${objetoPedidos}')">` +
                            `<img src="../img/pencil.ico" alt="" class="iconos-listar">` +
                        `</button>` +
                    `</div>` +
                    `<div >` +
                            `<button type="button" class="btn" onclick="visualizar('${objetoPedidos}')">` +
                                `<img src="../img/show.ico" alt="" class="iconos-listar">` +
                            `</button>` +
                    `</div>` +

                    `<div >` +
                        `<button type="button" class="btn" >` +
                            `<img src="../img/delete.ico" alt="" class="iconos-listar" onclick="confirmarEliminar('${pedido.numPedido}')">` +
                        `</button>` +
                    `</div>` +

                    `<div class="form-check form-switch checkeo ml-3">` +
                        `<input class="form-check-input btn-switch" type="checkbox" role="switch" id="flexSwitchCheckDefault">` +
                    `</div>` +
                `</td>` +
                `</tr>`;
        });

        objectId.innerHTML = contenido;     
    });
}


// Función para agregar un nuevo proveedor
const agregarPedido = async (datosPedido) => {
    // Hacer la solicitud para agregar el nuevo pedido
    await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(datosPedido)
    });

    // Después de agregar el proveedor, actualizar la tabla
    listarPedidos();
}

// Llamar a la función cuando se carga la página
listarPedidos();


//REGISTRAR INSUMOS
const registrarPedido= () => {
    const numPedido = document.getElementById('numPedido').value
    const nombreCliente = document.getElementById('nombreCliente').value
    const direccionEnvio = document.getElementById('direccionEnvio').value
    const totalPago = document.getElementById('totalPago').value
    const formaPago = document.getElementById('formaPago').value
    const estado = document.getElementById('estado').value
    const precioDolar = document.getElementById('precioDolar').value

 

    
   if(numPedido.length == 0){
        document.getElementById('numPedidoHelp').value= 'Dato requerido'
    }
    else if(nombreCliente.length == 0){
        document.getElementById('nombreClienteHelp').value= 'Dato requerido'
    }
    else if(direccionEnvio.length == 0){
        document.getElementById('direccionEnvioHelp').value= 'Dato requerido'
    }
    else if(totalPago.length == 0){
        document.getElementById('totalPagoHelp').value = 'Dato requerido'
    }
    else if(formaPago.length == 0){
        document.getElementById('formaPagoHelp').value = 'Dato requerido'
    }
    else if(estado.length == 0){
        document.getElementById('estadoHelp').value = 'Dato requerido'
    }
    else if(precioDolar.length == 0){
        document.getElementById('precioDolarHelp').value = 'Dato requerido'
    }
    else{
        let pedido ={//variables de clave deben ser las mismas de la api
          //lo primero es la clave, lo segundo es lo que se va a enviar.
          numPedido:numPedido,
          nombreCliente: nombreCliente,
          direccionEnvio:direccionEnvio,
          totalPago: totalPago,
          formaPago:formaPago,
          estado:estado,
          precioDolar:precioDolar
           
        }
        //body= JSON.stringify(proveedor)
        //alert(body)
        //Fecth permite reaizar peticiones http a una url
        fetch(url, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(pedido), //Convertir el objeto a JSON
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then((res) => res.json())//Obtener respuesta de la petición
        .then(json => {
            console.log(json.msg)
            alert(json.msg)//Imprimir el mensaje de la transacción
            setTimeout(() => {
                regresarListar();
            },1000);
        })
       
    }

}

const actualizarPedido= () => {
    const numPedido = document.getElementById('numPedido').value
    const nombreCliente = document.getElementById('nombreCliente').value
    const direccionEnvio = document.getElementById('direccionEnvio').value
    const totalPago = document.getElementById('totalPago').value
    const formaPago = document.getElementById('formaPago').value
    const estado = document.getElementById('estado').value
    const precioDolar = document.getElementById('precioDolar').value
  
    if(numPedido.length == 0){
        document.getElementById('numPedidoelp').innerHTML = 'Dato requerido'
    }
    else if(nombreCliente.length == ''){
        document.getElementById('nombreClienteHelp').innerHTML = 'Dato requerido'
    }
    else if(direccionEnvio.length == 0){
        document.getElementById('direccionEnvioHelp').innerHTML = 'Dato requerido'
    }
    else if(totalPago.length == 0){
        document.getElementById('totalPagoHelp').innerHTML = 'Dato requerido'
    }
    else if(formaPago.length == 0){
        document.getElementById('formaPagoHelp').innerHTML = 'Dato requerido'
    }
    else if(estado.length == 0){
        document.getElementById('estadoHelp').innerHTML = 'Dato requerido'
    }
    else if(precioDolar.length == 0){
        document.getElementById('precioDolarHelp').innerHTML = 'Dato requerido'
    }
    else{
        let pedido ={
            // _id:document.getElementById('idProveedor').value,
            numPedido:numPedido,
            nombreCliente: nombreCliente,
            direccionEnvio:direccionEnvio,
            totalPago: totalPago,
            formaPago:formaPago,
            estado:estado,
            precioDolar:precioDolar
        }
        //Fecth permite reaizar peticiones http a una url
        fetch(url, {
            method: 'PUT',
            mode: 'cors',
            body: JSON.stringify(pedido), //Convertir el objeto a JSON
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then((res) => res.json())//Obtener respuesta de la petición
        .then(json => {
            console.log(json); 
            alert(json.msg)//Imprimir el mensaje de la transacción
            listarPedidos();
        })
    }

}



const redireccionarEditar=(objetoPedidos) =>{
    document.location.href='/editarPedido?pedido='+objetoPedidos
    alert(objetoPedidos)  
}


const editarPedido=() =>{ 
    console.log('Entré a editarPedido');
    var urlParams = new URLSearchParams(window.location.search);
    document.getElementById('numPedido').value =urlParams.get('numPedido')
    document.getElementById('nombreCliente').value =urlParams.get('nombreCliente')
    document.getElementById('precioDolar').value =urlParams.get('precioDolar')
    document.getElementById('direccionEnvio').value =urlParams.get('direccionEnvio')
    document.getElementById('totalPago').value =urlParams.get('totalPago')
    document.getElementById('formaPago').value =urlParams.get('formaPago')
    document.getElementById('estado').value =urlParams.get('estado')
    // document.getElementById('btnRegistrar').style.display = 'block';
   
    verificarEditar();
    
function verificarEditar() {
    var urlParams = new URLSearchParams(window.location.search);
    var pedido = urlParams.get('pedido');
    var idElement = document.getElementById('numPedido');

        // if (pedido) {
        // // Estás en la página de edición
        // idElement.disabled = true;
        // document.getElementById('btnGuardarEditar').style.display = 'block';
        // document.getElementById('btnCancelarEditar').style.display = 'block';
        // } 
        // if (!pedido) {
        // // No estás en la página de edición
        //  document.getElementById('btnCancelarEditar').style.display = 'block';
        //  document.getElementById('btnGuardarEditar').style.display = 'block';

        //  } 
}
}

editarPedido();


const visualizar=(objetoPedidos) =>{
    document.location.href='/visualizarPedido?pedido='+objetoPedidos
}

const visualizarPedido=() =>{ 
    console.log('Entré a visualizarPedido');
    var urlParams = new URLSearchParams(window.location.search);
    document.getElementById('numPedido').value =urlParams.get('numPedido')
    document.getElementById('nombreCliente').value =urlParams.get('nombreCliente')
    document.getElementById('direccionEnvio').value =urlParams.get('direccionEnvio')
    document.getElementById('totalPago').value =urlParams.get('totalPago')
    document.getElementById('formaPago').value =urlParams.get('formaPago')
    document.getElementById('estado').value =urlParams.get('estado')
    document.getElementById('precioDolar').value =urlParams.get('precioDolar')

    verificarVisualizar();
    
function verificarVisualizar() {
    var urlParams = new URLSearchParams(window.location.search);
    var pedido = urlParams.get('pedido');
    var idElement = document.getElementById('nombreCliente');

    
    if (pedido) {
      // Estás en la página de edición
      idElement.disabled = true;
      document.getElementById('btnRegistrar').style.display = 'block';
      document.getElementById('btnLimpiar').style.display = 'block';
      document.getElementById('btnCancelar').style.display = 'block';
    } else {
      // No estás en la página de edición
      document.getElementById('btnLimpiar').style.display = 'none';
      document.getElementById('btnCancelar').style.display = 'block';
      document.getElementById('btnRegistrar').style.display = 'block';

    } 
}


}


// Función para eliminar un proveedor por su nit
async function eliminarPedido(numPedido) {
    try {
        const response = await fetch(`http://localhost:8282/pedidos?numPedido=${numPedido}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                // Puedes incluir otros encabezados si es necesario
            },
        });

        if (!response.ok) {
            throw new Error(`Error al eliminar pedido: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Pedido eliminado:', data.msg);

        alert('Pedido eliminado exitosamente');

    } catch (error) {
        console.error('Error al eliminar pedido:', error.message);
        alert('Error al eliminar pedido');
    }
}

function confirmarEliminar(numPedido) {
    const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar este pedido?');

    if (confirmacion) {
        // Llamar a la función eliminarInsumo con el nit del proveedor
        eliminarPedido(numPedido);
    } else {
        console.log('Eliminación cancelada por el usuario.');
    }
}

// Ejemplo de uso:
// const proveedorNit = '	233456786-9';
// confirmarEliminar(proveedorNit);


if (document.querySelector('#btnGuardar')){ //Si objeto existe
    document.querySelector('#btnGuardar')
.addEventListener('click', registrarPedido)
}

if (document.querySelector('#btnActualizar')){
    document.querySelector('#btnActualizar')
.addEventListener('click', actualizarPedido)

}
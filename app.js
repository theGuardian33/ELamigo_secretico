
let participantes = []; // Array para guardar los nombres
let inputNombre = document.querySelector('#amigo'); // Selecciona el input
let botonAgregar = document.querySelector('.button-add'); // Selecciona el botón de adicionar
let listaParticipantes = document.querySelector('#listaAmigos'); // Selecciona la lista de amigos
let botonSortear = document.querySelector('.button-draw'); // Selecciona el botón de sortear
let resultadoDiv = document.querySelector('#resultado'); // Selecciona el div para mostrar el resultado

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let nombre = inputNombre.value.trim(); // Obtiene el valor del input y elimina espacios en blanco
    if (nombre) {
        participantes.push(nombre); // Agrega el nombre al array
        let li = document.createElement('li'); // Crea un nuevo elemento de lista
        li.textContent = nombre; // Establece el texto del elemento
        listaParticipantes.appendChild(li); // Agrega el elemento a la lista en el HTML
        inputNombre.value = ''; // Limpia el input
    } else {
        alert('PON UN NOMBRE QUE NO SOY ADIVINO'); // Muestra un alert si el input está vacío
    }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (participantes.length === 0) {
        alert('No hay amigos en la lista para sortear.'); // Verifica si la lista está vacía
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * participantes.length); // Genera un índice aleatorio
    let amigoSecreto = participantes[indiceAleatorio]; // Selecciona un amigo secreto
    resultadoDiv.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`; // Muestra el resultado
}


// obtuve bastante ayuda de luri lo confiezo pero aprendi demasiado Gracias a luri :).

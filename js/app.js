// Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-posteos');
let posts = [];


// Eventos
eventListeners();
function eventListeners() {
    formulario.addEventListener('submit', agregarPost);

}



// Funciones
function agregarPost(e) {

    e.preventDefault();

    // Textarea donde se escribe el post
    const post = document.querySelector('#post').value;

    console.log(post);// Envio a consola el post para visualizarlo.

    // Validar
    if(post === '') {
        mostrarError('Que picardia 😎 , no podes poner un post vacio 🙀!');
        return; // Detener la ejecucion
    }
}

// Mostrar mensaje de error
function mostrarError(error) {
    // console.log(error);
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error; // Asignar el error que llega por parametro.
    mensajeError.classList.add('error');
    mensajeError.classList.add('u-full-width');


    // Insertar en el DOM
    const contenedorError = document.querySelector('#formulario');
    contenedorError.appendChild(mensajeError);

    // Eliminar el error luego de 3 segundos
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}
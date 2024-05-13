// Variables
const formulario = document.querySelector('#formulario');
const listaPosteos = document.querySelector('#lista-posteos');
let posts = [];


// Eventos
eventListeners();
function eventListeners() {
    // Agregar un post
    formulario.addEventListener('submit', agregarPost);

    // Cuando el documento esta listo
    document.addEventListener('DOMContentLoaded', () => {
        posts = JSON.parse(localStorage.getItem('posts')) || []; // Si no hay posts, el arreglo de posts es vacio.

        console.log(posts);
        
        crearHTML();
    })

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
    // console.log('Agregando post...');

    const postObject = {
        id: Date.now(),
        post
    }
    // Agregar al arreglo de posts
    posts = [...posts, postObject]; // Spread Operator. Copiar todos los elementos de un arreglo. En este caso, el arreglo vacio. Luego, agregar el nuevo post.  
    // console.log(posts);

    // Una vez agregado, lo insertamos en el HTML
    crearHTML();

    // Reiniciar el formulario
    formulario.reset();
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

// Muestra los  posts
function crearHTML() {

    limpiarHTML();

    if(posts.length > 0){
        posts.forEach(post => {
            // Crear el elemento li, contenedor del post.
            const li = document.createElement('li');

            // Añadir el texto
            li.innerText = post.post;

            // Insertarlo en la lista de posteos
            listaPosteos.appendChild(li);
        })
    }

    sincronizarStorage();
}

// Sincronizar Storage. Agrega los posts al LocalStorage
function sincronizarStorage() {
    localStorage.setItem('posts', JSON.stringify(posts));
}

// Limpia HTML
function limpiarHTML() {
    while (listaPosteos.firstChild) {
        listaPosteos.removeChild(listaPosteos.firstChild);
    }
}
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
    console.log('agregando posteo...');
}
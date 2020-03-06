'use strict'
// Local storage

//Comprobar disponibilidad de local storage

if(typeof(Storage) !== 'undefined'){
    console.log("Storage Disponible");
}else{
    console.log("Storage No disponible");
}

// Guardar datos en el localstorage
localStorage.setItem("titulo", "curso de symfony de Victor Robles");

//como recuperar elemento

document.querySelector("#peliculas").innerHTML= localStorage.getItem("titulo");
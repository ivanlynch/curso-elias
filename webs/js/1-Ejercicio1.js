'use strict'

window.addEventListener('load', function(){
    console.log("dom cargado");

    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed")
    box_dashed.style.display = "none";

    formulario.addEventListener('submit', function(){
        console.log("Evento submit capturado");

        var nombre = document.querySelector("#nombre").value;
        var apellido = document.querySelector("#apellido").value;
        var edad = parseInt(document.querySelector("#edad").value);

        if(nombre.trim() == null || nombre.trim().length == 0){
            alert("El nombre no es valido")
            return false;
        }
        if(apellido.trim() == null || apellido.trim().length == 0){
            alert("El apellido no es valido")
            return false;
        }
        if(edad == null || nombre <= 0 || isNaN(edad)){
            alert("La edad no es valida")
            return false;
        }
        
        box_dashed.style.display = "block";

        var datos_usuario = [nombre, apellido, edad];

        var indice;
        for(indice in datos_usuario){
            var parrafo = document.createElement("p");
            parrafo.append(datos_usuario[indice]);
            box_dashed.append(parrafo);
        }

    });
});
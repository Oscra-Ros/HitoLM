console.log("funciona");

var contador = 20;

function mover(){
    var objetos = document.getElementById("objeto");
    objetos.style.marginTop = contador + 'px';
    contador = contador + 20;
}

function ocultar(){
    var imagen = document.getElementById("imagen").style.visibility="hidden";
}

function mostrar(){
    var imagen = document.getElementById("imagen").style.visibility="visible";
}
console.log("funciona");

function recoger(){

    var email = document.getElementById("email").value;
    var ciudad = document.getElementById("ciudades").value;
    var curso = document.nombreform.curso.value;
    var fecha = document.getElementById("fechaini").value;
    var fechaf = new Date(fecha);
    var hoy = new Date();

    if(fechaf < hoy){
        window.alert("No puedes elegir fechas pasadas");
    }else{
        window.alert("Email: " + email + " Ciudad: " + ciudad + " Curso Elegido: " + curso + " Fecha Inicio: " + fecha);  
    }

}
console.log("funciona");

var numero = window.prompt("Dime un numero del 1 al 100");
let suma = 0;

var numerito = parseInt(numero)

for(var i; numerito<=1000;){

    if(numerito%2==0){
        document.write(numerito);
        numerito++;
    }else{
        document.write(numerito);
        numerito=numerito+2;
    }

    document.write(" ");
    suma = suma + numerito;

}

document.write("<br>La suma total de los numeros es: " + suma);
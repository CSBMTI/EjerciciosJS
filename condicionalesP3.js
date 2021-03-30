//pedir datos de pantalla
// npm install prompt-sync
//const prompt = require('prompt-sync')();
//var nombre = prompt("Ingresa ntu nombre: ");
//console.log("Hola "+ nombre);
const prompt = require('prompt-sync')();
//var horaDia = prompt( " Dame la hora: " );
//console.log(horaDia);
/*
if( horaDia <= 3){
    console.log( "Está el equipo de futbol entrenando " );
}
else if( (horaDia > 3) && (horaDia <= 6) ){
    console.log( "Esta el equipo de Fubol Americano E");
}
else if( ( horaDia > 6 ) && ( horaDia <= 9 ) ){
    console.log( "Está el equipo de Atletismo");
}
*/
/*
switch(horaDia <= 3){
    case true:
        console.log( "Está el equipo de futbol entrenando " );
        break;
    case false:
        console.log( "Está entrenando otro equipo" );
        break;
}
*/
// el horario que el corresponde
var deporte = prompt( "Por Favor dime el nombre del deporte: " );
switch( deporte ){
    case "Futbol":
        console.log("Horario: 1 a 3 PM");
        break;
    case "Americano":
        console.log("Horario: 3 a 6 PM");
        break;
    case "Atletismo":
        console.log("Horario: 6 a 9 PM");
        break;
}
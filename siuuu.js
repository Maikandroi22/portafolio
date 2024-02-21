console.log("clase 13: objetos en javascript")
var nombre = "juan"
var edad = 30;
var monto = 1000.89;
var numero = BigInt(1000000000000)
var activo = true;
var hijo = null;
var hijo2 = undefined;
var fecha = new Date();
var objeto = {
    nombre: "juan",
    edad: 30 
}

var suma = 5 + 5
var resta = 5 - 5
var mutiplicacion = 5 * 5
var division = 5/ 5
var modulo = 5 % 5

var and = true && true;
var or = true || false;

var igual = 5 == "5";
var iguaLTipo = 5 === "5";
var diferente = 5 != "5";
var diferentetipo = 5 !== "5";
var mayor = 5 > 5;
var menor = 5 < 5;
var mayorIgual = 5 >= 5;
var menorIgual = 5 <= 5;

// ESTRUCTURA IF - IF (CONDICION){BLOQUE DE CODIGO}
if ( 5 > 5 ){console.log("es mayor")}
if (mayorIgual){console.log("es mayor")}
if(edad === 31 && nombre === "juan"){console.log("juan es mayor de edad")}
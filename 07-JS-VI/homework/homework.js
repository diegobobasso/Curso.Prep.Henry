// Do not change any of the function names

const { stringify } = require("git-url-parse");

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:

  var palabra = [] ;
  var retorno = "";
  
  for (var contador = 0 ; contador < nombre.length ; contador++) {
      palabra[contador] = nombre [contador] ;
  }

  palabra[0] = nombre[0].toUpperCase();
  retorno = palabra.reduce(function(acc,elemento){return acc + elemento;}) ;
  return retorno ;

}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:

  cb();

}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:

  return cb(n1, n2) ;

}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:

  var suma = 0 ;

  suma = numeros.reduce( function( acc, element) {return acc + element;}, 0 ) ;

  cb(suma);

}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:


  for(var contador = 0 ; contador < array.length ; contador++ ) {

    cb(array[contador]);
  
  }

}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:

  var miArray = []

  for (var contador = 0 ; contador < array.length ; contador++) {

    miArray[contador] = cb(array[contador]);

  }

  return miArray ;

}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:

  var miArray = [] ;
  var elemento = 0 ;

  for ( var contador = 0 ; contador < array.length ; contador++) {

    if (array[contador][0] === "a") {

      miArray[elemento] = array[contador];
      elemento++;

    }

  }

  return miArray ;
  
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};

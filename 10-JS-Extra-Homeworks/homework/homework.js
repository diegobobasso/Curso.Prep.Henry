// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  
  
let propiedades = [];
let valores = [];
let devolucion = [];
propiedades = Object.keys(objeto);
valores = Object.values(objeto);

for(contador=0;contador<propiedades.length;contador++){
  devolucion[contador] = [];
  devolucion[contador][0] = propiedades[contador];
  devolucion[contador][1] = valores[contador];
}

return devolucion;

}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  var devolucion = {} ;
  var evalua ;

  for(var contador = 0 ; contador < string.length ; contador++) {
    evalua = string[contador];
    
    if(!(devolucion.hasOwnProperty(evalua))) {
      
      devolucion[evalua] = 1;
      
    } 
    else {
      
      devolucion[evalua] = devolucion[evalua] + 1;
    
    }
    
  }

  return devolucion;

}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  let cadena2 = [];
  let cadena3 = [];
  let cadena4 = "";
  let evalua = "";
  let evalua2 = "";
  let cont = 0;
  let cont2 = 0;

  cadena2 = s.split("");
  
  for(cont = 0 ; cont < cadena2.length ; cont++) {
      evalua = cadena2[cont];
      evalua2 = evalua.toUpperCase();
      if(evalua === evalua2) {
          cadena3[cont2] = cadena2[cont];
          cont2++;   
      }
      
  }
  
  for(cont = 0 ; cont < cadena2.length ; cont++) {
      evalua = cadena2[cont];
      evalua2 = evalua.toLowerCase();
      if(evalua === evalua2) {
          cadena3[cont2] = cadena2[cont];
          cont2++;
      }

  }

  cadena4 = cadena3.join("");
  
  return cadena4;
  


}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  
  let cadena = [];
  let cont1 = 0 ;
  let letra ;
  let palabra = [] ;
  let devolucion = "";

    cadena = str.split("");
    
    for(cont1 = 0; cont1 < cadena.length ; cont1++) {
    letra = cadena[cont1] ;
    
    if (letra === " " && palabra.length === 0) {
        devolucion = devolucion + " ";
    }
    else if (letra === " " && palabra.length > 0 ) {
        palabra.reverse() ; 
        devolucion = devolucion + palabra.join("");
        if (cont1 < cadena.length - 1) {
            devolucion = devolucion + " " ;
        }
        palabra = [];
        }
    else if ( letra !== " " && cont1 === (cadena.length - 1) ) {
        palabra.push(cadena[cont1]) ;
        palabra.reverse() ; 
        devolucion = devolucion + palabra.join("");
        palabra = [];
    }
    else if (letra !== " ") {
        palabra.push(cadena[cont1]) ;
        }
    
  }
  
  return devolucion;


} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí


  var numero2 = numero.toString() ;
  var numero3 = [];
  numero3 = numero2.split("");
  numero3.reverse();
  numero3 = numero3.join("");

  if(numero2 === numero3) {
    return 'Es capicua' ;
  }
  else {
    return 'No es capicua' ;
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  let cadena2 = [];
  let cadena3 = [];
  let cadena4 = "";
  let evalua = "";
  let evalua2 = "";
  let cont = 0;
  let cont2 = 0;

  cadena2 = cadena.split("");
  
  for(cont = 0 ; cont < cadena2.length ; cont++) {
      evalua = cadena2[cont];
      if(evalua !== 'a' && evalua !== 'A' && evalua !== 'b' && evalua !== 'B' && evalua !== 'c' && evalua !== 'C') {
          cadena3[cont2] = cadena2[cont];
          cont2++;
      }

  }

  cadena4 = cadena3.join("");

  return cadena4;


}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  
  let arreglo = arr ;
  let arreglo2 = [] ;
  let tamanoArreglo = arreglo.length ;
  let tamano = 0;
  let contador ;
  

  for( tamano = 1 ; tamano  < 256 ; tamano++) {
      for (contador = 0 ; contador < tamanoArreglo ; contador++) {
          if(arreglo[contador].length === tamano) {
              arreglo2.push(arreglo[contador]);
          }

      } 
  }

  
  return arreglo2;




}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  


  let devolucion = [];
  let cont1 = 0;
  let cont2 = 0;

  for(cont1 = 0 ; cont1 < arreglo1.length ; cont1++) {        
      for(cont2 = 0 ; cont2 < arreglo2.length ; cont2++) {
          if(arreglo1[cont1] === arreglo2[cont2]) {
          devolucion.push(arreglo1[cont1]);
          }
      }
  }
  

  return devolucion;



}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};


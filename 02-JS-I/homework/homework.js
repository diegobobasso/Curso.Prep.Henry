// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Hola";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 2;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  return str
}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  var laSuma = x + y ;
  return laSuma;
}

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  var laResta = x - y;
  return laResta;
  
}

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  var laMult = x * y ;
  return laMult;
  
}

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  var laDiv = x / y;
  return laDiv;
  
}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if (x === y) {
    return true;
  }
  else {
    return false;
  
  } 
}

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  if (str1.length === str2.length) {
    return true;

  }
  else {
    return false; 
  }
}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num < 90) {
    return true;
  }
  else {
    return false;
  }
}

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num > 50) {
    return true;
  }
  else {
    return false;
  }
}

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  var Resto = x % y;
  return Resto;
}

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  
  var devolucion = num % 2 ;

  if (devolucion === 0) {

    return true ;

  }

  else {

    return false ;

  }
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  
  
  var devolucion = num % 2 ;

  if (devolucion === 1) {

    return true ;

  }

  else {

    return false ;
    
  }
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  
  var devolucion = num * num ;

  return devolucion ;

}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  
  var devolucion = num * num * num ;

  return devolucion;

}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  
  var contador = 1 ;
  var devolucion = num ;

  for ( contador > 0; contador < exponent ; contador++) {
       
   devolucion = devolucion * num ;
  }

  return devolucion ;


}

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  
  var devolucion = Math.round(num);

  return devolucion;

}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  
  var devolucion = Math.ceil(num);

  return devolucion;
  
}

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  
  var devolucion = Math.random() ;

  return devolucion ;

}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  
var devolucion ;
  
  if (numero < 0) { 

    devolucion = "Es negativo" ;

  }

  else if (numero > 0) {
    
    devolucion = "Es positivo" ;
    
  }

  else {   
    
    devolucion = false ;

  }

  return devolucion ;

}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:

  var devolucion = str + '!';

  return devolucion ;

}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:

  var devolucion = nombre + ' ' + apellido ;

  return devolucion ;
  
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  
  var devolucion = 'Hola ' + nombre + '!' ;
  
  return devolucion ;

}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  
  var devolucion = alto * ancho ;

  return devolucion ;

}


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  
  var devolucion = lado * 4 ;

  return devolucion ;

}


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí

  var devolucion = ( base * altura ) / 2 ;
  
  return devolucion ;

}


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  
  var devolucion = euro * 1.20 ;
  
  return devolucion ;

}


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  
  var devolucion ;

  var evaluarvariable = typeof ( letra ) ;

  if (evaluarvariable === 'string') {

     if ( letra.length > 1) {

        devolucion = "Dato incorrecto" ;
        
        return devolucion ;

     }

     if (letra === 'a') {

         devolucion = "Es vocal" ;
         return devolucion ;

     }

     else if (letra === 'A') {
         
         devolucion = "Es vocal" ;
         return devolucion ;
     }
        
     else if (letra === 'e') {
         
         devolucion = "Es vocal" ;
         return devolucion ;
 
     }

      else if (letra === 'E') {
         
          devolucion = "Es vocal" ;
          return devolucion ;
   
     }

      else if (letra === 'i') {
          
          devolucion = "Es vocal" ;
          return devolucion ;
     
      }

      else if (letra === 'I') {
          
          devolucion = "Es vocal" ;
          return devolucion ;
       
      }

      else if (letra === 'o') {
          
          devolucion = "Es vocal" ;
          return devolucion ;
         
      }

      else if (letra === 'O') {
          
          devolucion = "Es vocal" ;
          return devolucion ;
           
      }

      else if (letra === 'u') {
          
          devolucion = "Es vocal" ;
          return devolucion ;
             
      }

      else if (letra === 'U') {
          
          devolucion = "Es vocal" ;
          return devolucion ;
               
      }
        
      else {
          
        devolucion = "Dato incorrecto"

        return devolucion ;

     }

    }

    else {

      devolucion = "Dato incorrecto"

      return devolucion ;

    }


}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};

// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:

  // mayuscula tiene la propiedad nombre: (andres, felipe, juan)
  // crear una función que ponga en mayusculas la primera letra de cada string en el array. 
        /*-Para poder hacer el callback- */
  // utilizar la función para cada elemento del array.

   // console.log (nombre)

  //String.prototype.capitalizar = function() 
  //{ return this.charAt(0).toUpperCase() + this.slice (1) };
  /*  var caja = nombre. map (function (elemento) */
  //                        {
  //                          return elemento.capitalizar()
  //                        }
  //                      )

  return nombre[0].toUpperCase() + nombre.slice (1)
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:

  // crear una función 
  // Como el callback es una función dentro de otra función, debo invocar 'invocarCallback' dentro de la funcion creada 

// function llamar() {return invocarCallback}
// return llamar

cb();
// console.log(cb)
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:

  
  // console.log(cb);
  return cb(n1,n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:

 
  var nuevo = numeros.reduce (function ( acumulador, elemento) { return acumulador + elemento }  , 0)
  cb(nuevo)
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:

  // FORMA 1 RESOLVER: array.forEach(function (elemento) {cb (elemento)})

  // FORMA 2 RESOLVER: 
  array.forEach(cb)

  // FORMA 3 RESOLVER: Creando un for que ejecute lo que haría el forEach por detras. 
  
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:

  //  Crear un array: _Caja1
  // pasar cada valor de 'array' (a:mal definido) por cb
  // empujar el valor devuelto por 'cb' al array 
  // caja 2.length debe ser igual a caja1.length

 // FORMA 1 RESOLVER: utilizar map directamente.
          /*var caja1= array.map(cb)
          return caja1*/

  // FORMA 2 DE RESOLVER: Hacer lo que hace map por detras. 
  
  console.log(array) ;
  console.log(cb);

  var caja1=[]
  for (i=0; i<array.length ; i++) { caja1.push(cb(array[i])) }
    return caja1
  }


function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:

  // crear un arraynuevo: caja
  // array {ana, pedro, pablo, aleja}
  // seleccionar las palabras que comiencen con la letra 'a'
  // 
  // empujar esas palabras al array.
  
  console.log(array)

  var caja = []
  
  // for (i=0; i<array.length ; i++) { if (array[i].charAt(0) === 'a') {return array[i]} {continue}}
  // for (i=0; i<array.length ; i++) { if (array[i].charAt(0) !== 'a') {continue} else {caja.push(array[i]) }
  for (i=0; i<array.length ; i++) 
    { if (array[i].charAt(0) === 'a') 
      {caja.push (array[i]) } 
    }
return caja
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

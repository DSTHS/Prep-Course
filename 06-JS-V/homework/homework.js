// No cambies los nombres de las funciones.

const { prototype } = require("@11ty/eleventy");

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:
  
  // Clase 'usuario'
  // opciones {'usuario', 'nombre', 'email', 'password'}
  // opciones es un constructor
  // función saludar ('Hola, mi nombre es ' + this.nombre)
  // saludar es un metodo del constructor no del objeto.

  class Usuario 
    {constructor (opciones)
                          {
                          this.usuario = opciones.usuario,
                          this.nombre = opciones.nombre,
                          this.email = opciones.email,
                          this.password = opciones.password
                          } 
      saludar () { return 'Hola, mi nombre es '+ this.nombre}
    } 
    return Usuario;
}

function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:

  // this.saludar=function() {'Hello World'}
  // console .log (Constructor)
  
  Constructor.prototype.saludar = function () { return 'Hello World!'}
    
}

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"

   
  // class String { constructor () {}
  // reverse () { return reverse (this[i]) }
  
  String.prototype.reverse = function () 
  { var caja = ''; 
    for (var i= this.length-1; i>=0 ; i-- )  { caja = caja + this[i] } 
    return caja;  
  }
    
}


// ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
  //Ej: { 
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }

  class Persona {
    constructor(nombre, apellido, edad, domicilio) /*Escribir los argumentos que recibe el constructor*/  // Crea el constructor:
    { this.nombre = nombre,
      this.apellido = apellido,
      this.edad = edad,
      this.domicilio = domicilio,
      this.detalle = function () 
        { return { RazonSocial:this.nombre, Ascendencia: this.apellido, vetustez:this.edad, Residencia:this.domicilio} }
      this.últimoargumento = function () 
        { return  this.nombre, this.edad, this.domicilio, this.apellido} 
    
    }
}

function crearInstanciaPersona(nombre, apellido, edad, dir) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada

  // new Persona

  var Pepito = new Persona ('Juan', 'Perez', 22, 'Saavedra 123')
  var Paquito = new Persona ('Andres', 'Panfilio', 35, 'Bosigas sur')
  //console.log (Pepito.detalle())
  //console.log (Paquito)
  //console.log(Paquito.últimoargumento())
  return Pepito
}
  
function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
  //Ej: "Juan, 22 años"

  // crear clase persona con los parámetros edad y nombre.
  // prototype.datos () { }
  
    //Persona.prototype.datos =function(){return ''+ nombre, + edad + ''}
    // console.log (datos)


Persona.prototype.datos =function(){return this.nombre + ', ' + this.edad + ' años'}
   // console.log (datos)
   // return datos    Como el ejercicio no está pidiendo que se regrese el resultado, cuando este se retorna falla. 
}
  

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo, 
  Persona
};

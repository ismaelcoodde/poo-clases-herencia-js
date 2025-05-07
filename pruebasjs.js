// Funcion constructor de objetos de tipo Persona
// (funcion constructor para crear un objeto de tipo persona que va a tener 3 atributos)
function Persona(nombre, apellido, email){ //<-- Parametros
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}
let padre = new Persona('Ismael', 'Cruz', 'ibcruz@gmail.com');
let madre = new Persona('Antomia', 'Maria','taty@gmail.com')
console.log(padre, madre)
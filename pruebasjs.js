

//metiendo una funcion dentro del constructor de objetos




function Persona(nombre, apellido, email){ 
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}
let padre = new Persona('Ismael', 'Cruz', 'ibcruz@gmail.com');
let madre = new Persona('Antomia', 'Maria','taty@gmail.com')
console.log(padre)
console.log(padre.nombreCompleto());
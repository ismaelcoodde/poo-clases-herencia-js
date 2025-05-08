

//añado nuevos valores y propiedades




function Persona(nombre, apellido, email){ 
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}
Persona.prototype.tel = 234234;
let padre = new Persona('Ismael', 'Cruz', 'ibcruz@gmail.com');
let madre = new Persona('Antomia', 'Maria','taty@gmail.com')
madre.tel = 616831983
console.log(padre.tel)
console.log(madre.tel);
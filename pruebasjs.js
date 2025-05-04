let persona = {
    nombre: 'Ismael',
    apellidos: 'Cruz Fernández',
    edad: 30,
    nombreCompleto: function(){
        return this.nombre + " " + this.apellidos;
    }
}
console.log(persona.nombreCompleto());

// Esto es un objeto que dentro haces una función
let persona = {
    nombre: 'Ismael',
    apellidos: 'Cruz Fernández',
    edad: 30,
    nombreCompleto: function(){
        return this.nombre + " " + this.apellidos;
    }
}
console.log(persona.nombreCompleto());


// Recorre todas las propiedades de un objeto con el ciclo for in


for(nombrePropiedad in persona){
     console.log(nombrePropiedad) //Accedes al nombre de las propiedades del objeto 
     console.log(persona[nombrePropiedad]); //Accedes a las propiedades r
}


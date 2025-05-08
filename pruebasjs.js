//añado nuevos valores y propiedades

let persona1 = {
  nombre: "Ismael",
  apellido: "Cruz",
  nombreCompleto: function () {
    return this.nombre + " " + this.apellido;
  },
};

let persona2 = {
    nombre: "Juan",
    apellido: "Ferrer",
  };
  
console.log(persona1.nombreCompleto());

console.log(persona1.nombreCompleto.call(persona2));

// Uso de call para usar el metodo persona1.nombreCompleto con los datos del objeto persona2
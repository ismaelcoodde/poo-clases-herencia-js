class Persona {
    static contadorPersonas = 0;
  
    constructor(nombre, apellido, edad) {
      this._idPersona = ++Persona.contadorPersonas;
      this._nombre = nombre;
      this._apellido = apellido;
      this._edad = edad;
    }
  
  get idPersona(){
    return this._idPersona;
  }
  get nombre(){
    return this._nombre;
  }
  set nombre(nombre){
    this._nombre = nombre;
  }
  get apellido(){
    return this._apellido;
  }
  set apellido (apellido){
    this._apellido = apellido;
  }
  get edad(){
    return this._edad
  }
  set edad(edad){
    this.edad = edad;
  }
  toString(){
    return this._idPersona + ' ' + this._nombre + ' ' + this._apellido + ' ' + this._edad;
  }
  }
  
  
  class Empleado extends Persona{
    static contadorEmpleados = 0;

    constructor(nombre,apellido,edad,sueldo){
        super(nombre,apellido,edad)
        this._idEmpleado = ++ Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }

    get idEmpleado(){
        return this._idEmpleado;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }
    toString(){
        return `${super.toString()} ${this._idEmpleado} ${this._sueldo}`;
    }
}

class Cliente extends Persona{
    static contadorClientes = 0;

    constructor(nombre,apellido,edad,fechaRegistro){
        super(nombre,apellido,edad);
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fechaRegistro;
    }

    get idCliente(){
        return this._idCliente;
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }

    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }

    toString(){
        return super.toString() + ' ' + this._idCliente + ' ' + this._fechaRegistro;
    }
}

//Pruebas clase persona

let persona1 = new Persona('Ismael', 'Cruz', 30);
let persona2 = new Persona ('Mariana', 'Cruz', 24);

let empleado1 = new Empleado('Antonia', 'Fernandez', 54, 4000);
let empleado2 = new Empleado('Antonio', 'Cruz', 57, 8000);

let cliente1 = new Cliente ('Pablito', 'Costa', 31, new Date())
let cliente2 = new Cliente ('Maria', 'Lara', 71, new Date())
console.log(persona1.toString());
console.log(persona2.toString());
console.log(empleado1.toString());
console.log(empleado2.toString());
console.log(cliente1.toString());
console.log(cliente2.toString());

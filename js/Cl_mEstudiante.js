export default class Cl_mEstudiante{
    constructor({cedula, nombre, apellido}){
        this.cedula = cedula;
        this.nombre = nombre;
        this.apellido = apellido;
    }

    set cedula(cedula){
        this._cedula = +cedula;
    }
    get cedula(){
        return this._cedula;
    }

    set apellido(apellido){
        this._apellido = apellido.toUpperCase();
    }
    get apellido(){
        return this._apellido;
    }

    set nombre(nombre){
        this._nombre = nombre.toUpperCase();
    }
    get nombre(){
        return this._nombre;
    }

}
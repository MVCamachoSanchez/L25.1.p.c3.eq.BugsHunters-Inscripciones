export default class Cl_mMateria{
    constructor({codigo, semestre, nombre}){
        this.codigo = codigo;
        this.semestre = semestre;
        this.nombre = nombre;
    }

    set codigo(codigo){
        this._codigo = codigo.toUpperCase();
    }
    get codigo(){
        return this._codigo;
    }

    set semestre(semestre){
        this._semestre = +semestre; 
    }
    get semestre(){
        return this._semestre;
    }

    set nombre(nombre){
        this._nombre = nombre.toUpperCase();
    }
    get nombre(){
        return this._nombre;
    }
}
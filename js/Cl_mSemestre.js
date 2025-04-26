import Cl_mEstudiantes from "./Cl_mEstudiantes";
import Cl_mMaterias from "./Cl_mMaterias";

export default class Cl_mSemestre{
    constructor(nombre){
        this.nombre = nombre;
        this.estudiantes = new Cl_mEstudiantes();
        this.materias = new Cl_mMaterias();
    }

    set nombre(nombre){
        this._nombre = nombre.toUpperCase();
    }
    get nombre(){
        return this._nombre;
    }
}
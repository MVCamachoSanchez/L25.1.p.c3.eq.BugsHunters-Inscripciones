export default class Cl_mMaterias{
    constructor(){
        this.arrMaterias = [];
    }

    agregar(materia){
        this.arrMaterias.push(materia);
    }

    listado(){
        return this.arrMaterias;
    }
}
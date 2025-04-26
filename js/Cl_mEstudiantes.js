export default class Cl_mEstudiantes{
    constructor(){
        this.arrEstudiantes = [];
    }

    agregar(estudiante){
        this.arrEstudiantes.push(estudiante);
    }

    listado(){
        return this.arrEstudiantes;
    }
}